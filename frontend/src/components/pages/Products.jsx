import "../../styles/Products.css";
import ProductCard from "../ProductCard";

const products = {
    inciensos: [
        { name: "Mystic Moon", description: "Aroma de lavanda y vainilla.", price: 100, imageUrl:"/assets/bajali__mystic-moon.png"},
        { name: "oudh", description: "Aroma de madera de oudh.", price: 150, imageUrl:"/assets/balaji__oudh.png"},
        { name: "WoodSpice", description: "Aroma de madera y especias.", price: 120, imageUrl:"/assets/Nandita__woodspice.png"},
        { name: "Padmini", description: "Aroma de sándalo.", price: 80, imageUrl:"/assets/Padmini.png"},
        { name: "Maharani Dream", description:"", price: 100, imageUrl:"/assets/talesOfIndia__maharani-Dream.png"},
        { name: "Mystic Temple", description:"", price: 100, imageUrl:"/assets/talesOfIndia__mystic-temple.png"},
        { name: "Dragon Blodd", description:"", price: 100, imageUrl:"/assets/satya__dragonBlood.png"},
        { name: "NagChampa", description: "", price: 100, imageUrl: "/assets/satya"},
        { name: "Palo Santo", description:"", price: 100, imageUrl:"/assets/satya__paloSanto.png"},
        { name: "Patchouli", description:"", price: 100, imageUrl:"/assets/satya__patchouli.png"},
        { name: "Sandalwood", description:"", price: 100, imageUrl:"/assets/satya__sandalwood.png"},
        { name: "cedarwood", description:"", price: 100, imageUrl:"/assets/morningStar__cedarwood.png"},
        { name: "Frankincense", description:"", price: 100, imageUrl:"/assets/morningStar__frankincense.png"},
        { name: "greenTea", description: "", price: 100, imageUrl:"/assets/morningStar__greenTea.png"},
        { name: "jasmine", description:"", price: 100, imageUrl:"/assets/morningStar__jasmine.png"},
        { name: "Rose", description:"", price: 100, imageUrl:"/assets/morningStar__rose.png"},
        { name: "Sandalwood", description:"", price: 100, imageUrl:"/assets/morningStar__sandalwood.png"},
        { name: "vainilla", description:"", price: 100, imageUrl:"/assets/morningStar__vainilla.png"},
        { name: "Musk", description:"", price: 100, imageUrl:"/assets/morningStar__musk.png"},
    ],
    clothing: [
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
    instruments: [
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