import { Link, useLocation, useNavigate } from "react-router-dom";
import { saveUsertData } from "../localStorage";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const Register = () => {
    const {setUser}=useContext(AuthContext);
    const location=useLocation();
    const navigate=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;        
        const phone=form.phone.value;
        const email=form.email.value;
        const password=form.password.value;
        const user={name,phone,email,password};
        console.log({user});
        saveUsertData(user);
        setUser(user);
        navigate(location?.state?.pathname? location?.state?.pathname : '/');
    }
    return (
        <div className=" py-20 bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    
                </div>
                <div className="card  w-1/2 shadow-2xl bg-base-200">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input type="number" name="phone" placeholder="Phone" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-secondary">Register</button>
                        </div>
                    </form>
                    <p className="text-center py-5 text-xl">Already have an account? Please <Link to={'/login'} className="text-green-600 font-bold text-3xl underline ml-5">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;