"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(() => {
        alert("Message sent successfully!");
        form.current.reset();
      })
      .catch(() => {
        alert("Failed to send message.");
      });
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="space-y-5"
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="w-full border rounded-lg p-3"
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className="w-full border rounded-lg p-3"
      />

      <input
        type="text"
        name="subject"
        placeholder="Subject"
        required
        className="w-full border rounded-lg p-3"
      />

      <textarea
        name="message"
        rows="6"
        placeholder="Write your message..."
        required
        className="w-full border rounded-lg p-3"
      />

      <button
        type="submit"
        className="bg-blue-700 text-white px-8 py-3 rounded-lg hover:bg-blue-800"
      >
        Send Message
      </button>
    </form>
  );
}