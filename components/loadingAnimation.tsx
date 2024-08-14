import clsx from 'clsx';
import styles from './loadingAnimation.module.css';

interface LoadingAnimationProps {
	inverted?: boolean;
}

export default function LoadingAnimation({ inverted }: LoadingAnimationProps) {
	const classes = clsx(styles.rotateLoader, { [styles.inverted]: inverted });
	return <div className={classes}></div>;
}
