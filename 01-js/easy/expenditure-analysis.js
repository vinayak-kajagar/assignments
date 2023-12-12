/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  // Create an empty object to store category-wise total spending
  const categoryTotal = {};

  // Iterate through each transaction in the input list
  transactions.forEach(transaction => {
    // Extract category and price information from the transaction
    const { category, price } = transaction;

    // If the category is not present in the categoryTotal object, initialize it
    if (!categoryTotal[category]) {
      categoryTotal[category] = 0;
    }

    console.log(categoryTotal); // Output: { Food: 0 }

    // Add the transaction's price to the total for its category
    categoryTotal[category] += price;

    console.log(categoryTotal); // Output: { Food: 10 }
  });

  // Convert the categoryTotal object into an array of objects
  const result = Object.keys(categoryTotal).map(category => ({
    category: category,
    totalSpent: categoryTotal[category],
  }));

  // Return the final result
  return result;
}

module.exports = calculateTotalSpentByCategory;
