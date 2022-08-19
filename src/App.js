import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Modal, ModalBody, ModalHeader, Modalfooter} from 'reactstrap';
import Navbar from '../src/components/Navbar'
import Footer from '../src/components/Footer'
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contacto from './pages/Contacto';
import Clientes from './components/Clientes';
import Seguridad from './pages/Seguridad';
import Provedores from './pages/Provedores';
import Admin from './pages/Admin'
import Reportes from './pages/Reportes';
import Ayuda from './pages/Ayuda';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/about" exact component={About} />
          <Route path="/contacto" exact component={Contacto} />
          <Route path="/clientes" exact component={Clientes} />
          <Route path="/seguridad" exact component={Seguridad} />
          <Route path="/provedores" exact component={Provedores} />
          <Route path="/admin" exact component={Admin} />
          <Route path="/reportes" exact component={Reportes} />
          <Route path="/ayuda" exact component={Ayuda} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
