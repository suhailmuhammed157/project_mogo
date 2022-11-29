import "./Work.scss";
import work1 from "../../../public/work1.jpg";
import work2 from "../../../public/work2.jpg";
import work3 from "../../../public/work3.jpg";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonRifle } from "@fortawesome/free-solid-svg-icons";

const Work = () => {
    return (
        <div className="work" id="work">
            <h3>What we do</h3>
            <h2>STORY ABOUT US</h2>
            <div className="hr"></div>
            <h4>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
                assumenda recusandae in quas voluptatibus optio nostrum autem,
                debitis soluta nemo?
            </h4>

            <div className="work-gallery">
                <div className="img-container">
                    <img src={work1} alt="work1" />
                    <div className="overlay">
                        <div className="text">
                            <FontAwesomeIcon icon={faPersonRifle} />
                            <h5>SUPER TEAM</h5>
                        </div>
                    </div>
                </div>
                <div className="img-container">
                    <img src={work2} alt="work2" />
                    <div className="overlay">
                        <div className="text">
                            <FontAwesomeIcon icon={faPersonRifle} />
                            <h5>SUPER TEAM</h5>
                        </div>
                    </div>
                </div>
                <div className="img-container">
                    <img src={work3} alt="work3" />
                    <div className="overlay">
                        <div className="text">
                            <FontAwesomeIcon icon={faPersonRifle} />
                            <h5>SUPER TEAM</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;
