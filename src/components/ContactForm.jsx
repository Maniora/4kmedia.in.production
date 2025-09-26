import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CONTACT,
        formRef.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      );
      setSubmitStatus("success");
      formRef.current.reset();
    } catch (err) {
      console.error("EmailJS Error:", err);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={sendEmail}
      className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto bg-[#1a1f26] p-8 rounded-2xl shadow-lg border border-white/10"
      id="contact-form"
    >
      <h2 className="md:col-span-2 text-2xl font-semibold text-white mb-4 text-center">
        Get in Touch
      </h2>

      <div className="flex flex-col gap-2">
        <label className="text-sm text-white/70">Your Name *</label>
        <input
          type="text"
          name="user_name"
          placeholder="John Doe"
          className="p-3 rounded-lg bg-white/10 text-white border border-white/20 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#f7e839]/50 transition"
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm text-white/70">Email Address *</label>
        <input
          type="email"
          name="user_email"
          placeholder="your@email.com"
          className="p-3 rounded-lg bg-white/10 text-white border border-white/20 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#f7e839]/50 transition"
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm text-white/70">Phone Number</label>
        <input
          type="tel"
          name="user_phone"
          placeholder="+91 99899 58238"
          className="p-3 rounded-lg bg-white/10 text-white border border-white/20 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#f7e839]/50 transition"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm text-white/70">Service Interested *</label>
        <select
          name="service"
          required
          defaultValue=""
          className="p-3 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#f7e839]/50 transition"
        >
          <option value="" disabled className="bg-[#1a1f26] text-white">
            Select a service
          </option>
          <option className="bg-[#1a1f26] text-white">SEO</option>
          <option className="bg-[#1a1f26] text-white">Paid Media</option>
          <option className="bg-[#1a1f26] text-white">Content Studio</option>
          <option className="bg-[#1a1f26] text-white">Analytics & CRO</option>
          <option className="bg-[#1a1f26] text-white">Web Design & Build</option>
          <option className="bg-[#1a1f26] text-white">
            Social Media Management
          </option>
        </select>
      </div>

      <div className="md:col-span-2 flex flex-col gap-2">
        <label className="text-sm text-white/70">Project Details *</label>
        <textarea
          name="message"
          placeholder="Tell us about your project, goals, and how we can help you achieve success..."
          rows="6"
          className="p-3 rounded-lg bg-white/10 text-white border border-white/20 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#f7e839]/50 transition"
          required
        />
      </div>

      <div className="md:col-span-2 flex justify-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-300 text-[#111] font-medium shadow-md hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin h-4 w-4"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 
                     0 0 5.373 0 12h4zm2 5.291A7.962 
                     7.962 0 014 12H0c0 3.042 1.135 
                     5.824 3 7.938l3-2.647z"
                />
              </svg>
              Sending...
            </>
          ) : (
            <>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M3 12l18-9-6 18-4-6-8-3z"
                  stroke="#11181f"
                  strokeWidth="2"
                />
              </svg>
              Send Message
            </>
          )}
        </button>
      </div>

      {submitStatus === "success" && (
        <div className="md:col-span-2 text-center p-4 bg-green-600/10 border border-green-600/20 rounded-lg mt-4">
          <p className="text-green-400 font-medium">
            ✅ Message sent successfully! We'll get back to you within 24 hours.
          </p>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="md:col-span-2 text-center p-4 bg-red-600/10 border border-red-600/20 rounded-lg mt-4">
          <p className="text-red-400 font-medium">
            ❌ Failed to send message. Please try again or contact us directly.
          </p>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
