import React from "react";
import { getByCategory } from "../service/product";

class Reports extends React.Component {
  constructor(props) {
    super(props);
  }
  state = { loadData: false, categories: [] };

  loadData() {
    var categories = {
      Electronic: { amount: new Array(), price: new Array() },
      Tools: { amount: new Array(), price: new Array() },
      Home: { amount: new Array(), price: new Array() },
    };
    const categoriesResponce = getByCategory(categories);
    if (categoriesResponce) {
      this.setState({ loadData: true, categories: categoriesResponce });
    }
  }

  componentDidMount() {
    this.loadData();
  }

  render() {
    const { loadData, categories } = this.state;
    if (!loadData) {
      return <h1>No existen productos</h1>;
    } else {
      return (
        <table>
          <thead>
            <tr>
              <th>Category Name</th>
              <th>Total Amount</th>
              <th>Total Price </th>
            </tr>
          </thead>
          <tbody>
            {categories.map((key) => {
              debugger;
              <tr>
                <td>{key.amount}</td>
                <td>{key.amount}</td>
                <td>{key.price}</td>
              </tr>;
            })}
          </tbody>
        </table>
      );
    }
  }
}

export default Reports;
