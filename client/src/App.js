import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";

// Lazy load components
const LoginSignup = React.lazy(() => import("./Pages/LoginSignup"));
const PackageDetail = React.lazy(() => import("./components/PackageDetail"));
const PackageBooking = React.lazy(() => import("./components/PackageBooking"));
const Wishlist = React.lazy(() => import("./components/Wishlist"));

function App() {
  return (
    <BrowserRouter className="px-2 md:px-8 lg:px-16">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/package/:id" element={<PackageDetail />} />
          <Route
            path="/booking"
            element={
              <ProtectedRoute>
                <PackageBooking />
              </ProtectedRoute>
            }
          />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
