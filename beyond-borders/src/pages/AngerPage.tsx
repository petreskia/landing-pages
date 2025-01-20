import CustomGuide from "../components/CustomGuide";
import Header from "../components/Header";
import CustomFooter from "../components/CustomFooter";
import CustomCharacterCard from "../components/CustomCharactedCard";

export default function Sadness() {
  return (
    <div className="d-flex flex-column">
      <Header heading="Anger" theme="anger" />
      <div className="main-content position-relative p-5">
        <CustomCharacterCard
          imageSrc="/Characters/Anastasija.png"
          customDescription={
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
          customCard="anastasija-card"
          customClass="custom-character"
        />

        <div className="custom-badge">
          <img
            src="/StarBadges/angerTextBadge.png"
            alt="Coping steps for fear badge"
          />
        </div>

        <CustomGuide
          layoutImageSrc="/Layouts/anger-transparentno.png"
          badgeImages={[
            "/numberBadge/rozovo1.png",
            "/numberBadge/rozovo2.png",
            "/numberBadge/rozovo3.png",
            "/numberBadge/rozovo4.png",
            "/numberBadge/rozovo5.png",
          ]}
          buttonText="Guides"
          buttonLink="/guides"
          buttonClass="navigate-button guides-button-anger"
        />
      </div>
      <div className="animation-card">
        <video
          src="/Animations/animacija.mp4"
          controls
          autoPlay
          loop
          muted
          className="w-100 p-5"
        >
          Your browser does not support the video tag.
        </video>
      </div>
      <CustomFooter
        imageSrc="/Characters/characterA.png"
        text="If you feel that you want to talk to one of us or you still feel the need for extra help, choose one of the buttons"
        color="dark-pink"
        buttons={[
          {
            text: "Contact Us",
            to: "/aboutus",
            className: "navigate-button pink-footer-btn",
          },
          {
            text: "Extra Help",
            to: "/professionalhelp",
            className: "navigate-button pink-footer-btn",
          },
        ]}
      />
    </div>
  );
}
