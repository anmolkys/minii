import React from "react";
import "./course.css"
import { Link } from 'react-router-dom';
function Course(){

    return(
        <div className="containerHtml">
        <header class="header">

        <a href="#" class="logo"><i class="fas fa-book"></i> Sportify</a>

        <nav class="navbar">
            <a href="#home" class="hover-underline">home</a>
            <a href="#about" class="hover-underline">about</a>
            <a href="#courses" class="hover-underline">courses</a>
            <a href="#teacher" class="hover-underline">teacher</a>
            <a href="#review" class="hover-underline">review</a>
            <a href="#blog" class="hover-underline">blog</a>
            <a href="#contact" class="hover-underline">contact</a>
        </nav>

        <div class="icons">
            <div id="login-btn" class="fas fa-user"></div>
            <div id="menu-btn" class="fas fa-bars"></div>
        </div>

       
    </header>


    <div class="home" id="home">

        <div class="content">
            <h3>Chess Champions</h3>
            <p>Mastering Strategies and Tactics</p>
            <a href="#" class="btn">
                <span class="text text-1">Join Now</span>
                <span class="text text-2" aria-hidden="true">Join Now</span>
            </a>    
        </div>

    </div>


        <div class="about" id="about">

            <h1 class="heading">about Course</h1>
    
            <div class="container">
    
                <div class="about-image">
                </div>
    
                <div class="about-content">
                    <h3>Learning Objectives</h3>
                    <p>- Fork: A single piece attacks two or more opponent pieces simultaneously.<br></br>
                        - Pin: A piece is unable to move because it would expose a more valuable piece behind it to capture.<br></br>
                        - Skewer: A tactic where a more valuable piece is attacked and forced to move, leaving a less valuable piece vulnerable behind it.<br></br>
                        
                        - Double Attack: Simultaneously attacking two pieces at once with one move.
                        </p>  
                    <p>
                        - Back Rank Mate: Trapping the opponent's king on the back rank with pieces, usually with a rook or queen.<br></br>
                       
                        - Deflection: Forcing an opponent's piece to move away from a valuable square or piece it was protecting.<br></br>
                        - Decoy: Sacrificing a piece to lure an opponent's piece to a specific square.<br></br>
                        - Interference: Placing a piece in between two enemy pieces to disrupt their coordination or block their line of communication. </p>  
                    <a href="#" class="btn">
                        <span class="text text-1">read more</span>
                        <span class="text text-2" aria-hidden="true">read more</span>
                    </a>        
                </div>
    
            </div>
    
        </div>



    <div class="review" id="review">

        <h1 class="heading">our students review</h1>

        <div class="swiper review-slider">

            <div class="swiper-wrapper">

                <div class="swiper-slide slide">
                    <p>"Incredible results! This running course took my performance to new heights. Structured plans and expert tips helped me run faster and avoid injuries."</p>
                    <div class="wrapper">
                        <div class="separator"></div>
                        <div class="separator"></div>
                        <div class="separator"></div>
                        <div class="separator"></div>
                        <div class="separator"></div>
                    </div>
                    <i class="fas fa-quote-right"></i>
                    <div class="user">

                        <div class="user-info">
                            <h3>Michael B.</h3>
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="swiper-slide slide">
                    <p>"This soccer course revamped my coaching strategies completely. My team's performance has skyrocketed. Highly recommended for coaches!" </p>
                    <div class="wrapper">
                        <div class="separator"></div>
                        <div class="separator"></div>
                        <div class="separator"></div>
                        <div class="separator"></div>
                        <div class="separator"></div>
                    </div>
                    <i class="fas fa-quote-right"></i>
                    <div class="user">

                        <div class="user-info">
                            <h3>Emily</h3>
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="swiper-slide slide">
                    <p>"Unbelievable progress!From serves to footwork, each lesson was gold. Now, I play with confidence and finesse, beating opponents I once struggled with."</p>
                    <div class="wrapper">
                        <div class="separator"></div>
                        <div class="separator"></div>
                        <div class="separator"></div>
                        <div class="separator"></div>
                        <div class="separator"></div>
                    </div>
                    <i class="fas fa-quote-right"></i>
                    <div class="user">

                        <div class="user-info">
                            <h3>David</h3>
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="swiper-slide slide">
                    <p>"Checkmate guaranteed! Structured lessons and expert tips have made me a formidable opponent on the board." </p>
                    <div class="wrapper">
                        <div class="separator"></div>
                        <div class="separator"></div>
                        <div class="separator"></div>
                        <div class="separator"></div>
                        <div class="separator"></div>
                    </div>
                    <i class="fas fa-quote-right"></i>
                    <div class="user">
                        <div class="user-info">
                            <h3>Sarah M.</h3>
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div>
                        </div>
                    </div>
                </div>

                

            </div>

        </div>

    </div>


    <div class="contact" id="contact">
        

         <a><h1><Link to="/feedback">
            <span class="text text-2" aria-hidden="true">Feedback</span>
            </Link>
        </h1></a>
         


    </div>



    <div class="footer">

        <div class="box-container">

            <div class="box">
                <h3>find us here</h3>
                <p>Connect with us online for top-tier sports courses and expert guidance.</p>
                <div class="share">
                    <a href="#" class="fab fa-facebook-f"></a>
                    <a href="#" class="fab fa-twitter"></a>
                    <a href="#" class="fab fa-instagram"></a>
                    <a href="#" class="fab fa-linkedin"></a>
                </div>
            </div>

            <div class="box">
                <h3>contact us</h3>
                <p>+1234 587 1478</p>
                <a href="#" class="link">sportify.123@gmail.com</a>
            </div>

            <div class="box">
                <h3>localization</h3>
                <p>230 points of the pines <br></br>
                colorado springs <br></br>
                united states</p>
            </div>

        </div>
        <div class="credit">created by <span>Anwesha </span>| all rights are reserved!</div>
    </div>
    </div>
    )

}

export default Course