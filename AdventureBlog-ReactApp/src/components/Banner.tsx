function Banner() {
  return (
    <div className="banner d-flex align-items-center">
      <div className="banner-content container-fluid text-white">
        <div className="row">
          <div className="col-12 col-lg-6  offset-lg-1">
            <p className=" text-uppercase">Summer Vacation</p>
            <h1 className="bold mx-au">Nomad nation</h1>
            <button
              type="button"
              className="btn btn-light col-12 col-md-2 col-lg-3 mx-auto text-uppercase"
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Banner;
