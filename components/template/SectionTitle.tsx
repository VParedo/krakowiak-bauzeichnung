import { SectionTitleProps } from "@/utils/interfaces";
import SlideText from "./SlideText";

const SectionTitle: React.FC<SectionTitleProps> = ({ h1 = "", h2 = "" }) => {
  return (
    <div className="flex flex-col w-full gap-my_gap_sm">
      <SlideText className="my_h2" type="h2" comingFrom="left" text={h2} />
      <SlideText className="my_h1" type="h1" comingFrom="left" text={h1} />
    </div>
  );
};

export default SectionTitle;
