import './Footer.css';
import 'font-awesome/css/font-awesome.min.css';


const Footer = () => {

  return (
    <div className="footer-container">
      <footer>
        <div className="rounded-social-buttons">
          <a className="social-button facebook" href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook"></i></a>
          <a className="social-button twitter" href="https://www.twitter.com/" target="_blank"><i className="fa fa-twitter"></i></a>
          <a className="social-button linkedin" href="https://www.linkedin.com/" target="_blank"><i className="fa fa-linkedin"></i></a>
          <a className="social-button youtube" href="https://www.youtube.com/" target="_blank"><i class="fa fa-youtube"></i></a>
          <a className="social-button instagram" href="https://www.instagram.com/" target="_blank"><i className="fa fa-instagram"></i></a>
        </div>
      </footer>
    </div>
  )
}

export default Footer