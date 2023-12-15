import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import {email, github, linkedin} from "../assets/index.js";

const Contact = () => {

  const ContactButton = ({img, url, invert}) => {
    return (
        <div className="flex justify-center items-center rounded-full ">
          <a href={url} target={'_blank'}>
            <img src={img}  alt={"logo"} className={`h-[100px] ${invert ? "invert" : ""}`}/>
          </a>
        </div>
    )
  }


  return (
    <div
      className="-mt-[8rem] xl:flex-row flex-col-reverse
      flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-jet p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadTextLight}>Contact.</h3>

        <div className={"flex flex-row justify-around"}>
        <ContactButton img={linkedin} url={"https://www.linkedin.com/in/german-altairac/"} invert/>
        <ContactButton img={email} url={"mailto:santiago@altairac.dev"} invert/>
        <ContactButton img={github} url={"https://github.com/GermoAlt"}/>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
