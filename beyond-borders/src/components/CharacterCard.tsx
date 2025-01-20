import NavigateButton from "./NavigateButton";
import CircleAnimation from "./CircleAnimation";

interface CharacterCardProps {
  mediaSrc: string;
  description: React.ReactNode;
  buttonText?: string;
  buttonClassName?: string;
  buttonLink?: string;
  customClass?: string;
  cardCustomClass?: string;
}

export default function CharacterCard({
  mediaSrc,
  description,
  buttonText,
  buttonClassName,
  buttonLink,
  customClass,
  cardCustomClass,
}: CharacterCardProps) {
  return (
    <div className="character-container d-flex flex-column gap-4 position-relative">
      <div
        className={`character-card w-100 d-flex flex-column justify-content-center p-4 gap-4 position-relative ${cardCustomClass}`}
      >
        <div className="media-container m-auto position-relative">
          <CircleAnimation imageSrc={mediaSrc} customClass={customClass} />
        </div>
        <p className="character-description text-center w-75 m-0 m-auto">
          {description}
        </p>
      </div>
      {buttonText && buttonClassName && buttonLink && (
        <NavigateButton
          text={buttonText}
          className={buttonClassName}
          to={buttonLink}
        />
      )}
    </div>
  );
}
