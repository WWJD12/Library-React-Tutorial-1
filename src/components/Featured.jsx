import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Featured = () => {
    return ( 
            <section id="features">
                <div className="container">
                    <div className="row">
                        <h2 className="section__title">
                            Featured <span className="blue">Books</span></h2>
                            <div className="books">
                                <div className="book">
                                    <a href="">
                                        <figure className="book__img--wrapper">
                                            <img src="" alt="" className="book__img" />
                                        </figure>
                                    </a>
                                    <div className="book__title">
                                        <a href="src/assets/atomic habits.jpg/" className="book__title--link">Atomic Habits</a>
                                    </div>
                                    <div className="book__ratings">
                                        <FontAwesomeIcon icon="star" />
                                        <FontAwesomeIcon icon="star" />
                                        <FontAwesomeIcon icon="star" />
                                        <FontAwesomeIcon icon="star" />
                                        <FontAwesomeIcon icon="star-half-alt" />
                                    </div>
                               </div> 
                            </div>
                        </div>
                    </div>
            </section>
        );
}  
export default Featured;