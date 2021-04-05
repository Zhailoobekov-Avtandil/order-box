import React from 'react';

export default function Header(props) {
  return (
    <header className="block row center">
      <div>
          <h1>Order Box / Food Menu</h1>
      </div>
      <div>
          You have{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        <span>items in the basket</span>
      </div>
    </header>
  );
}
