
import { Sidebar } from "../Sidebar/sidebar";
import { Shoe } from '../../configs/Shoes'
// import { Link } from "react-router-dom";
import { Footer } from "../footer/footer";
import './sports.css'
import { useDispatch } from "react-redux";
import { Button, CircularProgress } from "@mui/material";
import { useState } from "react";
import { Page } from "../PageComponent/Page";

export const Shoes = () => {
  const [limit, setLimit] = useState(6);
  const [progress,setProgress]=useState(false)

  const handleclick=(el)=>{
    alert(el.title)
    
  }
  const incLimit=()=>{
    setProgress(!progress)
    setTimeout(() => {
      setProgress(false)
      setLimit(limit + 3)
    },500);
  }
  const dispatch = useDispatch();
  const addtocartarr = (el) => {
    dispatch({ type: "ADDCART", payload: el });
  };
  return (
    <>
      <div className="main-container">
        {/* <h1>Sports</h1> */}
        <div className="product-sidebar">
          <Sidebar></Sidebar>
        </div>

        <div className="grid-format">
          {Shoe.slice(0,limit).map((el) => {
            return (
              <>
                    <Page key={el.id} data={el} handleclick={handleclick} addtocartarr={addtocartarr}/>
              </>
            )
          })}
        </div>
      </div>
      <div className="show-btn">
          {
           limit>=Shoe.length ? " ":<Button className="loading"  onClick={incLimit}>{progress ? <CircularProgress  />: ` Load More...`}</Button>
          }
           
        </div>
      <Footer></Footer>
    </>
  );
};

