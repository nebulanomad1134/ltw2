import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './home/Home';
import Shop from './shop/Shop';
import PlaceDetails from './components/PlaceDetails';
import Blog from './components/Blog';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './Dashboard/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import { DashboardLayout } from './Dashboard/DashboardLayout';
import EditPlaces from './Dashboard/EditPlaces';
import ManagePlaces from './Dashboard/ManagePlaces';
import UploadPlace from './Dashboard/UploadPlace';
import { AuthProvider } from './context/AuthContext';
import { placeLoader } from './loaders';

const router = (
  <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/place/:id" element={<PlaceDetails />} loader={placeLoader} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route path="/admin/dashboard" element={<ProtectedRoute adminOnly={true}><DashboardLayout /></ProtectedRoute>}>
          <Route index element={<Dashboard />} />
          <Route path="upload" element={<UploadPlace />} />
          <Route path="manage" element={<ManagePlaces />} />
          <Route path="edit-places/:id" element={<EditPlaces />} />
        </Route>
      </Routes>
    </AuthProvider>
  </BrowserRouter>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {router}
  </React.StrictMode>
);
