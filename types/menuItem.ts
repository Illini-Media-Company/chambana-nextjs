export interface MenuItem {
	title: string;
	href: string;
	newWindow: boolean;
}

export interface Menu {
	items: MenuItem[];
}
