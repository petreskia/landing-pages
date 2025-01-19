import { Link } from "react-router";
import Header from "../components/Header";
import CharacterCard from "../components/CharacterCard";
import StarsComponent from "../components/StarsComponent";

export default function EmotionsPage() {
  const emotionLinks = (
    <div className="emotion-links d-flex justify-content-center">
      <div>
        <Link to="/emotions/anger" className="emotion-link">
          Anger
        </Link>
      </div>
      <div>
        <Link to="/emotions/sadness" className="emotion-link">
          Sadness
        </Link>
      </div>
      <div>
        <Link to="/emotions/fear" className="emotion-link">
          Fear
        </Link>
      </div>
    </div>
  );

  return (
    <div className="text-center d-flex flex-column justify-content-center align-items-center">
      <Header
        heading={emotionLinks}
        headingBottom="The process of healing different emotions"
      />
      <div className="intro-content text-center">
        <StarsComponent />
      </div>
      <div className="w-100 p-5 d-flex justify-content-center align-items-center">
        <CharacterCard
          mediaSrc="/Animations/anastasija_webp_bezloop.webp"
          description="Anastasija is energetic and full of life, but moving abroad flipped her world upside down. She’s angry about leaving her old life behind, and everything in the new country annoys her-especially the language. Not understanding or being understood makes her feel stuck and frustrated."
          buttonText="If you feel like Anastasija, click here!"
          buttonClassName="navigate-button blue-nvg-btn"
          buttonLink="./AngerPage.tsx"
        />
      </div>
      <div className="w-100 p-5 d-flex justify-content-center align-items-center">
        <CharacterCard
          mediaSrc="..//../public/Animations/helenaz_webpbez_loop.webp"
          description="Helena has left behind her hometown, her friends, and the life she knew. Right now, she feels a deep sadness, missing the comfort of her old routines and the closeness of familiar faces. The feeling stays with her as she tries to adjust to her new surroundings."
          buttonText="If you feel like Helena, click here!"
          buttonClassName="navigate-button violet-nvg-btn"
          buttonLink="./SadnessPage.tsx"
        />
      </div>
      <div className="w-100 p-5 d-flex justify-content-center align-items-center">
        <CharacterCard
          mediaSrc="..//..//public/Animations/ezgif.com-webp-maker-2.webp"
          description="Matea is someone who was a very cheerful, sociable and very open person, however, the move brought up fears that she didn't even know she had, which caused difficulties in everyday life. She was afraid that she would not fit in and meet a society that would accept her."
          buttonText="If you feel like Matea, click here!"
          buttonClassName="navigate-button green-nvg-btn"
          buttonLink="./FearPage.tsx"
        />
      </div>
    </div>
  );
}
