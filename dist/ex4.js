"use strict";
/*
4. Objects
Exercise:
Define a TypeScript object book with the following properties:
title (string)
author (string)
price (number)
discount (optional, number)
Write a function calculateDiscountedPrice that takes the book object and a discount percentage, and calculates the discounted price. If no discount is provided, return the original price.
*/
const book = {
    title: "subtle art of not giving fuck",
    author: "Nitesh",
    price: 999,
    discount: 5
};
const calculateDiscountedPrice = (book) => {
    if (!book.discount)
        return book.price;
    const discountedPrice = book.price - (book?.discount / 100) * book.price;
    return discountedPrice;
};
console.log(calculateDiscountedPrice(book));
