import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

    const [data, setData] = useState([])

    const getApiData = async () => {
        try {
            const res = await axios.get("http://localhost:8001/api/category");
            if (res.status === 200) {
                setData(res.data.data);
            }
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    useEffect(() => {
        getApiData();
    }, []);
    return (
        <>
            {/* <!-- Footer Start --> */}
            <div className="container-fluid bg-white footer">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
                            <Link to="/" className="d-inline-block mb-3">
                                <h1 className="text-primary">ZENS Health Care</h1>
                            </Link>
                            <p className="mb-0">Welcome to Zens Health Care!
                                A leader in pharmaceutical innovation dedicated to improving global health and well-being. We are committed to delivering high-quality, effective, and accessible medications to patients worldwide.</p>
                        </div>
                        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
                            <h5 className="mb-4">Get In Touch</h5>
                            <p><i className="fa fa-map-marker-alt me-3"></i>SHOP NO-10 GROUND FLOOR PROPERTY NO B-5,DDA MARKET,YAMUNA VIHAR DELHI-110053</p>
                            <p><i className="fa fa-phone-alt me-3"></i>+91 95555 55122</p>
                            <p><i className="fa fa-envelope me-3"></i>Zenshealthcare@gmail.com</p>
                            <div className="d-flex pt-2">
                                <a className="btn btn-square btn-outline-primary me-1" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square btn-outline-primary me-1" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square btn-outline-primary me-1" href=""><i className="fab fa-instagram"></i></a>
                                <a className="btn btn-square btn-outline-primary me-1" href=""><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
                            <h5 className="mb-4">Our Category</h5>
                            {
                                data.map((item, index) =>
                                    <Link className="btn btn-link" to={`/product/category/${item.name}`}>{item.name}</Link>
                                )
                            }
                        </div>
                        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
                            <h5 className="mb-4">Popular Link</h5>
                            <Link className="btn btn-link" to="/about">About Us</Link>
                            <Link className="btn btn-link" to="/contact">Contact Us</Link>
                            <Link className="btn btn-link" to="/privacypolicy">Privacy Policy</Link>
                            <Link className="btn btn-link" to="/term&condition">Terms & Condition</Link>
                            <Link className="btn btn-link" to="/return&refund">Return & Refund Policy</Link>
                            <Link className="btn btn-link" to="/blog">Blog</Link>
                            {/* <Link className="btn btn-link" to="/testimonial">Testimonial</Link> */}
                        </div>
                    </div>
                </div>
                <div className="container wow fadeIn" data-wow-delay="0.1s">
                    <div className="copyright">
                        <div className="row">
                            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                &copy; <a className="border-bottom" href="#">Your Site Name</a>, All Right Reserved.
                                Designed By <a className="border-bottom" href="https://Digiindiasolutions.com">Digi India solutions </a> .
                            </div>
                            <div className="col-md-6 text-center text-md-end">
                                <div className="footer-menu">
                                    <Link to="/">Home</Link>
                                    <Link to="/cookies">Cookies</Link>
                                    <Link to="/help">Help</Link>
                                    <Link to="/faq">FAQs</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Footer End --> */}
        </>
    )
}

export default Footer
