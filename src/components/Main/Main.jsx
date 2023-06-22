import React from "react";
import First_Section from "../First_Section/First_Section";
import Second_section from "../Second_section/Second_section";
import Specialist from "../Specialist/Specialist";
import Industrial_Section from "../Industrial_Section/Industrial_Section";
import Our_Blog from "../Our_Blog/Our_Blog";
import Our_parthners from "../Our_parthners/Our_parthners";
import Work_withus from "../Work_withus/Work_withus";

const Main = () => {
  return (
    <main>
      <First_Section />
      <Second_section/>
      <Specialist/>
      <Industrial_Section/>
      <Our_Blog/>
      <Our_parthners/>
      <Work_withus/>
    </main>
  );
};

export default Main;
