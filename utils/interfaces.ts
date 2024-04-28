import { StringToBoolean } from "class-variance-authority/types";
import { MotionValue } from "framer-motion";
import { StaticImageData } from "next/image";
import { ReactElement } from "react";

export interface EventJson {
  _id: String;
  eventId: Number;
  imageUrl: String;
  event: String;
  date: Date;
  venue: String;
  city: String;
  sections: Array<SectionType>;
  ticketTypes: Array<String>;
  ticketsForSale: Array<TicketsForSaleType>;
  ticketsSold: Array<String>;
}

interface SectionType {
  sectionName: string;
  isSeat: boolean;
}

export interface TicketsForSaleType {
  _id: String;
  quantity: String;
  section: String;
  row: String;
  seatFrom: String;
  seatTo: String;
  ticketType: String;
  ticketSplitting: String;
  pricePerTicket: String;
}

/**
 * Button
 */
export interface ButtonLinkProps {
  text?: string;
  href?: string;
  bgcolor?: string;
  bghovercolor?: string;
  text_color?: string;
  stroke_color?: string;
  delay?: string;
  animation?: boolean;
  opacity?: boolean;
  noBackground?: boolean;
  isSubmitButton?: boolean;
  isTargetBlank?: boolean;
  notify?: boolean;
}

/**
 * Slide Components
 */
export interface SlideTextProps {
  text: string;
  type?: string;
  comingFrom?: string;
  className?: string;
  delay?: string;
}

export interface SlideIconProps {
  icon: ReactElement;
  comingFrom?: string;
  className?: string;
  delay?: string;
}

export interface SlideImageProps {
  src: string;
  text: string;
  comingFrom: string;
  className: string;
  delay: string;
}

export interface SlideSolutionTextProps {
  text: string;
  comingFrom: string;
  delay: string;
}

export interface SlideStatsProps {
  text: string;
  icon: ReactElement;
  comingFrom: string;
  num: number;
}

export interface SectionTitleProps {
  h1: string;
  h2: string;
}

export interface RoadmapElementProps {
  icon: ReactElement;
  title: string;
  text: string;
}

export interface ScrollHalfScreenProps {
  texts: Array<ScrollHalfScreenTextsProps>;
  images: Array<StaticImageData>;
  title: string;
  text: string;
}

interface ScrollHalfScreenTextsProps {
  title: string;
  text: string;
  element: ReactElement;
}

export interface ScrollHalfScreenElementProps {
  img: ReactElement;
  target: Array<number>;
  progress: MotionValue<number>;
  visible: boolean;
}

export interface RoadmapMidElementProps {
  active: boolean;
  activeText: boolean;
  icon: ReactElement;
  scale: MotionValue<number>;
  index: number;
  title: string;
  text: string;
}
