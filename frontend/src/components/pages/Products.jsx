import React from "react";
import { useState } from "react";
import "../../styles/Products.css";
import ProductCard from "../ProductCard";

const products = {
    inciensos: [
        { name: "Mystic Moon", description: "Aroma relajante y calmante ideal para crear un ambiente de claridad y bienestar.su fragancia es una mezcla de notas florales", price: 80, imageUrl:"/assets/bajali__mystic-moon.png"},
        { name: "oudh", description: "Aroma calido,amaderado y ligeramente dulce es elaborado con madera de oudh una resina muy fragante que se produce en el arbol de aquilaria", price: 80, imageUrl:"/assets/balaji__oudh.png"},
        { name: "WoodSpice", description: "Esta fragancia esta inspirada en la calidez y el misterio de los bosques, con un toque de especias exoticas.", price: 80, imageUrl:"/assets/Nandita__woodspice.png"},
        { name: "Padmini Dhop Sticks", description: "Se caracteriza por su aroma intenso y duradero, estan hechos de ingredientes naturales como hierbas, resinas,especias y aceites esenciales", price: 50, imageUrl:"/assets/Padmini.png"},
        { name: "Maharani Dream", description:"Es conocido por su aroma dulce y floral con notas de nardo y jasmin, se dice que tiene propiedades relajante sy estimunlantes, es ideal pra crear un ambiente romantico", price: 80, imageUrl:"/assets/talesOfIndia__maharani-Dream.png"},
        { name: "Mystic Temple", description:"Tiene un aroma intenso y relajante a madera de sandalo, rosas y calendulas, ideal para crear un ambiente de relajacion y tranquilidad", price: 100, imageUrl:"/assets/talesOfIndia__mystic-temple.png"},
        { name: "Dragon Blood", description:"Aroma de resina del arbol utilizada desde la antigueda en diversas culturas por sus propiedades misticas y medicinales", price: 50, imageUrl:"/assets/satya__dragonBlood.png"},
        { name: "NagChampa", description: "Es una fragancia de la inda por sue aroma dulce , flora y ligeramente especiado", price: 50, imageUrl: "/assets/satya__nagChampa.png"},
        { name: "Palo Santo", description:"Se utiliza comunmente en practicas espirituales, aromaterapia y para limpiar energias negativas", price: 50, imageUrl:"/assets/satya__paloSanto.png"},
        { name: "Patchouli", description:"Es un tipo de incienso popular conocido por su aroma terrozo, dulce y almizclado", price: 50, imageUrl:"/assets/satya__patchoulli.png"},
        { name: "Sandalwood", description:"Su aroma es calido, dulce y amaderado, para aromaterapia", price: 50, imageUrl:"/assets/satya__sandalwood.png"},
        { name: "cedarwood", description:"aroma a madera de cedro, sin varilla de bambu esto permite que el aroma no se mezcle con el aroma de madera quemada", price: 100, imageUrl:"/assets/morningStar__cedarwood.png"},
        { name: "Frankincense", description:"aroma a resina de arbol de incienso ,sin varilla de bambu esto permite que el aroma no se mezcle con el aroma de madera quemada", price: 100, imageUrl:"/assets/morningStar__frankincense.png"},
        { name: "greenTea", description: "aroma herbaceo, sin varilla de bambu esto permite que el aroma no se mezcle con el aroma de madera quemada", price: 100, imageUrl:"/assets/morningStar__greenTea.png"},
        { name: "jasmine", description:"aroma floral, sin varilla de bambu esto permite que el aroma no se mezcle con el aroma de madera quemada", price: 100, imageUrl:"/assets/morningStar__jasmine.png"},
        { name: "Rose", description:"aroma floral, sin varilla de bambu esto permite que el aroma no se mezcle con el aroma de madera quemada", price: 100, imageUrl:"/assets/morningStar__rose.png"},
        { name: "Sandalwood", description:"aroma a madera de sandalo, sin varilla de bambu esto permite que el aroma no se mezcle con el aroma de madera quemada", price: 100, imageUrl:"/assets/morningStar__sandalwood.png"},
        { name: "vainilla", description:"aroma dulce ,sin varilla de bambu esto permite que el aroma no se mezcle con el aroma de madera quemada", price: 100, imageUrl:"/assets/morningStar__vainilla.png"},
        { name: "Musk", description:"aroma a resina de almizcle, sin varilla de bambu esto permite que el aroma no se mezcle con el aroma de madera quemada", price: 100, imageUrl:"/assets/morningStart__musk.png"},
    ],
    Ropa: [
    { name: "Hoodie", description: "Comfortable and stylish.", price: 500, imageUrl:""},
    { name: "Shirt", description: "Inspired by pre-Hispanic art.",price: 300, imageUrl:""},
    { name: "Cap", description: "Unique and fashionable.", price: 350, imageUrl:""},
    { name: "camisas de mujer bordadas", description: "camisas bordadas a mano", price: 500, imageUrl:''},
    ],
    Bolsas: [
        { name: "morral mediano", description: "tejido a mano", price: 750, imageUrl:''},
        { name: "morral grande", description: "tejido a mano", price: 900, imageUrl:''},
        { name: "sobre", description: "tejido a mano", price: 500, imageUrl:''},
        { name: "cartera para hombre", description: "cartera con bordado", price: 500, imageUrl:''},
        { name: "cartera para mujer", description: "cartera con bordado", price: 500, imageUrl:''}
    ],
    instrumentos: [
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
    const [activeCategory, setActiveCategory] = useState("inciensos");

    return (
        <section className="products">
            <h2 className="products__title">Nuestros Productos</h2>
            <div className="products__tabs">
               {Object.keys(products).map((category) => (
                   <button 
                       key={category}
                       className={`products__tab ${activeCategory === category ? "active" : ""}`}
                          onClick={() => setActiveCategory(category)}
                   >
                          {category.charAt(0).toUpperCase() + category.slice(1)}
                   </button>
               ))}
        </div>
        <div className="products__grid">
            {products[activeCategory].map((product, index) => (
                <ProductCard key={index} {...product} />
            ))}
        </div>
        </section>    
        );
}

export default Products;