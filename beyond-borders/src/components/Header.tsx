import NavBar from "./NavBar";

interface HeaderProps {
  heading: React.ReactNode;
  headingBottom?: React.ReactNode;
}

export default function Header({ heading, headingBottom }: HeaderProps) {
  return (
    <div className="header d-flex flex-column w-100">
      <div className="header-top d-flex flex-column align-items-center w-100">
        <div className="title">
          <h1 className="title-text">
            <span className="light-violet custom-font">B</span>
            <span className="light-green custom-font">e</span>
            <span className="pastel-violet custom-font">y</span>
            <span className="blue custom-font">o</span>
            <span className="light-green custom-font">n</span>
            <span className="blue custom-font">d</span>
            <span className=""> </span>
            <span className="orange custom-font">B</span>
            <span className="violet custom-font">o</span>
            <span className="green custom-font">r</span>
            <span className="light-blue custom-font">d</span>
            <span className="pastel-violet custom-font">e</span>
            <span className="light-green custom-font">r</span>
            <span className="light-blue custom-font">s</span>
          </h1>
        </div>
        <div className="w-100">
          <NavBar />
        </div>
      </div>
      <h2 className="custom-heading text-center text-white">{heading}</h2>
      <div className="header-bottom d-flex justify-content-center">
        {headingBottom}
      </div>
    </div>
  );
}

{
  /* <div class="bg-border-radius">
  <div class="container">
    <h1 class="%h1">Title</h1>
    <p class="%p">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi imperdiet
      ultricies neque sit amet efficitur. Pellentesque tristique rutrum aliquam.
      Curabitur et auctor nulla. Donec vel sem pellentesque enim tempor
      consectetur sed in risus. Sed posuere tristique eros, pretium bibendum
      velit auctor sed. Duis ultricies, sapien sit amet mollis pretium, erat
      risus cursus libero, sed commodo sapien quam venenatis mi. Vestibulum
      ligula nunc, hendrerit sit amet leo non, porttitor ornare velit. Quisque
      finibus, sem ut posuere lobortis, dolor quam scelerisque turpis, quis
      iaculis nibh dolor at orci. Vestibulum euismod molestie ipsum, vitae
      malesuada lorem tincidunt at.
    </p>
  </div>
</div>; */
}
