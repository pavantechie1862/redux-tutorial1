import { Component } from "react";
import { connect } from "react-redux";

import "./index.css";
import { buyLaptops, buyMobile, fetchUsers } from "../../Redux/Actions";

export class Shop extends Component {
  render() {
    return (
      <div>
        <h1 className="title">Welcome to VShop</h1>
        <div className="items">
          <div className="item">
            <p>Dell Inspiron Laptop</p>
            <p>Available: {this.props.noOfLaptops}</p>
            <button onClick={this.props.buyLaptop}>BUY</button>
          </div>
          <div className="item">
            <p>Redme Note 7</p>
            <p>Available: {this.props.noOfMobiles}</p>
            <button onClick={this.props.buyMobile}>BUY</button>
          </div>
          <div className="item">
            <p>Get users data</p>
            <p>Count: {this.props.users.length}</p>
            <button onClick={this.props.fetchUsers}>Call API</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    noOfLaptops: state.laptops.noOfLaptops,
    noOfMobiles: state.mobiles.noOfMobiles,
    users: state.users.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyLaptop: () => dispatch(buyLaptops()),
    buyMobile: () => dispatch(buyMobile()),
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
// const mapStateToProps = (state) => {
//   return {
//     numOfLaptops: state.laptops.numOfLaptops,
//     numOfMobiles: state.mobiles.numOfMobiles,
//     users: state.users.users,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     buyLaptop: () => dispatch(buyLaptop()),
//     buyMobile: () => dispatch(buyMobile()),
//     fetchUsers: () => dispatch(fetchUsers()),
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(Shop);

// export default Shop;
