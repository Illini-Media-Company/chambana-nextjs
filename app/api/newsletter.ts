'use server'

function throwError(msg: string): never {
    throw new Error(msg)
}
const NEWSLETTER_API_ENDPOINT = 
    process.env.NEXT_PUBLIC_NEWSLETTER_API_ENDPOINT ?? throwError("endpoint not found");

export default async function subscribeEmail(email: string, recaptchaToken: string) {
    try {
        const body = new URLSearchParams();
        body.append('email', email)
        body.append('newsletter', 'chambana-eats')
        body.append('grecaptcha_token', recaptchaToken)

        const response = await fetch(NEWSLETTER_API_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: body
        });
        if (response.ok) {
            console.log('response ok');
            return true;
        } else {
            console.log('error subscribing', response.status, response.statusText);
            return false;
        }
    } catch (error) {
        console.error('Error subscribing email', error);
        return false;
    }
}