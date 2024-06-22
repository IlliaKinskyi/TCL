import MainLayout from 'components/layouts/MainLayout';
import HomePage from 'pages/HomePage/HomePage';
import LoginPageLogic from 'pages/LoginPage/LoginPageLogic';
import LogoutPageLogic from 'pages/LoginPage/LogoutPageLogic';
import ProductPage from 'pages/ProductPage/ProductPage';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { selectAuthData } from 'store/user/selectors';

function App() {
  const auth = useSelector(selectAuthData);

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<HomePage />} />
        <Route path="book/:id" element={<ProductPage />} />
        <Route path="login" element={auth ? <Navigate to='/' /> : <LoginPageLogic />} />
        <Route path="logout" element={auth ? <LogoutPageLogic /> : <Navigate to='/login' />} />
      </Route>
    </Routes>
  );
}

export default App;
