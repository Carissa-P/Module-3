// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp



// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos
var globalArray = []
function populateListProductChoices(slct1, slct2) {
    var s1 = document.getElementById(slct1);
    var s2 = document.getElementById(slct2);
	
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";
		
	// obtain a reduced list of products based on restrictions
  
    var array = []
    var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')

    for (var i = 0; i < checkboxes.length; i++) {
    array.push(checkboxes[i].value)
   // add the product category to the array array.push(s1.value)

}
  var optionArray = restrictListProducts(products, array);
  globalArray = optionArray
    
}

function populateListProductChoices2(slct1, slct2){
    var s1 = document.getElementById(slct1);
    var s2 = document.getElementById(slct2);
     s2.innerHTML = "";

	// for each item in the array, create a checkbox element, each containing information such as:
  var optionArray2 = restrictListProducts2(globalArray,s1.value)
  


	for (i = 0; i < optionArray2.length; i++) {
    var productName = optionArray2[i].name + " - $" + optionArray2[i].price ;

		// create the checkbox and add in HTML DOM
		var checkbox = document.createElement("input");
    s2.appendChild(document.createElement("br"));  
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName;
		s2.appendChild(checkbox);
		
		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label') 
		label.htmlFor = productName;
		label.appendChild(document.createTextNode(productName));
		s2.appendChild(label);
		
		// create a breakline node and add in HTML DOM
		s2.appendChild(document.createElement("br"));    

        var img = document.createElement("IMG");
        img.setAttribute("src", "images/" + optionArray2[i].name + ".png")
        img.setAttribute("width", "100");
        img.setAttribute("height", "100");
        s2.appendChild(img);
        console.log(optionArray2[i].name)
	}
}
	
 
// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){
	
	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}
		
	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is " + getTotalPrice(chosenProducts)));
		
}
