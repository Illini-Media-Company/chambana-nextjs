'use client';

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import NewsletterSubscription from "./newsletterSubscription";

interface NewsletterProps {
    recaptchaKey?: string
}

function throwError(msg: string): never {
    throw new Error(msg)
}


export default function Newsletter({recaptchaKey}: NewsletterProps) {
    if (!recaptchaKey) {
        throwError('recaptcha key not found');
    }
    return (
        <GoogleReCaptchaProvider reCaptchaKey={recaptchaKey}>
            <NewsletterSubscription />
        </GoogleReCaptchaProvider>
    )
}