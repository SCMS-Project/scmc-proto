import React from "react";

const About: React.FC = () => {
  return (
    <div className="about">
      <div className="about__header">
        <h1 className="about__header__title">Smart Campus Management System</h1>
        <p className="about__header__subtitle">
          Empowering educational institutions through innovative, efficient campus management.
        </p>
      </div>

      <section className="about__section">
        <h2 className="about__section__title">What is SCMS?</h2>
        <p className="about__section__description">
          The Smart Campus Management System (SCMS) is a comprehensive solution designed to simplify and enhance the campus experience. It serves students, staff, and administrators by centralizing key functions like student information, attendance tracking, course management, and more.
        </p>
      </section>

      <section className="about__section">
        <h2 className="about__section__title">Key Features</h2>
        <ul className="about__section__features-list">
          <li className="about__section__features-list__item">Streamlined User Management</li>
          <li className="about__section__features-list__item">Real-time Attendance Monitoring</li>
          <li className="about__section__features-list__item">Course Registration and Management</li>
          <li className="about__section__features-list__item">Dynamic Scheduling for Classes and Events</li>
          <li className="about__section__features-list__item">Intuitive Administrator Dashboard</li>
        </ul>
      </section>

      <section className="about__section">
        <h2 className="about__section__title">Why Choose SCMS?</h2>
        <p className="about__section__description">
          SCMS offers an all-in-one platform for managing campus activities. It boosts productivity by reducing administrative workload, enhances student engagement, and provides a seamless, user-friendly experience.
        </p>
      </section>

      <section className="about__contact">
        <a
          href="mailto:your-email@example.com?subject=Inquiry about SCMS&body=Hello, I would like to learn more about SCMS."
          className="about__contact__button"
        >
          Get In Touch for More Information
        </a>
      </section>
    </div>
  );
};

export default About;
