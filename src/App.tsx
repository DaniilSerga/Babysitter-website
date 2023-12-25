import React from 'react';
import './App.scss';
import {FeedbackDivider, Header, QuestionsDivider} from 'components';
import {AchievementsSection, FeedbacksSection, FormSection, MainSection, ServicesList, ServicesSection} from 'pages';

function App() {
  return (
    <div className="App">
      	<Header />
        <MainSection />
        <FeedbackDivider />
        <ServicesSection />
        <ServicesList />
        <AchievementsSection />
        <FeedbacksSection />
        <QuestionsDivider />
        <FormSection />
    </div>
  );
}

export default App;
