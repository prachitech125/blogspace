import { Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/:id" element={<BlogDetails />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/write" element={<Write />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;