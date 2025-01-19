import NavigateButton from "./NavigateButton";
import CircleAnimation from "./CircleAnimation";

interface CharacterCardProps {
  mediaSrc: string; // Source for animated WebP
  backgroundColor?: string; // Background color of the circle
  description: string; // Description for the character
  buttonText: string; // Text for the navigation button
  buttonClassName: string; // CSS class for the button
  buttonLink: string; // Target link for the button
}

export default function CharacterCard({
  mediaSrc,
  backgroundColor,
  description,
  buttonText,
  buttonClassName,
  buttonLink,
}: CharacterCardProps) {
  return (
    <div className="character-container d-flex flex-column gap-4">
      <div className="character-card w-100 d-flex flex-column justify-content-center p-4 gap-4">
        <div className="media-container m-auto">
          <CircleAnimation
            imageSrc={mediaSrc}
            backgroundColor={backgroundColor}
          />
        </div>
        <p className="character-description text-center w-25 m-0 m-auto">
          {description}
        </p>
      </div>
      <NavigateButton
        text={buttonText}
        className={buttonClassName}
        to={buttonLink}
      />
    </div>
  );
}
