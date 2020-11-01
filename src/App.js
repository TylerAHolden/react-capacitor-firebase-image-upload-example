import './App.css';

import * as React from 'react';

import {
  ImageUploadContext,
  ImageUploadContextProvider,
} from 'react-capacitor-firebase-image-upload';

function App() {
  return (
    <ImageUploadContextProvider storage={{}}>
      <AppComponent />
    </ImageUploadContextProvider>
  );
}

const AppComponent = () => {
  const { open } = React.useContext(ImageUploadContext);
  return (
    <div className='app-container'>
      <button id='uploadButton' onClick={() => open(console.log)}>
        Open Image Upload Overlay
      </button>
    </div>
  );
};

export default App;
