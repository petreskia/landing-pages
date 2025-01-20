import CircleAnimation from "../components/CircleAnimation";
import ContactForm from "../components/ContactForm";
import Header from "../components/Header";

export default function AboutUsPage() {
  return (
    <div className=" d-flex flex-column justify-content-center align-items-center">
      <Header
        heading="About Us"
        theme="other"
        headingBottom={
          <>
            <div className="animations-container d-flex justify-content-around p-5">
              <div className="helena d-flex flex-column justify-content-center align-items-center anime">
                <CircleAnimation
                  imageSrc="/Animations/helenaz_webpbez_loop.webp"
                  customClass="custom-3anime"
                />
                <h3>Helena</h3>
              </div>
              <div className="anastasija d-flex flex-column justify-content-center align-items-center gap-4 anime">
                <CircleAnimation
                  imageSrc="/Animations/anastasija_webp_bezloop.webp"
                  customClass="custom-3anime"
                />
                <h3>Anastasija</h3>
              </div>
              <div className="matea d-flex flex-column justify-content-center align-items-center gap-4 anime">
                <CircleAnimation
                  imageSrc="/Animations/ezgif.com-webp-maker-2.webp"
                  customClass="custom-3anime"
                />
                <h3>Matea</h3>
              </div>
            </div>
          </>
        }
      />
      <div className="w-75 pb-5 pt-5">
        <img
          src="/Guides/Group 50 (1).png"
          alt="our-vision"
          className="cover-image"
        />
      </div>
      <div className="contact d-flex custom-width custom-padding">
        <ContactForm
          title="Contact Us"
          description={
            <>
              <p className="text-center fs-3">
                Got Something on Your Mind? 💌{" "}
                <strong>We’d love to hear from you!</strong> If you want to
                share your thoughts, feelings, or ideas with us, just fill out
                your name, email, and message below. We’re here to listen, chat,
                and share ways to make this journey easier together.{" "}
                <strong>You’re not alone!</strong>
              </p>
            </>
          }
        />
      </div>
    </div>
  );
}
