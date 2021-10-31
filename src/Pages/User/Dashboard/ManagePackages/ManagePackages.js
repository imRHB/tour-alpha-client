import React, { useEffect, useState } from 'react';

const ManagePackages = () => {
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/packages')
            .then(res => res.json())
            .then(data => setPackages(data));
    }, []);



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
                                <td><button className="btn btn-danger">Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManagePackages;