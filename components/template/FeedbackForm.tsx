"use client";

import React, { useRef, useState } from "react";
import { SubmitButton } from "./SubmitButton";
import { useInView } from "framer-motion";

const FeedbackForm = ({
  formSubmit,
}: {
  formSubmit: (formData: FormData) => void;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  {
    /** Defines the details of the transition, like duration and delay */
  }
  const transition = `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s`;

  {
    /** Defines the direction and distance the animation does */
  }
  const translation = "translateX(-50px)";

  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");

  const action = (formData: FormData) => {
    formSubmit(formData);
    setMail("");
    setMessage("");
  };

  return (
    <form
      action={action}
      ref={ref}
      style={{
        transform: isInView ? "none" : translation,
        opacity: isInView ? 1 : 0,
        transition: transition,
      }}
      className="flex flex-col w-full max_width gap-6 text-paredo_text paredo_p"
    >
      <div className="flex flex-col w-full md:flex-row gap-6 text-paredo_text">
        <div className="flex flex-col grow-[2] gap-8">
          <div className="flex flex-col w-full md:max-w-[30%]">
            <label>Ihre E-Mail</label>
            <input
              className="input"
              required
              type="email"
              name="mail"
              value={mail}
              onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
                setMail(e.target.value)
              }
            />
          </div>
          <div className="flex flex-col w-full">
            <label>Ihre Nachricht</label>
            <textarea
              className="input"
              required
              name="message"
              value={message}
              onInput={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setMessage(e.target.value)
              }
            />
          </div>
        </div>
      </div>
      <div className="flex mt-8">
        <SubmitButton
          text="Senden"
          bgcolor="bg-my_color_1"
          bghovercolor="hover:bg-opacity-80"
        />
      </div>
    </form>
  );
};

export default FeedbackForm;
