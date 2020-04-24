import React from 'react';
import axios from 'axios';
import './Modal.scss';

export default class Modal extends React.Component {

    state = {
        title: null,
        image: null,
        price: null,
        type: 'Normal',
        location: null
    }

    setValue = (property, value) => {
        this.setState({
            [property]: value
        })
    }

    addNewHotel = () => {
        const body = {
            title: this.state.title,
            image: this.state.image,
            price: this.state.price,
            type: this.state.type,
            location: this.state.location
        }
        axios.post('https://nodejs-mysql-it-academy.herokuapp.com/add-hotel', body).then(res => {
            console.log(res.data)
        }).catch(error => {
            console.log(error)
        })
    }

    render() {
        return (
            <div className="add-container">
                {this.state.title}
                <form>
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Title"
                        onChange={
                            (event) => {
                                this.setValue('title', event.target.value)
                            }
                        } />
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Image"
                        onChange={
                            (event) => {
                                this.setValue('image', event.target.value)
                            }
                        } />
                    <div className="price-one-row">
                        <input className="form-control"
                            type="text"
                            placeholder="Price"
                            onChange={
                                (event) => {
                                    this.setValue('price', event.target.value)
                                }
                            } />
                        <select className="form-control" onChange={
                            (event) => {
                                this.setValue('type', event.target.value)
                            }
                        }>
                            <option>Normal</option>
                            <option>Plus</option>
                            <option>Premium</option>
                        </select>
                    </div>
                    <input className="form-control"
                        type="text"
                        placeholder="Location"
                        onChange={(event) => {
                            this.setValue('location', event.target.value)
                        }
                        } />
                    <div className="buttons">
                        <input className="add-hotel-button"
                            type="button"
                            value="Add hotel"
                            onClick={this.addNewHotel} />
                        <button className="closebutton"
                            onClick={this.props.onClose}>
                            Close form
                        </button>
                        {this.props.children}
                    </div>
                </form>
            </div>
        )
    }
}