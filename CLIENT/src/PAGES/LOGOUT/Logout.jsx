import { useEffect } from "react";
import { useAuth } from "../../CONTEXT/Store"; 
import { useNavigate } from "react-router-dom";

const Logout = () => {
   const { LogoutUser } = useAuth();
   const navigate = useNavigate();

    useEffect(() => {
        LogoutUser();
        navigate("/signup");
    }, [LogoutUser, navigate]);
    
    return null;
}

export default Logout;