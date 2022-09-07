
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import MainPage from './MainPage';
import Nav from './Nav';
import Profile from './Profile';
import LoginForm from './LoginForm';
import SignUp from './SignUp';
import OwnerInfo from './OwnerInfo';
import DogInfo from './DogInfo';
import UploadImageToS3WithNativeSdk from './UploadImageToS3';


function App(props) {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
      <Routes path="profile">
        <Route path="profile" element={<Profile />} />
      </Routes>
      <Routes path="login">
        <Route path="login" element={<LoginForm />} />
      </Routes>
      <Routes path="signup">
        <Route path="signup" element={<SignUp />} />
      </Routes>
      <Routes path="doginfo">
        <Route path="doginfo" element={<DogInfo />} />
      </Routes>
      <Routes path="ownerinfo">
        <Route path="ownerinfo" element={<OwnerInfo />} />
      </Routes>
      <Routes path="upload">
        <Route path="upload" element={<UploadImageToS3WithNativeSdk />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;