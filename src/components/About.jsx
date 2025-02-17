import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import cvFile from "../assets/my-cv.pdf";
import profileImg from "../assets/profile.png";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      {/* Introduction Section */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Emerging web developer with a strong foundation in computer science and
        passion for technology-driven solutions. Recent graduate with hands-on
        experience in PHP, Laravel, and WordPress development, committed to
        expanding technical expertise and contributing to innovative web
        projects. Demonstrated ability to learn quickly, adapt to new
        technologies, and deliver quality results through internships and
        personal projects. Seeking opportunities to grow technical skills and
        transition towards full-stack development while bringing creativity,
        enthusiasm, and a proactive approach to solving complex digital
        challenges.
      </motion.p>

      {/* Service Cards */}
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      {/* Profile Section */}
      <div className="mt-20 flex flex-col md:flex-row items-center gap-10">
        {/* Profile Image with Advanced Hover Effect */}
        <motion.div
          variants={fadeIn("right", "spring", 0.5, 0.75)}
          className="w-full md:w-1/2 flex justify-center"
        >
          <Tilt
            options={{
              max: 25, // Tilt Effect
              scale: 1.1, // Slight Scale-Up
              speed: 400, // Animation Speed
            }}
            className="relative"
          >
            <motion.img
              src={profileImg}
              alt="Profile"
              whileHover={{
                scale: 1.15, // Scale Up
                rotate: 5, // Slight Rotation
                opacity: 0.9, // Light Opacity Change
                boxShadow: "0px 0px 30px rgba(0, 255, 255, 0.7)", // Glowing Outline Effect
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-[300px] h-[300px] object-cover rounded-[20px] 
                         filter drop-shadow-[0px_10px_30px_rgba(255,255,255,0.5)]"
            />
          </Tilt>
        </motion.div>

        {/* Call to Action Section */}
        <motion.div
          variants={fadeIn("left", "spring", 0.5, 0.75)}
          className="w-full md:w-1/2 flex flex-col items-center md:items-start"
        >
          <h2 className={`${styles.sectionHeadText} mb-4`}>
            Let's Collaborate!
          </h2>
          <p className="text-secondary text-[17px] mb-6 leading-[30px] text-center md:text-left">
            Passionate about creating innovative web solutions and continuously 
            expanding my technical expertise. If you're looking for a dedicated 
            developer to bring your digital ideas to life, let's connect!
          </p>

          <motion.a
            href={cvFile}
            download="AbuZar_CV.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="green-pink-gradient p-[1px] rounded-[10px] shadow-card"
          >
            <div className="px-8 py-3 rounded-[10px] bg-tertiary hover:bg-[#151030] transition-all">
              <span className="text-white font-bold text-[18px]">
                Download CV
              </span>
            </div>
          </motion.a>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
