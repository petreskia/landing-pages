import CustomGuide from "../components/CustomGuide";
import Header from "../components/Header";
import CustomFooter from "../components/CustomFooter";
import CustomCharacterCard from "../components/CustomCharactedCard";

export default function FearPage() {
  return (
    <div className="d-flex flex-column fear-page">
      <Header heading="Fear" theme="fear" />

      <div className="main-content position-relative p-5">
        <CustomCharacterCard
          imageSrc="/Characters/Matea.png"
          customDescription={
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
          customCard="matea-card"
          customClass="custom-character helena-character"
        />

        <div className="custom-badge">
          <img
            src="/StarBadges/fearTextBadge.png"
            alt="Coping steps for fear badge"
          />
        </div>

        <CustomGuide
          layoutImageSrc="/Layouts/mateaLayout.png"
          badgeImages={[
            "/numberBadge/purple1.png",
            "/numberBadge/purple2.png",
            "/numberBadge/purple3.png",
            "/numberBadge/purple4.png",
            "/numberBadge/purple5.png",
          ]}
          buttonText="Guides"
          buttonLink="/guides"
          buttonClass="navigate-button guides-button-fear"
        />
      </div>

      <div className="animation-card">
        <video
          src="/Animations/mateaAnimacija.mp4"
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
        imageSrc="/Characters/characterM.png"
        text="If you feel that you want to talk to one of us or you still feel the need for extra help, press the next field"
        color="violet-text"
        buttons={[
          {
            text: "Contact Us",
            to: "/aboutus",
            className: "navigate-button violet-footer-btn",
          },
          {
            text: "Extra Help",
            to: "/professionalhelp",
            className: "navigate-button violet-footer-btn",
          },
        ]}
      />
    </div>
  );
}
