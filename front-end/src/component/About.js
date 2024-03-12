import about from "../image/aboutme.jpg";
import "./About.css"
const About = () => {
  return (
    <div className="about">
      <div className="about__head">
        <h3>About me</h3>
        <p>
          I had access to computers since I was a child, so I was passionate
          about the information technology industry. After I graduated in
          information technology, I took my passion more seriously. I have
          learned many new things and the more I learn, the more I find
          information technology very interesting and magical
        </p>
      </div>
      <div className="about__info">
        <div className="about__info__img">
          <img src={about} />
        </div>
        <div>
          <h3>Basic info</h3>
          <ul>
            <li>Date of birth: 18 December 2000</li>
            <li>Phone Number: +(84) 921 803 361</li>
            <li>Email: nguyensihien1812@gmail.com</li>
            <li>Address: Thanh Tri, Ha Noi</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
