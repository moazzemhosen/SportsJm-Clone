
import { Sidebar } from "../Sidebar/sidebar";
import { FitnessMat } from '../../configs/FitnessMats'
// import { Link } from "react-router-dom";
import { Footer } from "../footer/footer";
import './sports.css'
import { useDispatch } from "react-redux";

export const Fitness = () => {
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
          {FitnessMat.map((el) => {
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

