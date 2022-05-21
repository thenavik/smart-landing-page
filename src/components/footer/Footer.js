import React from "react";
import "../../styles/footer/footer.scss";
import { FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa";
import { AiOutlineGooglePlus } from "react-icons/ai";

export default function () {
  const year = new Date().getFullYear();
  return (
    <>
      <footer>
        <div className="xcontainer">
          <div className="footer-social-icons">
            <h4>Follow Us</h4>
            <ul>
              <li>
                <a href="#">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaPinterestP />
                </a>
              </li>
              <li>
                <a href="#">
                  <AiOutlineGooglePlus />
                </a>
              </li>
            </ul>
          </div>
          <p>
            Copy © {year}. All Rights Reserved By{" "}
            <a href="https://repost.ofolio.ru/">Repost Space</a>
          </p>
        </div>
      </footer>
    </>
  );
}
