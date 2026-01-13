"use client";

import { useState } from "react";

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    frequency: "",
    suburb: "",
    message: ""
  });
  const [copied, setCopied] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Free Quote Request - Goldfields Pro Clean");
    const body = encodeURIComponent(
      `Free Quote Request\n\n` +
        `Name: ${formData.name}\n` +
        `Phone: ${formData.phone}\n` +
        `Email: ${formData.email}\n` +
        `Service: ${formData.service || "Not specified"}\n` +
        `Frequency: ${formData.frequency || "Not specified"}\n` +
        `Suburb/Area: ${formData.suburb || "Not specified"}\n` +
        `Message: ${formData.message || "No message provided"}`
    );
    window.location.href = `mailto:goldfieldsproclean@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleCopy = () => {
    const details =
      `Free Quote Request - Goldfields Pro Clean\n\n` +
      `Name: ${formData.name || "Not provided"}\n` +
      `Phone: ${formData.phone || "Not provided"}\n` +
      `Email: ${formData.email || "Not provided"}\n` +
      `Service: ${formData.service || "Not specified"}\n` +
      `Frequency: ${formData.frequency || "Not specified"}\n` +
      `Suburb/Area: ${formData.suburb || "Not specified"}\n` +
      `Message: ${formData.message || "No message provided"}`;

    navigator.clipboard.writeText(details).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="animate-fade-in rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50/50 to-teal-50/30 p-8 shadow-lg sm:p-10 dark:border-slate-700 dark:from-slate-800 dark:via-slate-800/90 dark:to-slate-800/80">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
          Get Your Free Quote
        </h2>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
          Fill out the form below and we'll get back to you as soon as possible.
        </p>
        <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-primary to-accent" />
      </div>

      <form onSubmit={handleSubmit} className="mx-auto max-w-2xl space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-100 dark:focus:border-primary-light"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-100 dark:focus:border-primary-light"
              placeholder="0457 335 628"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-100 dark:focus:border-primary-light"
            placeholder="your.email@example.com"
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
              Service
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-100 dark:focus:border-primary-light"
            >
              <option value="">Select a service</option>
              <option value="Home Cleaning">Home Cleaning</option>
              <option value="Office Cleaning">Office Cleaning</option>
              <option value="Deep Cleaning">Deep Cleaning</option>
              <option value="Vacate/Move-Out">Vacate/Move-Out</option>
              <option value="Window & Glass">Window & Glass</option>
              <option value="Custom Requests">Custom Requests</option>
            </select>
          </div>

          <div>
            <label htmlFor="frequency" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
              Frequency
            </label>
            <select
              id="frequency"
              name="frequency"
              value={formData.frequency}
              onChange={handleChange}
              className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-100 dark:focus:border-primary-light"
            >
              <option value="">Select frequency</option>
              <option value="One-off">One-off</option>
              <option value="Weekly">Weekly</option>
              <option value="Fortnightly">Fortnightly</option>
              <option value="Monthly">Monthly</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="suburb" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
            Suburb/Area
          </label>
          <input
            type="text"
            id="suburb"
            name="suburb"
            value={formData.suburb}
            onChange={handleChange}
            placeholder="e.g., Kalgoorlie, Boulder"
            className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-100 dark:focus:border-primary-light"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-100 dark:focus:border-primary-light"
            placeholder="Tell us about your cleaning needs..."
          />
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="submit"
            className="flex-1 rounded-full bg-primary px-6 py-3 text-sm font-semibold tracking-wide text-white shadow-md transition-all hover:bg-primary-light hover:shadow-lg focus-visible:bg-primary-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:bg-primary dark:hover:bg-primary-light"
          >
            Get Free Quote
          </button>
          <button
            type="button"
            onClick={handleCopy}
            className="rounded-full border-2 border-slate-300 bg-white px-6 py-3 text-sm font-semibold tracking-wide text-slate-700 transition-all hover:bg-slate-50 hover:border-slate-400 focus-visible:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:border-slate-500"
          >
            {copied ? "✓ Copied!" : "Copy Details"}
          </button>
        </div>
      </form>
    </div>
  );
}
