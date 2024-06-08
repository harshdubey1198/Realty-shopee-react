import React, { useState, useRef, useEffect } from "react";
import "../App.css";
import projectsData from "../data100acress.json";

function ContactUs() {
  const [suggestions, setSuggestions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [formData, setFormData] = useState({
    clientName: "",
    email: "",
    mobile: "",
    interestedIn: "",
    whenCanYouPlanAVisit: ""
  });
  const suggestionsRef = useRef(null);

  // Function to handle input change
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === "interestedIn") {
      setSearchTerm(value);

      // Filter suggestions based on the search term
      const filteredSuggestions = projectsData.data.filter((project) =>
        project.projectName.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    }

    // Update form data
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Function to handle suggestion selection
  const handleSuggestionClick = (projectName) => {
    setSearchTerm(projectName);
    setSuggestions([]); // Clear suggestions
    setFormData({
      ...formData,
      interestedIn: projectName
    });
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://realtyshopee-backend.onrender.com/queryform",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log("Form submitted successfully:", data);
        // Clear form data after submission
        setFormData({
          clientName: "",
          email: "",
          mobile: "",
          interestedIn: "",
          whenCanYouPlanAVisit: ""
        });
        setSearchTerm("");
      } else {
        console.error("Failed to submit form:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target)
      ) {
        setSuggestions([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
            <form id="main-form" onSubmit={handleSubmit}>
              <input
                type="text"
                id="clientName"
                name="clientName"
                placeholder="Enter Your Name"
                value={formData.clientName}
                onChange={handleInputChange}
                required
              />
              <input
                type="tel"
                id="mobile"
                name="mobile"
                placeholder="Enter Your Mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <div className="suggestion-container" ref={suggestionsRef}>
                <input
                  type="text"
                  id="interestedIn"
                  name="interestedIn"
                  placeholder="Search for Project"
                  value={searchTerm}
                  onChange={handleInputChange}
                  required
                />
                {suggestions.length > 0 && (
                  <ul className="suggestions">
                    {suggestions.map((project) => (
                      <li
                        key={project.projectName}
                        onClick={() =>
                          handleSuggestionClick(project.projectName)
                        }
                      >
                        {project.projectName}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <input
                type="text"
                id="whenCanYouPlanAVisit"
                name="whenCanYouPlanAVisit"
                placeholder="When Can You Plan A Visit?"
                value={formData.whenCanYouPlanAVisit}
                onChange={handleInputChange}
                required
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>

        <div className="col col3">
          <div className="heading">
            <strong>Here We Are!</strong>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.562110225165!2d77.04811607613125!3d28.402290994497886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d2386285cf87f%3A0x7c8da8315bbf3768!2sRealty%20Shopee%20-%20Best%20Real%20Estate%20Company%20in%20Gurugram%20%7C%20Real%20Estate%20Consultancy%20in%20Gurugram!5e0!3m2!1sen!2sin!4v1716795190017!5m2!1sen!2sin"
            width="350"
            height="300"
            title="ourOffice"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </footer>
  );
}

export default ContactUs;
