import React from "react";
import { Panel, Table, Button, Glyphicon } from "react-bootstrap";
import { removeFromCart } from "../actionCreators";
import { connect } from "react-redux";

const styles = {
  footer: {
    fontWeight: "bold"
  }
};


// esto se llama destructurar un argumento en emaascript 2015
const ShoppingCart=({cart,removeFromCart})=> {
// const ShoppingCart=(props)=> {
    return (
      <Panel header="Shopping Cart">
        <Table fill>
          <tbody>
            {cart.map(product => (
            // {props.cart.map(product => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td className="text-right">${product.price}</td>
                <td className="text-right">
                  <Button
                    bsSize="xsmall"
                    bsStyle="danger"
                    onClick={() => removeFromCart(product)}
                    // onClick={() => props.removeFromCart(product)}
                  >
                    <Glyphicon glyph="trash" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4" style={styles.footer}>
                Total: $
                {cart.reduce(
                // {props.cart.reduce(
                  (sum, product) => sum + product.price,
                  0
                )}
              </td>
            </tr>
          </tfoot>
        </Table>
      </Panel>
    );
}
// le pasamos las varialbe sque tenemos en el store en
// este caso sera solo la variable cart
const mapStateToPros = state => {
  return {
    cart: state.cart
  };
};


// le pasamos las funciones que queremos pasarle
const dispatchStateToPros = dispatch => {
  return {
    removeFromCart(product) {
      dispatch(removeFromCart(product));
    }
  };
};

export default connect(mapStateToPros,dispatchStateToPros)(ShoppingCart);
