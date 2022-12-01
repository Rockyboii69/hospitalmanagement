import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PatientList from "./PatientList";
import AddPatient from "./AddPatient";
import AvailableRoom from "./AvailableRoom";

function App() {
  return (
    <div className="container-fluid mt-2">
      <ul
        className="nav nav-pills mb-3 bg-light pt-2 pb-2"
        id="pills-tab"
        role="tablist">
        <li className="nav-item">
          <a
            className="nav-link active"
            id="pills-home-tab"
            data-toggle="pill"
            href="#pills-home"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            Patient
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            id="pills-profile-tab"
            data-toggle="pill"
            href="#pills-profile"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
          >
            Clinic
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            id="pills-contact-tab"
            data-toggle="pill"
            href="#pills-contact"
            role="tab"
            aria-controls="pills-contact"
            aria-selected="false"
          >
            Contact
          </a>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab">
          <div className="row">            
           <AddPatient></AddPatient>   
           <AvailableRoom></AvailableRoom> 
          </div>
          <hr></hr>          
          <PatientList></PatientList>
        </div>
        <div
          className="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          ...
        </div>
        <div
          className="tab-pane fade"
          id="pills-contact"
          role="tabpanel"
          aria-labelledby="pills-contact-tab"
        >
          ...
        </div>
      </div>
    </div>
  );
}

export default App;
