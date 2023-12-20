// import React, { useEffect, useState } from 'react';
// import "../../css/login.css";
// import { Link, useNavigate } from "react-router-dom";
// import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../../firebase";
// import { useAuthState } from "react-firebase-hooks/auth";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [user, loading] = useAuthState(auth);
//   const [loginError, setLoginError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (loading) {
//       // maybe trigger a loading screen
//       return;
//     }
//     if (user) navigate("/movies/homePage");
//   }, [user, loading, navigate]);

//   const handleLogin = async () => {
//     try {
//       setLoginError(null); // Reset login error before attempting login
//       await logInWithEmailAndPassword(email, password);
//     } catch (error) {
//       setLoginError("Invalid email or password");
//     }
//   };

//   return (
//     <div className="login">
//       <div className="login__container">
//         <input
//           type="text"
//           className="login__textBox"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="E-mail Address"
//         />
//         <input
//           type="password"
//           className="login__textBox"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password"
//         />
//         <button
//           className="login__btn"
//           onClick={handleLogin}
//         >
//           Login
//         </button>
//         <button className="login__btn login__google" onClick={signInWithGoogle}>
//           Login with Google
//         </button>
//         {loginError && <div className="login__error">{loginError}</div>}
//         <div>
//           <Link to="/reset">Forgot Password</Link>
//         </div>
//         <div>
//           Don't have an account? <Link to="/register">Register</Link> now.
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;