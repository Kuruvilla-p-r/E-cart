import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBCardFooter,
  MDBBtn
} from 'mdb-react-ui-kit';
import { MdDelete } from "react-icons/md";
import { deleteFromWishlist, emptyCart } from '../redux/slices/cartSlice';

export default function Cart() {
  const cartlistArray = useSelector((state) => state.cartlistReducer);
  const dispatch = useDispatch();
  const[cartTotal,setCartTotal]=useState('')
  const getCartTotal =()=>{
    if (cartlistArray.length>0) {
      setCartTotal(cartlistArray.map((item) => item.price).reduce((p1, p2) => p1 + p2))
    } else {
      setCartTotal(0)
    }
  }
  const handleCartOrder = () =>{
    dispatch(emptyCart())
    alert('Your order has been placed')
  }
  useEffect(()=>{
    getCartTotal()
  },[cartlistArray])
  return (
    <div>
      <div className="row">
        <div className="col m-3">
        <MDBTable bordered borderColor="primary" >
      <MDBTableHead>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Item</th>
          <th scope='col'>Image</th>
          <th scope='col'>Price</th>
          <th scope='col'>Action</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {
          cartlistArray?.length>0? cartlistArray.map((product,index)=>(         
             <tr>
            <th scope='row'>{index+1}</th>
            <td>{product.title}</td>
            <td><img src={product.thumbnail} height={'50px'} alt="" /></td>
            <td>${product.price}</td>
            <td>                    <MDBBtn onClick={() => dispatch(deleteFromWishlist(product.id))} className='btn btn-light m-1'>
                    <MdDelete style={{fontSize:'30px',color:'red'}} />
                    </MDBBtn></td>
          </tr> ))
: "No products"
        }

      </MDBTableBody>
    </MDBTable>
        </div>
        <div className="col m-5">
        <MDBCard alignment='center'>
      <MDBCardHeader>Cart summary</MDBCardHeader>
      <MDBCardBody>
        
        <MDBCardText>Total Cart Item : {cartlistArray.length}</MDBCardText>
        <MDBCardText>Total Price : ${cartTotal}</MDBCardText>
      </MDBCardBody>
      <div>
      <button onClick={handleCartOrder} className='btn btn-secondary m-2'>
        Checkout
      </button>
      </div>
      <MDBCardFooter className='text-muted'><br /></MDBCardFooter>
    </MDBCard>
        </div>
      </div>

    </div>
  )
}
