import React, { useState } from 'react'
import './login.css'
import google from './google2.png'
import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider, db, dbref } from '../firebase/Setup';
import { set, ref, get, child } from 'firebase/database';
import { useNavigate } from 'react-router-dom';

function Login() {

    let navigate = useNavigate();

    const [isRotated, setIsRotated] = useState(false);
    //login
    const [logVal, setLogVal] = useState("")
    const [logPass, setLogPass] = useState("")
    const [errEmail, setErrEmail] = useState("")
    const [errPass, setErrPass] = useState("")

    const handleRotateClick = () => {
        setIsRotated(!isRotated);
    };

    const validateLogin = (e) => {
        e.preventDefault();
        const val = validate(logVal, logPass);
        if (val) {
            loginWithEmail();
            setLogVal("")
            setLogPass("")
            setErrEmail("")
            setErrPass("")
            return true
        } else {
            return false
        }
    }

    const validate = (logVal, logPass) => {
        if (logVal === "" || logPass === "") {
            setErrPass("Please enter all credentials properly")
            return false
        } if (String(logPass).length < 8) {
            setErrPass("Password must contain atleast 8 charecters")
            return false
        } else {
            return true
        }
    }

    //firebase login

    const loginWithEmail = () => {
        signInWithEmailAndPassword(auth,logVal,logPass)
        .then((Credentials)=> {
            get(child(dbref, 'UserRegistrationList/' + Credentials.user.uid)).then((snapshot) => {
                if(snapshot.exists) {
                    sessionStorage.setItem("user-info", JSON.stringify({
                        name: snapshot.val().name,
                        email: snapshot.val().email
                    }))
                    sessionStorage.setItem("user-creds", JSON.stringify(Credentials.user))
                    navigate('/home');
                }
            })
        })
        .catch((err) => {
            alert(err)
        })
    }

    //Registration
    const [userName, setUserName] = useState("");
    const [regEmail, setRegEmail] = useState("");
    const [regConPass, setRegConPass] = useState("");
    const [regPass, setRegPass] = useState("");

    const [regPasswordConfirm, setRegPasswordConfirm] = useState("");

    const handleRegistration = (e) => {
        e.preventDefault();
        let signup = validateSignUp(regPass, regConPass);

        if (signup) {
            registerWithEmail();
            clearFields();
        }
    };

    const validateSignUp = (regPass, regConPass) => {
        if (String(regPass).length < 8 || String(regConPass).length < 8) {
            setRegPasswordConfirm("Password must contain at least 8 characters.");
            return false;
        } else if (regPass !== regConPass) {
            // The passwords don't match, show error message
            setRegPasswordConfirm("Passwords do not match. Please re-enter.");
            return false;
        } else {
            setRegPasswordConfirm(""); 
            return true;
        }
    };


    //firebase google login

    const googleLogin = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
        }
        catch {
            console.error();
        }
    }

    //firebase registration

    const registerWithEmail = async () => {    
        try {
            const credentials = await createUserWithEmailAndPassword(auth, regEmail, regPass);
            await sendEmailVerification(credentials.user);
            await set(ref(db, 'UserRegistrationList/' + credentials.user.uid), {
                name: userName,
                email: regEmail
            });
    
            console.log("Registration successful, verification email sent.");
        } catch (err) {
            alert(err.message);
        }
    };
    
    
    
    const clearFields = () => {
        setUserName(""); // Clear input fields
        setRegEmail("");
        setRegPass("");
        setRegConPass("");
    }

    return (
        <div className='Login'>
            <div className='side-info'>
                <div className='info-cont'>
                <h1>Empowering Users with a Community-Driven Platform for Seamless Knowledge Sharing and Problem Solving</h1>
                    <br></br><p><span>Query Box</span> connects you to solutions for a sustainable future</p>
                </div>
            </div>
            <div className='side-login'>
                <div className={`card ${isRotated ? 'rotated' : ''}`}>
                    <div className='card-side front'>
                        <h1>Welcome Back! 👋</h1><br></br>
                        <p
                        >Enter your credentials to access your Account</p>
                        <form onSubmit={(e) => validateLogin(e)}>
                            <div className='inputs'>
                                <div className='email-input'>
                                    <input
                                        type='email'
                                        placeholder=' '
                                        required
                                        value={logVal}
                                        onChange={(e) => setLogVal(e.target.value)}
                                    ></input>
                                    <label>Enter Email</label>
                                    <p className='email-para'
                                        style={{
                                            color: 'red',
                                            fontSize: '13px'
                                        }}
                                    >{errEmail}</p>
                                </div>
                                <div className='pass-input' style={{ marginBottom: "4px" }}>
                                    <input
                                        type='password'
                                        //placeholder='Enter Password...'
                                        required
                                        value={logPass}
                                        onChange={(e) => setLogPass(e.target.value)}
                                    ></input>
                                    <label>Enter Password</label>
                                </div>
                                <div className='error-para' style={{ marginBottom: "18px" }}>
                                    <p style={{
                                        color: 'red',
                                        fontSize: '14px'
                                    }}>{errPass}</p>
                                </div>
                                <div className='remember'>
                                    <div style={{
                                        display: "flex",
                                        gap: "2px",
                                        alignItems: "center"
                                    }}>
                                        <input
                                            type='checkbox'
                                        ></input>
                                        <label>Remember me</label>
                                    </div>
                                    <div>
                                        <a href='#'
                                            style={{
                                                color: 'blue',
                                                textDecoration: 'none'
                                            }}
                                        >Forgot Password?</a>
                                    </div>
                                </div>
                                <div className='dont-have'>Dont have an account? <span id='register' onClick={handleRotateClick} >click here!</span></div>
                                <div className='btn'>
                                    <button
                                        type='submit'
                                    >Login</button>
                                </div>
                            </div>
                        </form>
                        <div className='google-block'>
                            <div className='or-line'>
                                <div className='line'></div>
                                <h5>OR</h5>
                            </div>
                            <div className='continue' onClick={googleLogin} >
                                <img src={google} />
                                <h4>Continue with Google</h4>
                            </div>
                        </div>
                    </div>
                    <div className='card-side back'>
                        <h1>Register 😊</h1><br></br>
                        <p>We are here to harvest hope!</p>
                        <form onSubmit={handleRegistration}>
                            <div className='inputs'>
                                <div className='email-input'>
                                    <input
                                        type='text'
                                        value={userName} // Controlled input
                                        onChange={(e) => setUserName(e.target.value)}
                                        placeholder=' '
                                        required
                                    ></input>
                                    <label>Enter User Name</label>
                                    <p></p>
                                </div>
                                <div className='email-input'>
                                    <input
                                        type='email'
                                        value={regEmail} // Controlled input
                                        placeholder=' '
                                        onChange={(e) => setRegEmail(e.target.value)}
                                        required
                                    ></input>
                                    <label>Enter Email</label>
                                    <p></p>
                                </div>
                                <div className='pass-input'>
                                    <input
                                        type='password'
                                        value={regPass} // Controlled input
                                        onChange={(e) => setRegPass(e.target.value)}
                                        required
                                    ></input>
                                    <label>Enter Password</label>
                                    <p></p>
                                </div>
                                <div className='pass-input' style={{ marginBottom: "4px" }}>
                                    <input
                                        type='password'
                                        value={regConPass} // Controlled input
                                        onChange={(e) => setRegConPass(e.target.value)}
                                        required
                                    ></input>
                                    <label>Confirm Password</label>
                                </div>
                                <p
                                    style={{
                                        color: "red",
                                        fontSize: "14px",
                                        marginBottom: "18px"
                                    }}
                                >
                                    {regPasswordConfirm}
                                </p>
                                <div className='remember'>
                                    <div style={{ display: "flex", gap: "2px", alignItems: "center" }}>
                                        <input type='checkbox'></input>
                                        <label>Remember me</label>
                                    </div>
                                    <div>
                                        <a
                                            href='#'
                                            style={{
                                                color: 'blue',
                                                textDecoration: 'none'
                                            }}
                                        >View Password</a>
                                    </div>
                                </div>
                                <div className='dont-have'>
                                    Already have an account?{" "}
                                    <span id='register' onClick={handleRotateClick}>
                                        click here!
                                    </span>
                                </div>
                                <div className='btn'>
                                    <button type='submit'>Register</button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
