import NavBar from "./NavBar";

interface HeaderProps {
  heading: React.ReactNode;
}

export default function Header({ heading }: HeaderProps) {
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
      <h2 className="custom-heading text-center text-white">{heading}</h2>
      <div className="header-bottom d-flex flex-grow-1 justify-content-center"></div>
    </div>
  );
}
