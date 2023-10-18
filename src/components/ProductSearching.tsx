import { useState } from "react";
import ProductSearchbox from "./ProductSearchbox";
const HomeSearching = () => {
  const data = [
    {
      id: 1,
      productname: "32636 0232K",
      image: "1.png",
      description: "",
      price: "50.000",
      sold: 999,
    },
    {
      id: 2,
      productname: "Flyback TV Sharp 32636 0232K",
      image: "1.png",
      description: "",
      price: "50.000",
      sold: 999,
    },
    {
      id: 3,
      productname: "Flyback TV Sharp 32636 0232K",
      image: "1.png",
      description: "",
      price: "50.000",
      sold: 999,
    },
    {
      id: 4,
      productname: "Flyback TV Sharp 32636 0232K",
      image: "1.png",
      description: "",
      price: "50.000",
      sold: 999,
    },
    {
      id: 5,
      productname: "Flyback TV Sharp 32636 0232K",
      image: "1.png",
      description: "",
      price: "50.000",
      sold: 999,
    },
    {
      id: 6,
      productname: "Flyback TV Sharp 32636 0232K",
      image: "1.png",
      description: "",
      price: "50.000",
      sold: 999,
    },
  ];
  // [product, setProduct] = useState();
  // console.log(data);

  return (
    <>
      <ProductSearchbox></ProductSearchbox>
      <section>
        <div className="row p-0">
          {data.map((item, index) => (
            <div className="col-6 col-sm-6 col-md-4 p-0 m-0">
              <div key={index} className="movie-list-card rounded m-1 pb-1">
                <div className="d-grid gap-2 text-center position-relative">
                  <img src="./public/img/1.png" alt="" className="rounded mx-auto d-block img-thumbnail" />
                </div>
                <div className="row p-1">
                  <div className="col">
                    <p className="fs-6 lb-price-text text-start fw-bold">Rp. {item.price}</p>
                  </div>
                  <div className="col">
                    <p className="fs-6 text-end lb-sold-text">{item.sold} Terjual</p>
                  </div>
                </div>
                <div className="row p-1">
                  <div className="col">
                    <p className="fs-6 text-start">{item.productname}</p>
                    {/* <span className="position-absolute bottom-0 start-0 badge bg-warning position-absolute"> 4.7</span> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
export default HomeSearching;
