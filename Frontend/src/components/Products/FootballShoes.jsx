
import { Sidebar } from "../Sidebar/sidebar";
import { footballShoes } from '../../configs/FootballShoes'
// import { Link } from "react-router-dom";
import { Footer } from "../footer/footer";
import './sports.css'
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Button, CircularProgress } from "@mui/material";
import { Page } from "../PageComponent/Page";

export const Footballshoes = () => {
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
    const nData = footballShoes.map((e) => {
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
                     <Page key={el.id} data={el} handleclick={handleclick} addtocartarr={addtocartarr}/>
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

