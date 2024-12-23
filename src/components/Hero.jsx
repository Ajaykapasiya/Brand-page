const Hero = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        

        <div className="hero-btn">
          <button>Shop now</button>
          <button className="secondry-btn">Category</button>
        </div>

        <div className="shopping">
          <p>Also Available on </p>

          <div className="brands-icon">
            <img src="/images/flipkart.png" alt="flipkart" />
            <img src="/images/amazon.png" alt="amazon" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/shoe_image.png" alt="" />
      </div>
    </main>
  );
};

export default Hero;
