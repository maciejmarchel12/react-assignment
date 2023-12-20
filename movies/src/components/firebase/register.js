// import React, { useEffect, useState } from 'react'
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { Link, useNavigate } from "react-router-dom";
// import { 
//     auth,
//     registerWithEmailAndPassword,
//     signInWithGoogle,
//  } from "../../firebase";
//  import "../../css/register.css";

//  function Register() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [name, setName] = useState('');
//     const [emailError, setEmailError] = useState(''); // Added state for email error
//     const [user, loading] = useAuthState(auth);
//     const navigate = useNavigate();

//     const register = () => {
//         // Check for valid email format
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (!emailRegex.test(email)) {
//             setEmailError('Invalid email format');
//             return;
//         }

//         // Reset email error state if email is valid
//         setEmailError('');

//         if (!name) {
//             alert('Please enter name');
//             return;
//         }

//         registerWithEmailAndPassword(name, email, password);
//     };

//     useEffect(() => {
//         if (loading) return;
//         if (user) navigate('/movies/homePage', { replace: true });
//     }, [user, loading, navigate]);

//     return (
//         <div className="register">
//             <div className="register__container">
//                 <input
//                     type="text"
//                     className="register__textBox"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     placeholder="Full Name"
//                 />
//                 <input
//                     type="text"
//                     className="register__textBox"
//                     value={email}
//                     onChange={(e) => {
//                         setEmail(e.target.value);
//                         setEmailError(''); // Clear email error when the user types
//                     }}
//                     placeholder="E-Mail Address"
//                 />
//                 {emailError && <p className="error">{emailError}</p>}
//                 <input
//                     type="password"
//                     className="register__textBox"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     placeholder="Password"
//                 />
//                 <button className="register__btn" onClick={register}>
//                     Register
//                 </button>
//                 <button className="register__btn register__google" onClick={signInWithGoogle}>
//                     Register With Google
//                 </button>
//             </div>
//             Already have an account? <Link to="/">Login</Link> now.
//         </div>
//     );
// }

// export default Register;