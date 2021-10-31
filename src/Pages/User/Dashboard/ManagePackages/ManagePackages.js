import React, { useEffect, useState } from 'react';

const ManagePackages = () => {
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/packages')
            .then(res => res.json())
            .then(data => setPackages(data));
    }, [packages]);

    // Delete Package
    const handleDeletePackage = packgId => {
        const deleteConfirmation = window.confirm('Do you really want to delete the package? It can\'t bt undone.');

        if (deleteConfirmation) {
            const packgUrl = `http://localhost:5000/packages/${packgId}`;
            fetch(packgUrl, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    alert('Package deleted successfully.');
                })
        }
    };

    return (
        <div className="container">
            <h3 className="text-center fs-3 fw-bold text-info py-4">Available Packages</h3>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Package Name</th>
                        <th scope="col">Location</th>
                        <th scope="col">Update</th>
                        <th scope="col">Manage</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        packages.map((packg, index) => (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{packg.title}</td>
                                <td>{packg.location}</td>
                                <td><button className="btn btn-success">Update</button></td>
                                <td><button onClick={() => handleDeletePackage(packg._id)} className="btn btn-danger">Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManagePackages;