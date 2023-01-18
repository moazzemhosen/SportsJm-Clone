
import { Sidebar } from "../Sidebar/sidebar";
import { Accessorie } from '../../configs/Accessorie.js'
// import { Link } from "react-router-dom";
import './sports.css'
import { Footer } from "../footer/footer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, CircularProgress } from "@mui/material";
import { Page } from "../PageComponent/Page";

export const Accessories = () => {
  const {search} = useSelector((state) => state.loginReducer);
  const [data, setData] = useState(Accessorie);

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
       let updatedData = Accessorie.filter((e) => e.title.toLowerCase().indexOf(search.toLowerCase()) >= 0);
      //console.log("up",updatedData,updatedData.length);
      setData([...updatedData]);
  }, [search]);

  const handleChange = (item) => {
    //console.log("item:", item);
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
          {data.slice(0,limit).map((el) =>  (
                <>
                    <Page key={el.id} data={el} handleclick={handleclick} addtocartarr={addtocartarr}/>
                </>
              )
            
          )}
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


