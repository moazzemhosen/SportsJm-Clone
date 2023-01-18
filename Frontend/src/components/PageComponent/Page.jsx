
import style from "./Page.module.css";

export const Page = ({data,handleclick,addtocartarr}) => {
  return (
    <div>
      {/* <Link to={`/books/${data.id}`} key={data.id}> */}
      <div className={style.eachdiv} onClick={() => handleclick(data)}>
        <div className={style.productimgdiv}>
          <img src={data.img} />
        </div>
        <div className={style.producttitle}>
          <p key={data.id}>{data.title}</p>
        </div>
        <div className={style.price_button}>
          <div className={style.price_list}>
            <p className={style.productprice_linethrough} key={data.id}>
              ${data.price}
            </p>
            <p className={style.productprice} key={data.id}>
              ${data.mrp}
            </p>
            <p className={style.product_discount} key={data.id}>
              {data.discount}%off
            </p>
          </div>
          <div className={style.btn_cart}>
            <button onClick={addtocartarr.bind(null, data)}>Cart</button>
          </div>
        </div>
      </div>
      {/* </Link> */}
    </div>
  );
};
