import Header from "../components/Header";

export default function GuidesPage() {
  return (
    <div className="d-flex flex-column justify-content-center">
      <Header
        heading="Guides"
        theme="other"
        headingBottom={
          <div className="intro-content w-50">
            <p className="fs-4 green-text text-center">
              <strong>Moving</strong> to a new place is an{" "}
              <strong>exciting adventure, </strong>
              and we’re here to <b>help you</b> feel right at home. In this
              section, <strong>you’ll find friendly tips</strong> on local
              events, fun ways to <strong>learn the language,</strong> maps of
              cool spots to visit, and how to get around using public
              transportation. Each part is designed to make your new journey
              <b> smoother</b> and more <b>enjoyable.</b>
            </p>
          </div>
        }
      />
      <div className="guides-main-content pb-5 pt-5 custom-width position-relative">
        <img src="/Guides/guides.png" alt="guides-flyer" />
      </div>
      <div className="position-absolute duolingo">
        <a
          href="https://www.duolingo.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Duolingo:
        </a>
      </div>
      <div
        className="position-absolute 
      ling"
      >
        <a
          href="https://ling-app.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ling:
        </a>
      </div>
      <div
        className="position-absolute 
      languages-50"
      >
        <a
          href="https://play.google.com/store/apps/"
          target="_blank"
          rel="noopener noreferrer"
        >
          50 Languages:
        </a>
      </div>
      <div className="printable-map-text position-absolute text-center">
        <p>
          For a handy <b>offline reference</b> download and print this{" "}
          <a
            href="https://www.slovenia.info/en/plan-your-trip/publication/tourist-map-of-slovenia-31"
            target="_blank"
          >
            detailed map{" "}
          </a>{" "}
          highlighting Slovenia's <b>key</b> regions and cities.
        </p>
      </div>
      <div className="transport-info position-absolute text-center">
        <p>
          A <b>single journey</b> fare is €1.30 allowing
          <br />
          <a
            href="https://www.visitljubljana.com/en/visitors/travel-information/getting-around/city-buses/"
            target="_blank"
          >
            unlimited transfers
          </a>{" "}
          within 90 minutes when using the <b>Urbana card.</b>
        </p>
      </div>
    </div>
  );
}
