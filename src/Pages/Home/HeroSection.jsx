export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Rohan Das P.</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack || Python</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            Web Developer skilled in React, Node.js, Django, and REST APIs. Python backend enthusiast passionate about creating impactful digital products and building the next big innovation.            
          </p>
        </div>
        <button
          className="btn btn-primary"
          onClick={() => {
            document.getElementById("Contact").scrollIntoView({ behavior: "smooth" });
          }}
        >
          Get In Touch
        </button>

      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}