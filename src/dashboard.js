import React, {useState} from "react";
import logo from './pic/Lovepik_com-401147273-dumbbell.png';
import chart from './pic/bmi-chart (1).jpg';
import first from './pic/pngimg.com - bodybuilding_PNG92.png'
import sec from './pic/pngimg.com - bodybuilding_PNG85.png';
import cls1 from './pic/Gym___Kayla___6288_1200x800_5b2df79_en7c9df4a9e31f50600cf0c662ae49d97a.jpg';
import cls2 from './pic/zen-meditation-yoga-beach-with-women-wellness-fitness-health-stretching-lotus-pose-friends-doing-pilates-workout-exercise-mobility-flexibility-mindfulness_590464-83965.jpg';
import cls3 from './pic/triceps-dip.jpg';
import cls4 from './pic/desktop-wallpaper-strong-by-zumba-workouts-zumba-strong.jpg';
import { useNavigate } from "react-router-dom";
import food from './pic/article_7866255_foods-you-should-eat-every-week-to-lose-weight_-04-d58e9c481bce4a29b47295baade4072d.jpg';
import workout from './pic/gladiator.jpg';
import p1 from './pic/equipment (6).jpg';
import p2 from './pic/Why-Do-Exercise-Needs-Vary-Between-Individuals.jpg';
import p3 from './pic/PT-image-via-OriGym.jpg';
import c1 from './pic/noble.jpg';
import c2 from './pic/sri.jpg';
import me from './pic/WhatsApp Image 2023-12-16 at 21.38.05_d3cc7f44.jpg';
import './main';
import './bmi';
import FatPercentageCalculator from "./cal";
import CalorieCalculator from "./calocal";
import bodyfat from './pic/body-fat.jpg';
import calour from './pic/Calorie.jpg';



