import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import styles from './App.module.css';
import '../../index.css';
import { getUser } from '../../utilities/users-services';
import AuthPage from '../Authpage/AuthPage';
import NavBar from '../../components/NavBar';
import FavoriteProducts from '../../components/FavoriteProducts/FavoriteProducts';
import Products from '../../components/Products';
import Profile from '../../components/Profile/Profile';
import Footer from '../../components/Footer/Footer';

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <div className={`${styles.App} ${styles.mainContainer} ${styles.colorfulBackground}`}>
      {user ? (
        <>
        <div>
         <NavBar user={user} setUser={setUser} />
        </div>
        <div><hi>Products</hi></div>
         <main>
          <Routes>
            <Route path='/' element={<Products user={user} setUser={setUser} />}/>
            <Route path='/myproducts' element={<FavoriteProducts user={user} setUser={setUser} />}/>
            <Route path='/profile' element={<Profile user={user} setUser={setUser} />}/>
            <Route path="/*" element={<Navigate to="/index" />} />
          </Routes>
          </main>
          <Footer />
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </div>
  );
}

export default App;
