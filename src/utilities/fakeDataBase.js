const addToDb = (id) => {
  let shoppingCart = {};
  const storedCart = localStorage.getItem("shopping-Cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }

  //Set quantity
  const quantity = shoppingCart[id];
  if (quantity) {
    shoppingCart[id] = quantity + 1;
  } else {
    shoppingCart[id] = 1;
  }
  localStorage.setItem("shopping-Cart", JSON.stringify(shoppingCart));
};


const getFromDb = () => {
  let shoppingCart = {};
  const storedCart = localStorage.getItem("shopping-Cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  return shoppingCart;
};



const removeFromDb = id => {
  const storedCart = localStorage.getItem('shopping-Cart')
  if (storedCart) {
    const shoppingCart = JSON.parse(storedCart)
    if (id in shoppingCart) {
      delete shoppingCart[id]
      localStorage.setItem('shopping-Cart', JSON.stringify(shoppingCart))
    }
  }
}

const deleteShoppingCart = () => {
  localStorage.removeItem('shopping-cart')
}

  export { addToDb, getFromDb, removeFromDb, deleteShoppingCart };