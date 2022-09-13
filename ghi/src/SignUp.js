// import React from 'react';
// import { Link } from 'react-router-dom';

// class SignUp extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             username: '',
//             password: '',
//             verify_password: '',
//         };
//         this.handleUsernameChange = this.handleUsernameChange.bind(this);
//         this.handlePasswordChange = this.handlePasswordChange.bind(this);
//         this.handleVerify_PasswordChange = this.handleVerify_PasswordChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     async handleSubmit(event) {
//         event.preventDefault();
//         const data = { ...this.state };
//         delete data.showPassword;
//         delete data.verify_password;

//         const url = `${process.env.REACT_APP_API_HOST}/api/accounts/`;
//         const fetchConfig = {
//             method: "POST",
//             body: JSON.stringify(data),
//             headers: {
//                 'Content-Type': 'application/json',
//                 credentials: "include",
//             },
//         };

//         const response = await fetch(url, fetchConfig);
//         if (response.ok) {
//             this.setState({
//                 username: '',
//                 password: '',
//                 verify_password: '',

//             });
//         } else if (!response.ok) {
//             const message = ` An error: ${response.status} - ${response.statusText}`;
//             throw new Error(message);
//         }

//     }

//     handleUsernameChange(event) {
//         const value = event.target.value;
//         this.setState({ username: value });
//     }
//     handlePasswordChange(event) {
//         const value = event.target.value;
//         this.setState({ password: value });

//     }
//     handleVerify_PasswordChange(event) {
//         const value = event.target.value;
//         this.setState({ verify_password: value });
//     }



//     render() {

//         return (
//             <div className="App">
//                 <div
//                     className="container-fluid d-flex align-items-center"
//                     style={{
//                         height: "100vh",
//                         backgroundImage:
//                             "url(https://media.npr.org/assets/img/2021/08/06/dog-4415649-18eab39206426b985f7a5f69e3146a2cd1a56c0d-s800-c85.webp)",
//                         backgroundPosition: "center",
//                         backgroundSize: "cover",
//                         backgroundRepeat: "no-repeat"
//                     }}
//                 >
//                     <div className="signup" id="signuptop">
//                         <div className="card mx-auto" style={{ width: "18rem" }}>
//                             <div className="card-body">
//                                 <h1>Create an Account</h1>
//                                 <hr />

//                                 <div className="form-floating mb-3">
//                                     <input onChange={this.handleUsernameChange} value={this.state.username}
//                                         placeholder="Username" required type="text" name="username"
//                                         id="username" />
//                                 </div>

//                                 <div className="form-floating mb-3" >
//                                     <input value={this.state.password} onChange={this.handlePasswordChange}
//                                         placeholder="Password" required type="text" name="password"
//                                         id="signuppassword" />
//                                 </div>

//                                 <div className="form-floating mb-3" >
//                                     <input value={this.state.verify_password} onChange={this.handleVerify_PasswordChange}
//                                         placeholder="Verify Password" required type="text" name="verify-password"
//                                         id="verify-password" />
//                                 </div>

//                                 <br></br>
//                                 <Link to="/puppy-love/"> <button type="submit" name='loginbutton'
//                                     className="btn btn-primary" form="login-form">Log In
//                                 </button></Link>
//                                 <div className='tolgoin'>
//                                     Already Have an Account?  <Link to='/login'>Sign In</Link>
//                                 </div>

//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }


// export default SignUp;







import { useState } from "react"
import { useAuthContext, useToken } from "./TokenContext"
import Cookies from "universal-cookie"
// import Cookies from "universal-cookie"


function SignUpForm (props) {
    const [token, signup] = useToken()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    function handleUsername(e)  {
        setUsername(e.target.value)
    }
 
    function handlePassword(value) {
        setPassword(value.target.value)
    }

    function submitButton(event) {
        event.preventDefault()
        signup(username, password)
        console.log(token)
    }

return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Login</h1>
          <form id="create-conference-form">
            <div className="form-floating mb-3">
              <input onChange={handleUsername} placeholder="Username" required type="text" name="username" id="username" className="form-control"  />
              <label htmlFor="name">Username</label>
            </div>
            <div className="form-floating mb-3">
              <input onChange={handlePassword} placeholder="Password" type="text" name="password" id="password" className="form-control"  />
              <label htmlFor="employee_number">Password</label>
            </div>
            <div className="form-floating mb-3">

            </div>
            <div className="mb-3">
            </div>
            <button className="btn btn-primary" onClick={submitButton}>Login</button>
          </form>
        </div>
      </div>
    </div>    
 )
}

export default  SignUpForm
