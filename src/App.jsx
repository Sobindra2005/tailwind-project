import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DashboardLayout } from './pages/dashboard/DashboardLayout';
import { Users } from './pages/dashboard/Users';
import { UserDetails } from './pages/dashboard/UserDetails';
import { NotFound } from "./pages/NotFound";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<DashboardLayout />} >
          <Route index element={<h1>This is dashdbaord overview section</h1>} />
          <Route path="users" element={<Users />} />
          <Route path="users/:userId" element={<UserDetails />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;