import React, { useState } from "react";
import classes from "./index.module.scss";
import { useNavigate } from "react-router-dom";
import { API } from "../../config/api";

import Thumbnail from "../../static/icons/Thumbnail.png";

const AddProduct = () => {
  const navigate = useNavigate();
  const [preview, setPreview] = useState(null);
  const [formProduct, setFormProduct] = useState({
    name: "",
    description: "",
  });

  const addProduct = (e) => {
    setFormProduct({
      ...formProduct,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });

    if (e.target.type === "file") {
      let url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
    }
  };

  const handleProduct = async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData();
      formData.set("name", formProduct.name);
      formData.set("description", formProduct.description);
      formData.set("photo", formProduct.image[0], formProduct.image[0].name);

      const response = await API.post("/product", formData);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.wraper}>
        <p className={classes.title}>Add Product</p>
        <div className={classes.content}>
          <div className={classes.leftSection}>
            <form className={classes.formWraper} onSubmit={handleProduct}>
              <input
                className={classes.input}
                placeholder="Name"
                name="name"
                value={formProduct.name}
                onChange={addProduct}
              />
              <textarea
                className={classes.inputDescription}
                placeholder="Description Product"
                name="description"
                value={formProduct.description}
                onChange={addProduct}
              />
              <label className={classes.photoInput} htmlFor="image">
                Photo Product
                <img src={Thumbnail} />
              </label>
              <input
                id="image"
                name="image"
                type="file"
                onChange={addProduct}
                hidden
              />
              <div className={classes.btn}>
                <button type="submit">Add Product</button>
              </div>
            </form>
          </div>

          <div className={classes.rightSection}>
            <img src={preview} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
