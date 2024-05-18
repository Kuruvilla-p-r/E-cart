import React from 'react'
import useFetch from '../hooks/useFetch';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import { useDispatch } from 'react-redux';
import { addToWishList } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice'



function Home() {
  const dispatch = useDispatch()
  const result = useFetch("https://dummyjson.com/products")
  console.log(result);
  return (
    <>
      <div className="row">
        {result?.length > 0 ? (
          result.map((product) => (
            <div className="col"> 
              <MDBCard className='' style={{width:'300px',height:'600px',margin:'40px'}}>
                <MDBCardImage src={product.thumbnail} position='top'/>
                <MDBCardBody>
                  <MDBCardTitle>{product.title}</MDBCardTitle>
                  <MDBCardText>
                    {product.description}
                    <br />
                    Price : {product.price}
                  </MDBCardText>
                  <div>
                  <MDBBtn onClick={()=>dispatch(addToWishList(product))} className='btn btn-light m-1'><img src="https://gabriellecavassa.com/wp-content/uploads/2018/12/heart.png" className='m-1' height={'30px'} alt="" /></MDBBtn>
                  <MDBBtn onClick={()=>dispatch(addToCart(product))} className='btn btn-light m-1'><img src="https://www.freeiconspng.com/thumbs/shopping-cart-icon/green-shopping-cart-icon-5.png" className='m-1' height={'30px'} alt="" /></MDBBtn>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </>
  )

}

export default Home;