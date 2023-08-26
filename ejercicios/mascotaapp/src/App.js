import logo from './logo.svg';
import './App.css';
import { Footer } from './components/public/Footer';
import { Navbar } from './components/public/Navbar';
import { Switch, Route, Routes } from "react-router-dom";
import { Main } from './components/public/Main';
import { Detail } from './components/public/Detail';
import { UserForm } from './components/public/UserForm';
import { Login } from './components/public/Login';

function App() {
  return (
    <div>
      <Navbar />
        <Routes>
          <Route exact path={'/'} Component={Main} />
          <Route exact path={'/:page'} Component={Main} />
          <Route path={'details/:id'} Component={Detail} />
          <Route path={'/:page/details/:id'} Component={Detail} />
          <Route path={'/user-form'} Component={UserForm} />
          <Route path={'/login'} Component={ Login } />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
