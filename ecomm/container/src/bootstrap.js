import { mount as productsMount } from "products/ProductsIndex";
import { mount as cartMount } from "cart/CartShow";

console.log("CONTAINER");

productsMount(document.querySelector("#products-container"));
cartMount(document.querySelector("#cart-container"));
