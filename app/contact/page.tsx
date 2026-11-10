"use client";

import { FormEvent, useState } from "react";
import { PERSON } from "@/data/site";
import Availability from "../components/Availability";

const EMPTY = {
  name: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
  countryCode: "+234",
};

const field =
  "w-full rounded-[14px] bg-paper px-4 py-3 text-[13px] text-ink placeholder:text-quiet outline-none ring-ink/0 transition focus:ring-1 focus:ring-ink lg:text-[15px]";

export default function Contact() {
  const [formData, setFormData] = useState(EMPTY);
  const [emailError, setEmailError] = useState("");
  const [status, setStatus] = useState<{ ok: boolean; text: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "email") {
      setEmailError(
        value.includes("@") && value.includes(".") ? "" : "Please enter a valid email address"
      );
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (emailError) {
      setStatus({ ok: false, text: "Please correct the errors before sending." });
      return;
    }
    setIsLoading(true);
    setStatus(null);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus({ ok: true, text: "Message sent. I’ll get back to you soon." });
        setFormData(EMPTY);
      } else {
        setStatus({ ok: false, text: "Failed to send message. Please try again." });
      }
    } catch {
      setStatus({ ok: false, text: "Something went wrong. Please try again later." });
    } finally {
      setIsLoading(false);
    }
  };

  const details = [
    { label: "Email", value: PERSON.email, href: `mailto:${PERSON.email}` },
    { label: "Phone", value: PERSON.phone, href: PERSON.phoneHref },
    { label: "Address", value: PERSON.address },
  ];

  return (
    <section className="wrap pt-10 md:pt-16 lg:pt-20">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="t-small text-quiet">Contact</p>
          <h1 className="t-hero mt-3 max-w-[11ch]">
            Let’s build something <span className="t-italic">together.</span>
          </h1>
          <p className="t-body mt-5 max-w-[40ch]">
            Tell me what you’re building, what you need and when you’d like to launch. No prep
            needed.
          </p>
          <Availability className="mt-5" />

          <dl className="mt-10">
            {details.map((d) => (
              <div
                key={d.label}
                className="grid grid-cols-[80px_1fr] gap-4 border-t border-line py-3 lg:grid-cols-[120px_1fr]"
              >
                <dt className="t-body text-quiet">{d.label}</dt>
                <dd className="t-body break-words">
                  {d.href ? (
                    <a href={d.href} className="underline-offset-4 hover:underline">
                      {d.value}
                    </a>
                  ) : (
                    d.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3 lg:pt-8" noValidate={false}>
          <div className="grid grid-cols-2 gap-3">
            <label className="sr-only" htmlFor="name">First name</label>
            <input
              id="name"
              className={field}
              placeholder="First name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <label className="sr-only" htmlFor="lastName">Last name</label>
            <input
              id="lastName"
              className={field}
              placeholder="Last name"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </div>
          <label className="sr-only" htmlFor="email">Email</label>
          <input
            id="email"
            className={field}
            placeholder="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          {emailError && <p className="t-small text-red-700 dark:text-red-400">{emailError}</p>}
          <label className="sr-only" htmlFor="phone">Phone number</label>
          <input
            id="phone"
            className={field}
            placeholder="Phone number"
            name="phone"
            type="tel"
            pattern="[0-9+ ]*"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
          <label className="sr-only" htmlFor="message">Message</label>
          <textarea
            id="message"
            className={`${field} h-44 resize-none lg:h-60`}
            placeholder="Tell me about your project…"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          />

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              type="submit"
              disabled={isLoading}
              className="pill pill-dark pill-lg disabled:opacity-50"
            >
              {isLoading ? "Sending…" : "Send message"}
            </button>
            {status && (
              <p
                className={`t-small ${status.ok ? "text-avail" : "text-red-700 dark:text-red-400"}`}
                role="status"
              >
                {status.text}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
