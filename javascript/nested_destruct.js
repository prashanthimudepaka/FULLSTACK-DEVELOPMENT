const order = {
    orderId: "ORD12345",
    customer: {
        name: "Alice Johnson",
        email: "alice@example.com",
        address: {
            city: "New York",
            zip: "10001"
        }
    },
    items: [
        {
            name: "Laptop",
            price: 1200,
            category: "Electronics",
            manufacturer: {
                name: "TechCorp",
                country: "USA"
            }
        },
        {
            name: "Headphones",
            price: 200,
            category: "Accessories",
            manufacturer: {
                name: "SoundPro",
                country: "Germany"
            }
        }
    ],
    totalPrice: 1400
};

// ✅ Nested Destructuring
const {
    orderId,
    customer: { name: customerName, email, address: { city } },  // Nested Object Destructuring
    items: [  // Nested Array Destructuring
        { name: firstItemName, price: firstItemPrice, manufacturer: { name: firstManufacturer } }, 
        { name: secondItemName, price: secondItemPrice }
    ],
    totalPrice
} = order;

console.log(`Order ID: ${orderId}`);
console.log(`Customer: ${customerName} (${email}), City: ${city}`);
console.log(`Total Price: $${totalPrice}`);

console.log(`1st Item: ${firstItemName}, Price: $${firstItemPrice}, Manufacturer: ${firstManufacturer}`);
console.log(`2nd Item: ${secondItemName}, Price: $${secondItemPrice}`);
