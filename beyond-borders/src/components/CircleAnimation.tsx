interface CircleAnimationProps {
  imageSrc: string; // Image source for the animation
}

export default function CircleAnimation({ imageSrc }: CircleAnimationProps) {
  return (
    <div className="circle-animation m-auto">
      <img src={imageSrc} alt="character-animation" />
    </div>
  );
}
