import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <section id="newsletter" className="section-p1 section-m1">
        <div className="newstext">
          <h4>Sign Up For Newsletter</h4>
          <p>
            Get E-mail updates about our latest shop and{" "}
            <span>special offers.</span>
          </p>
        </div>
        <div className="form">
          <input type="text" placeholder="Your email address" />
          <button className="normal">Sign Up</button>
        </div>
      </section>
      <footer className="section-p1">
        <div className="col">
          <img className="logo" src="images/logo.png" alt="" />
          <h4>Contact</h4>
          <p>
            <strong>Address:</strong> Lahore, Pakistan - 54840
          </p>
          <p>
            <strong>Phone:</strong> +92-321-4655990
          </p>
          <p>
            <strong>Hours:</strong> 10:00 - 18:00, Mon - Sat
          </p>
          <div className="follow">
            <h4>Follow us</h4>
            <div className="icon">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-pinterest-p"></i>
              <i className="fab fa-youtube"></i>
            </div>
          </div>
        </div>
        <div className="col">
          <h4>About</h4>
          <a href="#">About us</a>
          <a href="#">Delivery Information</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="col">
          <h4>My Account</h4>
          <a href="#">Sign In</a>
          <a href="#">View Cart</a>
          <a href="#">My Wishlist</a>
          <a href="#">Track My Order</a>
          <a href="#">Help</a>
        </div>
        <div className="col install">
          <h4>Install App</h4>
          <p>From App Store or Google Play</p>
          <div className="row">
            <img src="images/pay/app.jpg" alt="" />
            <img src="images/pay/play.jpg" alt="" />
          </div>
          <p>Secured Payment Gateway</p>
          <img src="images/pay/pay.png" alt="" />
        </div>
        <div className="copyright">
          <p>Created By Muhammad Awais | All Rights Reserved | &#169; 2023</p>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
