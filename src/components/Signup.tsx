import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
        <form className="max-w-md m-auto pt-24">
            <h2 className="font-bold pb-2">Sign up today!</h2>
            <p>
                Already have an account? <Link to="/signin">Sign in</Link>
            </p>
            <div className="flex flex-col py-4">
                <input className="p-3 mt-6 border" type="email" placeholder="Email" />
                <input className="p-3 mt-6 border" type="password" placeholder="Password" />
                <button className="mt-6 w-full">Sign Up</button>
            </div>
        </form>
    </div>
  )
}

export default Signup
