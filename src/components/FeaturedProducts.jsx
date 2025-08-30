import React from 'react';
import './FeaturedProducts.css';

// Import featured product images
import auroChoco from '../assets/images/productsImages/Auro Series/Auro Choco Butterscotch- P180.jpg';
import matchaLatte from '../assets/images/productsImages/Matcha Series/Matcha Latte - P150.jpg';
import caramelMacchiato from '../assets/images/productsImages/Espresso Based/Caramel Macchiato (Iced) - P155.jpg';
import milkyCaramel from '../assets/images/productsImages/Milk Based/Milky Caramel - P145.jpg';
import blueberryCheesecake from '../assets/images/productsImages/Pastries/Blueberry Cheesecake - P152.jpeg';
import chickenPesto from '../assets/images/productsImages/Pasta/Chicken Pesto Pasta - P190.jpeg';

const FeaturedProducts = () => {
    const featuredProducts = [
        {
            id: 1,
            name: 'Auro Choco Butterscotch',
            price: '₱180',
            image: auroChoco,
            category: 'Auro Series'
        },
        {
            id: 2,
            name: 'Matcha Latte',
            price: '₱150',
            image: matchaLatte,
            category: 'Matcha Series'
        },
        {
            id: 3,
            name: 'Caramel Macchiato',
            price: '₱155',
            image: caramelMacchiato,
            category: 'Espresso Based'
        },
        {
            id: 4,
            name: 'Milky Caramel',
            price: '₱145',
            image: milkyCaramel,
            category: 'Milk Based'
        },
        {
            id: 5,
            name: 'Blueberry Cheesecake',
            price: '₱152',
            image: blueberryCheesecake,
            category: 'Pastries'
        },
        {
            id: 6,
            name: 'Chicken Pesto Pasta',
            price: '₱190',
            image: chickenPesto,
            category: 'Pasta'
        }
    ];

    return (
        <section className="featured-products">
            <div className="container mx-auto px-4">
                <h2 className="section-title">Featured Products</h2>
                <p className="section-subtitle">Try our customer favorites</p>
                
                <div className="products-grid">
                    {featuredProducts.map((product) => (
                        <div key={product.id} className="product-card">
                            <div className="product-image">
                                <img src={product.image} alt={product.name} />
                            </div>
                            <div className="product-info">
                                <span className="product-category">{product.category}</span>
                                <h3 className="product-name">{product.name}</h3>
                                <p className="product-price">{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
