import { browser } from '$app/environment';

class ThemeState {
	current = $state<'dark' | 'light'>('dark');

	constructor() {
		if (browser) {
			const saved = localStorage.getItem('theme');
			if (saved === 'light' || saved === 'dark') {
				this.current = saved;
			} else if (document.documentElement.classList.contains('dark')) {
				this.current = 'dark';
			} else {
				this.current = 'light';
			}
			this.apply();
		}
	}

	toggle() {
		this.current = this.current === 'dark' ? 'light' : 'dark';
		if (browser) {
			localStorage.setItem('theme', this.current);
			this.apply();
		}
	}

	apply() {
		if (!browser) return;
		if (this.current === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}
}

export const themeState = new ThemeState();
