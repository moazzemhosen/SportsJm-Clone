import React from 'react'
import {useNavigate} from "react-router-dom"




export const Forgotpass = () => {
  const navigate = useNavigate()
    const auth = getAuth();
    let textInput = React.createRef()
    const Handleuserpass=(e)=>{
        const  email = textInput.current.value;
        console.log(email)
        sendPasswordResetEmail(auth, email)
  .then(() => {
    alert("Password reset email sent!") 
    navigate("/signin")
    // ..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
        }
  return (
   
    <div>
        <h2>
Enter Your Email Address !
        </h2>
        <input  type="text" ref={textInput} />
        <button onClick={Handleuserpass}>Reset Password</button>
    </div>
  )
 
}

export default Forgotpass