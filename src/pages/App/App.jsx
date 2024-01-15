// // import dependencies
// import  { useState } from 'react'
// import { Routes, Route, Navigate} from 'react-router-dom';
// import styles from './App.module.css';


// // import my functionality that I've added
// import { getUser } from '../../utilities/users-services';

// // css
// import './App.css'

// // import pages
// import AuthPage from '../Authpage/AuthPage';

// // import components
// import NavBar from '../../components/NavBar';
// import Favs from '../../components/Favs';
// import FavProducts from '../../components/FavProducts';
// import Products from '../../components/Products';


// function App() {
//   const [user, setUser] = useState(getUser());
//   return (
//     <>
//     <main className={styles.App}>
//       {
//         user
//           ?
//           <>
//             <NavBar user={user} setUser={setUser}/>
//             < Routes >
//             <Route path="/*" element={<Navigate to="/index" />} />
//            </Routes>
//            <Products user={user} setUser={setUser}/>
//            {/* <Favs user={user} setUser={setUser}/> */}
//           </>
//           :
//           < AuthPage setUser={setUser} />
//       }
//       </main>
//     </>
//   )
// }

// export default App

// import dependencies
import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import styles from './App.module.css';
import '../../index.css';

// import my functionality that I've added
import { getUser } from '../../utilities/users-services';

// import pages
import AuthPage from '../Authpage/AuthPage';

// import components
import NavBar from '../../components/NavBar';
import FavoriteProducts from '../../components/FavoriteProducts/FavoriteProducts';
import Products from '../../components/Products';

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <div className={`${styles.App} ${styles.mainContainer}`}>
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path='/' element={<Products user={user} setUser={setUser} />}/>
            <Route path='/myproducts' element={<FavoriteProducts user={user} setUser={setUser} />}/>
            <Route path="/*" element={<Navigate to="/index" />} />
          </Routes>
          
          {/* <Favs user={user} setUser={setUser}/> */}
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </div>
  );
}

export default App;
