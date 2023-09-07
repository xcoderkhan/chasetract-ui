import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row w-full">
                <div className="text-center lg:text-left w-1/2">

                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <form>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link to='#' className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-lime-300">Login</button>
                            </div>
                            <div className="mt-3 grid grid-cols-3 items-center text-sm text-red-300">
                                <hr className=" border-lime-300" />
                                <p className="text-center">Or</p>
                                <hr className=" border-lime-300" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-lime-300">Google</button>
                            </div>
                            <div className="mt-3">
                                <hr className=" border-lime-300" />
                            </div>
                            <label className="label">
                                <p className="label-text-alt">If you a new user? <Link to='/register' className="label-text-alt link link-hover text-lime-300 font-semibold text-lg"> Register</Link></p>
                            </label>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;