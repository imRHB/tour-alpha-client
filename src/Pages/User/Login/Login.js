import React from 'react';
import useFirebase from '../../../hooks/useFirebase';
import './Login.css';

const Login = () => {
    const { user, signInWithGoogle, logout } = useFirebase();

    return (
        <div className="container my-5">
            <h4>this is login</h4>
            {
                user.email ? <button className="btn btn-secondary" onClick={logout}>Logout</button>
                    :
                    <button className="btn btn-secondary" onClick={signInWithGoogle}>Login with Google</button>
            }
        </div>
    );
};

export default Login;