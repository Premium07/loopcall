import React from "react";
import { Navigate, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import NotificationsPage from "./pages/NotificationsPage";
import ChatPage from "./pages/ChatPage";
import CallPage from "./pages/CallPage";
import { Toaster } from "react-hot-toast";
import PageLoader from "./components/PageLoader";
import useAuthUser from "./hooks/useAuthUser";

const App = () => {
  const { isLoading, authUser } = useAuthUser();

  if (isLoading) return <PageLoader />;

  return (
    <main className="h-screen">
      <Routes>
        <Route
          path="/"
          element={
            authUser ? <HomePage user={authUser} /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/signup"
          element={!authUser ? <SignUpPage /> : <Navigate to="/" />}
        />
        <Route
          path="/login"
          element={!authUser ? <LoginPage /> : <Navigate to="/" />}
        />
        <Route
          path="/notifications"
          element={authUser ? <NotificationsPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/call"
          element={authUser ? <CallPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/chat"
          element={authUser ? <ChatPage /> : <Navigate to="/login" />}
        />
      </Routes>
      <Toaster toastOptions={{ position: "top-left" }} />
    </main>
  );
};

export default App;
