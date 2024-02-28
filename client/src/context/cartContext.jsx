import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
  );
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (item) => {
    const isItemInCart = cart?.find(
      (cartItem) => item._id === cartItem.id || item.id === cartItem.id
    );

    if (isItemInCart) {
      setCart((prevCart) =>
        prevCart.map((element) =>
          item._id === element.id || item.id === element.id
            ? { ...element, quantity: element.quantity + item.quantity }
            : element
        )
      );
    } else {
      setCart((prevCart) => [
        ...prevCart,
        {
          id: item._id,
          name: item.name,
          image: (item.images && item.images[0]) || item.image,
          price: item.price,
          quantity: item.quantity,
        },
      ]);
    }
  };

  const removeFromCart = (item) => {
    const newCart = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(newCart);
  };

  const decreaseQuantity = (item) => {
    console.log(item);

    setCart((prevCart) =>
      prevCart.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...item, quantity: Math.max(item.quantity - 1, 1) };
        } else {
          return { ...cartItem };
        }
      })
    );
  };

  const cleanCart = () => {
    setCart([]);
  };

  const getCartTotal = () => {
    return cart
      ? cart.reduce((total, item) => total + item?.price * item?.quantity, 0)
      : 0;
  };

  useEffect(() => {
    if (!cart) {
      localStorage.setItem("cart", JSON.stringify([]));
      setCart([]);
    } else {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  useEffect(() => {
    const items = localStorage.getItem("cart");
    if (items) {
      setCart(JSON.parse(items));
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        removeFromCart,
        cleanCart,
        getCartTotal,
        decreaseQuantity,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
};

export { CartProvider, useCartContext };
