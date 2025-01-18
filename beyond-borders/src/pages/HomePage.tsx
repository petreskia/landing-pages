import CharacterCard from "../components/CharacterCard";
import Header from "../components/Header";

export default function HomePage() {
  return (
    <div className="text-center d-flex flex-column align-items-center">
      <Header heading="Make a home away together!" />
      <div className="intro-content w-25 text-center">
        <h3>Welcome to Your Safe Space!</h3>
        <p>
          It's okay to feel angry, sad, or scared when you're in a new place.
          You're not alone! Here, you'll explore fun ways to understand your
          feelings, feel braver, and find comfort. You've got this—and we're
          here to help!
        </p>
      </div>
      <div className="w-100 p-5 d-flex justify-content-center align-items-center">
        <CharacterCard
          imageSrc="..//..//public/bacgrounds/figma_gif1 2.png"
          description="Anastasija is energetic and full of life, but moving abroad flipped her world upside down. She’s angry about leaving her old life behind, and everything in the new country annoys her-especially the language. Not understanding or being understood makes her feel stuck and frustrated."
        />
      </div>
      <div className="w-100 p-5 d-flex justify-content-center align-items-center">
        <CharacterCard
          imageSrc="..//..//public/bacgrounds/figma_gif1 2.png"
          description="Matea is someone who was a very cheerful, sociable and very open person, however, the move brought up fears that she didn't even know she had, which caused difficulties in everyday life. She was afraid that she would not fit in and meet a society that would accept her."
        />
      </div>
    </div>
  );
}
