

import { Sidebar } from "../Sidebar/sidebar";
import { BalanceBoard } from '../../configs/Balance Board.js'
// import { Link } from "react-router-dom";
import './sports.css'
import { Footer } from "../footer/footer";
import { useDispatch } from "react-redux";
import { Page } from "../PageComponent/Page";

export const Balanceboard  = () => {
  const dispatch = useDispatch();
  const addtocartarr = (el) => {
    dispatch({ type: "ADDCART", payload: el });
  };
  const handleclick=(el)=>{
    alert(el.title)
    
  }

  return (
    <>
      <div className="main-container">
        {/* <h1>Sports</h1> */}
        <div className="product-sidebar">
          <Sidebar></Sidebar>
        </div>

        <div className="grid-format">
          {BalanceBoard.map((el,i) => {
            return (
              <>
               
               <Page key={i} data={el} handleclick={handleclick} addtocartarr={addtocartarr}/>
              </>
            )
          })}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

