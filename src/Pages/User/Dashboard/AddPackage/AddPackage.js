import React from 'react';
import { Nav } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import './AddPackage.css';

const AddPackage = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        fetch(`http://localhost:5000/add-package`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => console.log(result));
        alert('New package added successfully');
        reset();
    };

    return (
        <div className="container my-5">
            <h3 className="text-center fs-3 fw-bold text-info py-4">Add New Tour Package</h3>
            <Nav className="my-3">
                <NavLink to="/dashboard">Manage Packages</NavLink>
                <NavLink to="/all-booking">All Booking</NavLink>
                <NavLink to="/my-Booking">My Booking</NavLink>
                <NavLink to="/add-package">Add Package</NavLink>
            </Nav>
            <form onSubmit={handleSubmit(onSubmit)} className="pb-4 add-package-form">
                <input {...register("title", { required: true })} placeholder="Tour package title" />
                <input {...register("location", { required: true })} placeholder="Tour destination" />
                <input {...register("img", { required: true })} placeholder="Insert direct image URL" />
                <textarea {...register("description", { required: true })} placeholder="Tour description" />
                <input type="number" {...register("price", { required: true })} placeholder="Tour package price" />
                <input type="number" {...register("people", { required: true })} placeholder="Specific number of people for the tour" />
                <input type="number" {...register("day", { required: true })} placeholder="How many days" />
                <input type="number" {...register("night", { required: true })} placeholder="How many night" />
                <input type="submit" value="Add New Package" className="btn btn-primary" />
            </form>
        </div>
    );
};

export default AddPackage;