class Product {
  constructor(title, price, description, image) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.image = image;
  }
}

const products = [];

fetch("https://fakestoreapi.com/products?limit=20")
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < 20; i++) {
      const { title, price, description, image } = data[i];
      const product = new Product(title, price, description, image);
      products.push(product);
    }

    const main = document.querySelector("main");
    const cards = products.map(
      (product) => `
        <div class="card">
          <img src="${product.image}" alt="${product.title}">
          <h2>${product.title}</h2>
          <p>${product.description}</p>
          <span>${product.price}</span>
        </div>
      `
    );

    main.innerHTML = cards.join("");
  })
  .catch((error) => console.error(error));
