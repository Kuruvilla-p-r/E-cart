import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import { MdDelete } from "react-icons/md";
import { deleteFromWishlist } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';

function Wishlist() {
  const wishlistArray = useSelector((state) => state.wishlistReducer);
  
  const dispatch = useDispatch();
  const handleWishlistCart =(product)=>{
    dispatch(addToCart(product))
    dispatch(deleteFromWishlist(product.id))
  }

  return (
    <div>
      <div className="row">
        {wishlistArray?.length > 0 ? (
          wishlistArray.map((product) => (
            <div className="col" key={product.id}> 
              <MDBCard className='' style={{ width: '300px', height: '600px', margin: '40px' }}>
                <MDBCardImage src={product.thumbnail} position='top' />
                <MDBCardBody>
                  <MDBCardTitle>{product.title}</MDBCardTitle>
                  <MDBCardText>
                    {product.description}
                    <br />
                    Price: {product.price}
                  </MDBCardText>
                  <div>
                    <MDBBtn onClick={() => dispatch(deleteFromWishlist(product.id))} className='btn btn-light m-1'>
                    <MdDelete style={{fontSize:'38px',color:'red'}} />
                    </MDBBtn>
                    <MDBBtn onClick={()=>handleWishlistCart(product)} className='btn btn-light m-1'>
                      <img src="https://www.freeiconspng.com/thumbs/shopping-cart-icon/green-shopping-cart-icon-5.png" className='m-1' height={'30px'} alt="" />
                    </MDBBtn>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
}

export default Wishlist;
