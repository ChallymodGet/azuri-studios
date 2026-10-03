/** Decorative platform marks for the Get Started section (Figma: top Android, left Apple, right globe). */

function IconApple() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="floating-tile-svg">
      <path
        fill="currentColor"
        d="M16.365 12.682c-.03-2.864 2.343-4.242 2.451-4.312-1.335-1.953-3.414-2.22-4.155-2.25-1.769-.18-3.454 1.042-4.351 1.042-.912 0-2.301-1.017-3.784-.987-1.944.03-3.735 1.131-4.734 2.874-2.019 3.503-.516 8.685 1.449 11.529 1.002 1.443 2.189 3.06 3.753 3.003 1.509-.06 2.079-.975 3.903-.975 1.824 0 2.334.975 3.924.945 1.62-.03 2.649-1.47 3.639-2.919 1.146-1.665 1.616-3.282 1.641-3.366-.036-.015-3.149-1.206-3.183-4.584zM13.920 4.482c.825-.999 1.38-2.388 1.229-3.774-1.188.048-2.625.792-3.477 1.788-.765.885-1.434 2.304-1.254 3.663 1.326.102 2.679-.675 3.502-1.677z"
      />
    </svg>
  );
}

function IconAndroid() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="floating-tile-svg">
      <path
        fill="currentColor"
        d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84 1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"
      />
    </svg>
  );
}

function IconGlobe() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="floating-tile-svg">
      <path
        fill="currentColor"
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
      />
    </svg>
  );
}

export function CtaFloatingTiles() {
  return (
    <>
      <div className="floating-tile tile-android" data-reveal="drop" data-delay="200">
        <IconAndroid />
      </div>
      <div className="floating-tile tile-apple" data-reveal="drop" data-delay="340">
        <IconApple />
      </div>
      <div className="floating-tile tile-globe" data-reveal="drop" data-delay="480">
        <IconGlobe />
      </div>
    </>
  );
}
