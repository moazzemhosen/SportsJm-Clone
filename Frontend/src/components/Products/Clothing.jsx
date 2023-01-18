
import { Sidebar } from "../Sidebar/sidebar";
import { Rackets } from '../../configs/Badminton'
// import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import './sports.css'
import { Page } from "../PageComponent/Page";

export const Clothing = () => {
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
          {Rackets.map((el) => {
            return (
              <>
                   <Page key={el.id} data={el} handleclick={handleclick} addtocartarr={addtocartarr}/>
              </>
            )
          })}
        </div>
      </div>
    </>
  );
};

