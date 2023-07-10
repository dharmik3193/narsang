import axios from "axios";
import { useEffect, useState } from "react";

const Contactus = () => {

    useEffect(() => {

        window.scrollTo({ top: 0, behavior: 'smooth' });

    }, [])

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const submitdata = (e) => {
        e.preventDefault();

        axios.post('https://attractive-gold-wetsuit.cyclic.app/users/add-inquiry-narsang', {
            name: name,
            email: email,
            mobile: mobile,
            subject: subject,
            message: message
        })
            .then(function (response) {
                // console.log(response);
                alert("Thank you for your inquiry!");
                setName('');
                setEmail('');
                setMobile('');
                setSubject('');
                setMessage('');
            })
            .catch(function (error) {
                // console.log(error);
                alert(error.message)
            });

    }

    return (
        <>
            <section className="inner-page">
                <div className="container">
                    <div className="row">
                        <h1>Contact Us</h1>
                    </div>
                </div>
            </section>
            <section className="section-inner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 contact-bg-1">
                            <div className="contact-info">
                                <div className="contact-detail">
                                    <div className="cont-desc">
                                        <h3>Head Office</h3>
                                        <p>118, Sky view, Near Swaminarayan temple, Shamdham Laskana Road, Laskana, Surat - 395013.</p>
                                        <h3>Contact Info</h3>
                                        <p>+91 96877 74098 (24/7 Support Line)</p>
                                        <h3>Email Info</h3>
                                        <p>narsangoverseas01@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 contact-bg-2">
                            <div className="contact-form">
                                <h1>GET IN TOUCH</h1>
                                <form>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    required
                                                    onChange={(e) => { setName(e.target.value) }}
                                                    value={name}
                                                    placeholder="Full Name"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    required
                                                    onChange={(e) => { setEmail(e.target.value) }}
                                                    value={email}
                                                    placeholder="Email Id"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    required
                                                    onChange={(e) => { setMobile(e.target.value) }}
                                                    value={mobile}
                                                    placeholder="Mobile"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    required
                                                    onChange={(e) => { setSubject(e.target.value) }}
                                                    value={subject}
                                                    placeholder="Subject"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <textarea
                                                    className="form-control"
                                                    placeholder="Message"
                                                    spellCheck="false"
                                                    required
                                                    onChange={(e) => { setMessage(e.target.value) }}
                                                    value={message}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <button className="btn btn-lg btnconntact" onClick={submitdata}>Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container pt40">
                    <div className="row">
                        <div className="col-md-12">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29750.287377252334!2d72.87823789718841!3d21.240336070715234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be045efb272975f%3A0xd5018d266e988a05!2sSkyview%20Business%20Horizon!5e0!3m2!1sen!2sin!4v1688983194476!5m2!1sen!2sin" width="100%"
                                height={350}
                                frameBorder={0}
                                style={{ border: 0 }}
                                allowFullScreen=""
                                aria-hidden="false"
                                tabIndex={0}></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Contactus;