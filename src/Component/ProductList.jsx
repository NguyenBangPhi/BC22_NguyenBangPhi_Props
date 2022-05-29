import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {

  render() {
      const {productsData,setStateModal} = this.props;
      
    return (
        <div className="row">
            {productsData.map((product) => {
                return (
                    <ProductItem key={product.id} item={product} setStateModal={this.props.setStateModal} />
                )
            })}
        </div>
    )
  }
}






















// import React from 'react'
// import ProductItem from './ProductItem'

// export default function ProductList({productsData,setStateModel}) {

//     const setStateModal = (item) => {
//         setStateModal(item);
//     }

//   return (
//       <div className="row">
//           {productsData.map((product) => {
//               return (
//                   <ProductItem key={product.id} items={product} setStateModel={this.props.setStateModel}/>
//               )
//           })}
//       </div>
    
//   )
// }
