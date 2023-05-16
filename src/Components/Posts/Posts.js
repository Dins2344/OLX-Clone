import React, { useState, useContext, useEffect } from "react";
import { FirebaseContext } from "../../store/FirebaseContext";
import Heart from "../../assets/Heart";
import "./Post.css";
import { PostContext } from "../../store/postContext";
import { useNavigate } from "react-router-dom";

function Posts() {
  const { Firebase } = useContext(FirebaseContext);
  const [products, setProducts] = useState([]);
  const { setPostDetails, postDetails } = useContext(PostContext);
  const navigate = useNavigate();
  // useEffect(() => {
  //   console.log(postDetails);
  //   navigate('/view-product')
  // }, [postDetails]);

  useEffect(() => {
    Firebase.firestore()
      .collection("products")
      .get()
      .then((snapshot) => {
        const allPost = snapshot.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id,
          };
        });
        setProducts(allPost);
      });
  });
  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          {products?.map((product) => {
            return (
              <div
                key={product?.id}
                className="card"
                onClick={() => {
                  setPostDetails(product);
                  console.log(postDetails);
                  navigate("/view-product");
                }}
              >
                <div className="favorite">
                  <Heart></Heart>
                </div>
                <div className="image">
                  <img src={product.url} alt="" />
                </div>
                <div className="content">
                  <p className="rate">&#x20B9; {product.price}</p>
                  <span className="kilometer">{product.category}</span>
                  <p className="name"> {product.name}</p>
                </div>
                <div className="date">
                  <span>{product.createdAt}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          {products.map((product) => {
            return (
              <div className="card" onClick={()=>{
                setPostDetails(product)
                navigate("/view-product")
              }}>
                <div className="favorite">
                  <Heart></Heart>
                </div>
                <div className="image">
                  <img src={product.url}alt="" />
                </div>
                <div className="content">
                  <p className="rate">&#x20B9; {product.price}</p>
                  <span className="kilometer">{product.category}</span>
                  <p className="name">{product.name}</p>
                </div>
                <div className="date">
                  <span>{product.createdAt}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Posts;
