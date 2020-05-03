import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import '../styles/base.scss';
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="heading">
      <h1>NEWLINE</h1>
      <span>Welcome to Web Design Agency</span>
    </div>
    <div className="cd-full-width first-slide">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="content first-content">
              <h4>About Newline Template</h4>
              <p>Newline is free CSS template provided by templatemo site. Credits go to <a href="https://videos.pexels.com/videos/busy-street-in-the-city-1089">Pexels.com</a> for a video background and <a href="https://unsplash.com">Unsplash</a> for images. Please support templatemo by spreading a word. Thank you. If you have any question, feel free to contact us on Facebook page. Quisque dictum convallis mi. In dapibus auctor dictum donec mattis quis eros ultricies feugiat.</p>
              <div className="primary-button">
                <a href="#">Discover More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
