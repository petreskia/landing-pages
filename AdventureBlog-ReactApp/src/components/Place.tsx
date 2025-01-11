interface PlaceProps {
  image: string;
  title: string;
  text: string;
}

function Place({ image, title, text }: PlaceProps) {
  return (
    <div className="custom-card">
      <img src={image} alt="picture" />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Place;
