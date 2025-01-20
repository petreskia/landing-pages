import CharacterCard from "../components/CharacterCard";
import Header from "../components/Header";
import NavigateButton from "../components/NavigateButton";

export default function HomePage() {
  return (
    <div className="text-center d-flex flex-column align-items-center">
      <Header
        heading="Make a home away together!"
        theme="home"
        headingBottom={
          <div className="intro-content w-50">
            <h3 className="mb-5 fs-1 green-text">
              Welcome to Your Safe Space!
            </h3>
            <p className="fs-4 green-text">
              It's okay to feel<strong> angry, sad,</strong> or{" "}
              <strong>scared</strong> when you're in a new place.{" "}
              <strong>You're not alone!</strong> Here, you'll explore fun ways
              to <b>understand</b> your feelings, feel braver, and find comfort.
              <b> You've got this</b>—and we're here to help!
            </p>
          </div>
        }
      />
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
              <strong>afraid</strong>
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
      <div className="animation-card">
        <video
          src="/Animations/skupnaAnimacija.mp4"
          controls
          autoPlay
          loop
          muted
          className="w-100 p-5"
        >
          Your browser does not support the video tag.
        </video>
      </div>
      <NavigateButton
        text="Talk to us!"
        className="navigate-button green-nvg-btn mb-5"
        to="/aboutus"
      />
    </div>
  );
}
