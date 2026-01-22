import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Home from '../pages/Home';
import BlogDetails from '../pages/BlogDetails';
import Profile from '../pages/Profile';
import Write from '../pages/Write';
import NotFound from '../pages/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="post/:id" element={<BlogDetails />} />
        <Route path="profile" element={<Profile />} />
        <Route path="write" element={<Write />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
