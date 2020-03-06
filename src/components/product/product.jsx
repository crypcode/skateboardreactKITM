import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Product extends Component{
    constructor(props) {
        super(props);
        this.state = {product: {}};
    }

    componentDidMount() {
        fetch(`http://skateboard.test/api/product/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(
                data=>{
                    this.setState({
                        product: data
                    })
                }
            )
    }
    render(){
        const itemoid = localStorage.setItem('id', this.state.product.itemId);
        return(
            <div className = "container">
                <div className="col-lg-6 portfolio-item">
                    <div className="card h-100">
                        <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""/></a>
                        <div className="card-body">
                            <h4 className="card-title">
                                <a href="#">{this.state.product.title}</a> <br/>
                                <a href="#">{this.state.product.description}</a> <br/>
                                <a href="#">{this.state.product.price}</a> <br/>
                            </h4>
                            <br/>
                            <Link to="/orders" className="btn btn-success">Uzsakyti</Link>
                        </div>
                    </div>
                </div>
            </div>
        );

    }

}
export default Product;