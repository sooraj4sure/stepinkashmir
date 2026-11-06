import { waLink } from "../lib/products";

export default function FloatingWhatsApp() {
  return (
    <a
      className="wa-float"
      href={waLink("Hi STEPinKashmir! I saw your website and would like to know more about your collection.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with STEPinKashmir on WhatsApp"
    >
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M16 3C9.4 3 4 8.4 4 15c0 2.4.7 4.6 2 6.5L4 29l7.7-2c1.8 1 3.9 1.5 4.3 1.5 6.6 0 12-5.4 12-12S22.6 3 16 3zm0 22.3c-1.7 0-3.3-.5-4.7-1.3l-.3-.2-4.6 1.2 1.2-4.5-.2-.3c-1-1.5-1.5-3.2-1.5-5C5.9 9.5 10.3 5 16 5s10.1 4.5 10.1 10.1S21.7 25.3 16 25.3zm5.5-7.6c-.3-.2-1.8-.9-2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.2.3-.9.9-.9 2.2s.9 2.5 1.1 2.7c.1.2 1.9 2.8 4.5 4 1.7.7 2.4.7 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.6-.3z" />
      </svg>
    </a>
  );
}
