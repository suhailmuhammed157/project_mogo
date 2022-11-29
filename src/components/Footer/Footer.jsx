import "./Footer.scss";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import image from '../../../public/work1.jpg'

const Footer = () => {
    return (
        <div className="footer" id="contact">
            <div className="details">
                <div className="description">
                    <h1>MoGo</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Tenetur assumenda voluptatem, eaque minima recusandae
                        magni culpa ab atque similique odit eligendi nulla neque
                        dolorum quisquam consectetur quasi repellendus sequi
                        consequuntur.
                    </p>
                    <h5><span className="followers">15k</span>followers </h5>
                    <hr/>
                    <div className="socials">
                        <h5><i> Follow Us:</i></h5>
                        <ul>
                            <li>
                                <FontAwesomeIcon icon={faFacebook} />
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faFacebook} />
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faFacebook} />
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faFacebook} />
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faFacebook} />
                            </li>
                        </ul>
                    </div>
                </div>
               
                <div className="instagram">
                    <h5>INSTAGRAM</h5>
                    <div className="insta-images">
                        <img src={image} alt="img" />
                        <img src={image} alt="img" />
                        <img src={image} alt="img" />
                        <img src={image} alt="img" />
                        <img src={image} alt="img" />
                        <img src={image} alt="img" />
                        <img src={image} alt="img" />
                        <img src={image} alt="img" />
                        <img src={image} alt="img" />
                    </div>
                    <h6><i>view more photos</i></h6>
                </div>
            </div>
            <hr />
            <h5 className="copyright">© 2016 MoGo free PSD template by <span className="name">Laaqiq</span></h5>
        </div>
    );
};

export default Footer;
