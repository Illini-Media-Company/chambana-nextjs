'use client';
import { Menu, MenuItem } from '@/types/menuItem';
import styles from './mobileMenu.module.css';
import { menuItems } from '@/app/menuItems';

const delay = 300;

export function MobileMenu() {
	return (
		<div>
			<ul className={styles.mobileMenu}>
				{menuItems.map((item, index) => (
					<MobileMenuItem
						animationDelay={`${delay * index}ms`}
						key={index}
						title={item.title}
						href={item.href}
						newWindow={item.newWindow}
					/>
				))}
			</ul>
		</div>
	);
}

interface MobileMenuItemProps {
	title: string;
	href: string;
	newWindow: boolean;
	animationDelay: string;
}

function MobileMenuItem({ title, href, newWindow, animationDelay }: MobileMenuItemProps) {
	return (
		<li className={styles.menuItem}>
			<a style={{ transitionDelay: animationDelay }} href={href} target={newWindow ? '_blank' : '_self'}>
				<h1>{title}</h1>
			</a>
		</li>
	);
}
