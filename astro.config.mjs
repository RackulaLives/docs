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
			// Task-first sidebar map (see
			// docs/superpowers/specs/2026-07-04-starlight-docs-refit-design.md).
			// Manual items keep labels, order, and grouping deliberate instead of
			// autogenerating loose directory sections. URLs are unchanged — only
			// visible labels and grouping move. Deploy currently lists only the
			// existing Docker page; LXC / Proxmox Community Scripts / TrueNAS
			// Marketplace / Unraid entries are added as those pages land (#23, #24,
			// #28, #31). Do not link to deploy pages that do not exist yet.
			sidebar: [
				{
					label: 'Start',
					items: [
						{ label: 'Quick start', link: '/getting-started/' },
						{ label: 'First rack walkthrough', link: '/getting-started/first-rack/' },
						{ label: 'Interface tour', link: '/getting-started/ui-overview/' },
					],
				},
				{
					label: 'Build layouts',
					items: [
						{ label: 'Racks', link: '/guides/racks/' },
						{ label: 'Devices', link: '/guides/devices/' },
						{ label: 'Airflow and spacing', link: '/concepts/airflow/' },
						{ label: 'Import and export', link: '/guides/export/' },
					],
				},
				{
					label: 'Reference',
					items: [
						{ label: 'Keyboard shortcuts', link: '/reference/shortcuts/' },
						{ label: 'Device brand packs', link: '/reference/brand-packs/' },
						{ label: 'Rack units', link: '/concepts/rack-units/' },
						{ label: 'Rack types', link: '/concepts/rack-types/' },
						{ label: 'Device categories', link: '/concepts/device-categories/' },
					],
				},
				{
					label: 'Deploy',
					items: [
						{ label: 'Self-host with Docker', link: '/self-hosting/docker/' },
					],
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
