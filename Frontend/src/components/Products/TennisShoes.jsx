

import { Sidebar } from "../Sidebar/sidebar";
import { TennisShoe } from '../../configs/TennisShoes'
// import { Link } from "react-router-dom";
import { Footer } from "../footer/footer";
import './sports.css'
import { useDispatch } from "react-redux";
import { Page } from "../PageComponent/Page";

export const Tennisshoes = () => {
  const dispatch = useDispatch();
  const addtocartarr = (el) => {
    dispatch({ type: "ADDCART", payload: el });
  };
  const handleclick=()=>{
    
  }
  return (
    <>
      <div className="main-container">
        {/* <h1>Sports</h1> */}
        <div className="product-sidebar">
          <Sidebar></Sidebar>
        </div>

        <div className="grid-format">
          {TennisShoe.map((el) => {
            return (
              <>
                  <Page key={el.id} data={el} handleclick={handleclick} addtocartarr={addtocartarr}/>
              </>
            )
          })}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

