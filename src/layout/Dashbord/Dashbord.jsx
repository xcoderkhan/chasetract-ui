import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";


const Dashbord = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row w-full">
                <div className="text-center lg:text-left w-1/4">

                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">SignUp now!</h1>
                        <form>
                            <div className="grid grid-cols-2 gap-2">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">First Name</span>
                                    </label>
                                    <input type="text" placeholder="first name" name="firstname" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Last Name</span>
                                    </label>
                                    <input type="text" placeholder="last name" name="lastname" className="input input-bordered" />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" name="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Sign Up" className="btn bg-lime-300" />
                            </div>
                            <div className="mt-3 grid grid-cols-3 items-center text-sm text-red-300">
                                <hr className=" border-lime-300" />
                                <p className="text-center">Or</p>
                                <hr className=" border-lime-300" />
                            </div>
                            <div className="form-control mt-3 relative">
                                <FcGoogle className=" absolute left-12 lg:left-16 bottom-[17px] " />
                                <input type="submit" value='Sign Up with Google' className="btn bg-lime-300 items-center" />
                            </div>
                            <div className="mt-3">
                                <hr className=" border-lime-300" />
                            </div>
                            <label className="label">
                                <p className="label-text-alt">If you already register? <Link to='/login' className="label-text-alt link link-hover text-lime-300 font-semibold text-lg"> Login</Link></p>
                            </label>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashbord;