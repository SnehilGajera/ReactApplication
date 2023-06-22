import React,{useState} from 'react'

export default function AddItem(props) {

    const [productData,setProductData] = useState({
        productName : "",
        productPrice : 0
    })


  return (
    <form className='row' onSubmit={(e) => {
        e.preventDefault();
        props.addItem(productData.productName,Number(productData.productPrice))
        }}>
        <div className="mb-3 col-5">
          <label htmlFor="inputName" className="form-label">Product Name</label>
          <input type="text" className="form-control" id="inputName" name="productname" 
          onChange={(e) => {setProductData({productName : e.currentTarget.value})}}
          value={productData.productName}
          />
        </div>
        <div className="mb-3 col-5">
          <label htmlFor="inputPrice" className="form-label">Price</label>
          <input type="number" className="form-control" id="inputPrice" name="productprice" 
          onChange={(e) => {setProductData({productPrice : Number(e.currentTarget.value)})}}
          value={productData.productPrice}
          />
        </div>
        <button type="submit" className="btn btn-primary col-2">Add</button>
      </form>
  )
}
