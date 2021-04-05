import React from 'react';

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const totalPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  return (
    <aside className="block col-1">
      <h2>Order Box</h2>
      <div>
        {cartItems.length === 0 && <div>Basket is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty} x {item.price.toFixed(2)}som
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>{totalPrice.toFixed(2)}som</strong>
              </div>
            </div>
            <hr />
          </>
        )}
      </div>
    </aside>
  );
}
