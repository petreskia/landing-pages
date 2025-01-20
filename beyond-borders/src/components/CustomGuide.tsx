import NavigateButton from "../components/NavigateButton";

interface CustomGuideProps {
  layoutImageSrc: string; // Image for the guide layout
  badgeImages: string[]; // Array of badge image sources
  buttonText: string; // Text for the navigate button
  buttonLink: string; // Link for the navigate button
  buttonClass?: string; // Optional class for the button (to handle color changes)
}

export default function CustomGuide({
  layoutImageSrc,
  badgeImages,
  buttonText,
  buttonLink,
  buttonClass = "", // Default class if none is passed
}: CustomGuideProps) {
  return (
    <div className="custom-guide position-relative mt-5">
      <img src={layoutImageSrc} alt="Guide layout" />
      {badgeImages.map((src, index) => (
        <div className={`number-badge number-badge-${index + 1}`} key={index}>
          <img src={src} alt={`Step ${index + 1} badge`} />
        </div>
      ))}
      <div className="custom-button-absolute">
        {/* Pass the dynamic button class to the NavigateButton */}
        <NavigateButton
          text={buttonText}
          className={buttonClass} // Use the passed class
          to={buttonLink}
        />
      </div>
    </div>
  );
}
