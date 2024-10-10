import React from "react";
import {
    FaEnvelopeOpen,
    FaPhoneSquareAlt,
    FaLinkedin,
    FaInstagram,
    FaGithub,
    FaWhatsapp
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { ToastContainer, toast } from "material-react-toastify";
import "material-react-toastify/dist/ReactToastify.css";
import "./Contact.css";

function Contact() {
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        formData.append("access_key", import.meta.env.VITE_API_KEY);
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });
        const data = await response.json();
        if (data.success) {
            toast("✌️ Form submitted!", { className: "toastify__toast--success" });
        } else {
            toast("☹️ Some error occured!", { className: "toastify__toast--error" });
        }
    };
    return (
        <section className="contact section">
            <h2 className="section__title">
                Get In <span>Touch</span>
            </h2>
            <div className="contact__container container grid">
                <div className="contact__data__left">
                    <h3 className="contact__title">Ready to start working together?</h3>
                    <p className="contact__description">
                        If you have a
                        project in mind or would like
                        to discuss potential
                        opportunities, please don't
                        hesitate to get in touch. I will
                        do my best to answer you as
                        soon as possible.
                    </p>
                    <div className="display__info">
                        <div className="contact__info">
                            <div className="info__item">
                                <FaEnvelopeOpen className="info__icon" />
                                <div>
                                    <span className="info__title">Mail me</span>
                                    <h4 className="info__desc">
                                        work.withashutosh1807@gmail.com
                                    </h4>
                                </div>
                            </div>
                            <div className="info__item">
                                <FaPhoneSquareAlt className="info__icon" />
                                <div>
                                    <span className="info__title">Call me</span>
                                    <h4 className="info__desc">+91 6386175405</h4>
                                </div>
                            </div>
                        </div>
                        <div className="contact__socials">
                            <a
                                href="https://github.com/ashutosh-187"
                                className="contact__social-link"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/ashutosh-tiwari-a938a6243/"
                                className="contact__social-link"
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                href="https://wa.link/g9jvdh"
                                className="contact__social-link"
                            >
                                <FaWhatsapp/>
                            </a>
                            <a
                                href="https://www.instagram.com/ashutosh__187/"
                                className="contact__social-link"
                            >
                                <FaInstagram />
                            </a>
                        </div>
                    </div>
                </div>
                <form className="contact__form" onSubmit={onSubmit}>
                    <div className="form__input-group">
                        <div className="form__input-div">
                            <input
                                type="text"
                                name="Name"
                                className="form__control"
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div className="form__input-div">
                            <input
                                type="email"
                                name="Email"
                                className="form__control"
                                placeholder="Your Email"
                                required
                            />
                        </div>
                        <div className="form__input-div">
                            <input
                                type="text"
                                name="Subject"
                                className="form__control"
                                placeholder="Your Subject"
                                required
                            />
                        </div>
                    </div>
                    <div className="form__input-div">
                        <textarea
                            placeholder="Your Message"
                            name="Message"
                            className="form__control textarea"
                            required
                        ></textarea>
                    </div>
                    <button className="button">
                        Send Message
                        <span className="button__icon contact__button-icon">
                            <FiSend />
                        </span>
                    </button>
                    <ToastContainer
                        position="top-right"
                        autoClose={3000}
                        hideProgressBar
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                </form>
            </div>
        </section>
    );
}

export default Contact;