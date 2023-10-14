import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "../components/Button";
import ClientWindow from "../components/ClientWindow";
import Axios from "axios";
import { BACKEND_ROUTE, MAX_PRODUCT_AMOUNT } from "../scripts/constants";

function ProductView() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const { id } = useParams(null);

  useEffect(() => {
    Axios.get(BACKEND_ROUTE + "/general/get_product/" + id, {
      withCredentials: true,
    }).then((res) => {
      if (!res.data.error) {
        const product = res.data.result;
        setName(product.name);
        setDescription(product.description);
        setPrice(product.price);
        setPhotoURL(product.photo);
      }
    });
  }, [id]);

  return (
    <ClientWindow>
      <div className="row mt-4 mb-4">
        <div
          className="mt-4 col-md-6 d-flex flex-column"
          style={{ maxHeight: "487px" }}
        >
          <img
            src={
              photoURL
                ? BACKEND_ROUTE + photoURL
                : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png"
            }
            className="img-fluid rounded"
            style={{
              height: "100%",
              objectFit: "contain",
            }}
            alt=""
          />
        </div>
        <div className="mt-4 col-md-6 d-flex flex-column">
          <div className="row mb-4">
            <h4>Nombre</h4>
            <p>{name}</p>
          </div>
          <div className="row mb-4">
            <h4>Descripción</h4>
            <p style={{ textAlign: "justify" }}>{description}</p>
          </div>
          <div className="row mb-4">
            <h4>Precio</h4>
            <p> ₡{Intl.NumberFormat("en-US").format(price)}</p>
          </div>
          <div className="row mb-4 md-4">
            <form className="d-flex">
              <div className="col mb-4 me-3">
                <input
                  type="number"
                  className="form-control"
                  min="1"
                  max={MAX_PRODUCT_AMOUNT}
                  defaultValue="1"
                  required
                />
              </div>
              <div className="col mb-4 md-4">
                <Button
                  text="Agregar al carrito"
                  bootstrap="btn"
                  color="#73E2A7"
                  type="submit"
                />
              </div>
              <div className="col mb-4 md-4 d-flex flex-row-reverse">
                <Link
                  to="/client_products"
                  className="btn btn-block"
                  style={{ backgroundColor: "#73E2A7", width: "150px" }}
                >
                  Regresar
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </ClientWindow>
  );
}

export default ProductView;
