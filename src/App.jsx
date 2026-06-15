import { Routes, Route } from "react-router-dom";

import PortfolioLayouts from "./layouts/PortfolioLayouts";
import DashboardLayout from "./layouts/DashboardLayout";

import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";

import Home from "./components/pages/Home";
// import Dashboard from "./components/pages/Dashboard";
// import Project from "./components/pages/Project";
import Delete from "./components/pages/Delete";
import TaskPage from "./components/pages/TaskPage";
import TaskForm from "./components/pages/TaskForm";
import TaskItem from "./components/pages/TaskItem";
import {Provider} from 'react-redux';
import {store} from "./components/Store/store"
import Footer from "./components/Footer";
import Skills from "./components/pages/Skills";
import Experience from "./components/Experience";
import Activities from "./components/Activities";
import Contact from "./components/Contact";
import UnderDevelopment from "./components/reusables/UnderDevelopment";

function App() {
  return (
    <Routes>
      <Route element={<PortfolioLayouts />}>
        <Route
          path="/"
          element={
            <main>
              <HeroSection />
              <AboutSection />
              <Experience />
              <Contact />
              <Footer />
            </main>
          }
        />

        <Route
          path="/home"
          element={
            <Provider store={store}>
              <Home />
            </Provider>
          }
        />
        <Route path="/skills" element={<Skills />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/notfound" element={<UnderDevelopment />} />
      </Route>

      {/* <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/delete/:id" element={<Delete/>} />
      </Route> */}
    </Routes>
  );
}

export default App;
