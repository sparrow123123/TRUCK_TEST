import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async () => {
        try {
            const res = await axios.post("http://localhost:5000/register", { username, password });
            console.log(res);
            if(res.data==="userexist"){
                alert("User already exist");

            }
            else{
            alert("User Registered!");
            }
           

        } catch (error) {
            console.error(error);
            alert("Registration Failed");
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleRegister}>Register</button>
            <Link to="/"><button>Login</button></Link>
        </div>
    );
}

export default Signup