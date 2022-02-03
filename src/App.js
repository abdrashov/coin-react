import React from "react"
import { Routes, Route, Navigate } from "react-router-dom";
import SideBarContext from "./context/SideBarContext";
import AddPage from "./pages/AddPage";
import ExpensePage from "./pages/ExpensePage";
import AnalyticsPage from "./pages/AnalyticsPage";
import SettingsPage from "./pages/SettingsPage";
import Page404 from "./pages/404";


function App() {
  return (
    <div className="min-h-screen">

      <Routes>

        <Route path="/" element={<Navigate to="/add" />} />

        <Route path="add" element={<AddPage />} />
        <Route path="expense" element={<ExpensePage />} />
        <Route path="analytics" element={<AnalyticsPage />} />
        <Route path="settings" element={<SettingsPage />} />

        <Route path="*" element={<Page404 />} />
      </Routes>

      <SideBarContext />
    </div>
  );
}

export default App;
