import React from "react";
import { useQuery } from "@apollo/client";
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div>
            login page 
            <Link
                to={'/'}>
                 link to homepage 
            </Link>
        </div>
    )
}

export default Login