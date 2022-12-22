import "bootstrap";
import { useNavigate } from "react-router-dom";
import "./checkout.css";
import { useSelector } from "react-redux";
export const Checkout = () => {
  const myState = useSelector((store) => store.loginReducer);
  const navigate = useNavigate();

  
  const lastPage = (e) => {
    e.preventDefault();
    navigate("/thankyou");
  };
  let total = 0;
  myState.cart.forEach((item) => {
    total = total + Number(item.price);
  });

  return (
    <div>
      <div className="manidiv-s">
        <div className="left-div-s">
          <div className="row">
            <div className="col-75">
              <div className="container">
                <div className="row">
                  <div className="col-50">
                    <h3>Billing Address</h3>
                    <label htmlFor="fname">
                      <i className="fa fa-user"></i> Full Name
                    </label>
                    <input
                      type="text"
                      id="fname"
                      name="firstname"
                      placeholder="username"
                    />
                    <label htmlFor="email">
                      <i className="fa fa-envelope"></i> Email
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      placeholder="user@gmail"
                    />
                    <label htmlFor="adr">
                      <i className="fa fa-address-card-o"></i> Address
                    </label>
                    <input
                      type="text"
                      id="adr"
                      name="address"
                      placeholder="Aurangabd"
                    />
                    <label htmlFor="city">
                      <i className="fa fa-institution"></i> City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      placeholder="Aurangabad"
                    />

                    <div className="row">
                      <div className="col-50">
                        <label htmlFor="state">State</label>
                        <input
                          type="text"
                          id="state"
                          name="state"
                          placeholder="MH"
                        />
                      </div>
                      <div className="col-50">
                        <label htmlFor="zip">Zip</label>
                        <input
                          type="text"
                          id="zip"
                          name="zip"
                          placeholder="431001"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-50">
                    <h3>Payment</h3>
                    <label htmlFor="fname">Accepted Cards</label>
                    <div className="icon-container">
                      <i className="fa fa-cc-visa" style={{ color: "navy" }} />
                      <i className="fa fa-cc-amex" style={{ color: "blue" }} />
                      <i
                        className="fa fa-cc-mastercard"
                        style={{ color: "red" }}
                      />
                      <i
                        className="fa fa-cc-discover"
                        style={{ color: "orange" }}
                      />
                    </div>
                    <label htmlFor="cname">Name on Card</label>
                    <input
                      type="text"
                      id="cname"
                      name="cardname"
                      placeholder="SBI"
                    />
                    <label htmlFor="ccnum">Credit card number</label>
                    <input
                      type="text"
                      id="ccnum"
                      name="cardnumber"
                      placeholder="1111-2222-3333-4444"
                    />
                    <label htmlFor="expmonth">Exp Month</label>
                    <input
                      type="text"
                      id="expmonth"
                      name="expmonth"
                      placeholder="September"
                    />

                    <div className="row">
                      <div className="col-50">
                        <label htmlFor="expyear">Exp Year</label>
                        <input
                          type="text"
                          id="expyear"
                          name="expyear"
                          placeholder="2018"
                        />
                      </div>
                      <div className="col-50">
                        <label htmlFor="cvv">CVV</label>
                        <input
                          type="text"
                          id="cvv"
                          name="cvv"
                          placeholder="352"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <label>
                  <input type="checkbox" name="sameadr" /> Shipping address same
                  as billing
                </label>
                <input
                  onClick={lastPage}
                  type="submit"
                  value="Continue to checkout"
                  className="btn"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="right div-s">
          <div className="col-25">
            <div className="container">
              {myState.cart.map((e) => (
                <>
                  <h3>{e.title}</h3>
                  <h3>{e.price}</h3>
                </>
              ))}
              <h2>TOTAL:{total}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
