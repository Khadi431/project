import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./screens/Home";
import {Container} from "react-bootstrap";
import SigninScreen from "./screens/SigninScreen";
import SignupUserScreen from "./screens/SignupUserScreen";
import SideBar from "./components/SideBar";
import AddDoctor from "./screens/AddDoctor";
// import Appointment from "./component/Doctor/Appointment";
// import AppointmentDetail from "./components/Doctor/AppointmentDetail";
import Contact from "./screens/Contact";






function App() {
  return (
    <main>
      <Header />
      <SideBar />
      <Container>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/addDoctor" component={AddDoctor} />
          {/* <Route path="/appointment" component={Appointment} /> */}
          {/* <Route path="/appointmentDetail" component={AppointmentDetail} /> */}
          <Route path="/signinScreen" component={SigninScreen} />
          <Route path="/signupUserScreen" component={SignupUserScreen} />
          <Route path="/contact" component={Contact} />
          
        </Switch>
      </Container>
    </main>
  );
}

export default App;
