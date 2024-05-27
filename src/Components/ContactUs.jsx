import React from "react";
import "../App.css";

function ContactUs() {
  return (
    <footer>
      <div className="overviewSection">
        <div className="col col1">
          <div className="heading">
            <strong>ABOUT US</strong>
          </div>
          <div className="about">
            <p>
            Realty Shopee is your personalized real estate advisor with the aim to provide cutting edge market research and investment advise to buyers of luxury properties. We are a Gurgaon Real Estate Brokerage firm that prides itself in providing personalized attention to all your Real Estate needs, servicing buyers and sellers though-out Gurgaon. At Realty Shopee, we strive to understand what investors are looking for and value most, then design and execute a tailored strategy that best align with their goals. With a combined, over 12 years of experience in Gurgaon real estate market, legal, tax, investment and asset management, our team of experts can walk you through every step of the real estate investment process.
            </p>
          </div>
        </div>

      <div className="col col2">
      <div className="heading">
            <strong>Get Connected With Us!</strong>
          </div>
        <div className="form-container">
          {/* <span id="close-form" className="close-icon">&times;</span> */}
          <form id="main-form">
              <input type="text" id="clientName" placeholder="Enter Your Name" required />
              <input type="tel" id="mobile" placeholder="Enter Your Mobile" required />
              <input type="email" id="email" placeholder="Enter Your Email" required />
              <select id="projects-dropdown-2" name="interestedIn" required>
                <option value="">Select a Project</option>
              </select> 
              <input type="text" id="whenCanYouPlanAVisit" placeholder="When Can You Plan A Visit?" required />
              <button type="submit">Submit</button>
            </form>
           </div>
        </div>

        <div className="col col3">
          <div className="heading">
            <strong> Here We Are!</strong>
          </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.562110225165!2d77.04811607613125!3d28.402290994497886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d2386285cf87f%3A0x7c8da8315bbf3768!2sRealty%20Shopee%20-%20Best%20Real%20Estate%20Company%20in%20Gurugram%20%7C%20Real%20Estate%20Consultancy%20in%20Gurugram!5e0!3m2!1sen!2sin!4v1716795190017!5m2!1sen!2sin" width="350" height="300" title="ourOffice" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          
        </div>
      </div>
    </footer>
  );
}

export default ContactUs;
