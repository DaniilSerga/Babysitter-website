import React from 'react';
import './App.scss';
import { FeedbackDivider, Header } from 'components';
import { MainSection, ServicesSection } from 'pages';

function App() {
  return (
    <div className="App">
      	<Header />
        <MainSection />
        <FeedbackDivider />
        <ServicesSection />
    </div>
  );
}

export default App;
