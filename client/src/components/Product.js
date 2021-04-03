import Rating from './Rating';

export default function Product({ product }){
    return (
    <div key={product._id}>
        <a href={`/product/${product._id}`}>
            <img
                src={product.image}
                alt={product.name}
            />
        </a>
        <div>
            <a href={`/product/${product._id}`}>
                <h2>{product.name}</h2>
            </a>
            <Rating 
                rating={product.rating} 
                numReviews={product.numReviews}
            />
            </div>
            <div>${product.price}</div>
        </div>
    )
}

