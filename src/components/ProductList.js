import React from "react";
import { getAll } from "../service/product";

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loadData: false, products: [] };
  }

  loadData() {
    const productsResponce = getAll();
    if (productsResponce) {
      this.setState({ loadData: true, products: productsResponce });
    }
  }

  componentDidMount() {
    this.loadData();
  }

  render() {
    const { loadData, products } = this.state;
    if (!loadData) {
      return <h1>No existen productos</h1>;
    } else {
      return products.map((product) => {
        <div className="item col-md-6">
          <div className="row">
            <div className="card-image col-md-3">
              <img src="{product.image}" alt="" />
            </div>
            <div className="card-info col-md-9">
              <h3 className="car-title">{product.name}</h3>
              <p className="card-description">{product.description}</p>
              <p className="price">{product.price} Bs.</p>
            </div>
          </div>
        </div>;
      });
    }
  }
}

export default ProductList;
