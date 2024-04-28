"use client";

import React, { useRef, useState } from "react";
import ButtonLink from "./ButtonLink";
import { formAction } from "@/utils/actions";
import { useInView } from "framer-motion";

const Form = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const translation = "translateX(-50px)";
  const transition = `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)`;
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <form
      ref={ref}
      className="flex flex-col gap-my_gap"
      action={formAction}
      style={{
        transform: isInView ? "none" : translation,
        opacity: isInView ? 1 : 0,
        transition: transition,
      }}
    >
      <div className="flex flex-col grow-[2] gap-my_gap_sm">
        <label>E-Mail</label>
        <input
          className="p-2 outline outline-1 outline-my_color_border rounded-my_border_radius focus:outline-my_color_dark_gray"
          required
          type={"text"}
          name="email"
          value={email}
          placeholder="beispiel@gmail.com"
          onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
      </div>

      <div className="flex flex-col gap-my_gap_sm grow-[2]">
        <label>Ihr Anliegen</label>
        <textarea
          className="p-2 outline outline-1 outline-my_color_border rounded-my_border_radius focus:outline-my_color_dark_gray"
          required
          name="message"
          value={message}
          rows={4}
          placeholder="Hallo, ich benötige eine neue Landingpage für mein Unternehmen. Wir sind in Branche X und aktuell haben wir diese Webseite: www.beispiel.de."
          onInput={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setMessage(e.target.value)
          }
        />
      </div>
      <div className="flex">
        <ButtonLink isSubmitButton={true} />
      </div>
    </form>
  );
};

export default Form;
