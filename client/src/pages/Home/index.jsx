import React, { useState, useEffect } from "react";
import classes from "./index.module.scss";
import { API } from "../../config/api";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/Footer/index";

const Home = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const toProduct = (productId, productName) => {
    navigate(`/product/${productName}`, { state: { productId } });
  };

  const getProducts = async () => {
    try {
      const response = await API.get("/products");
      setProducts(response.data.data.products);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.btn}>
        <button type="submit" onClick={() => navigate("/product")}>
          Add Product
        </button>
      </div>
      <div className={classes.wraper}>
        <h1>Multivitamin</h1>
        <div className={classes.displays}>
          {products &&
            products.map((item, idx) => {
              return (
                <div
                  className={classes.card}
                  onClick={() => toProduct(item.id, item.name)}
                  key={idx}
                >
                  <img src={item.photo} alt={item.name} />
                </div>
              );
            })}
        </div>
      </div>
      <div className={classes.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
