import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'
import { motion } from 'framer-motion'

const Hero = () => {

  const transition = { type: 'spring', duration: 3 }
  const mobile = window.innerWidth <= 768 ? true : false;

  return (
    <div className='hero' id='home'>
      <div className="blur hero-blur"></div>
      <div className='left-h'>
        <Header />

        <div className='the-best-ad'>

          <motion.div

            initial={{ left: mobile ? '178px' : '200px' }}
            whileInView={{ left: '8px' }}
            transition={{ ...transition, type: 'tween' }}

          >

          </motion.div>

          <span>The best fitness club in town</span>
        </div>

        <div className="hero-text">
          <div>
            <span className='stroke-text'>SHAPE </span>
            {/* iski stroke-text ki css app.css mei hai */}
            <span>Your</span>
          </div>

          <div>
            <span>Ideal Body</span>
          </div>

          <div>
            <span>
              In here we will help you to shape and build your ideal body and live you life to the fullest
            </span>
          </div>

        </div>

        <div className="figures">
          <div>
            <span>+140</span>
            <span>expert coaches</span>
          </div>

          <div>
            <span>+948</span>
            <span>members joined</span>
          </div>

          <div>
            <span>+50</span>
            <span>training programs</span>
          </div>
        </div>

        <div className="hero-buttons">
          <buttons className="btn">Get Started</buttons>
          <buttons className="btn">Learn More</buttons>
        </div>
        {/* .btn ki css app.css mei hai */}
      </div>
      <div className='right-h'>
        <button className="btn">Join Now</button>

        <motion.div

          initial={{ right: '-1rem' }}
          whileInView={{ right: '4rem' }}
          transition={transition}

          className='heart-rate'>
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 Bpm</span>
        </motion.div>

        <img src={hero_image} alt="" className='hero-image' />
        <motion.img

          initial={{ right: '11rem' }}
          whileInView={{ right: '20rem' }}
          transition={transition}
          src={hero_image_back} alt="" className='hero-image-back' />

        <motion.div

          initial={{ right: '37rem' }}
          whileInView={{ right: '28rem' }}
          transition={transition}
          className="calories">

          <img src={Calories} alt="" />

          <div>
            <span>Calories Burned </span>
            <span>220 kcal</span>
          </div>

        </motion.div>

      </div>
    </div>
  )
}

export default Hero
