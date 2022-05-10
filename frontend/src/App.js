import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Validation from "./components/Validation";
import Qualifications from "./components/Qualifications";
import ViewInfo from "./components/ViewInfo";
import CitizenHome from "./components/CitizenHome";
import Complaints from "./components/Complaints";
import AdminHome from "./components/AdminHome";
import Contatcts from "./components/Contacts";
import ViewComplaint from "./components/ViewCoplaints";
import ReqruiterHome from "./components/ReqruiterHome";
import SearchQualifications from "./components/SearchQualifications";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Fragment>
        <Header />

        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/qualifications" element={<Qualifications />} />
          <Route exact path="/complaints" element={<Complaints />} />
          <Route exact path="/validation" element={<Validation />} />
          <Route exact path="/viewinfo" element={<ViewInfo />} />
          <Route exact path="/citizen" element={<CitizenHome />} />
          <Route exact path="/admin" element={<AdminHome />} />
          <Route exact path="/reqruiter" element={<ReqruiterHome />} />
          <Route exact path="/contacts" element={<Contatcts />} />
          <Route exact path="/viewcomplaints" element={<ViewComplaint />} />
          <Route 
            exact
            path="/searchqualifications"
            element={<SearchQualifications />}
          />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
