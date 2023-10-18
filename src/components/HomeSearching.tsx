const HomeSearching = () => {
  return (
    <>
      <section>
        <div className="row">
          <div className="col-md-2 col-lg-2 col-sm-6 col-xs-6 movie-list-card">
            <div className="d-grid gap-2 text-center">
              <img src="../public/img/batman.jpg" alt="" className="rounded mx-auto d-block" />
            </div>
            <p className="fs-3">Batman The Series 3</p>

            <p className="fs-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. In asperiores explicabo nemo a aliquid natus atque vitae quas, quo similique optio, veniam deserunt commodi unde! Harum rerum atque sunt quasi?</p>
            <div className="d-grid gap-2">
              <button className="btn btn-outline-primary btn-sm block">View</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default HomeSearching;
