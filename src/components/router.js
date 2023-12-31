
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import EducationSection from './EducationSection';
import AboutSection from './AboutSection';
import WorkExperienceSection from './WorkExperience';
import Skills from './Skills';
import Resume from './resume';
import Awards from './Awards';

const Routers = ()=> (
     <Routes>
      <Route exact path="/portfollio_vishesh" element={<AboutSection/>} />
      <Route  path="/about" element={<AboutSection/>} />
      <Route  path="/education" element={<EducationSection/>} />
      <Route  path="/work-experience" element={<WorkExperienceSection/>} />
      <Route  path="/skills" element={<Skills/>} />
      <Route  path="/awards" element={<Awards/>} />
      <Route  path="/resume" element={<Resume/>} />
     </Routes>
)

export default Routers;