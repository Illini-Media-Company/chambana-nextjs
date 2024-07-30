'use client';
import { Menu, MenuItem } from '@/types/menuItem';
import styles from './mobileMenu.module.css';
import { menuItems } from '@/app/menuItems';
import Image from 'next/image'; 

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

			<div className={styles.socials}>
				<a href={'https://www.instagram.com/chambana_eats/'}><Image 
					height={39}
					width={39}
					alt="Instagram"
					src={'/instagram.png'}
				/></a>
				<a href={'https://www.tiktok.com/@chambana_eats?_d=secCgYIASAHKAESPgo8FzCqYeaEL%2FgRHBY3kJOdmU[…]fd9fd0c4b40beff802f38685551d987abfa&language=en&sec_uid=MS4wL'}><Image 
				height={39}
				width={39}
				alt="TikTok"
				src={'/tiktok.png'}
				/></a>
			</div>
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
