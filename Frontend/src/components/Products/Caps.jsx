import { Sidebar } from "../Sidebar/sidebar";
import { caps } from "../../configs/Caps";
// import { Link } from "react-router-dom";
import "./sports.css";
import { Footer } from "../footer/footer";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Button, CircularProgress } from "@mui/material";

export const Caps = () => {
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(6);
  const [progress,setProgress]=useState(false)

  useEffect(() => {
    const nData = caps.map((e) => {
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
  const handleclick=(el)=>{
    alert(el.title)
    
  }
  const incLimit=()=>{
    setProgress(!progress)
    setTimeout(() => {
      setProgress(false)
      setLimit(limit + 3)
    },200);
  }


  return (
    <>
      <div className="main-container">
        {/* <h1>Sports</h1> */}
        <div className="product-sidebar">
          <Sidebar data={data} handleChange={handleChange}></Sidebar>
        </div>

        <div className="grid-format">
          {data.slice(0, limit).map((el) => {
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
                            {el.discount}%off
                          </p>
                        </div>
                        <div className="btn-cart">
                          <Button variant="contained" color="primary" onClick={addtocartarr.bind(null, el)}>
                            Cart
                          </Button>
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
           limit>=data.length ? "":<button  onClick={incLimit}>{progress ? <CircularProgress /> : " Loadmore..."}</button>
          }
           
        </div>
      <Footer></Footer>
    </>
  );
};
