import { useSelector } from "react-redux";
import { Navigate,useLocation } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const myState = useSelector((state) => state.loginReducer.isLoggedIn);
  const location=useLocation()

  if (!myState) {
    return <Navigate to={"/login"} state={{from:location}} replace={true} />;
  }
  return children;
};