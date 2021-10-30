import React from 'react';
import { Link } from 'react-router-dom';
import coverImg from '../../../images/demo-cover.jpg'

const PackageDetails = () => {

    return (
        <div className="container my-5">
            <h2 className="text-center fs-1 fw-bold text-secondary my-5">Package Details</h2>
            <div className="row">
                <h1>Package Title</h1>
                <div className="col-8 my-3 rounded-3">
                    <img className="img-fluid rounded-3" src={coverImg} alt="" />
                    <p className="my-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate eius aut quasi iure laborum possimus magnam iste atque, magni quo? Amet, dicta minima temporibus neque placeat voluptate, sit aut, doloremque natus deserunt accusamus sint error inventore dolorem explicabo quaerat autem quia doloribus sunt aspernatur eveniet ducimus quidem obcaecati? Id, quis error quibusdam natus vel non voluptate fuga ea iste dicta iure quaerat cumque minus animi! Repellat magni sed ducimus debitis officia tempore quos eos nemo, culpa totam eius perspiciatis enim delectus? Atque cum aperiam impedit sunt cupiditate corporis eum? Harum amet reiciendis obcaecati hic ut blanditiis suscipit tenetur tempore laboriosam cum neque soluta sequi debitis ipsa eius provident quos ea, consectetur molestiae ullam iste repellat? Nemo omnis, iure aliquam cum quisquam temporibus ad architecto perferendis facilis tempora pariatur! Quia, distinctio eos. Sequi culpa aut dolorem quae perferendis dolore architecto totam voluptatum omnis earum? Quaerat itaque dicta eaque culpa ducimus atque, dolor accusantium hic voluptates eius cupiditate fugiat fuga consequatur praesentium eligendi nemo maxime magnam quam consectetur distinctio enim nihil mollitia inventore cum? Consequatur necessitatibus inventore fuga. Eum consequuntur ipsum quas molestiae tempore, illum quasi tenetur error distinctio aliquid exercitationem cupiditate asperiores? Laborum quae optio nihil asperiores molestias nulla quidem quo!</p>
                </div>

                <div className="col-4 my-3">
                    <div className="bg-dark text-light p-4 rounded-3">
                        <p className="fs-4 fw-bold">Location</p>
                        <h2>$1999.99 <span className="fs-6">/per person</span></h2>
                        <p>7 days / 6 night</p>
                        <p>6 People</p>
                        <Link to="/booking">
                            <button className="btn btn-light">Book Now</button>
                        </Link>
                    </div>
                    <div className="bg-light my-3 px-2 py-4 rounded-3">
                        <p className="text-center fs-4 fw-bold text-danger">Travel Safety Tips</p>
                        <ul className="text-secondary">
                            <li>Do your research</li>
                            <li>Don't draw attention</li>
                            <li>Make copies of important documents</li>
                            <li>Keep your friends and family updated</li>
                            <li>Be wary of public Wi-Fi</li>
                            <li>Safeguard your hotel room</li>
                            <li>Be aware of your surroundings</li>
                        </ul>
                    </div>
                    <div className="bg-info rounded-3">
                        <p className="text-center fs-4 fw-bold text-light">Program</p>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"><span className="fw-bold me-2">D1</span>Departure at the airport and arrival at the hotel</li>
                            <li class="list-group-item"><span className="fw-bold me-2">D2</span>Visit the main museums and lunch included</li>
                            <li class="list-group-item"><span className="fw-bold me-2">D3</span>Excursion in the natural oasis and picnic</li>
                            <li class="list-group-item"><span className="fw-bold me-2">D4</span>Transfer to the airport and return to the agency</li>
                            <li class="list-group-item"><span className="fw-bold me-2">D5</span>Excursion in the natural oasis and picnic</li>
                            <li class="list-group-item"><span className="fw-bold me-2">D6</span>Visit the main museums and lunch included</li>
                            <li class="list-group-item"><span className="fw-bold me-2">D7</span>Departure at the airport and arrival at the hotel</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default PackageDetails;