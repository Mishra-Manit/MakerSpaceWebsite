import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../images/berbawylogo.png'
import {FaLinkedin} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import { AiFillInstagram} from 'react-icons/ai'



const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">
            <article>
                <Link to="/" className='logo'>
                    <img src={Logo} alt="Footer Logo" />
                </Link>
                <p>
                    <b>Irvington High School Maker Space</b> <br /> <br />

                    Email: makers@berbawy.com <br /> <br />

                    Empowering learners to become makers. Our makerspace is a collaborative environment where students bring their ideas to life!
                </p>
                <div className="footer__socials">
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer noopener"><FaLinkedin/></a>
                    <a href="https://facebook.com" target="_blank" rel="noreferrer noopener"><FaFacebookF/></a>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer noopener"><AiOutlineTwitter/></a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer noopener"><AiFillInstagram/></a>
                </div>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to="/poster">Poster</Link>
                <Link to="/singlecolor">Single Color DCAL</Link>
            </article>
            <article>
                <h4>Insights</h4>
                <Link to="/s">FAQs</Link>
            </article>
            <article>
                <h4>Get In Touch</h4>
                <Link to="https://berbawy.com">Contact Us</Link>
                <Link to="https://berbawy.com">Support</Link>
            </article>
        </div>
        <div className="footer__copyright">
            <small>Berbawy Makers &copy; All Rights Reserved</small>
        </div>
    </footer>
  )
}

export default Footer