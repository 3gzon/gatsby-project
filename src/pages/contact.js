import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="heading">
      <h1>Contact us</h1>
      <span>You'll be responded within 48 hrs</span>
    </div>
    <div className="cd-half-width fivth-slide">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="content fivth-content">
              <div className="row">
                <div className="col-md-4">
                  <div className="left-info">
                    <p>Maecenas imperdiet sagittis lacus, ut consequat velit iaculis id. Praesent eu consequat urna. Morbi justo dolor, ornare sed lorem et, auctor iaculis ligula.
                              <br />
                      <em>5566 Donec mollis libero<br />at metus luctus 10660</em>
                    </p>
                    <ul className="social-icons">
                      <i><a href="#"><i className="fa fa-facebook"></i></a></i>
                      <i><a href="#"><i className="fa fa-twitter"></i></a></i>
                      <i><a href="#"><i className="fa fa-linkedin"></i></a></i>
                      <i><a href="#"><i className="fa fa-rss"></i></a></i>
                      <i><a href="#"><i className="fa fa-behance"></i></a></i>
                    </ul>
                  </div>
                </div>
                <div className="col-md-8">
                  <form id="contact" action="" method="post">
                    <fieldset>
                      <input name="name" type="text" className="form-control" id="name" placeholder="Your Name" required="" />
                    </fieldset>
                    <fieldset>
                      <input name="email" type="email" className="form-control" id="email" placeholder="Email" required="" />
                    </fieldset>
                    <fieldset>
                      <textarea name="message" rows="6" className="form-control" id="message" placeholder="Message" required=""></textarea>
                    </fieldset>
                    <fieldset>
                      <button type="submit" id="form-submit" className="btn">Send Message</button>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Contact