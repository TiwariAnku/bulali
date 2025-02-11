import React from "react";
import "./ProductCard.css";

function ProductCard() {
  const products = [
    {
      imageUrl: "https://cdn.shopify.com/s/files/1/0875/9489/3657/files/nutcracker-pillowcase-spun-polyester-square-pillowcase-christmas-mandala-art-original-fine-art-hand-drawn-981798.jpg?v=1724011538",
      title: "Handmade Mandala Design T-Shirt - 100% Cotton",
      price: "32.36",
    },
    
    {
      imageUrl: "https://blululi.com/cdn/shop/files/colorful-mandala-flip-flops-yoga-meditation-shoes-369423_600x600.jpg?v=1729276744",
      title: "Handmade Mandala Art Ivory Square Tablecloth",
      price: "25.95",
      
    },
    {
      imageUrl:"//blululi.com/cdn/shop/files/high-waisted-mandala-art-yoga-pants-pale-lavender-all-over-prints-982135_600x600.jpg?v=1728127165" 
      ,title: "Handmade Mandala Skinny Tumbler - Keeps Drinks Hot/Cold",
      price: "26.18",
      
    },
    {
        imageUrl: "https://cdn.shopify.com/s/files/1/0875/9489/3657/files/nutcracker-pillowcase-spun-polyester-square-pillowcase-christmas-mandala-art-original-fine-art-hand-drawn-981798.jpg?v=1724011538",
      title: "Mandala Design T-Shirt - 100% Cotton",
      price: "32.36",
    },
    {
        imageUrl: "https://cdn.shopify.com/s/files/1/0875/9489/3657/files/nutcracker-pillowcase-spun-polyester-square-pillowcase-christmas-mandala-art-original-fine-art-hand-drawn-981798.jpg?v=1724011538",
      title: "Mandala Ivory Square Tablecloth",
      price: "25.95",
    },
  ];

  return (
    <div style={{ textAlign: "center", padding: "" }}>
      <div className="product-card-container">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.imageUrl} alt={product.title} className="product-image" />
            <div className="product-content">
              <h3 className="product-title">{product.title}</h3>
              <p className="product-price">{product.price} USD</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCard;