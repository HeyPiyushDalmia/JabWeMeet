import {React, useState} from 'react'
import home_image from '../Assets/img/home_hero_image.jpg'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
export const Signup=()=> {
	const [user, setUserData] = useState({
		firstname : "",
		lastname:"",
		email:"",
		password:"",
	});

	const navigate = useNavigate();
	const {storeTokenInLS} = useAuth();

	const handleInput =(e)=>{
		console.log(e);
		let name = e.target.name;
		let value = e.target.value;

		setUserData({...user, 
			[name]:value,
		});
	};



	const handleSubmit = async(e) =>{
		e.preventDefault();
			// console.log(user);
		try {
			
		
		const response = await fetch('http://localhost:5000/api/users/register', {
			method:"POST",
			headers: {
				"Content-Type" : "application/json"
			},
			body: JSON.stringify(user),
		
		});
		console.log(response);

		if(response.ok)
			{
				const res_data = await response.json();
				console.log('res from server', res_data);

				//stored teh token in the local storage
				storeTokenInLS(res_data.token);    

				setUserData({firstname : "",
					lastname:"",
					email:"",
					password:""});
					navigate("/Myaccount");

			}
	
	} catch (error) {
			console.log("register", error);
	}
	};
  return ( 
 <>

<div className="h-full bg-red-200 dark:bg-gray-900">
	{/* <!-- Container --> */}
	<div className="mx-auto">
		<div className="flex justify-center px-6 py-12">
			{/* <!-- Row --> */}
			<div className="w-full xl:w-3/4 lg:w-11/12 flex">
				{/* <!-- Col --> */}
				<div className="w-full h-auto bg-gray-400 dark:bg-gray-800 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
					style={{backgroundImage:`url(${home_image})`}}></div>
				{/* <!-- Col --> */}
				<div className="w-full lg:w-7/12 bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
					<h3 className="py-4 text-2xl text-center text-gray-800 dark:text-white">Create an Account!</h3>
					<form className="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded" onSubmit={handleSubmit}>
						<div className="mb-4 md:flex gap-12">
							<div className="mb-4 md:mr-2 md:mb-0">
								<label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white " htmlFor="firstname">
                                    First Name
                                </label>
								<input
                                    className=" w-full h-3/3 px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline "
                                    id="firstname"
                                    type="text"
									name="firstname"
									value={user.firstname}
                                    placeholder="First Name"
									onChange={handleInput}
                                />
							</div>
							<div className="md:ml-2">
								<label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white " htmlFor="lastname">
                                    Last Name
                                </label>
								<input
                                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline px-10"
                                    id="lastname"
                                    type="text"
									name="lastname"
									value={user.lastname}
									onChange={handleInput}
                                    placeholder="Last Name"
                                />
							</div>
						</div>
						<div className="mb-4">
							<label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="email">
                                Email
                            </label>
							<input
                                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
								name="email"
								value={user.email}
								onChange={handleInput}
                                placeholder="Email"
                            />
						</div>
						<div className="mb-4">
							<div className="mb-4 md:mr-2 md:mb-0">
								<label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="password">
                                    Password
                                </label>
								<input
                                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="password"
                                    type="password"
									name="password"
									value={user.password}
									onChange={handleInput}
                                    placeholder="Enter password"
                                />
	
							</div>
							
						</div>
						<div className="mb-6 text-center">
							<button
                                className="w-full px-4 py-2 font-bold text-white rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline login_button"
                                type="submit"
                            >
                                Register Account
                            </button>
						</div>
						<hr className="mb-6 border-t" />
						<div className="text-center">
							<a className="inline-block text-sm dark:text-blue-500 align-baseline hover:text-blue-800"
								href="./index.html">
								Already have an account? <span className="text-red-600"> Login! </span>
							</a>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
 
 
 </>
  )
}

export default Signup
