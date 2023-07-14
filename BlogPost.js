import React from 'react';
import './blogpost.css';
import { Link } from 'react-router-dom';

function BlogPost(props) {
  return (
    <div className="container">
      <div className="hero"></div>
      <div className="main">
        <div className="title-container">
          <h2>{props.title}</h2>
          <div className="author-date">
            <h3>{props.author}</h3>
            <p>{props.date}</p>
            <div className='profileimagecontainer'></div>
          </div>
        </div>
        <div className="content">
          <h4>INTRODUCTION</h4>
          <p>{props.introduction}</p>
          <h4>{props.bodytitle}</h4>
          <p>{props.causes}</p>
          <div className="img_container"><img src={props.image}></img></div>
          <p>image description</p>
          <blockquote>{props.quote}</blockquote>
          <h4>CONCLUSIONS</h4>
          <p>{props.conclusion}</p>
          <blockquote>{props.conclusionQuote}</blockquote>
          <p>{props.prevent}</p>
        </div>
        <div className="tags">
          <p>tags:</p>
          <a href="https://en.wikipedia.org/wiki/Optics">Optics</a>
          <a href="https://www.nei.nih.gov/learn-about-eye-health/eye-conditions-and-diseases">Eye Issues</a>
        </div>
      </div>
      <div className="articles">
        <div className="article-heading">
          <h5>Articles</h5>
          <h6>Recent Blogs</h6>
        </div>
        <div className="cards">
          <div className="cards-container one">
            <div className="img-holder">
              <a href="#">Read More</a>
            </div>
            <div className="card-text">
              <h4>Glaucoma Science</h4>
              <p>
              Glaucoma is a progressive eye disease that affects millions of people worldwide. It is often referred to as the silent thief of sight because it can cause irreversible damage to the optic nerve, leading to vision loss!
              </p>
            </div>
          </div>
          <div className="cards-container two">
            <div className="img-holder">
              <Link to="/blog3">Read More</Link>
            </div>
            <div className="card-text">
              <h4>Contact Lenses </h4>
              <p>
              Contact lenses give me the freedom to be me, without anything holding me back. They enhance my vision and allow me to see the world with clarity, while feeling confident and stylish!
              </p>
            </div>
          </div>
          <div className="cards-container three">
            <div className="img-holder">
              <a href="#">Read More</a>
            </div>
            <div className="card-text">
              <h4>Weak Eyesight</h4>
              <p>
              Let's cherish the gift of sight by nurturing our eyes with care and awareness. With conscious efforts and a commitment to eye health, we can enjoy a vibrant world filled with clarity and beauty.!
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default BlogPost;
