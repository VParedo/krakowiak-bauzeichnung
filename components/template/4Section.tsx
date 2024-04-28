import React from "react";
import FeedbackForm from "./FeedbackForm";
import { submitFeedback } from "@/utils/actions";

const Section4 = () => {
  return <FeedbackForm formSubmit={submitFeedback} />;
};

export default Section4;
