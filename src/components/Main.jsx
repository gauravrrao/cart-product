import React from "react";
import "./main.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";

const Main = ({image,name,price}) => {
  return (
    <>

      <div className="cart">
        <img
          src={image}
          className="image"
          alt=""
        />
        <div className="thing">
          <div className="title">
            <p>{name}</p>
            <p>{price}</p>
          </div>
          <div className="price">
            <p>{price}</p>
            <p className="p2">: In Stock</p>
          </div>
        </div>
        <div className="option">
          <div className="xl">
            <div className="arrow">
              <img
                className="btn"
                src="./Screenshot from 2022-11-23 16-53-13.png"
                alt=""
                srcset=""
              />
            </div>
            <div className="imagelogo">
            <FavoriteIcon className="logo" />
            <p>Save</p>
            <DeleteIcon className="logo" />
            <p>delete</p>
            </div>
          
          </div>
         
        </div>
       
      </div>
      <div className="hr"></div>
    </>
  );
};

export default Main;
