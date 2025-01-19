interface CircleAnimationProps {
  imageSrc: string; // Image source for the animation
  backgroundColor?: string; // Optional background color for the circle
}

export default function CircleAnimation({
  imageSrc,
  backgroundColor,
}: CircleAnimationProps) {
  return (
    <div
      className="circle-animation m-auto"
      style={{ backgroundColor }} // Set optional background color
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
