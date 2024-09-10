import {React, useState} from "react";
import { Link } from "react-router-dom";
import login_image from "../Assets/img/login_image.jpg";
export const Login=() => {
  const [user, setUserData] = useState({
		email:"",
		password:"",
	});

	const handleInput =(e)=>{
		console.log(e);
		let name = e.target.name;
		let value = e.target.value;

		setUserData({...user, 
			[name]:value,
		});
	};



	const handleSubmit = (e) =>{
		e.preventDefault();
	}
  return (
    <>
      <div className="grid md:grid-cols-2 min-h-screen w-full bg-red-100">
        <div className="flex items-center justify-center bg-primary text-primary-foreground">
          <div className="max-w-md space-y-6 px-4 py-12 sm:px-6 lg:px-8">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold tracking-tight">
                Sign in to your account
              </h1>
              <p className="text-muted-foreground">
                Enter your email and password below to access your account.
              </p>
            </div>
            <form method="POST" id="Adopter-login" onSubmit={handleSubmit}>
              <input
                type="email"
                className="login_input" 
                placeholder=" Email"
                id="email"
                name="email"
                value={user.email}
                onChange={handleInput}
              />
             
              <input
                type="password"
                className="login_input"
                placeholder="Password"
                id="email"
                name="password"
                value={user.password}
                onChange={handleInput}

              />

              <button
                className="login_button flex_ic  w-full  hover: ml-auto mr-auto "
                
              >
                <span className="ml-">LOG IN</span>
              </button>
            </form>
            <p className="text-center text-sm text-muted-foreground">
              Don&apos;t have an account?{" "}
              <button className="p-x-5 text-red-600 text-bold">
                <Link to="/signup">Sign up</Link>
              </button>
            </p>
          </div>
        </div>
        <div className="hidden md:block">
          <img
            src={login_image}
            alt="Login illustration"
            width={1920}
            height={1080}
            className="h-full w-full object-contain pr-10"
            style={{ aspectRatio: "1920/1080", objectFit: "contain" }}
          />
        </div>
      </div>
    </>
  );
}

export default Login
