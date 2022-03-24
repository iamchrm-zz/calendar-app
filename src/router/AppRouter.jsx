import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { LoginScreen } from "../components/auth/LoginScreen";
import { CalendarScreen } from "../components/calendar/CalendarScreen";
//!! v.6 NEW WAY TO REDIRECT USER WHEN HIM INSERT SOME ROUTES INCORRETED
export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<LoginScreen />} />
        <Route exact path="/" element={<CalendarScreen />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
