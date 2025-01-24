import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
const ShoppingCart = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Product Name",
      price: 25.0,
      quantity: 1,
      image: "https://via.placeholder.com/80",
    },
    {
      id: 2,
      name: "Another Product",
      price: 15.0,
      quantity: 2,
      image: "https://via.placeholder.com/80",
    },
  ]);

  const handleQuantityChange = (id, delta) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-gray-100 py-10 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          Your Shopping Cart
        </h1>

        {/* Table Header */}
        <div className="hidden md:grid grid-cols-3 justify-center items-center  text-gray-700 font-semibold mb-4">
          <div>Product</div>
          <div className="text-center">Quantity</div>
          <div className="text-right">Price</div>
        </div>

        {/* Product List */}
        <div className="space-y-4">
          {cart.map((product) => (
            <div
              key={product.id}
              className="grid grid-cols-5 md:grid-cols-3 items-center justify-between bg-gray-50 p-4 rounded-md shadow-sm"
            >
              <div className="flex col-span-3 md:col-span-1 items-center gap-2">
                <IoMdClose color="#FF0000" className="cursor-pointer" onClick={()=>{
                  handleRemove(product.id)}} />
                <div className="flex justify-center items-center gap-2">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div>
                    <h2 className="text-lg font-semibold text-gray-700">
                      {product.name}
                    </h2>
                    <p className="text-gray-500">${product.price.toFixed(2)}</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-1">
                <button
                  onClick={() => handleQuantityChange(product.id, -1)}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-2 py-1 rounded-md"
                >
                  -
                </button>
                <span className="text-gray-700">{product.quantity}</span>
                <button
                  onClick={() => handleQuantityChange(product.id, 1)}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-2 py-1 rounded-md"
                >
                  +
                </button>
              </div>
              <div className="flex items-center justify-end">
                <p className="text-gray-700">
                  ${(product.price * product.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Cart Summary */}
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="mt-6 pt-4">
            <input
              type="text"
              className="p-2 focus:outline-gray-200"
              placeholder="Voucher Code"
            />
            <button className="bg-sky-600 text-white font-semibold p-2 rounded ml-2">
              Redeem
            </button>
          </div>
          <div className="mt-6 border-t pt-4">
            <div className="flex flex-col justify-between text-gray-700 gap-2 px-4">
              <div className="flex justify-between space-x-5">
                <span>SubTotal:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping Fee:</span>
                <span>$0</span>
              </div>
              <div className="flex justify-between">
                <span>Voucher:</span>
                <span>No</span>
              </div>
              <div className="flex font-semibold justify-between">
                <span>Total:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
            </div>
            <button className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md font-semibold">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
