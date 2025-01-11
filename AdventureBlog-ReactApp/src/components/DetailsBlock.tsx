interface DetailsBlockProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

function DetailsBlock({
  title,
  description,
  imageSrc,
  imageAlt,
}: DetailsBlockProps) {
  return (
    <>
      <div className="container-xl text-center p-3 p-lg-5">
        <div className="row gx-3">
          <div className="col-12 col-md-7 col-lg-8 d-flex align-items-center">
            <div className="text-start">
              <p className="text-uppercase mb-2 text-danger">About</p>
              <h3 className="p-bolder col-md-4">{title}</h3>
              <p>{description}</p>
            </div>
          </div>
          <div className="col-12 col-md-5 col-lg-4">
            <div>
              <img
                src={imageSrc}
                alt={imageAlt}
                className="img-fluid details-block-img mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailsBlock;
