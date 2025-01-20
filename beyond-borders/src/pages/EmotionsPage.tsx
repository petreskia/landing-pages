import { Link } from "react-router";
import Header from "../components/Header";
import CharacterCard from "../components/CharacterCard";

export default function EmotionsPage() {
  const emotionLinks = (
    <div className="emotion-links d-flex justify-content-center">
      <div>
        <Link to="/emotions/anger" className="emotion-link emotion-link1">
          Anger
        </Link>
      </div>
      <div>
        <Link to="/emotions/sadness" className="emotion-link emotion-link2">
          Sadness
        </Link>
      </div>
      <div>
        <Link to="/emotions/fear" className="emotion-link emotion-link3">
          Fear
        </Link>
      </div>
    </div>
  );

  return (
    <div className="text-center d-flex flex-column justify-content-center align-items-center">
      <Header
        heading={emotionLinks}
        introText={`The process of "healing" different emotions`}
      />
      <div className="intro-content text-center"></div>
      <div className="w-100 p-5 d-flex justify-content-center align-items-center">
        <CharacterCard
          mediaSrc="/Animations/anastasija_webp_bezloop.webp"
          description={
            <>
              Anastasija is energetic and full of life, but moving abroad
              <b> flipped her world upside down.</b> She’s{" "}
              <strong> angry </strong>
              about leaving her <b>old life behind</b>, and everything in the
              new country annoys her—especially the language. Not understanding
              or being understood makes her feel{" "}
              <strong>stuck and frustrated.</strong>
            </>
          }
          cardCustomClass="anastasija-card"
          buttonText="If you feel like Anastasija, click here!"
          buttonClassName="navigate-button pink-nvg-btn"
          buttonLink="/emotions/anger"
        />
      </div>
      <div className="w-100 p-5 d-flex justify-content-center align-items-center">
        <CharacterCard
          mediaSrc="/Animations/helenaz_webpbez_loop.webp"
          description={
            <>
              Helena has left behind her <b>hometown, her friends,</b> and the
              life she <b>knew</b>. Right now, she feels a{" "}
              <b>deep sadness, missing the comfort</b> of her old routines and
              the <b>closeness of familiar faces.</b> The feeling stays with her
              as she tries to <b>adjust</b> to her new surroundings.
            </>
          }
          cardCustomClass="helena-card"
          buttonText="If you feel like Helena, click here!"
          buttonClassName="navigate-button blue-nvg-btn"
          buttonLink="/emotions/sadness"
        />
      </div>
      <div className="w-100 p-5 d-flex justify-content-center align-items-center">
        <CharacterCard
          mediaSrc="/Animations/ezgif.com-webp-maker-2.webp"
          description={
            <>
              Matea is someone who was a <b>very cheerful, sociable</b> and{" "}
              <b>very open person,</b> however, <strong>the move</strong>{" "}
              brought up <strong>fears</strong> that she didn't even know she
              had, which caused difficulties in everyday life. She was{" "}
              <strong>afraid </strong>
              that she would not fit in and meet a society that would{" "}
              <b>accept </b>
              her.
            </>
          }
          cardCustomClass="matea-card"
          buttonText="If you feel like Matea, click here!"
          buttonClassName="navigate-button violet-nvg-btn"
          buttonLink="/emotions/fear"
        />
      </div>
    </div>
  );
}
