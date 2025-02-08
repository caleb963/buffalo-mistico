import "../styles/ProductCard.css";

function ProductCard({ name, description, price, imageUrl }) {
    return (
        <div className="product-card">
            <img src={imageUrl} alt={name} className="product-card__image" />
            <h3 className="product-card__title">{name}</h3>
            <p className="product-card__description">{description}</p>
            <p  className="product-card__price">${price}</p>
        </div>
    );
}

export default ProductCard;