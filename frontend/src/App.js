import React,{ Fragment, useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
// import '.bootstrap.css';
// import CounterClass from './components/CounterClass';
import Header from './components/Header';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Validation from './components/Validation';
import Qualifications from './components/Qualifications';
import ViewInfo from './components/ViewInfo';
import CitizenHome from './components/CitizenHome';
import Complaints from './components/Complaints';
import AdminHome from './components/AdminHome';
import Contatcts from './components/Contacts';
import ViewComplaint from './components/ViewCoplaints';
import ReqruiterHome from './components/ReqruiterHome';
// import AboutUs from './components/AboutUs';
// import ContactUs from './components/ContactUs';
// import Landing from './components/Landing';
// import DashboardPatient from './components/DashboardPatient';
// import AppointmentPatient from './components/AppointmentPatient';
// import SignInDoctor from './components/SignInDoctor';
// import DashboardDoctor from './components/DashboardDoctor';
// import HeaderPatient from './components/HeaderPatient';

function App() {

  return (
    <Router>
      <Fragment>
      
        <Header/>
        
        <Routes>
          {/* <Route exact path='/landing' element ={<Landing/>} />
          <Route exact path='/aboutus' element ={<AboutUs/>} />
          <Route exact path='/contactus' element ={<ContactUs/>} />
          <Route exact path="/add" element = {<AddPatient/>} />
          <Route exact path='/patientsignin' element ={<SignInPatient/>} /> */}
          <Route exact path='/login' element ={<Login/>} />
          <Route exact path='/signup' element ={<SignUp/>} />
          <Route exact path='/qualifications' element ={<Qualifications/>} />
          <Route exact path='/complaints' element ={<Complaints/>} />
          <Route exact path='/validation' element ={<Validation/>} />
          <Route exact path='/viewinfo' element ={<ViewInfo/>} />
          <Route exact path='/citizen' element ={<CitizenHome/>} />
          <Route exact path='/admin' element ={<AdminHome/>} />
          <Route exact path='/reqruiter' element ={<ReqruiterHome/>} />
          <Route exact path='/contacts' element ={<Contatcts/>} />
          <Route exact path='/viewcomplaints' element ={<ViewComplaint/>} />






          {/* <Route exact path='/doctorsignin' element ={<SignInDoctor/>} />
          <Route exact path='/dashboardpatient' element ={<DashboardPatient/>} />
          <Route exact path='/Appointmentpatient' element ={<AppointmentPatient/>} />
          <Route exact path='/dashboarddoctor' element ={<DashboardDoctor/>} /> */}
        </Routes>


      </Fragment>

    </Router>
  );
}

export default App;


