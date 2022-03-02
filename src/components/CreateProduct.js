import React from "react";
import { saveProduct } from "../service/product";

class CreateProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      category: "",
      description: "",
      amount: "",
      price: "",
      image: "",
    };
  }

  handleChange = (e) => {
    const state = this.state;
    state[e.target.id] = e.target.value;
    this.setState({ state });
  };

  handleSubmit = (e) => {
    debugger;
    e.preventDefault();
    this.state.image = this.state.image.slice(12);
    const data = {
      name: this.state.name,
      category: this.state.category,
      description: this.state.description,
      amount: this.state.amount,
      price: this.state.price,
      image: this.state.image,
    };
    saveProduct(data);
  };

  render() {
    const { name, category, description, amount, price, image } = this.state;

    return (
      <div className="container">
        <form className="register" onSubmit={this.handleSubmit}>
          <div className="form-header">
            <h3 className="form-title">New Product</h3>
          </div>
          <div className="form-control">
            <input
              type="text"
              id="name"
              onChange={this.handleChange}
              value={name}
              placeholder="Name"
              required=""
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              id="description"
              onChange={this.handleChange}
              value={description}
              placeholder="Description"
            />
          </div>
          <div className="form-control">
            <select
              name="Category"
              id="category"
              onChange={this.handleChange}
              value={category}
            >
              <option value="none">Select an Option</option>
              <option value="Electronic">Electronic</option>
              <option value="Tools">Tools</option>
              <option value="Home &amp; Kitchen">Home &amp; Kitchen</option>
            </select>
          </div>
          <div className="grid">
            <div className="form-control">
              <label>Amount</label>
              <input
                type="number"
                id="amount"
                onChange={this.handleChange}
                value={amount}
                required=""
              />
            </div>
            <div className="form-control">
              <label>Price</label>
              <input
                type="number"
                id="price"
                onChange={this.handleChange}
                value={price}
                required=""
              />
            </div>
          </div>
          <div className="form-control">
            <input
              type="file"
              id="image"
              onChange={this.handleChange}
              value={image}
              required=""
            />
          </div>

          <div className="grid">
            <div className="form-control">
              <input
                type="button"
                id="cancel-registration"
                value="Cancel"
                className="btn-cancel"
              />
            </div>
            <div className="form-control">
              <button type="submit" className="btn-register">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateProduct;
