const ProductSearchbox = () => {
  return (
    <>
      <section>
        <div className="row pb-2">
          <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
            <div className="input-group no-wrap">
              <input type="text" className="form-control" placeholder="Cari apa" name="searchbox"></input>
              <button className="btn btn-primary btn-sm">
                <i className="bi bi-search"></i> Cari
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ProductSearchbox;
