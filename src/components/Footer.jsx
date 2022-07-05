import facebookLogo from '../images/facebook.png';
import twitterLogo from '../images/twitter.png';
import instagramLogo from '../images/instagram.png';

function Footer() {

    const getYear = new Date().getFullYear();

  return (
    <>
    <div className='wrap'>
    <div className='main'></div>
    </div>
    <div className='footer'>
      <footer className='footerSocial fixed-bottom text-center text-white'>
      
        <a href="https://www.facebook.com">
          <img src={facebookLogo} alt="facebook icon" width='40px' />
        </a>

        <a className='middleSocial' href="https://www.instagram.com">
          <img src={instagramLogo} alt="instagram icon" width='40px' />
        </a>

        <a href="https://www.twitter.com">
          <img src={twitterLogo} alt="twitter icon" width='40px' />
        </a>
       
        <p className='copyright mt-3'>Edens Sketchbook &copy; {getYear}</p>
        
      </footer>
    </div>
    </>
  );
}

export default Footer;
