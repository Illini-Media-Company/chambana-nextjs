'use client';

import { useCallback, useState } from 'react' 
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import subscribeEmail from '@/app/api/newsletter';
import styles from './newsletterSubscription.module.css'

export default function NewsletterSubscription() {
    const { executeRecaptcha } = useGoogleReCaptcha();

    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = useCallback(
        async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            if (!executeRecaptcha) {
                console.error('recaptcha not loaded');
                return;
            }
            const token = await executeRecaptcha('yourAction');
            if (success || loading) return;
            setLoading(true);
            e.preventDefault();
            const email = (e.target as HTMLFormElement).querySelector('input')?.value;
            if (!email) return; 
            const response = await subscribeEmail(email, token);
            setSuccess(response);
            setLoading(false);
        },
        [executeRecaptcha]
    );
    return (
        <div className={styles.container}>
            <div className={styles.newsletter}>
                <h2>Get Chambana Eats in Your Inbox!</h2>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <input type="email" placeholder="Enter Email" required disabled={loading} className={styles.input} />
                    <button type="submit" disabled={loading} className={styles.button}>
                        <div>
                            {loading && '...'}
                            {!success && !loading && 'Subscribe'}

                            {!loading && success && 'Success!'}
                        </div>
                    </button>
                </form>
            </div>
        </div>
    );
}