import NavBar from "./NavBar";
import StarsComponent from "./StarsComponent";

interface HeaderProps {
  heading: React.ReactNode;
  headingBottom?: React.ReactNode;
  introText?: string;
  theme?: "anger" | "sadness" | "fear" | "other" | "home"; // Define themes
}

export default function Header({
  heading,
  headingBottom,
  introText,
  theme,
}: HeaderProps) {
  // Define dynamic class for heading color
  const headingColorClass = theme
    ? `heading-${theme}` // e.g., heading-anger, heading-sadness, heading-fear
    : "";

  return (
    <div className="header d-flex flex-column w-100">
      <div className="header-top d-flex flex-column align-items-center w-100">
        <div className="title">
          <h1 className="title-text">
            <span className="light-violet custom-font">B</span>
            <span className="light-green custom-font">e</span>
            <span className="pastel-violet custom-font">y</span>
            <span className="blue custom-font">o</span>
            <span className="light-green custom-font">n</span>
            <span className="blue custom-font">d</span>
            <span className=""> </span>
            <span className="orange custom-font">B</span>
            <span className="violet custom-font">o</span>
            <span className="green custom-font">r</span>
            <span className="light-blue custom-font">d</span>
            <span className="pastel-violet custom-font">e</span>
            <span className="light-green custom-font">r</span>
            <span className="light-blue custom-font">s</span>
          </h1>
        </div>
        <div className="w-100">
          <NavBar />
        </div>
      </div>
      <h2
        className={`custom-heading text-center mb-0 fw-bolder ${headingColorClass}`}
      >
        {heading}
      </h2>
      <div className="header-bottom d-flex flex-column justify-content-center">
        <p className="fs-4 mt-5 mb-1">{introText}</p>
        {headingBottom || <StarsComponent />}{" "}
      </div>
    </div>
  );
}
