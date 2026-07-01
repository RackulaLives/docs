// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.racku.la',
	integrations: [
		starlight({
			// Site title is the header label and the tab-title suffix — Starlight
			// renders `<page title> | <site title>`. The homepage page title is
			// "Rackula" (src/content/docs/index.mdx), so the landing tab reads
			// "Rackula | Documentation".
			title: 'Documentation',
			logo: {
				light: './src/assets/logo-light.svg',
				dark: './src/assets/logo-dark.svg',
			},
			// Dark-only site: force the Dracula theme and remove the switcher.
			components: {
				ThemeProvider: './src/components/ThemeProvider.astro',
				ThemeSelect: './src/components/ThemeSelect.astro',
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/RackulaLives/Rackula' },
			],
			sidebar: [
				{
					label: 'Getting Started',
					items: [{ autogenerate: { directory: 'getting-started' } }],
				},
				{
					label: 'Core Concepts',
					items: [{ autogenerate: { directory: 'concepts' } }],
				},
				{
					label: 'Guides',
					items: [{ autogenerate: { directory: 'guides' } }],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
				{
					label: 'Self-Hosting',
					items: [{ autogenerate: { directory: 'self-hosting' } }],
				},
			],
			customCss: ['./src/styles/dracula.css'],
			head: [
				// Dark-only: declare the colour scheme so native UI stays dark and
				// dark-theme detectors (e.g. Dark Reader) don't re-invert the site.
				{
					tag: 'meta',
					attrs: { name: 'color-scheme', content: 'dark' },
				},
				// Preconnect to Google Fonts for faster loading
				{
					tag: 'link',
					attrs: {
						rel: 'preconnect',
						href: 'https://fonts.googleapis.com',
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'preconnect',
						href: 'https://fonts.gstatic.com',
						crossorigin: true,
					},
				},
			],
		}),
	],
});
