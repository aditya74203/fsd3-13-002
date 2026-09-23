import http from 'http';
import { reviews } from './data.js';

const server = http.createServer((req, res) => {

    const items = [
        {
            id: 1,
            name: "Smart Water Bottle",
            price: 1299,
            image: "https://example.com/images/water-bottle.jpg",
            desc: "A smart bottle that helps you track your daily water intake."
        },
        {
            id: 2,
            name: "Wireless Headphones",
            price: 2499,
            image: "https://example.com/images/headphones.jpg",
            desc: "Comfortable wireless headphones with clear sound and long battery life."
        },
        {
            id: 3,
            name: "Running Shoes",
            price: 1999,
            image: "https://example.com/images/running-shoes.jpg",
            desc: "Lightweight running shoes designed for comfort and daily workouts."
        },
        {
            id: 4,
            name: "Smart Watch",
            price: 3499,
            image: "https://example.com/images/smart-watch.jpg",
            desc: "A stylish smartwatch with fitness tracking and notification features."
        },
        {
            id: 5,
            name: "Laptop Backpack",
            price: 1499,
            image: "https://example.com/images/backpack.jpg",
            desc: "Durable backpack with a dedicated laptop compartment and multiple pockets."
        },
        {
            id: 6,
            name: "Bluetooth Speaker",
            price: 1799,
            image: "https://example.com/images/speaker.jpg",
            desc: "Portable Bluetooth speaker with powerful audio and compact design."
        },
        {
            id: 7,
            name: "Mechanical Keyboard",
            price: 2999,
            image: "https://example.com/images/keyboard.jpg",
            desc: "Responsive mechanical keyboard suitable for gaming and programming."
        },
        {
            id: 8,
            name: "Gaming Mouse",
            price: 999,
            image: "https://example.com/images/gaming-mouse.jpg",
            desc: "Ergonomic gaming mouse with adjustable sensitivity and precise tracking."
        },
        {
            id: 9,
            name: "Coffee Mug",
            price: 499,
            image: "https://example.com/images/coffee-mug.jpg",
            desc: "Simple and durable ceramic mug for coffee, tea, and other beverages."
        },
        {
            id: 10,
            name: "Desk Lamp",
            price: 899,
            image: "https://example.com/images/desk-lamp.jpg",
            desc: "Modern LED desk lamp with adjustable brightness for study and work."
        }
    ];

    if (req.url === '/api/products') {

        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(items));

    } 
    
    else if (req.url === '/api/reviews') {

        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(reviews));

    }
    
    else {

        res.statusCode = 404;
        res.end("Page not found");

    }
});

server.listen(3000, () => {
    console.log('prg4 is running');
});