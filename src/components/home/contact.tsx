export default function Contact() {
  return (
    <section
      id="contact"
      className="flex min-h-[100dvh] flex-col items-center justify-center"
    >
      <h2 className="p-8 text-center text-4xl font-semibold">Get in touch</h2>

      <a
        aria-label="Contact email: contact@pwallis.com"
        href="mailto:contact@pwallis.com"
        className="text-center text-xl font-semibold"
      >
        contact@pwallis.com
      </a>
    </section>
  );
}
