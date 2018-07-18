import React  from 'react';

const FruitBasket = (props) => {

  const children = React.Children.map(props.children, child => {
    return React.cloneElement(child, {});
  })

  return (
    <div className="fruit-basket">
      {children}
    </div>
  );
  
}

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilterCallback: null,
}

export default FruitBasket;
