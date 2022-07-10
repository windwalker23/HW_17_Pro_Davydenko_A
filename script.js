let kitchenProducts = [
	{
		type: 'grater',
		price: 10
	},
	{
		type: 'pastry-bag',
		price: 25
	},
	{
		type: 'scale',
		price: 5
	},
	{
		type: 'whisk',
		price: 15
	}
];

let devicesProducts = [
	{
		type: 'desktop',
		price: [100,1000]
	},
	{
		type: 'laptop',
		price: [50,1500]
	},
	{
		type: 'smartphone',
		price: [80,2000]
	},
	{
		type: 'tablet',
		price: [20,1300]
	}
];

let cosmeticsProducts = [
	{
		type: 'blush',
		price: 100
	},
	{
		type: 'eyeshadow',
		price: 50
	},
	{
		type: 'lipstick',
		price: 80
	},
	{
		type: 'nail-polish',
		price: 200
	},
	{
		type: 'perfume',
		price: 300,
	}
];

function Product(category, type, price) {
    this.category = category;
    this.type = type;
    this.price = price;
}

Product.prototype.render = function() {
    return `<tr>
                <td><img src="images/${this.category}/${this.type}.svg" alt="${this.type}" width="50" height="50"></td>
                <td>${this.type}</td>
                <td>${this.price}$</td>
            </tr>`
}

let products = [];

kitchenProducts.map(
    function(product) {
        return new Product(`kitchen`, product.type, product.price);
    }
)
.map(
    function(product) {
        products.push(product.render());
    }
)

devicesProducts.map(
    function(product) {
        return new Product(`devices`, product.type, product.price);
    }
)
.map(
    function(product) {
        product.price = product.price.join(" - ");
        products.push(product.render());
    }
)

cosmeticsProducts.map(
    function(product) {
        return new Product(`cosmetics`, product.type, product.price);
    }
)
.map(
    function(product) {
        products.push(product.render());
    }
)

document.write(`
    <table class="table">
        <thead>
            <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            ${products.join("")}
        </tbody>
    </table>
`)