import styles from "./sidebar.module.css";
import { navmain } from "../../Addressmaps/maps";
import { Link } from "react-router-dom";

export const Sidebar = ({ data, handleChange, d }) => {


  const handleSort = (e) => {
    const value = e.target.value;
    const nData = [...data];
    if (value === "low") {
      console.log(value);
      nData.sort((a, b) => {
        return Number(a.mrp) - Number(b.mrp);
      });
    } else {
      console.log(value);
      nData.sort((a, b) => {
        return Number(b.mrp) - Number(a.mrp);
      });
    }
    console.log("sort",nData);
    handleChange(nData);
  };


  const lowProduct = (e) => {
    
    let nData=data.filter((e)=>e.mrp<5000)
     console.log("n",nData ,nData.length);
    handleChange([...nData]);
  };
  const highProduct = (d) => {
    let nData=data.filter((e)=>e.mrp>5000)
    console.log("n",nData ,nData.length);
   handleChange([...nData]);
    handleChange(nData);
  };

  const Discount=()=>{
    let nData=data.filter((e)=>e.discount)
    //console.log("n",nData ,nData.length);
   handleChange([...nData]);
    handleChange(nData);
  }
  return (
    <>
      <div className={styles.mainScroller}>
        <h4>Category Menu</h4>
        <div className={styles.productmap}>
          {navmain.map((e) => (
            <Link to={e.to}>{e.title}</Link>
          ))}
        </div>
        <h4>Sort Products</h4>
        <div className={styles.sorting}>
          <select onChange={handleSort}>
            <option value="select">Select Sort:</option>
            <option value="low">Price Low to high</option>
            <option value="high">Price High to Low</option>
          </select>
        </div>
        <h4>Customized Purchase</h4>
        <div className={styles.filterbrands}>
         <div className={styles.aline}>
         <input
            type="checkbox"
            id="checkbox 1"
            name="lessthen"
            onChange={lowProduct}/>
           <label for="checkbox 1">less then 5000</label>
         </div>
          
          <div className={styles.aline}>
            <input
            type="checkbox"
            id="checkbox 2"
            name="morethen"
            onChange={highProduct}/>
             <label for="checkbox 2">more then 5000</label>
          </div>
        </div>
        
        <h4>Discounted Items</h4>
        <div className={styles.discount} >
         <input type="checkbox" id="checkbox 3" name="discount"  onChange={Discount} />
          <label for="checkbox 3">Discounted Items</label>
        </div>
      </div>
    </>
  );
};
