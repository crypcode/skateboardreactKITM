import React from 'react';
import{
    Link
} from "react-router-dom";

function Products(props) {
    const products = props.products.map(product => {
        const link = `/product/${product.id}`;
        return(
            <div className="col-lg-6 portfolio-item">
                <div className="card h-100">
                    <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""/></a>
                    <div className="card-body">
                        <h4 className="card-title">
                            <a href="#">{product.title}</a><br/>
                            <a href="#">{product.description}</a><br/>
                            <a href="#">{product.price}</a><br/>
                        </h4>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                            viverra euismod odio, gravida pellentesque urna varius vitae.</p>
                        <Link to={link} class="btn btn-secondary">Apie produkta</Link>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div className="container">

            <div className="row">
                {products}
            </div>
        </div>

    );
}

export default Products;