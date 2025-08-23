import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import SignUpPage from "./pages/SignUpPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import OnboardingPage from "./pages/OnboardingPage.jsx";
import HomePage from "./pages/HomePage.jsx";

import { useThemeStore } from "./store/useThemeStore.js";
import { Toaster } from "react-hot-toast";
import useAuthUser from "./hooks/useAuthUser.js";

import StudentsPage from "./pages/StudentsPage.jsx";
import ProfessionalsPage from "./pages/ProfessionalPage.jsx";
import HomemakersPage from "./pages/HomemakersPage.jsx";
import SeniorCitizensPage from "./pages/SeniorCitizensPage.jsx";
import Navbar from "./components/Navbar.jsx";
import QuizPage from "./pages/QuizPage.jsx";
import NotificationsPage from "./pages/NotificationsPage.jsx";
import ChatPage from "./pages/ChatPage.jsx";
import Home from "./pages/Home.jsx";
import RuralScams from "./pages/RuralScams.jsx";
import PaymentPage from "./pages/PaymentPage.jsx";

const App = () => {
  const { isLoading, authUser } = useAuthUser();
  const { theme } = useThemeStore();

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  const isAuthenticated = Boolean(authUser);
  const isOnboarded = authUser?.isOnboarded;

  return (
    <div data-theme={theme} className="h-screen flex flex-col">
      {/* ✅ Show Navbar only if user is authenticated */}
      {isAuthenticated && <Navbar />}

      {/* Main content */}
      <div className="flex-1">
        <Routes>
          {/* ✅ Home/Dashboard */}
          <Route
            path="/"
            element={
              isAuthenticated ? (
                isOnboarded ? <HomePage /> : <OnboardingPage />
              ) : (
                <LoginPage />
              )
            }
          />

          {/* ✅ Onboarding */}
          <Route
            path="/onboarding"
            element={
              isAuthenticated ? (
                !isOnboarded ? <OnboardingPage /> : <Navigate to="/" />
              ) : (
                <Navigate to="/login" />
              )
            }
          />

          {/* ✅ Auth Pages */}
          <Route
            path="/signup"
            element={
              !isAuthenticated ? (
                <SignUpPage />
              ) : isOnboarded ? (
                <Navigate to="/" />
              ) : (
                <Navigate to="/onboarding" />
              )
            }
          />
          <Route
            path="/login"
            element={
              !isAuthenticated ? (
                <LoginPage />
              ) : isOnboarded ? (
                <Navigate to="/" />
              ) : (
                <Navigate to="/onboarding" />
              )
            }
          />

          {/* ✅ Category Pages */}
          <Route
            path="/students"
            element={isAuthenticated ? <StudentsPage /> : <Navigate to="/login" />}
          />
          <Route
            path="/professionals"
            element={isAuthenticated ? <ProfessionalsPage /> : <Navigate to="/login" />}
          />
          <Route
            path="/homemakers"
            element={isAuthenticated ? <HomemakersPage /> : <Navigate to="/login" />}
          />
          <Route
            path="/senior-citizens"
            element={isAuthenticated ? <SeniorCitizensPage /> : <Navigate to="/login" />}
          />

          {/* ✅ Other Pages */}
          <Route
            path="/quiz"
            element={isAuthenticated ? <QuizPage /> : <Navigate to="/login" />}
          />
          <Route
            path="/notifications"
            element={isAuthenticated ? <NotificationsPage /> : <Navigate to="/login" />}
          />
          <Route
            path="/chat/:id"
            element={isAuthenticated ? <ChatPage /> : <Navigate to="/login" />}
          />
          <Route
            path="/home"
            element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/rural-users"
            element={isAuthenticated ? <RuralScams /> : <Navigate to="/login" />}
          />
          <Route
  path="/upi-users"
  element={isAuthenticated ? <PaymentPage /> : <Navigate to="/login" />}
/>


          {/* ✅ Catch-all */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>

      <Toaster />
    </div>
  );
};

export default App;
