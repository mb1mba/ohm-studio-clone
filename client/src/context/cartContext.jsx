import { xor } from "lodash";
import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
  );

  const addToCart = (item) => {
    const isItemInCart = cart.find(
      (cartItem) => item._id === cartItem.id || item.id === cartItem.id
    );

    if (isItemInCart) {
      setCart((prevCart) =>
        prevCart.map((element) =>
          item._id === element.id || item.id === element.id
            ? { ...element, quantity: element.quantity + 1 }
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
          productId: item._id,
          quantity: 1,
        },
      ]);
    }
  };

  const removeFromCart = (item) => {
    setCart((prevCart) => {
      prevCart.filter((cartItem) => cartItem.id !== item._id);
    });
  };

  const decreaseQuantity = (item) => {
    console.log(cart);
    setCart((prevCart) =>
      prevCart.map((cartItem) => {
        if (cartItem.id === item.id) {
          if (item.quantity) {
            return { ...item, quantity: item.quantity - 1 };
          } else if (item.quantity === 0) {
            removeFromCart(item);
          }
        }
      })
    );
  };

  const cleanCart = () => {
    setCart([]);
  };

  const getCartTotal = () => {
    return cart.reduce(
      (total, item) => total + item?.price * item?.quantity,
      0
    );
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const items = localStorage.getItem("cart");
    if (items) {
      setCart(JSON.parse(items));
      console.log(cart);
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
