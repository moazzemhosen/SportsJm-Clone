import { Routes, Route } from "react-router-dom";
import { Login } from "../components/Registration/signin/Login";
import { Signup } from "../components/Registration/createAccount/SignUp";
import { Wishlist } from "../components/WishListHandler/WishListHandler";
import { NavBar } from "../components/NavBarHandler/NavBarHandler";
import { Landing } from "../components/LandingHandler/LandingHandler";
import { Abtrainers } from "../components/Products/AbTrainers";
import { Accessories } from "../components/Products/Accessories";
import { Agility } from "../components/Products/Agility";
import { Badminton } from "../components/Products/Badminton";
import { Balanceboard } from "../components/Products/BalanceBoard";
import { Balls } from "../components/Products/Balls";
import { Basketball } from "../components/Products/Basketball";
import { Batcase } from "../components/Products/BatCase";
import { Bats } from "../components/Products/Bats";
import { Billiards } from "../components/Products/Billiards";
import { Caps } from "../components/Products/Caps";
import { Cycles } from "../components/Products/Cycles";
import { Dartsdartsboard } from "../components/Products/Darts&Dartboard";
import { Equipments } from "../components/Products/Equipments";
import { Fitnessmats } from "../components/Products/FitnessMats";
import { Footballs } from "../components/Products/Footballs";
import { Footballshoes } from "../components/Products/FootballShoes";
import { Goaliegloves } from "../components/Products/GoalieGloves";
import { Goggles } from "../components/Products/Goggles";
import { Grips } from "../components/Products/Grips";
import { Handgrips } from "../components/Products/HandGrips";
import { Kitbags } from "../components/Products/KitBags";
import { Rubbers } from "../components/Products/Rubbers";
import { Shingaurds } from "../components/Products/ShinGuards";
import { Shoes } from "../components/Products/Shoes";
import { Shuttlecock } from "../components/Products/Shuttlecock";
import { Skippingropes } from "../components/Products/SkippingRopes";
import { Stepper } from "../components/Products/Stepper";
import { Strings } from "../components/Products/Strings";
import { Swimwear } from "../components/Products/Swimwear";
import { Tables } from "../components/Products/Tables";
import { Tennisshoes } from "../components/Products/TennisShoes";
import { Volleyballs } from "../components/Products/Volleyballs";
import { Cart } from "../components/CartHandler/Cart";
import { Checkout } from "../components/CheckoutHandler/CheckoutHandler";
import { ProtectedRoute } from "./PrivateRoutes";
import { Orderplace } from "../components/ThankyouHandler/Orderplace";

export const Routing = () => {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Landing></Landing>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/wishlist" element={<Wishlist></Wishlist>}></Route>
        <Route path="/Abtrainers" element={<Abtrainers></Abtrainers>}></Route>
        <Route
          path="/Accessories"
          element={<Accessories></Accessories>}
        ></Route>
        <Route path="/Agility" element={<Agility></Agility>}></Route>
        <Route path="/Badminton" element={<Badminton></Badminton>}></Route>
        <Route
          path="/Balanceboard"
          element={<Balanceboard></Balanceboard>}
        ></Route>
        <Route path="/Balls" element={<Balls></Balls>}></Route>
        <Route path="/Basketball" element={<Basketball></Basketball>}></Route>
        <Route path="/Batcase" element={<Batcase></Batcase>}></Route>
        <Route path="/Bats" element={<Bats></Bats>}></Route>
        <Route path="/Billiards" element={<Billiards></Billiards>}></Route>
        <Route path="/Caps" element={<Caps></Caps>}></Route>
        <Route path="/Cycles" element={<Cycles></Cycles>}></Route>
        <Route
          path="/Dartsdartsboard"
          element={<Dartsdartsboard></Dartsdartsboard>}
        ></Route>
        <Route path="/Equipments" element={<Equipments></Equipments>}></Route>
        <Route
          path="/Fitnessmats"
          element={<Fitnessmats></Fitnessmats>}
        ></Route>
        <Route path="/Footballs" element={<Footballs></Footballs>}></Route>
        <Route
          path="/Footballshoes"
          element={<Footballshoes></Footballshoes>}
        ></Route>
        <Route
          path="/Goaliegloves"
          element={<Goaliegloves></Goaliegloves>}
        ></Route>
        <Route path="/Goggles" element={<Goggles></Goggles>}></Route>
        <Route path="/Grips" element={<Grips></Grips>}></Route>
        <Route path="/Handgrips" element={<Handgrips></Handgrips>}></Route>
        <Route path="/Kitbags" element={<Kitbags></Kitbags>}></Route>
        <Route path="/Rubbers" element={<Rubbers></Rubbers>}></Route>
        <Route path="/Shingaurds" element={<Shingaurds></Shingaurds>}></Route>
        <Route path="/Shoes" element={<Shoes></Shoes>}></Route>
        <Route
          path="/Shuttlecock"
          element={<Shuttlecock></Shuttlecock>}
        ></Route>
        <Route
          path="/Skippingropes"
          element={<Skippingropes></Skippingropes>}
        ></Route>
        <Route path="/Stepper" element={<Stepper></Stepper>}></Route>
        <Route path="/Strings" element={<Strings></Strings>}></Route>
        <Route path="/Swimwear" element={<Swimwear></Swimwear>}></Route>
        <Route path="/Tables" element={<Tables></Tables>}></Route>
        <Route
          path="/Tennisshoes"
          element={<Tennisshoes></Tennisshoes>}
        ></Route>
        <Route
          path="/Volleyballs"
          element={<Volleyballs></Volleyballs>}
        ></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>


        <Route
          path="/Checkout"
          element={
            <ProtectedRoute>
              <Checkout></Checkout>
            </ProtectedRoute>
          }
        ></Route>
        
        <Route
          path="/thankyou"
          element={
            <ProtectedRoute>
              <Orderplace></Orderplace>
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
    </>
  );
};
