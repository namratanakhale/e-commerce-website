import React from "react";
import "./Footer.css";
import { LocalShipping } from "@material-ui/icons";
import { Payment } from "@material-ui/icons";
import { ContactSupport } from "@material-ui/icons";
import { CheckCircle } from "@material-ui/icons";
import { Facebook } from "@material-ui/icons";
import { Instagram } from "@material-ui/icons";
import { Twitter } from "@material-ui/icons";
import { Telegram } from "@material-ui/icons";

function Footer() {
  return (
    <div className="footer">
      <div className="main-footer">
        <div className="container">
          <div className="row">
            {/* Column1 */}
            <div className="col">
              <h4>FREE SHIPPING</h4>
              <LocalShipping />
              <small>Cash on delivery</small>
            </div>
            {/* Column2 */}
            <div className="col">
              <h4>ONLINE PAYMENT</h4>
              <Payment />
              <small>Payment methods</small>
            </div>
            {/* Column3 */}
            <div className="col">
              <h4>24/7 SUPPORT</h4>
              <ContactSupport />
              <small>Unlimited help desk</small>
            </div>

            <div className="col">
              <h4>100% SAFE</h4>
              <CheckCircle />
              <small>View our benifits</small>
            </div>

            <div className="col">
              <h4>FREE RETURNS</h4>
              <small>Track or off orders</small>
            </div>
          </div>
          <hr />
          <div className="row">
            <p className="col-sm">
              &copy;{new Date().getFullYear()} AMAZE SHOPPING | All rights
              reserved | Terms Of Service | Privacy
            </p>

            <div className="social-icons">
              <a href="https://www.facebook.com/namrata.nakhale.3">
              <Facebook />
              </a>
              <a href="https://instagram.com/namratanakhale?igshid=YmMyMTA2M2Y=">
              <Instagram />
              </a>
              <a href="https://twitter.com/i/flow/single_sign_on">
              <Twitter />
              </a>
              <a href="https://t.me/namratanakhale3899">
              <Telegram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
