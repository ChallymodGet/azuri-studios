import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import CalendlyInlineEmbed from "@/components/booking/CalendlyInlineEmbed";
import {
  CONTACT_EMAIL,
  getBookingUrl,
  isCalComUrl,
  isCalendlyUrl,
  mailtoContact,
  supportsInlineEmbed,
} from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Book a call | Azuri Studios",
  description: "Schedule a free discovery call with Azuri Studios.",
};

export default function BookPage() {
  const bookingUrl = getBookingUrl();
  const canEmbed = bookingUrl ? supportsInlineEmbed(bookingUrl) : false;

  return (
    <>
      <Navbar />
      <main className="relative min-h-screen overflow-x-clip pt-24 pb-16">
        <div className="site-container book-page">
          <p className="section-eyebrow">GET STARTED</p>
          <h1 className="book-page-title">Book a call</h1>
          <p className="book-page-lead">
            Pick a time that works for you. We&apos;ll walk through your goals and how Azuri can help — no
            pressure.
          </p>

          {!bookingUrl ? (
            <div className="book-fallback">
              <p>
                Online scheduling isn&apos;t connected yet. Email us and we&apos;ll send you available times:
              </p>
              <a href={mailtoContact} className="button button-primary">
                Email {CONTACT_EMAIL}
              </a>
              <p className="book-fallback-hint">
                To enable free booking, add{" "}
                <code>NEXT_PUBLIC_BOOKING_URL</code> in Vercel (or <code>.env.local</code>) with your
                Calendly, Cal.com, or Google Appointment Schedules link.
              </p>
              <Link href="/#contact" className="button button-secondary">
                Back to site
              </Link>
            </div>
          ) : canEmbed ? (
            <>
              {isCalendlyUrl(bookingUrl) ? (
                <CalendlyInlineEmbed url={bookingUrl} />
              ) : isCalComUrl(bookingUrl) ? (
                <iframe
                  title="Book a call with Azuri Studios"
                  className="book-iframe"
                  src={bookingUrl}
                />
              ) : null}
            </>
          ) : (
            <div className="book-fallback">
              <p>Your scheduler opens in a new tab (e.g. Google Appointment Schedules).</p>
              <a href={bookingUrl} className="button button-primary" target="_blank" rel="noopener noreferrer">
                Open scheduling page
              </a>
              <Link href="/" className="button button-secondary">
                Back to site
              </Link>
            </div>
          )}

          {bookingUrl && canEmbed ? (
            <p className="book-external-link">
              Prefer a new tab?{" "}
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
                Open scheduler directly
              </a>
            </p>
          ) : null}
        </div>
      </main>
    </>
  );
}
