import React, { useState, useEffect } from "react";
import classes from "./index.module.scss";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { API } from "../../config/api";

const DetailProduct = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const location = useLocation();
  const { productId } = location.state;

  const getProduct = async () => {
    try {
      const response = await API.get(`/product/${productId}`);
      setProduct(response.data.data.product);
      console.log(response.data.data.product);
    } catch (error) {}
  };
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.wraper}>
        <div className={classes.content}>
          <div className={classes.product}>
            <img src={product.photo} alt="product" />
          </div>
          <div className={classes.description}>
            <div className={classes.title}>
              <p>{product.name}</p>
            </div>
            <div className={classes.subdescription}>
              <p>{product.description}</p>
            </div>
            <div className={classes.response}>
              <button onClick={() => navigate("/product/edit")}>
                Edit Product
              </button>
              <button onClick={() => navigate("/product")}>
                Delete Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
