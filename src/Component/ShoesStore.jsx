import React, { Component } from 'react'
import Modal from './Modal'
import products from './data.json'
import ProductList from './ProductList'

export default class ShoesStore extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       productDetail: null,
    }
  }

  setStateModal = (productDetail) => {
    console.log(productDetail);
    this.setState({productDetail});
  }
  render() {
    return (
      <div className='container'>
        <h1 className='text-center'>Shoes shop</h1>
          <ProductList productsData={products} setStateModal={this.setStateModal}/>
          <Modal content={this.state.productDetail}/>
      </div>
    )
  }
}
