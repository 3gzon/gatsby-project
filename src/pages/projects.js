import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import itemOne from '../img/item-01.jpg'
import itemTwo from '../img/item-02.jpg'
import itemThree from '../img/item-03.jpg'
import itemFour from '../img/item-04.jpg'
import itemFive from '../img/item-05.jpg'
import itemSix from '../img/item-06.jpg'
import itemSeven from '../img/item-07.jpg'
import itemEight from '../img/item-08.jpg'


const Projects = () => (
  <Layout>
    <SEO title="Projects" />
    <div className="heading">
      <h1>Our projects</h1>
      <span>Here you can check our recent projects</span>
    </div>
    <div className="cd-half-width fourth-slide">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="content fourth-content">
              <div className="row">
                <div className="col-md-3 project-item">
                  <a href="img/item-01.jpg" data-lightbox="image-1"><img src={itemOne} /></a>
                </div>
                <div className="col-md-3 project-item">
                  <a href="img/item-02.jpg" data-lightbox="image-1"><img src={itemTwo} /></a>
                </div>
                <div className="col-md-3 project-item">
                  <a href="img/item-03.jpg" data-lightbox="image-1"><img src={itemThree} /></a>
                </div>
                <div className="col-md-3 project-item">
                  <a href="img/item-04.jpg" data-lightbox="image-1"><img src={itemFour} /></a>
                </div>
                <div className="col-md-3 project-item">
                  <a href="img/item-05.jpg" data-lightbox="image-1"><img src={itemFive} /></a>
                </div>
                <div className="col-md-3 project-item">
                  <a href="img/item-06.jpg" data-lightbox="image-1"><img src={itemSix} /></a>
                </div>
                <div className="col-md-3 project-item">
                  <a href="img/item-07.jpg" data-lightbox="image-1"><img src={itemSeven} /></a>
                </div>
                <div className="col-md-3 project-item">
                  <a href="img/item-08.jpg" data-lightbox="image-1"><img src={itemEight} /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Projects