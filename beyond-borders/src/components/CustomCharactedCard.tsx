import CircleAnimation from "./CircleAnimation";

interface CustomCharacterCardProps {
  imageSrc: string; // Image source for the animation
  customDescription: React.ReactNode; // Accept JSX or HTML content for the description
  backgroundColor?: string; // Optional background color for the circle
  customClass?: string; // Custom class for additional styling
  customCard?: string;
}

export default function CustomCharacterCard({
  imageSrc,
  customDescription,
  customCard,
  customClass,
}: CustomCharacterCardProps) {
  return (
    <div
      className={`custom-card d-flex flex-column justify-content-center gap-5 position-relative align-items-center custom-margin-bottom ${customCard}`}
    >
      <div className="media-container m-auto position-relative d-flex justify-content-center align-items-center">
        <CircleAnimation
          imageSrc={imageSrc} // Pass the image source for the animation
          customClass={customClass} // Pass custom class for styling
        />
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center custom-margin-bottom">
        <p className="character-description text-center w-50">
          {customDescription} {/* Display the custom description */}
        </p>
      </div>
    </div>
  );
}
