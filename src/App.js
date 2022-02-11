import React from "react"
import { Routes, Route, Navigate } from "react-router-dom";
import SideBarContext from "./context/SideBarContext";
import AddPage from "./pages/AddPage";
import ExpensePage from "./pages/ExpensePage";
import AnalyticsPage from "./pages/AnalyticsPage";
import Settings from "./pages/Settings/Settings";
import ExpenseCategory from "./pages/Settings/ExpenseCategory";
import Page404 from "./pages/404";
import IncomeCategory from "./pages/Settings/IncomeCategory";
import AccountCategory from "./pages/Settings/AccountCategory";
import CreateExpenseCategory from "./pages/Settings/CreateExpenseCategory";


function App() {
  return (
    <div className="min-h-screen bg-gray-50">

      <Routes>

        <Route path="/" element={<Navigate to="/add" />} />

        <Route path="add" element={<AddPage />} />
        <Route path="expense" element={<ExpensePage />} />
        <Route path="analytics" element={<AnalyticsPage />} />
        
        <Route path="settings" element={<Settings />} />
        <Route path="settings/expense/category" element={<ExpenseCategory />} />
        <Route path="settings/expense/category/create" element={<CreateExpenseCategory />} />
        <Route path="settings/income/category" element={<IncomeCategory />} />
        <Route path="settings/account/category" element={<AccountCategory />} />

        <Route path="*" element={<Page404 />} />
      </Routes>

      <SideBarContext />
    </div>
  );
}

export default App;
