'use client';

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import NewsletterSubscription from "./newsletterSubscription";

function throwError(msg: string): never {
    throw new Error(msg)
}

const recaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_KEY ?? throwError('recaptcha key not provided');

export default function Newsletter() {
    return (
        <GoogleReCaptchaProvider reCaptchaKey={recaptchaKey}>
            <NewsletterSubscription />
        </GoogleReCaptchaProvider>
    )
}