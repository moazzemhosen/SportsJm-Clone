


import { Sidebar } from "../Sidebar/sidebar";
import { handGrips } from '../../configs/HandGrips'
// import { Link } from "react-router-dom";
import { Footer } from "../footer/footer";
import './sports.css'
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Page } from "../PageComponent/Page";

export const Handgrips = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const nData = handGrips.map((e) => {
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
  return (
    <>
      <div className="main-container">
        {/* <h1>Sports</h1> */}
        <div className="product-sidebar">
          <Sidebar data={data} handleChange={handleChange}></Sidebar>
        </div>

        <div className="grid-format">
          {data.map((el) => {
            if (el.isVisible) {
              return (
                <>
                     <Page key={el.id} data={el} handleclick={handleclick} addtocartarr={addtocartarr}/>
                </>
              );
            }
          })}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};


