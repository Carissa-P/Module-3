// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		
//Reference: Prof:https://github.com/carolinebarriere/carolinebarriere.github.io/tree/master/SEG3125-Module2-Grocery

var products = [
	{
		name: "Broccoli",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 1.99,
    type: "veg",
	},
	{
		name: "Bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 2.35,
    type: "pack", 
	},
	{
		name: "Salmon",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 10.00,
    type: "meat",
	},
	
		{
		name: "Sushi",
		vegetarian: false,
		glutenFree: false,
		organic: false,
		price: 12.99,
    type: "meat",
	},
	
		{
		name: "Organic Honey",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 5.65,
    type: "pack", 
	},
		{
		name: "Cookies",
		vegetarian: true,
		glutenFree: false,
		price: 3.65,
    type: "pack", 
	},
		{
		name: "Asparagus",
		vegetarian: true,
		glutenFree: true,
		price: 2.99,
    type: "veg",
	},
	
		{
		name: "Organic Quinoa",
		vegetarian: true,
		glutenFree: false,
		organic: true,
		price: 6.99,
    type: "pack", 
	},
	{
		name: "Organic Strawberries",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 3.99,
    type: "veg",
	},
	{
		name: "Chicken",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 10.00,
    type: "meat",
	},
	{
		name: "Spinach",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 3.50,
    type: "veg",
	},
	{
		name: "Spaghetti",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 1.99,
    type: "pack", 
    
	},
  	{
		name: "Hamburgers",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 12.70,
    type: "meat",
	},
	{
		name: "Sunflower Seeds",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 4.75,
    type: "pack", 
	}

];

// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restrictions) {
  prods.sort(compare);

  let product_names = [];

  for (let i = 0; i < prods.length; i += 1) {
     if(restrictions.includes("None")){
      product_names.push(prods[i]);
    }

    else if((restrictions.includes("Vegetarian"))&&(!restrictions.includes("GlutenFree"))&&(!restrictions.includes("Organic"))&&(prods[i].vegetarian == true)){
      
      product_names.push(prods[i]);
    }

    else if((!restrictions.includes("Vegetarian"))&&(restrictions.includes("GlutenFree"))&&(!restrictions.includes("Organic"))&&(prods[i].glutenFree == true)){
      product_names.push(prods[i]);
    }

    else if((!restrictions.includes("Vegetarian"))&&(!restrictions.includes("GlutenFree"))&&(restrictions.includes("Organic"))&&(prods[i].organic == true)){
      product_names.push(prods[i]);
    }

    else if((restrictions.includes("Vegetarian"))&&(restrictions.includes("GlutenFree"))&&(!restrictions.includes("Organic"))&&(prods[i].vegetarian == true)&&(prods[i].glutenFree == true)){
      product_names.push(prods[i]);
    }

    else if((restrictions.includes("Vegetarian"))&&(!restrictions.includes("GlutenFree"))&&(restrictions.includes("Organic"))&&(prods[i].vegetarian == true)&&(prods[i].organic == true)){
      product_names.push(prods[i]);
    }

     else if((!restrictions.includes("Vegetarian"))&&(restrictions.includes("GlutenFree"))&&(restrictions.includes("Organic"))&&(prods[i].organic == true)&&(prods[i].glutenFree == true)){
      product_names.push(prods[i]);
    }

    else if((restrictions.includes("Vegetarian"))&&(restrictions.includes("GlutenFree"))&&(restrictions.includes("Organic"))&&(prods[i].vegetarian == true)&&(prods[i].glutenFree == true)&&(prods[i].organic == true)){
      product_names.push(prods[i]);
    }

  }
  return product_names;
  
}

function restrictListProducts2(prods, restriction) {
	let product_names2 = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Produce") && (prods[i].type == "veg")){
			product_names2.push(prods[i]);
		}
		else if ((restriction == "Meat") && (prods[i].type == "meat")){
			product_names2.push(prods[i]);
		}
		else if ((restriction == "Packaged Food") && (prods[i].type == "pack")){
			product_names2.push(prods[i]);
		}
    else if (restriction == "All"){
			product_names2.push(prods[i]);
		}
	}
	return product_names2;
}

// Sort the items by price - Reference https://www.sitepoint.com/sort-an-array-of-objects-in-javascript/

function compare(a, b) {
  if (a.price < b.price) return -1;
  if (a.price > b.price) return 1;
  
  return 0;
}

// Calculate the total price of items, with received parameter being a list of products

function getTotalPrice(chosenProducts) {

  totalPrice = 0;
  for (let i = 0; i < products.length; i += 1) {
    if (chosenProducts.indexOf(products[i].name + " - $" + products[i].price) > -1) {
      totalPrice += products[i].price;
    }
  }
  return totalPrice.toFixed(2);
}
