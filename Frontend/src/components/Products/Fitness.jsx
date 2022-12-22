
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
                <div >
                  {/* <Link to={`/books/${el.id}`} key={el.id}> */}
                  <div className="eachdiv">
                    <div className='productimgdiv'>
                      <img src={el.img} />
                    </div>
                    <div className='producttitle'>
                      <p key={el.id}>{el.title}</p>
                    </div>
                    <div className="price-button">
                      <div className="price-list">
                        <p className="productprice-linethrough" key={el.id}>${el.price}</p>
                        <p className="productprice" key={el.id}>${el.mrp}</p>
                        <p className="product-discount" key={el.id}>{el.discount}%off</p>
                      </div>
                      <div className="btn"><button onClick={addtocartarr.bind(null, el)}>Cart</button></div>
                    </div>
                  </div>
                  {/* </Link> */}
                </div>
              </>
            )
          })}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

