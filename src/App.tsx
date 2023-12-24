import React from 'react';
import './App.scss';
import { FeedbackDivider, Header } from 'components';
import { AchievementsSection, MainSection, ServicesList, ServicesSection } from 'pages';

function App() {
  return (
    <div className="App">
      	<Header />
        <MainSection />
        <FeedbackDivider />
        <ServicesSection />
        <ServicesList />
        <AchievementsSection />
    </div>
  );
}

export default App;
