import { BrowserRouter, Routes, Route } from 'react-router';

import MainLayout from './MainLayout';
import HomePage from '../pages/Home';
import CreateRequestPage from '../pages/CreateRequest';
import RequestDetailsPage from '../pages/RequestDetails';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="create" element={<CreateRequestPage />} />
        <Route path="request/:id" element={<RequestDetailsPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
