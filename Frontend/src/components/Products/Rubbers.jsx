

import { Sidebar } from "../Sidebar/sidebar";
import { Rubber } from '../../configs/Rubbers'
// import { Link } from "react-router-dom";
import { Footer } from "../footer/footer";
import { useEffect, useState } from "react"
import './sports.css'
import { useDispatch } from "react-redux";
import { Button, CircularProgress } from "@mui/material";

export const Rubbers = () => {
  const [data, setData] = useState([]);
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
  useEffect(() => {
    const nData = Rubber.map((e) => {
      return { ...e, isVisible: true };
    });
    setData(nData);
  }, []);

  const handleChange = (item) => {
    console.log("item:", item);
    setData(item);
  };
  const dispatch = useDispatch();
  const addtocartarr = (el) => {
    dispatch({ type: "ADDCART", payload: el });
  };
  return (
    <>
      <div className="main-container">
        {/* <h1>Sports</h1> */}
        <div className="product-sidebar">
          <Sidebar data={data} handleChange={handleChange}></Sidebar>
        </div>

        <div className="grid-format">
          {data.slice(0,limit).map((el) => {
            if (el.isVisible) {
              return (
                <>
                  <div>
                    {/* <Link to={`/books/${el.id}`} key={el.id}> */}
                    <div className="eachdiv" onClick={()=>handleclick(el)}>
                      <div className="productimgdiv">
                        <img src={el.img} />
                      </div>
                      <div className="producttitle">
                        <p key={el.id}>{el.title}</p>
                      </div>
                      <div className="price-button">
                        <div className="price-list">
                          <p className="productprice-linethrough" key={el.id}>
                            ${el.price}
                          </p>
                          <p className="productprice" key={el.id}>
                            ${el.mrp}
                          </p>
                          <p className="product-discount" key={el.id}>
                            {el.discount}
                          </p>
                        </div>
                        <div className="btn-cart">
                          <button onClick={addtocartarr.bind(null, el)}>Cart</button>
                        </div>
                      </div>
                    </div>
                    {/* </Link> */}
                  </div>
                </>
              );
            }
          })}
        </div>
      </div>
      <div className="show-btn">
          {
           limit>=data.length ? " ":<Button className="loading"  onClick={incLimit}>{progress ? <CircularProgress  />: ` Load More...`}</Button>
          }
           
        </div>
      <Footer></Footer>
    </>
  );
};

