import React, {Component} from "react";

class Orders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buyerName: '', buyerSurname: '', buyerAddress: '', itemId: '',
            productQuantity: '', orderSum: ''
        };

        this.handleName = this.handleName.bind(this);
        this.handleSurname = this.handleSurname.bind(this);
        this.handleAddress = this.handleAddress.bind(this);
        this.handleitemId = this.handleitemId.bind(this);
        this.handleQuantity = this.handleQuantity.bind(this);
        this.handleOrderSum = this.handleOrderSum.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleName(event) {
        this.setState({buyerName: event.target.value});
    }

    handleSurname(event) {
        this.setState({buyerSurname: event.target.value});
    }

    handleAddress(event) {
        this.setState({buyerAddress: event.target.value});
    }

    handleitemId(event) {
        this.setState({itemId: event.target.value});
    }

    handleQuantity(event) {
        this.setState({productQuantity: event.target.value});
    }

    handleOrderSum(event) {
        this.setState({orderSum: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch("http://skateboard.test/api/storeorders", {
            method: "POST",
            headers: {
                Accept: "application/json", "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state),
        })

            .then(response => response.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));
    }

    render() {
        return (
            <div className="row justify-content-center">
                <div className="col-md-7 mb-5">

                    <h3 className="mb-4 text-black">Pateikite užsakymą</h3>

                    <form onSubmit={this.handleSubmit}>

                        <div className="row form-group">
                            <div className="col-md-12">
                                <label className="text-black" htmlFor="title">Vardas</label>
                                <input type="text" id="title" value={this.state.buyerName} onChange={this.handleName} name="title" className="form-control"/>
                            </div>
                        </div>

                        <div className="row form-group">
                            <div className="col-md-12">
                                <label className="text-black" htmlFor="title">Pavarde</label>
                                <input type="text" id="title" value={this.state.buyerSurname} onChange={this.handleSurname} name="title" className="form-control"/>
                            </div>
                        </div>


                        <div className="row form-group">
                            <div className="col-md-12">
                                <label className="text-black" htmlFor="title">Adresas</label>
                                <input type="text" id="title" value={this.state.buyerAddress} onChange={this.handleAddress} name="title" className="form-control"/>
                            </div>
                        </div>

                        <div className="row form-group">
                            <div className="col-md-12">
                                <label className="text-black" htmlFor="title">Produkto id</label>
                                <input type="text" id="title" value={this.state.itemId} onChange={this.handleitemId} name="title" className="form-control"/>
                            </div>
                        </div>

                        <div className="row form-group">
                            <div className="col-md-12">
                                <label className="text-black" htmlFor="title">Kiekis</label>
                                <input type="text" id="title" value={this.state.productQuantity} onChange={this.handleQuantity} name="title" className="form-control"/>
                            </div>
                        </div>

                        <div className="row form-group">
                            <div className="col-md-12">
                                <label className="text-black" htmlFor="title">Suma</label>
                                <input type="text" id="title" value={this.state.orderSum} onChange={this.handleOrderSum} name="title" className="form-control"/>
                            </div>
                        </div>


                        <div className="row form-group">
                            <div className="col-md-12">
                                <input type="submit" value="Pridėti" className="btn btn-primary py-2 px-4 text-white"/>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        );
    }
}

export default Orders;