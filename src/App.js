
import './App.css';
import Firstchild from "./wassim" ;
import 'bootstrap/dist/css/bootstrap.min.css' ;
import {Nav,Navbar,Col,Row} from 'react-bootstrap';

function App() {
  return (
    
    <div >
      <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#aboutus">about us</Nav.Link>
      <Nav.Link href="#cours">cours</Nav.Link>
      <Nav.Link href="#contactus">contact us</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
<img src="/images/salle.jpg" alt='salle de sport' height="1200px" />   
<br></br><br></br><br></br><br></br><br></br>
  <div class="row">
    <div class="col-sm-4">
    </div>
    <div class="col-sm-4"> <img src="/images/salle2.png" alt='salle de sport' height='150px'/>
    </div>
    <div class="col-sm-4">
    </div>
  </div>
  <br></br><br></br><br></br>
  <div class="container">
  <Row>
    <Col><img src="/images/salle3.png" height='400px'/></Col>
    <Col><b>pourquoi choisir : notre salle de sport "fitness"!</b>
    <br></br><br></br>
Pour la qualité des prestations qui sont proposées (Vous pourrez opter pour l’autonomie, les cours collectifs ou le coaching personnel par des professeurs diplômés d’Etat adaptés en fonction des objectifs, de la disponibilité et des capacités de chacun)
Pour la diversité des cours les plus modernes ( Hiit , Cross Fit, Zumba, ..)
Pour ses forfaits diversifiés, sans tacite de reconduction
Pour la propreté et le confort (matériels haut de gamme, salle de cours et plateaux aérés et lumineux)
Pour sa convivialité entre les membres et l’équipe.
Pour ses solutions nutritives et ses recettes alimentaires sportives proposées.</Col>
  </Row>
  </div>
  <br></br><br></br><br></br><br></br>
  <p font-size="50px"><b>Nos cours rendent tout le monde à l'aise.<br></br>
Chaque personne peut travailler à son propre niveau et rythme sans se sentir intimidée.</b> </p>
   <br></br>
   <img src="/images/salle4.jpg"/>
   </div>  
  );
}


export default App ;
