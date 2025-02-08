import "../../styles/Products.css";
import ProductCard from "../ProductCard";

const products = [
    { name: "Hoodie", description: "Comfortable and stylish.", price: 500, imageUrl:""},
    { name: "Shirt", description: "Inspired by pre-Hispanic art.",price: 300, imageUrl:""},
    { name: "Cap", description: "Unique and fashionable.", price: 350, imageUrl:""},
    { name: "Accessory", description: "The perfect complement.", price: 250, imageUrl:""}
];

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