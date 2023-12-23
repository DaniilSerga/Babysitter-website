import React from 'react';
import './App.scss';
import { FeedbackDivider, Header } from 'components';
import { MainSection, ServicesList, ServicesSection } from 'pages';

function App() {
  return (
    <div className="App">
      	<Header />
        <MainSection />
        <FeedbackDivider />
        <ServicesSection />
        <ServicesList />
    </div>
  );
}

export default App;
