const { Product } = require("../../../models");
const exclude = ["createdAt", "updatedAt"];
const PATH_FILE = "http://localhost:5000/uploads/";

exports.getProducts = async (req, res) => {
  try {
    let allProducts = await Product.findAll({
      attributes: {
        exclude,
      },
    });
    allProducts = JSON.parse(JSON.stringify(allProducts));
    allProducts = allProducts.map((item) => {
      return {
        ...item,
        photo: item.photo,
      };
    });

    res.status(200).send({
      status: "Success",
      data: {
        products: allProducts,
      },
    });
  } catch (error) {
    res.status(500).send({
      status: "Failed",
      message: "Internal Server Error",
    });
  }
};

exports.getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    let product = await Product.findOne({
      where: {
        id: id,
      },
      attributes: {
        exclude,
      },
    });
    product = JSON.parse(JSON.stringify(product));
    product = {
      ...product,
      photo: product.photo,
    };

    if (!product) {
      return res.status(404).send({
        status: "Failed",
        message: "Product not Found",
      });
    }
    res.status(200).send({
      status: "Success",
      data: {
        product,
      },
    });
  } catch (error) {
    res.status(500).send({
      status: "Failed",
      message: "Internal Server Error",
    });
  }
};

exports.addProduct = async (req, res) => {
  try {
    let { ...data } = req.body;
    let productData = await Product.create({
      ...data,
      photo: PATH_FILE + req.file.filename,
    });

    await Product.findOne({
      where: {
        ...data,
        photo: req.file.filename,
      },
      attributes: {
        exclude,
      },
    });

    res.status(201).send({
      status: "Success",
      data: {
        product: productData,
      },
    });
  } catch (error) {
    return res.status(500).send({
      status: "Failed",
      message: "Internal Server Error",
    });
  }
};

exports.editProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const dataUpdate = req.body;

    const productCheck = await Product.findOne({
      where: {
        id,
        photo: PATH_FILE + req.file.filename,
      },
    });

    if (!productCheck) {
      return res.status(404).send({
        status: "Failed",
        message: "Product not Found",
      });
    }

    const updated = {
      ...dataUpdate,
      photo: req.file.filename,
    };
    await Product.update(updated, {
      where: {
        id,
      },
    });

    res.status(200).send({
      status: "Success",
      message: "Product Updated",
      data: updated,
    });
  } catch (error) {
    res.status(500).send({
      status: "Failed",
      message: "Internal Server Failed",
    });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const productCheck = await Product.findOne({
      where: {
        id,
      },
    });

    if (!productCheck) {
      return res.status(404).send({
        status: "Failed",
        message: "Product not Found",
      });
    }

    await Product.destroy({
      where: {
        id,
      },
    });

    res.status(200).send({
      status: "Success",
      data: {
        id,
      },
    });
  } catch (error) {
    res.status(500).send({
      status: "Failed",
      message: "Internal Server Error",
    });
  }
};
