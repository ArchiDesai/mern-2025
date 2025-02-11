import React from "react";

const Array5 = () => {
  const products = [
    {
      id: 1,
      name: "Men's Casual Shirt",
      price: 1200,
      discount: 15,
      category: "Fashion",
    },
    {
      id: 2,
      name: "Dell XPS 13 Laptop",
      price: 1200,
      discount: 5,
      category: "Computers",
    },
    {
      id: 3,
      name: "Instant Pot Duo 7-in-1",
      price: 100,
      discount: 70,
      category: "Home Appliances",
    },
    {
      id: 4,
      name: "Women's Designer Dress",
      price: 3500,
      discount: 20,
      category: "Fashion",
    },
    {
      id: 5,
      name: "Sony WH-1000XM5",
      price: 350,
      discount: 10,
      category: "Electronics",
    },
    {
      id: 6,
      name: "Adidas Ultraboost 22",
      price: 180,
      discount: 25,
      category: "Footwear",
    },
    {
      id: 7,
      name: "Canon EOS R5",
      price: 3900,
      discount: 55,
      category: "Cameras",
    },
    {
      id: 8,
      name: "Women's Handbag",
      price: 3200,
      discount: 22,
      category: "Fashion",
    },

    {
      id: 9,
      name: "Apple Watch Series 8",
      price: 400,
      discount: 12,
      category: "Wearable",
    },

    {
      id: 10,
      name: "Laptop Backpack",
      price: 2800,
      discount: 10,
      category: "Accessories",
    },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Products list</h1>
      <table className="table table-dark" style={{ backgroundColor: "black" }}>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Discount</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr>
                <td>{product.id}</td>
                <td
                  style={{ color: product.discount > 50 ? "green" : "white" }}
                >
                  {product.name}
                </td>
                <td>{product.price}</td>
                <td>{product.discount}%</td>
                <td
                  style={{
                    color: product.category === "Fashion" ? "red" : "white",
                  }}
                >
                  {product.category}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Array5;
