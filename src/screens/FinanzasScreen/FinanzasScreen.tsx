import React from 'react';
import './FinanzasScreen.css';

function FinanzasScreen() {
  return (
    <div className="App">
      <iframe src="https://app.powerbi.com/view?r=eyJrIjoiNDE2YTBmZjktYjBlNS00OTJhLTk4NGQtZTQ3ZThmMTM3OTZmIiwidCI6IjQ3OWUxN2YyLTkwMWYtNDQzMC05Zjg0LTBkZDI3ZTkwNzlhNiJ9" 
        width="100%" height="100%"  title="Iframe Example"></iframe>
    </div>
  );
}

export default FinanzasScreen;
