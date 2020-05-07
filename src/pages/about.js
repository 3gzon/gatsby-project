import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import leftImage from '../img/left-about-image.jpg'
import rightImage from '../img/right-about-image.jpg'
const About = () => (
  <Layout>
    <div className="heading">
      <h1>About Us</h1>
      <span>Get More Info About Our Agency</span>
    </div>
    <div className="cd-half-width second-slide">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="content second-content">
              <div className="row">
                <div className="col-md-7 left-image">
                  <img src={leftImage} />
                </div>
                <div className="col-md-5">
                  <div className="right-about-text">
                    <h4>Test</h4>
                    <p>Fusce neque leo, dapibus sed imperdiet sed, vulputate sed purus. Nam eget justo in nibh facilisis rhoncus. Donec et risus non mauris lobortis convallis. Aliquam id urna quis ante blandit semper.</p>
                    <div className="primary-button">
                      <a href="#">Discover More</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-7">
                  <div className="left-about-text">
                    <h4>What we do?</h4>
                    <p>Nam aliquam ultrices interdum. Vivamus metus mi, accumsan a tincidunt a, efficitur id felis. Vivamus non nibh malesuada, vestibulum nulla in, iaculis sem. Aenean tincidunt faucibus ipsum, ac aliquet nunc accumsan sed. Nulla sodales nunc sit amet libero egestas, ut interdum ex congue.</p>
                    <div className="primary-button">
                      <a href="#">Discover More</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 right-image">
                  <img src={rightImage} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)
export default About