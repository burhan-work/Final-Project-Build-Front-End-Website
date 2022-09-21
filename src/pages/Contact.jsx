import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../style/contact.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


const Contact = () => {
    const toastifySuccess = () => {
  toast('Form sent!', {
    position: 'bottom-right',
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,  
    draggable: false,
    className: 'submit-feedback success',
    toastId: 'notifyToast'
  });
};
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_kgyvlu4', 'template_nkqydma', form.current, '2kFaSX58Io2p7CJWX'
        )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset()
    };
    return (
        <section id="contact">
            <div className="container">
                <div id="main">
                    {/* <h1>Hubungi Kami</h1> */}
                    <div id="contact-form">
                        <h2>Get in Touch</h2>
                        <form ref={form} onSubmit={sendEmail}>
                            <input type="text"
                                placeholder="Full Name"
                                name="user_name" required />
                            <input type="email"
                                placeholder="email"
                                name="user_email" required />
                            <input type="text"
                                placeholder="Subject"
                                name="Subject" required />
                            <textarea name="message"
                                cols="30" rows="10"> </textarea>
                                
                            <button type='submit'
                                className="btn">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="col-md-6 d-flex align-items-stretch">
                  <div className="info-wrap w-100 p-lg-5 p-4 img">
                    <h3>Contact us</h3>
                    <p className="mb-4">
                      We're open for any suggestion or just to have a chat
                    </p>
                    <div className="dbox w-100 d-flex align-items-start">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-map-marker"></span>
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span>Address:</span> Desa Bukit Damai, Kecamatan Maluk, Kab. Sumbawa Barat, NTB
                        </p>
                      </div>
                    </div>
                    <div className="dbox w-100 d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-phone"></span>
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span>Phone:</span>
                          <a href="tel://123456789">082339292370</a>
                        </p>
                      </div>
                    </div>
                    <div className="dbox w-100 d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-paper-plane"></span>
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span>Email:</span>
                          <a href="febbylimas98@gmail.com">
                            febbylimas98@gmail
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="dbox w-100 d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-globe"></span>
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span>Website:</span>
                          <a href="#">G-FIVE-MART</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
        </section>
    )
}

export default Contact
