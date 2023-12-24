import React from 'react';
import './App.scss';
import { FeedbackDivider, Header } from 'components';
import { AchievementsSection, FeedbacksSection, MainSection, ServicesList, ServicesSection } from 'pages';

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
    </div>
  );
}

export default App;
