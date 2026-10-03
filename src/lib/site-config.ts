/** Site-wide links and contact. Homepage content lives in Sanity (see getSiteContent). */

export const CONTACT_EMAIL = "hello@azuristudio.co";

/** On-site booking page; embeds or links to your free scheduler when configured. */
export const BOOKING_PATH = "/book" as const;

export const mailtoContact = `mailto:${CONTACT_EMAIL}`;

/**
 * Free options: Calendly (free tier), Cal.com (free tier), or Google
 * Calendar → Appointment schedules → shareable booking page URL.
 *
 * Set in `.env.local` and on Vercel → Environment Variables:
 * NEXT_PUBLIC_BOOKING_URL=https://calendly.com/your-name/30min
 */
export function getBookingUrl(): string | null {
  const url = process.env.NEXT_PUBLIC_BOOKING_URL?.trim();
  if (!url) return null;
  try {
    new URL(url);
    return url;
  } catch {
    return null;
  }
}

export function isCalendlyUrl(url: string): boolean {
  try {
    return new URL(url).hostname.replace(/^www\./, "") === "calendly.com";
  } catch {
    return url.includes("calendly.com");
  }
}

export function isCalComUrl(url: string): boolean {
  try {
    const host = new URL(url).hostname.replace(/^www\./, "");
    return host === "cal.com" || host.endsWith(".cal.com");
  } catch {
    return url.includes("cal.com");
  }
}

/** Providers that work in a full-page iframe on /book */
export function supportsInlineEmbed(url: string): boolean {
  return isCalendlyUrl(url) || isCalComUrl(url);
}
