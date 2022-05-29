import React from 'react'

export default function Modal({content}) {
  return (
    <div className="row mt-5">
      <div className="col-sm-4">
        <h3 className='text-center'>{content.name}</h3>
        <img src={content.image} alt={content.name} width="100%" height="400px"/>
      </div>
      <div className="col-sm-8">
        <h3>Mô tả sản phẩm</h3>
        <table className='table'>
          <tbody>
            <tr>
              <td>Tên sản phẩm</td>
              <td>{content.name}</td>
              
            </tr>
            <tr>
              <td>Alias</td>
              <td>{content.alias}</td>
            </tr>
            <tr>
              <td>Giá</td>
              <td>{content.price}</td>
            </tr>
            <tr>
              <td>Mô tả</td>
              <td>{content.description}</td>
            </tr>
            <tr>
              <td>Mô tả ngắn</td>
              <td>{content.shortDescription}</td>
            </tr>
            <tr>
              <td>Số lượng</td>
              <td>{content.quantity}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
