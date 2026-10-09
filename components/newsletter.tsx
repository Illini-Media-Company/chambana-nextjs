"use client";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import NewsletterSubscription from "./newsletterSubscription";

interface NewsletterProps {
  recaptchaKey?: string;
}

export default function Newsletter({ recaptchaKey }: NewsletterProps) {
  if (!recaptchaKey) {
    return null;
  }
  return (
    <GoogleReCaptchaProvider reCaptchaKey={recaptchaKey}>
      <NewsletterSubscription />
    </GoogleReCaptchaProvider>
  );
}
