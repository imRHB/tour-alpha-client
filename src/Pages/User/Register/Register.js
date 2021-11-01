import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import './Register.css';

const googleIcon = <FontAwesomeIcon icon={faGoogle} />;
const githubIcon = <FontAwesomeIcon icon={faGithub} />;

const Register = () => {
    const { user, signInWithGoogle, signInWithGithub, logout } = useAuth();

    return (
        <div className="container my-5 form-container">
            <div className="shadow-sm rounded-3 border border-1 mx-auto user-form">
                {
                    user?.email ? <div className="text-center my-4">
                        <h3 className="mb-4 text-primary text-start">Logged in as</h3>
                        <img src={user.photoURL} alt="" className="user-img" />
                        <h3 className="text-success mt-2">{user.displayName}</h3>
                        <p className="text-muted">{user.email}</p>
                        <button className="btn btn-outline-dark my-3" onClick={logout}>Logout</button>
                    </div>
                        : <div>
                            <h3 className="mb-4 text-primary">Registration</h3>
                            <div className="text-center my-5">
                                <p>with</p>
                                <button className="btn btn-outline-secondary fs-4 me-4" onClick={signInWithGoogle}>{googleIcon}</button>
                                <span className="fs-5 me-4">or</span>
                                <button className="btn btn-outline-secondary fs-4" onClick={signInWithGithub}>{githubIcon}</button>
                            </div>
                        </div>
                }
            </div>
        </div>
    );
};

export default Register;