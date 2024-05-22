import { MenuItem } from '@/types/menuItem';

export const menuItems: MenuItem[] = [
	{
		title: 'Home',
		href: '/',
		newWindow: false,
	},
	{
		title: 'News',
		href: '/news',
		newWindow: false,
	},
	{
		title: 'Podcasts',
		href: '/podcasts',
		newWindow: false,
	},
	{
		title: 'Videos',
		href:'/videos',
		newWindow: false,
	},
	{
		title: 'Events',
		href: '/events',
		newWindow: false
	},
	{
		title: 'Donate',
		href: 'https://illinimedia.org/donate/',
		newWindow: true,
	},
	{
		title: 'About',
		href: '/about',
		newWindow: false,
	},
];