const Dashboard = () => {
  const navigate = useNavigate();
  

  const handleClick = (route) => {
    navigate(`/${route}`);
  }
  
  

  return (
    <div>
      <header className="header">
        <nav>
          <div className="nav__header">
            <div className="nav__logo">
              <a href="#"><img src={logo} alt="logo" />MuscleBuddy</a>
            </div>
            <div className="nav__menu__btn" id="menu-btn">
              <span><i className="ri-menu-line" /></span>
            </div>
          </div>
          <ul className="nav__links" id="nav-links">
            <li className="link"><a href="#home" onClick={() => handleClick('dashboard')}>Home</a></li>
            <li className="link"><a href="#about" onClick={() => handleClick('Workout')}>Workouts</a></li>
            <li className="link"><a href="#class" onClick={() => handleClick('Food')}>Foods</a></li>
            <li className="link"><a href="#trainer" onClick={() => handleClick('myworkout')}> My workouts</a></li>
            <li className="link"><a href="#price" onClick={() => handleClick('myfood')}>My Foods</a></li>
            <li><button className="btn" id="form-open">Profile</button></li>
          </ul>
        </nav>
        <div className="section__container header__container" id="home">
            <div className="header__image">
              <img src={first} alt="header" />
            </div>
            <div className="header__content">
              <h4>Build Your Body &amp;</h4>
              <h1 className="section__header">Shape Yourself!</h1>
              <h3 className="section__header">For FREE </h3>
              <p>
                Unleash your potential and embark on a journey towards a stronger,
                fitter, and more confident you. Sign up for 'Make Your Body Shape'
                now and witness the incredible transformation your body is capable
                of!
              </p>
              <div className="header__btn">
                <button className="btn">Join Today</button>
              </div>
            </div>
            
          </div>
      </header>
      {/* Centered container */}
      <div class="center-wrapper" style={{ padding: "20px"}}>
      <div className="BMIcontainer" style={{ marginBottom: "20px" ,  height: "650px" }}>
      <img src={chart} alt="BMI" />
      <h1 className="Bf">BMI Calculator</h1>
      <p>Height (cm)</p>
      <input className="bmiin" type="number" id="height"></input>
      <p>Weight (kg)</p>
      <input className="bmiin" type="number" id="weight"></input>
      <button className="bmib" id="btn">Calculate</button>
      <div id="result"></div>
      
    </div>
    <div class="center-wrapper" style={{ padding: "20px"}}>
    <div className="BMIcontainer" style={{ marginBottom: "20px", height: "650px" }}>
  <img src={bodyfat} alt="BMI" />
        <FatPercentageCalculator />
      </div>
      </div>
      <div class="center-wrapper" style={{ padding: "20px"}}>
      <div className="BMIcontainer" style={{ marginBottom: "20px", height: "650px" }}>
      <img src={calour} alt="BMI" />
        <CalorieCalculator />
      </div>
      </div>
    
  </div>
  
      
  <section className="section__container about__container" id="about">
          <div className="about__image">
            <img className="about__bg" src={sec} alt="bg" />
            <img src={sec} alt="about" />
          </div>
          <div className="about__content">
            <h2 className="section__header">Our Story</h2>
            <p className="section__description">
              Led by our team of expert and motivational instructors, "The Class You
              Will Get Here" is a high-energy, results-driven session that combines
              a perfect blend of cardio, strength training, and functional
              exercises.
            </p>
            <div className="about__grid">
              <div className="about__card">
                <span><i className="ri-open-arm-line" /></span>
                <div>
                  <h4>Open Door Policy</h4>
                  <p>
                    We believe in providing unrestricted access to all individuals,
                    regardless of their fitness level, age, or background.
                  </p>
                </div>
              </div>
              <div className="about__card">
                <span><i className="ri-shield-cross-line" /></span>
                <div>
                  <h4>Fully Insured</h4>
                  <p>
                    Your peace of mind is our top priority, and our commitment to
                    your safety extends to every aspect of your fitness journey.
                  </p>
                </div>
              </div>
              <div className="about__card">
                <span><i className="ri-p2p-line" /></span>
                <div>
                  <h4>Personal Trainer</h4>
                  <p>
                    With personalized workout plans tailored to your needs, we will
                    ensure that you get the most out of your gym experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section__container class__container" id="class">
          <h2 className="section__header">Our Classes</h2>
          <p className="section__description">
            Discover a diverse range of exhilarating classes at our gym designed to
            cater to all fitness levels and interests. Whether you're a seasoned
            athlete or just starting your fitness journey, our classes offer
            something for everyone.
          </p>
          <div className="class__grid">
            <div className="class__card">
              <img src={cls1} alt="bg" className="class__bg" />
              <img src={cls1} alt="class" />
              <div className="class__content">
                <h4>Strength Training</h4>
                <p>Resistance Training</p>
              </div>
            </div>
            <div className="class__card">
              <img src={cls2} alt="bg" className="class__bg" />
              <img src={cls2} alt="class" />
              <div className="class__content">
                <h4>Flexibility &amp; Mobility</h4>
                <p>Yoga &amp; Pilates</p>
              </div>
            </div>
            <div className="class__card">
              <img src={cls3} alt="bg" className="class__bg" />
              <img src={cls3} alt="class" />
              <div className="class__content">
                <h4>HIIT</h4>
                <p>Circuit Training</p>
              </div>
            </div>
            <div className="class__card">
              <img src={cls4} alt="bg" className="class__bg" />
              <img src={cls4} alt="class" />
              <div className="class__content">
                <h4>Group Fitness</h4>
                <p>Zumba or Dance</p>
              </div>
            </div>
          </div>
        </section>
        <section className="section__container trainer__container" id="trainer">
          <h2 className="section__header">Our Trainers</h2>
          <p className="section__description">
            Our trainers are more than just experts in exercise; they are passionate
            about helping you achieve your health and fitness goals. Our trainers
            are equipped to tailor workout programs to meet your unique needs.
          </p>
          <div className="trainer__grid">
            <div className="trainer__card">
              <img src={me} alt="trainer" />
            </div>
            <div className="trainer__card">
              <div className="trainer__content">
                <h4>Noble Melchizedek</h4>
                <h5>Strength and Conditioning</h5>
                <hr />
                <p>
                  With a background in competitive sports, he's dedicated to helping
                  you reach your peak physical performance.
                </p>
                <div className="trainer__socials">
                  <a href="#"><i className="ri-facebook-fill" /></a>
                  <a href="#"><i className="ri-google-fill" /></a>
                  <a href="#"><i className="ri-instagram-line" /></a>
                  <a href="#"><i className="ri-twitter-fill" /></a>
                </div>
              </div>
            </div>
           
          </div>
        </section>
        <section className="section__container price__container" id="price">
          <h2 className="section__header">Our Pricing</h2>
          <p className="section__description">
            Our pricing plan comes with various membership tiers, each tailored to
            cater to different preferences and fitness aspirations.
          </p>
          <div className="price__grid">
            <div className="price__card">
              <div className="price__content">
                <h4>Monthly Plan</h4>
                <img src={p1} alt="price" />
                <p>
                  Our Basic Plan is the perfect starting point for individuals
                  looking to kickstart their fitness journey or maintain an active
                  lifestyle.
                </p>
                <hr />
                <h4>Key Features</h4>
                <p>Smart workout plan</p>
                <p>At home workouts</p>
                <p>FREE</p>
              </div>
              <button className="btn">FREE</button>
            </div>
            <div className="price__card">
              <div className="price__content">
                <h4>3Monthly Plan</h4>
                <img src={p2} alt="price" />
                <p>
                  Our weekly plan is designed to provide structure and variety to
                  your workouts, ensuring you stay motivated and on track.
                </p>
                <hr />
                <h4>Key Features</h4>
                <p>PRO Gyms</p>
                <p>Smart workout plan</p>
                <p>At home workouts</p>
                <p>Free</p>
              </div>
              <button className="btn">FREE</button>
            </div>
            <div className="price__card">
              <div className="price__content">
                <h4>Yearly Plan</h4>
                <img src={p3} alt="price" />
                <p>
                  With this flexible membership, you'll have access to our
                  state-of-the-art gym facilities, expert trainers, and a vibrant
                  fitness community
                </p>
                <hr />
                <h4>Key Features</h4>
                <p>ELITE Gyms &amp; Classes</p>
                <p>PRO Gyms</p>
                <p>Smart workout plan</p>
                <p>At home workouts</p>
                <p>Personal Training</p>
              </div>
              <button className="btn">Join Now</button>
            </div>
          </div>
        </section>
        <section className="section__container client__container" id="client">
          <h2 className="section__header">What People Says About Us?</h2>
          <p className="section__description">
            These testimonials serve as a testament to our commitment to helping
            individuals achieve their fitness goals, and fostering a supportive
            environment for everyone who walks through our doors.
          </p>
          {/* Slider main container */}
          <div className="swiper">
            {/* Additional required wrapper */}
            <div className="swiper-wrapper">
              {/* Slides */}
              <div className="swiper-slide">
                <div className="client__card">
                  <img src={c1} alt="client" />
                  <div className="client__ratings">
                    <span><i className="ri-star-fill" /></span>
                    <span><i className="ri-star-fill" /></span>
                    <span><i className="ri-star-fill" /></span>
                    <span><i className="ri-star-fill" /></span>
                    <span><i className="ri-star-line" /></span>
                  </div>
                  <p>
                    The trainers here customized a plan that balanced my work-life
                    demands, and I've seen remarkable progress in my fitness
                    journey. It's not just a gym; it's my sanctuary for self-care.
                  </p>
                  <h4>MELKEY</h4>
                  <h5>Software developer</h5>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="client__card">
                  <img src={c2} alt="client" />
                  <div className="client__ratings">
                    <span><i className="ri-star-fill" /></span>
                    <span><i className="ri-star-fill" /></span>
                    <span><i className="ri-star-fill" /></span>
                    <span><i className="ri-star-fill" /></span>
                    <span><i className="ri-star-half-fill" /></span>
                  </div>
                  <p>
                    The trainers' expertise and the gym's commitment to cleanliness
                    during these times have made it a safe haven for me to maintain
                    my health and de-stress.
                  </p>
                  <h4>Sri</h4>
                  <h5>IT empolye </h5>
                </div>
              </div>
             
            </div>
          </div>
        </section>
        <footer className="footer">
          <div className="section__container footer__container">
            <div className="footer__col">
              <div className="footer__logo">
                <a href="#"><img src={logo} alt="logo" />MuscleBuddy</a>
              </div>
              <p>
                Take the first step towards a healthier, stronger you with our
                unbeatable pricing plans. Let's sweat, achieve, and conquer
                together!
              </p>
              <div className="footer__socials">
                <a href="#"><i className="ri-facebook-fill" /></a>
                <a href="https://www.instagram.com/noble_melkey/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==" target="_blank"><i className="ri-instagram-line" /></a>
                <a href="#"><i className="ri-twitter-fill" /></a>
              </div>
            </div>
            <div className="footer__col">
              <h4>Company</h4>
              <div className="footer__links">
                <a href="#">Business</a>
                <a href="#">Franchise</a>
                <a href="#">Partnership</a>
                <a href="#">Network</a>
              </div>
            </div>
            <div className="footer__col">
              <h4>About Us</h4>
              <div className="footer__links">
                <a href="#">Blogs</a>
                <a href="#">Security</a>
                <a href="#">Careers</a>
              </div>
            </div>
            <div className="footer__col">
              <h4>Contact</h4>
              <div className="footer__links">
                <a href="#">Contact Us</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms &amp; Conditions</a>
                <a href="#">BMI Calculator</a>
              </div>
            </div>
          </div>
          <div className="footer__bar">
            Copyright © 2023 Web Design by Noble
          </div>
        </footer>
      
      
      
  
    </div>
  )
}

export default Dashboard;
