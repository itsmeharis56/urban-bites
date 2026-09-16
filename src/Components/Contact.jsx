import { useState } from "react";
import { ArrowUpRight, MessageCircle, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  const inputClass =
    "mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-orange-400";

  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-white/10 px-6 py-20"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
        <div>
          <span className="inline-flex rounded-2xl bg-orange-500/10 p-4 text-orange-400">
            <MessageCircle size={30} />
          </span>

          <p className="mt-6 text-xs font-bold tracking-[0.25em] text-orange-400">
            SAY HELLO
          </p>

          <h2 className="mt-4 text-4xl leading-tight font-black sm:text-5xl">
            Good conversations
            <br />
            start with <span className="text-orange-500">hello.</span>
          </h2>

          <p className="mt-6 max-w-md leading-7 text-gray-400">
            Have a menu idea or feedback on the experience?
            Try the contact form and tell us what is on your mind.
          </p>

          <div className="mt-8 max-w-md rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="font-semibold">A project by Haris Imran</p>
            <p className="mt-2 text-sm leading-6 text-gray-400">
              Urban Bites is a restaurant website demo built with
              React and Tailwind CSS.
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          onChange={() => setSubmitted(false)}
          className="rounded-3xl border border-white/10 bg-[#1a1a1a] p-6 sm:p-8"
        >
          <h3 className="text-2xl font-bold">Leave a message</h3>

          <p id="form-note" className="mt-2 text-sm text-gray-400">
            Demo form — messages are not sent or saved.
          </p>

          <div className="mt-6">
            <label htmlFor="contact-name" className="text-sm font-medium">
              Your name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Enter your name"
              required
              maxLength={80}
              pattern=".*\S.*"
              title="Please enter your name, not only spaces."
              className={inputClass}
            />
          </div>

          <div className="mt-5">
            <label htmlFor="contact-email" className="text-sm font-medium">
              Email address
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              required
              maxLength={254}
              className={inputClass}
            />
          </div>

          <div className="mt-5">
            <label
              htmlFor="contact-message"
              className="text-sm font-medium"
            >
              Your message
            </label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="What would you like to share?"
              required
              minLength={10}
              maxLength={2000}
              rows={4}
              onChange={(event) => {
                const field = event.currentTarget;
                field.setCustomValidity(
                  field.value.trim().length < 10
                    ? "Please write at least 10 characters, excluding outer spaces."
                    : ""
                );
              }}
              className={`${inputClass} resize-y`}
            />
          </div>

          <button
            type="submit"
            aria-describedby="form-note"
            className="mt-6 flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-4 font-bold text-black transition hover:bg-orange-400"
          >
            Try Demo Form
            <ArrowUpRight size={20} />
          </button>

          <div role="status" className="mt-4">
            {submitted && (
              <p className="flex items-start gap-2 text-sm text-lime-400">
                <CheckCircle2 size={19} className="shrink-0" />
                Form validated successfully. This demo did not send
                your message.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}