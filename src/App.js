import React from "react"
import { Routes, Route, Navigate } from "react-router-dom";
import SideBarContext from "./context/SideBarContext";
import ExpenseTransaction from "./pages/Transactions/ExpenseTransaction";
import AccountPage from "./pages/AccountPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import Settings from "./pages/Settings/Settings";
import ExpenseCategory from "./pages/Settings/ExpenseCategory";
import Page404 from "./pages/404";
import IncomeCategory from "./pages/Settings/IncomeCategory";
import AccountCategory from "./pages/Settings/AccountCategory";
import IncomeTransaction from "./pages/Transactions/IncomeTransaction";


function App() {
  return (
    <div>

      <Routes>

        <Route path="/" element={<Navigate to="/add" />} />
        
        <Route path="transaction/expense" element={<ExpenseTransaction />} />
        <Route path="transaction/income" element={<IncomeTransaction />} />

        <Route path="account" element={<AccountPage />} />
        <Route path="analytics" element={<AnalyticsPage />} />
        
        <Route path="settings" element={<Settings />} />
        <Route path="settings/expense/category" element={<ExpenseCategory />} />
        <Route path="settings/income/category" element={<IncomeCategory />} />
        <Route path="settings/account/category" element={<AccountCategory />} />

        <Route path="transaction" element={<Navigate to="/transaction/expense" />} />
        <Route path="*" element={<Page404 />} />
      </Routes>

      <SideBarContext />
    </div>
  );
}

export default App;
