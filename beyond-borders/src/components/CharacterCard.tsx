import CircleAnimation from "./CircleAnimation";

interface CharacterCardProps {
  imageSrc: string; // The image source for the animation
  description: string; // The description for the character
}

export default function CharacterCard({
  imageSrc,
  description,
}: CharacterCardProps) {
  return (
    <div className="character-card w-100 d-flex flex-column justify-content-center p-4">
      <CircleAnimation imageSrc={imageSrc} />
      <p className="character-description text-center w-25 m-0 m-auto">
        {description}
      </p>
    </div>
  );
}
