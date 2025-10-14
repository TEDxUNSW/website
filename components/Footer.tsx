"use client";

import { useState } from "react";
import isEmail from "validator/es/lib/isEmail";
import Logo from "../public/logos/logo-no-color.svg";
import "@/styles/footer.css";

const WEBHOOK_URL =
  process.env.NEXT_PUBLIC_WEBHOOK_URL ?? "https://tedxunsw.com.au/nowhere";

export default function Footer() {
  const [email, setEmail] = useState<string>("");

  const sendEmailToWebhook = async (email: string) => {
    const toSend = email.trim();
    if (!isEmail(toSend)) {
      return;
    }
    setEmail("");

    fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: `New email subscription: ${email}`,
      }),
    });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-signup-row">
          <p className="footer-signup-title">
            Sign up for email updates from TEDxUNSW
          </p>
          <div className="footer-signup-input-row">
            <input
              type="email"
              placeholder="Your email address"
              className="footer-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="footer-submit"
              onClick={() => sendEmailToWebhook(email)}
            >
              Submit
            </button>
          </div>
        </div>
        <div className="footer-bottom">
          <hr className="footer-divider" />
          <div className="footer-bottom-row">
            <Logo className="footer-logo" />
            <p>
              This independent TEDx event is operated under license from TED.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
