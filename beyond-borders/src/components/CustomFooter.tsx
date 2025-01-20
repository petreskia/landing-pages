import NavigateButton from "./NavigateButton";

interface CustomFooterProps {
  imageSrc: string;
  text: string;
  buttons: { text: string; to: string; className?: string }[];
  color?: string;
}

export default function CustomFooter({
  imageSrc,
  text,
  buttons,
  color,
}: CustomFooterProps) {
  return (
    <footer className="d-flex flex-column flex-grow-1 justify-content-center align-items-center">
      <div>
        <img src={imageSrc} alt="Footer character" className="footer-img" />
      </div>
      <div>
        <p className={`w-75 text-center m-auto big-p ${color}`}>{text}</p>
      </div>
      <div className="d-flex p-5 w-50 gap-3">
        {buttons.map((button, index) => (
          <NavigateButton
            key={index}
            text={button.text}
            className={`${button.className || ""}`}
            to={button.to}
          />
        ))}
      </div>
    </footer>
  );
}
