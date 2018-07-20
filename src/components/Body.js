import React, { Component } from 'react';
import profile from '../images/profile2.jpg'
import './Body.css'



class Body extends Component {
   
    render() {
      return (
            <div>
                <div className='parallax-container'>
                    <div className='section no-pad-bot'>
                        <div className='container'>
                        <br/>
                        <h1 className="header center font teal-text text-lighten-2">Portfolio</h1>
                        <div className="row center">
                        <h5 className="header col s12 text2">Full-Stack Collection 2018</h5>
                        </div>
                        <div className="row center">
                        {/* <a href="http://materializecss.com/getting-started.html" className="btn-large waves-effect waves-light teal lighten-1">Get Started</a> */}
                        </div>
                        <br/>
                        </div>
                    </div>
                    {/* <div className='parallax'><img src={picture1} alt="Unsplashed background img 1"/></div> */}
                </div>  

                <div className='container'>
                    <div className='section'>
                        <div className="row">
                        <div className="col s12 m4">
                        <div className="icon-block">
                            <h5 className="center">About Me</h5>
                            <p className="light"> I am enrolled in the UCSD Extension Coding Bootcamp. My strengths are my problem solving and
                            analysis. I started coding with VBA for data analysis. From there I decided to expand my skillset towards web development.
                            It allows me to challenege my creativity and utilize my skillset. Furthermore, working in the tech industry would allow me 
                            to work in a field I am passionate about.
                            </p>
                        </div>
                        </div>
                        <div className="col s12 m4">
                        <div className="icon-block">
                            <h5 className="center">Education</h5>
                            <p className="light"> I am enrolled in the UCSD Extension Coding Bootcamp. I am also an alumni from SDSU with a 
                            bachelors degree in economics. During my time at SDSU I was awarded Dean's List (3.5GPA Semester) for the Spring 2012, Fall 2012 and 
                            Spring 2013. I also recieved a Distinction in EConomics as well(Over 3.5 GPA for Upper Division Classes). 

                            </p>
                        </div>
                        </div>
                        <div className="col s12 m4">
                        <div className="icon-block">
                            <h5 className="center">Tech Stack</h5>
                            <p className="light"> 
                                My main coding language is Javascript. I have also used HTML and CSS. I specialize in full-stack applications and have experience using the MERN stack.
                                For databases I have used MongoDB, Firebase and mySQL. On the front end I have used REACT and custom HTML and CSS.
                                For creating a server I use Node.js along with Express.
                            </p>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="parallax-container2 valign-wrapper">
                    <div className="section no-pad-bot">
                    <div className="container">
                        <div className="row center">
                        </div>
                    </div>
                    </div>
                </div>

                <div className="container">
                <div className="section">

                <div className="row">
                    <div className="col s12 center">
                    <h3><i className="mdi-content-send brown-text"></i></h3>
                    <h4>Objective</h4>
                    <p className="left-align light">
                    My objective is to utilize my knowledge and skillset while working for a company that has a mission I fully believe in.
                    As a junior developer I would prefer working in a full-stack role or in backend development. I would love to work on projects
                    that relate to adding new features to current product or creating a new product.
                    </p>
                    </div>
                </div>
                </div>
                </div>

                <div className="parallax-container3 valign-wrapper">
                <div className="section no-pad-bot">
                <div className="container">
                    <div className="row center">
                    </div>
                </div>
                </div>
                </div>

                 <div className=" foot footer-copyright">
                <div className="container">
                Made by <a className="brown-text text-lighten-3" href="http://materializecss.com">Materialize</a>
                </div>
                </div>

            </div>  
      )
    }
}


export default Body