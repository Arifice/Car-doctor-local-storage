import { Link, useLocation, useNavigate } from "react-router-dom";
import { getUserData } from "../localStorage";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
    const {setUser}=useContext(AuthContext);
    const location=useLocation();
    const navigate=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        const form=e.target;            
        const email=form.email.value;
        const password=form.password.value;
        const user={email,password};
        console.log({user});
        const storedUsers=getUserData();
        const LogginUser=storedUsers.find(storedUser=>storedUser.email===user.email && storedUser.password==user.password);
        console.log({storedUsers,LogginUser});
        if(LogginUser){
            setUser(LogginUser);
            navigate(location?.state?.pathname?location.state.pathname:'/')
            Swal.fire({
                icon: 'success',
                title: 'Yes.....',
                text: `You have successfully login`, 
                timer:1000,           
              })

        }
        else{
            navigate('/register')
            Swal.fire({
                icon: 'eroor',
                title: 'Opps.....',
                text: `You don't registerd , Please registerd`, 
                timer:1000,           
              }) 
        }
        
    }
    return (
        <div className=" py-20 bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    
                </div>
                <div className="card  w-1/2 shadow-2xl bg-base-200">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                           
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-secondary">Login</button>
                        </div>
                    </form>
                    <p className="text-center py-5 text-xl">New to this website? Please <Link to={'/register'} className="text-green-600 font-bold text-3xl underline ml-5">Register</Link></p>
                </div>
            </div>
        </div>
    );
};


export default Login;