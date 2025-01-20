import CustomGuide from "../components/CustomGuide";
import Header from "../components/Header";
import CustomFooter from "../components/CustomFooter";
import CustomCharacterCard from "../components/CustomCharactedCard";

export default function Sadness() {
  return (
    <div className="d-flex flex-column sadness-page">
      <Header heading="Sadness" theme="sadness" />

      <div className="main-content position-relative p-5">
        <CustomCharacterCard
          imageSrc="/Characters/Helena.png"
          customDescription={
            <>
              Helena has left behind her <b>hometown, her friends,</b> and the
              life she <b>knew</b>. Right now, she feels a{" "}
              <b>deep sadness, missing the comfort</b> of her old routines and
              the <b>closeness of familiar faces.</b> The feeling stays with her
              as she tries to <b>adjust</b> to her new surroundings.
            </>
          }
          customCard="helena-card"
          customClass="custom-character helena-character"
        />

        <div className="custom-badge">
          <img
            src="/StarBadges/scaredTextBadge.png"
            alt="Coping steps for fear badge"
          />
        </div>

        <CustomGuide
          layoutImageSrc="/Layouts/helena-transparentno.png"
          badgeImages={[
            "/numberBadge/blue1.png",
            "/numberBadge/blue2.png",
            "/numberBadge/blue3.png",
            "/numberBadge/blue4.png",
            "/numberBadge/blue5.png",
          ]}
          buttonText="Guides"
          buttonLink="/guides"
          buttonClass="navigate-button guides-button-sadness"
        />
      </div>
      <div className="animation-card">
        <video
          src="/Animations/helenaAnimacija.mp4"
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
        imageSrc="/Characters/characterH.png"
        text="If you feel that you want to talk to one of us or you still feel the need for extra help, press the next field"
        color="blue-text"
        buttons={[
          {
            text: "Contact Us",
            to: "/aboutus",
            className: "navigate-button blue-footer-btn",
          },
          {
            text: "Extra Help",
            to: "/professionalhelp",
            className: "navigate-button blue-footer-btn",
          },
        ]}
      />
    </div>
  );
}
