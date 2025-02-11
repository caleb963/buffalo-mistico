import "../../styles/Products.css";
import ProductCard from "../ProductCard";

const products = {
    inciensos: [
        { name: "Mystic Moon", description: "Aroma de lavanda y vainilla.", price: 100, imageUrl:"./public/assets/bajali__mystic-moon.jpg"},
    ],
    Clothing: [
    { name: "Hoodie", description: "Comfortable and stylish.", price: 500, imageUrl:""},
    { name: "Shirt", description: "Inspired by pre-Hispanic art.",price: 300, imageUrl:""},
    { name: "Cap", description: "Unique and fashionable.", price: 350, imageUrl:""},
    { name: "camisas de mujer bordadas", description: "camisas bordadas a mano", price: 500, imageUrl:''},
    ],
    bags: [
        { name: "morral mediano", description: "tejido a mano", price: 750, imageUrl:''},
        { name: "morral grande", description: "tejido a mano", price: 900, imageUrl:''},
        { name: "sobre", description: "tejido a mano", price: 500, imageUrl:''},
        { name: "cartera para hombre", description: "cartera con bordado", price: 500, imageUrl:''},
        { name: "cartera para mujer", description: "cartera con bordado", price: 500, imageUrl:''}
    ],
    instrumets: [
        { name: "palo de lluvia", description: "20cm", price: 300, imageUrl:''},
        { name: "palo de lluvia", description: "30cm", price: 400, imageUrl:''},
        {name: "palo de lluvia", description: "40cm", price: 500, imageUrl:''},
        {name: "palo de lluvia", description: "50cm", price: 600, imageUrl:''},
        {name: "palo de lluvia", description: "60cm", price: 700, imageUrl:''},
        {name: "palo de lluvia", description: "1.5mts", price: 1000, imageUrl:''},
        {name: "palo de lluvia", description: "2mts", price: 1500, imageUrl:''},
        {name: "sonaja de ayoyote", description: "hecha a mano", price: 300, imageUrl:''},
        {name: "silvato de barro", description: "hecho a mano", price: 200, imageUrl:''},
        {name: "flauta de barro", description: "hecha a mano", price: 300, imageUrl:''},
        {name: "tambor", description: "35cm", price: 800, imageUrl:''},
        {name: "tambor", description: "40cm", price: 1000, imageUrl:''},
        {name: "tambor", description: "45cm", price: 1200, imageUrl:''},
    ],
   


};

function Products() {
    return (
        <section className="products">
            <h2 className="products">Our Products</h2>
            <div className="products__grid">
                {products.map((product, index) => (
                    <ProductCard key={index} {...product} />
                ))}
            </div>
        </section>    
        );
}

export default Products;