import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const urlBase = "https://glorious-space-bassoon-pjgrxv5pjwxq3rprq-3001.app.github.dev/"

const Signup = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    const postData = async (env) => {
        env.preventDefault();
        try {
            const response = await fetch(urlBase + "/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            });
            if (!response.ok) throw new Error(response.status);
            alert("¡Usuario registrado con éxito! Redirigiendo al login...");
            navigate("/login");

        } catch (error) {
            console.error("Error signing up:", error);
            alert("Error al registrar usuario. Por favor, intenta de nuevo.");
        }
    }
    return (
        <div className="text-center mt-5">
            <h1>Signup</h1>
            <div className="container p-5">
                <form className="p-5" onSubmit={(env) => postData(env)}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="mb-3 form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                        />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            <Link to="/">Home</Link>
        </div>
    );
}




export default Signup