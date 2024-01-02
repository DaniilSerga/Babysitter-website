import React from 'react';
import './App.scss';
import {FeedbackDivider, Footer, Header, QuestionsDivider} from 'components';
import {AchievementsSection, FeedbacksSection, FormSection, MainSection, ServicesList, ServicesSection} from 'pages';

function App() {
  return (
    <div className="App">
      	<Header />
        <main>
          <MainSection />
          <FeedbackDivider />
          <ServicesSection />
          <ServicesList />
          <AchievementsSection />
          <FeedbacksSection />
          <QuestionsDivider />
          <FormSection />
        </main>
        <Footer />
    </div>
  );
}

export default App;
