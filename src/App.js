
import './App.css';
import './styles/main.css'
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Contacts from './pages/Contacts';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Home from './pages/Home';
import ProjectPage from './pages/ProjectPage';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Success from './pages/Success';
import Account from './pages/Account';
import Basket from './pages/Basket';
import Favorites from './pages/Favorites';
import { Provider } from 'react-redux';
import { store } from './store';
import Count from './pages/Count';
import MoreAccount from './pages/MoreAccount';
import MapChoosePage from './pages/MapChoosePage';
import AddressPage from './pages/AddressPage';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

function App() {
  const stripePromise = loadStripe('pk_test_51Q540ZLD1ekf7ZAiXIxFNnNZ8I9g8dVX1Bf4dFhenhNcB2yoAySA8Bk4SbzyDAg0i4lcLT5k5ACdUNimnTodFxMU00qOwbVdiG');

  return (
    <Provider store={store}>
      <div className="App">
      <BrowserRouter >
      <Navbar />

      <Routes>
      <Route path="/home" element={<Home />}/>
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/clothes" element={<Projects />} /> 
      <Route path="/clothes/:id" element={<ProjectPage />} /> 
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/success" element={<Success />} />
      <Route path="/account" element={<Account />} />
      <Route path="/basket" element={<Basket/>} />
      <Route path="/favorites" element={<Favorites/>} />
      <Route path="/count" element={<Count/>} />
      <Route path="/moreAccount" element={<MoreAccount/>}/>
      <Route path="/map" element={<MapChoosePage/>}/>
      <Route path="/map/:id" element={<AddressPage/>}/>

      </Routes>

      </BrowserRouter>

    <Footer />
    </div>

    <Elements stripe={stripePromise}>
      {/* Your application components */}
    </Elements> 
    </Provider>
   
  );
}

export default App;
