import SummaryCard from "../SummaryCard/SummaryCard";

import developerSVG from "../../assets/images/developerdesign.svg";
import responsiveSVG from "../../assets/images/responsivedesign.svg";
import innovativeSVG from "../../assets/images/innovativesolutions.svg";
import passionSVG from "../../assets/images/passion.svg";

import "./Summary.css";

const summaryInfo = [
  {
    icon: developerSVG,
    header: "Development and Design",
    text: "I aim to put my creativity to the test, designing and building unique, meaningful products for clients or merely for my own interests.",
  },
  {
    icon: responsiveSVG,
    header: "Responsive Layouts",
    text: "Development and design isn't merely putting information on the site or preferred media outlet. I organize content and present information in an engaging fashion, driving new and unique layouts in tandem with novel solutions and cool animations.",
  },
  {
    icon: innovativeSVG,
    header: "Ideas and Solutions",
    text: "There are still many problems that exist in today's society, including laziness. Luckily, I hope to combat these issues by innovating, developing easy-to-use programs, solutions, or products.",
  },
  {
    icon: passionSVG,
    header: "Passion and Dedication",
    text: "With my profound interest and commitment to my field of study, my projects rarely go unfinished and my problems are never left unresolved.",
  },
];

export default function Summary() {
  return (
    <div className="summary">
      <div className="container-fluid">
        <div className="row">
          {summaryInfo.map((info) => (
            <SummaryCard key={info.header} {...info} />
          ))}
        </div>
      </div>
    </div>
  );
}
