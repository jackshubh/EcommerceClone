import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-4 offset-1 col-sm-2">
            <h5>Get to Know Us</h5>
            <ul className="list-unstyled">
              <li>
                <Link>About Us</Link>
              </li>
              <li>
                <Link>Carrers</Link>
              </li>
              <li>
                <Link>Press Releases</Link>
              </li>
              <li>
                <Link>Amazon Cares</Link>
              </li>
              <li>
                <Link>Gift's Smile</Link>
              </li>
            </ul>
            <div>
              <h5>Connect with Me</h5>
              <li>
                <Link>Mail</Link>
              </li>
              <li>
                <Link>LinkedIn</Link>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
