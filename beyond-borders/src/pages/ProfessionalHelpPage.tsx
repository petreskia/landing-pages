import ContactForm from "../components/ContactForm";
import Header from "../components/Header";

export default function ProfessionalHelpPage() {
  return (
    <div className="d-flex flex-column justify-content-center">
      <Header
        heading="Professional Help"
        theme="other"
        headingBottom={
          <div className="intro-content w-75 text-center">
            <h3 className="mb-5 fs-1 green-text text-center">
              You are Never Alone!{" "}
            </h3>
            <p className="fs-4 green-text">
              It is brave to ask for help when feelings get big. Here, you will
              find a trusted psychologist who can listen, support, and help you
              feel better. Talking to someone can make a big difference - you
              deserve to feel safe and happy!
            </p>
          </div>
        }
      />
      <div className="custom-width">
        <img src="/Guides/profesionalHelp.png" alt="profesionalhelp-flyer" />
      </div>
      <div className="contact d-flex custom-width custom-padding">
        <ContactForm
          title="Want to talk?"
          description={
            <>
              <p className="text-center fs-3">
                If you’d like to reach out to me, you can{" "}
                <b>send me a message right here! </b>
                Just tell me your name, email, and what’s on your mind. I’m here
                to listen and help you feel better, whenever you're ready. Don’t
                worry—
                <b>your thoughts are safe with me!</b>
              </p>
            </>
          }
        />
      </div>
    </div>
  );
}
