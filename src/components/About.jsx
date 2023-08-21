import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon, style }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className={`xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card`}>
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className={`w-16 h-16 object-contain ${style}`} />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Who am I?</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
          I&apos;ve been a full-stack software engineer for over {new Date().getFullYear() - 2016} years. Working with clients of any size,
          I&apos;ve helped build and maintain a variety of applications.
          I&apos;m currently working as a Senior Technical Consultant at <a href="https://www.kinandcarta.com" target="_blank" rel="noreferrer" className="text-french">Kin + Carta</a> in Buenos Aires, Argentina.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
