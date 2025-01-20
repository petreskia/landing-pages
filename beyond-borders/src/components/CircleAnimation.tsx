interface CircleAnimationProps {
  imageSrc: string; // Image source for the animation
  backgroundColor?: string; // Optional background color for the circle
  customClass?: string; // Custom class for additional styling
}

export default function CircleAnimation({
  imageSrc,
  backgroundColor,
  customClass = "",
}: CircleAnimationProps) {
  return (
    <div
      className={`circle-animation m-auto ${customClass}`} // Add custom class
      style={{ backgroundColor }} // Optional inline background color
      onMouseEnter={(e) => {
        const img = e.currentTarget.querySelector("img");
        if (img) {
          img.src = imageSrc; // Start animation
        }
      }}
      onMouseLeave={(e) => {
        const img = e.currentTarget.querySelector("img");
        if (img) {
          img.src = ""; // Clear src to stop animation
          setTimeout(() => {
            img.src = imageSrc; // Reset animation
          }, 0);
        }
      }}
    >
      <img
        src={imageSrc}
        alt="Character Animation"
        className="character-media"
      />
    </div>
  );
}
