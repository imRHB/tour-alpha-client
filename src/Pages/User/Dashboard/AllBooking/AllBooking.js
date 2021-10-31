import React from 'react';

const AllBooking = () => {
    return (
        <div className="container my-5">
            <h3 className="text-center fs-3 fw-bold text-info py-4">All Booking</h3>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>abc@xyz.com</td>
                        <td><button className="btn btn-danger">Delete</button></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>abc@xyz.com</td>
                        <td><button className="btn btn-danger">Delete</button></td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Phill</td>
                        <td>abc@xyz.com</td>
                        <td><button className="btn btn-danger">Delete</button></td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Mark</td>
                        <td>abc@xyz.com</td>
                        <td><button className="btn btn-danger">Delete</button></td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td>Jacob</td>
                        <td>abc@xyz.com</td>
                        <td><button className="btn btn-danger">Delete</button></td>
                    </tr>
                    <tr>
                        <th scope="row">6</th>
                        <td>Phill</td>
                        <td>abc@xyz.com</td>
                        <td><button className="btn btn-danger">Delete</button></td>
                    </tr>
                    <tr>
                        <th scope="row">7</th>
                        <td>Mark</td>
                        <td>abc@xyz.com</td>
                        <td><button className="btn btn-danger">Delete</button></td>
                    </tr>
                    <tr>
                        <th scope="row">8</th>
                        <td>Jacob</td>
                        <td>abc@xyz.com</td>
                        <td><button className="btn btn-danger">Delete</button></td>
                    </tr>
                    <tr>
                        <th scope="row">9</th>
                        <td>Phill</td>
                        <td>abc@xyz.com</td>
                        <td><button className="btn btn-danger">Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default AllBooking;