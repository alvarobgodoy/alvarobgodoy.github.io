import { useState } from 'react';

export default function Contact() {
    const [emailRevealed, setEmailRevealed] = useState(false);
    const encodedEmail = 'YWx2YXJvLmdvZG95MjAwMkBnbWFpbC5jb20=';
    const email = atob(encodedEmail);

    const handleRevealClick = () => {
        setEmailRevealed(true);
    };

    return (
        <div className="section_contact">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 first-col">
                        <p className="subtitle">Connect with Me</p>
                        <h2>Contact Me</h2>
                        <p>Use the form to contact me, or find my email below and write to me directly.</p>
                        <p>
                            {emailRevealed ? (
                                <a href={`mailto:${email}`} className="email-link">
                                    {email}
                                </a>
                            ) : (
                                <button
                                    className="btn btn-link-dark"
                                    onClick={handleRevealClick}
                                >
                                    Click to reveal email
                                    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.299756 1.6247C-0.224054 0.969932 0.242119 0 1.08063 0L1.40002 0C1.69837 0 1.98114 0.133213 2.17111 0.363262L5.4742 4.36326C5.77942 4.73289 5.77943 5.26711 5.4742 5.63674L2.17111 9.63674C1.98114 9.86679 1.69837 10 1.40002 10H1.08063C0.242119 10 -0.224055 9.03007 0.299756 8.37531L2.50024 5.6247C2.79242 5.25948 2.79242 4.74052 2.50024 4.37531L0.299756 1.6247Z"/>
                                    </svg>
                                </button>
                            )}
                        </p>
                    </div>
                    <div className="col-sm-6 second-col">
                        <form action="https://formsubmit.co/alvaro.godoy2002@gmail.com" method="POST">
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label h6"><strong>Email address:<span>*</span></strong></label>
                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label h6"><strong>Message:<span>*</span></strong></label>
                                <textarea className="form-control" name="message" id="message" rows="3" placeholder="Your Message" required></textarea>
                            </div>
                            <div className="actions">
                                <button type="submit" className="btn btn-primary">
                                    Send
                                    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.299756 1.6247C-0.224054 0.969932 0.242119 0 1.08063 0L1.40002 0C1.69837 0 1.98114 0.133213 2.17111 0.363262L5.4742 4.36326C5.77942 4.73289 5.77943 5.26711 5.4742 5.63674L2.17111 9.63674C1.98114 9.86679 1.69837 10 1.40002 10H1.08063C0.242119 10 -0.224055 9.03007 0.299756 8.37531L2.50024 5.6247C2.79242 5.25948 2.79242 4.74052 2.50024 4.37531L0.299756 1.6247Z"/>
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
