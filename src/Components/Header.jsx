import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
   
  } from 'mdb-react-ui-kit';
import { useSelector } from 'react-redux';
import { FaHeart } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';



function Header() {
  const wishlistArray = useSelector((state)=>state.wishlistReducer)
  const cartlistArray = useSelector((state) => state.cartlistReducer);
  console.log(wishlistArray);
  return (
    <div>
      <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/'  style={{fontFamily:'"Jersey 15", sans-serif',fontSize:'30px'}}>ShopNShop</MDBNavbarBrand>
          <div className='d-flex justify-content-end'>
            <Link to="/wishlist">
            <div className="row m-1">
          <FaHeart className='text-danger' />
          <button className='btn btn-secondary'>{wishlistArray.length}</button>
          </div>
            </Link>
            <Link to='/cart'>
            <div className="row m-1">
          <FaShoppingCart className='text-success' />
          <button className='btn btn-secondary'>{cartlistArray.length}</button>
          </div>
            </Link>
          </div>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header