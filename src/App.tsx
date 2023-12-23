import React from 'react';
import './App.scss';
import { FeedbackDivider, Header } from 'components';
import { MainSection } from 'pages';

function App() {
  return (
    <div className="App">
      	<Header />
        <MainSection />
        <FeedbackDivider />
    </div>
  );
}

export default App;
