import React from "react";
import "./Terms_Conditions.css";
import { Helmet } from "react-helmet";

export const Terms_Conditions = () => {
  return (
    <div className="terms-conditions-main">
      <Helmet>
        <title>
          Terms & Conditions
        </title>
      </Helmet>
      <h1>Terms and Conditions</h1>
      <div className="terms-conditions-body">
        <p>
          Please read these terms and conditions carefully before using the
          Faisaliteb.ai website. By accessing or using our website, you agree to
          be bound by these terms and conditions. If you do not agree with any
          part of these terms, please refrain from using our website.
        </p>
        <ul>
          <li>
            <h3>Intellectual Property</h3>
            <p>
              All content on the Faisaliteb.ai website, including text,
              graphics, logos, images, videos, and software, is the property of
              Faisaliteb.ai and is protected by intellectual property laws. You
              may not reproduce, distribute, modify, or create derivative works
              without our prior written consent.
            </p>
          </li>
          <div className="border-div"></div>
          <li>
            <h3>Use of Information</h3>
            <p>
              The information provided on our website is for general
              informational purposes only. While we make every effort to ensure
              the accuracy of the information, we do not guarantee its
              completeness, timeliness, or reliability. By using our website,
              you acknowledge that any reliance on the information is at your
              own risk.
            </p>
          </li>
          <div className="border-div"></div>
          <li>
            <h3>Third-Party Links</h3>
            <p>
              Our website may contain links to third-party websites that are not
              owned or controlled by Faisaliteb.ai. We are not responsible for
              the content, policies, or practices of these third-party websites.
              We recommend reviewing the terms and conditions and privacy
              policies of any third-party websites you visit.
            </p>
          </li>
          <div className="border-div"></div>
          <li>
            <h3>Disclaimer of Warranties</h3>
            <p>
              Faisaliteb.ai makes no warranties, expressed or implied, regarding
              the accuracy, reliability, or availability of our website. We
              disclaim all warranties, including but not limited to, implied
              warranties of merchantability, fitness for a particular purpose,
              and non-infringement.
            </p>
          </li>
          <div className="border-div"></div>
          <li>
            <h3>Limitation of Liability</h3>
            <p>
              In no event shall Faisaliteb.ai be liable for any direct,
              indirect, incidental, special, or consequential damages arising
              out of or in connection with the use of our website. This
              includes, but is not limited to, damages for loss of profits,
              data, or other intangible losses.
            </p>
          </li>
          <div className="border-div"></div>
          <li>
            <h3>Privacy Policy</h3>
            <p>
              The collection and use of personal information on our website are
              governed by our Privacy Policy. By using our website, you consent
              to the collection, storage, and processing of your personal
              information as described in our Privacy Policy.
            </p>
          </li>
          <div className="border-div"></div>
          <li>
            <h3>Modifications to Terms and Conditions</h3>
            <p>
              Faisaliteb.ai reserves the right to modify or revise these terms
              and conditions at any time. Any changes will be effective
              immediately upon posting on our website. Your continued use of our
              website after any changes will constitute your acceptance of the
              modified terms and conditions.
            </p>
          </li>
          <div className="border-div"></div>
          <li>
            <h3>Governing Law</h3>
            <p>
              These terms and conditions shall be governed by and construed in
              accordance with the laws of Bangladesh jurisdiction. Any disputes
              arising out of or in connection with these terms and conditions
              shall be subject to the exclusive jurisdiction of the courts in
              Bangladesh jurisdiction.
            </p>
          </li>
          <div className="border-div"></div>
          <li>
            <h3>Severability</h3>
            <p>
              If any provision of these terms and conditions is found to be
              invalid or unenforceable, the remaining provisions shall continue
              to be valid and enforceable to the fullest extent permitted by
              law.
            </p>
          </li>
          <div className="border-div"></div>
          <li>
            <h3>Entire Agreement</h3>
            <p>
              These terms and conditions constitute the entire agreement between
              you and Faisaliteb.ai regarding the use of our website and
              supersede any prior agreements or understandings, whether written
              or oral.
            </p>
          </li>
          <div className="border-div"></div>
          <li>
            <h3>Contact Us</h3>
            <p>
              If you have any questions or concerns about these terms and
              conditions, please contact us at faisaliteb.com@gmail.com.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};
