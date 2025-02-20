import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            await axios.post("http://localhost:5000/login", { username, password }, { withCredentials: true });
            localStorage.setItem("isAuthenticated","true");
            alert("Login Successful");
            navigate('/home')
            
        } catch (error) {
            alert("Invalid Credentials");
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
