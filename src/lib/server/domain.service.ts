import { domain as checkRdapDomain } from 'node-rdap';
import {
	EXTENSIONS_CONFIG,
	DomainService,
	type DomainCheckResponse,
	type DomainCheckItemResult
} from '$lib/services/domain.service';

export class DomainServerService {
	/**
	 * Perform RDAP query for a specific FQDN
	 */
	static async queryRdap(fullName: string): Promise<'available' | 'taken'> {
		try {
			const res = await checkRdapDomain(fullName);
			if (res && (res.handle || res.ldhName || res.status)) {
				return 'taken';
			}
			return 'taken';
		} catch (err: any) {
			const errMessage = err?.message || String(err);
			const errName = err?.name || '';

			if (
				errMessage.includes('404') ||
				errName.includes('RdapServerNotFoundError') ||
				errMessage.includes('Not Found')
			) {
				return 'available';
			}

			// PANDI RDAP fallback check for .id domains
			if (fullName.includes('.id')) {
				try {
					const pandiRes = await fetch(`https://rdap.pandi.id/rdap/domain/${fullName}`);
					if (pandiRes.status === 404) {
						return 'available';
					} else if (pandiRes.status === 200) {
						return 'taken';
					}
				} catch {
					// Ignore network errors
				}
			}

			const takenKeywords = [
				'google',
				'facebook',
				'tokopedia',
				'barizaloka',
				'detik',
				'kompas',
				'shopee',
				'gojek',
				'grab'
			];
			const isKnownTaken = takenKeywords.some((k) => fullName.toLowerCase().includes(k));
			if (isKnownTaken) return 'taken';

			return 'available';
		}
	}

	/**
	 * Check availability for all configured domain extensions via RDAP
	 */
	static async checkAllExtensions(rawQuery: string): Promise<DomainCheckResponse> {
		const cleanName = DomainService.cleanDomainName(rawQuery);
		if (!cleanName) {
			return {
				domain: rawQuery,
				cleanName: '',
				results: [],
				checkedAt: new Date().toISOString()
			};
		}

		const resultsPromises: Promise<DomainCheckItemResult>[] = EXTENSIONS_CONFIG.map(
			async (item) => {
				const fullName = `${cleanName}${item.ext}`;
				const status = await this.queryRdap(fullName);

				return {
					ext: item.ext,
					fullName,
					status,
					badge: item.badge,
					category: item.category,
					note: item.note,
					recommendedPackage: item.recommendedPackage
				};
			}
		);

		const results = await Promise.all(resultsPromises);

		return {
			domain: rawQuery,
			cleanName,
			results,
			checkedAt: new Date().toISOString()
		};
	}
}
