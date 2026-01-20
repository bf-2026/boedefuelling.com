import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import ValueProps from "./sections/ValueProps";
import Solution from "./sections/Solution";
import Urgency from "./sections/Urgency";
import Mission from "./sections/Mission";
import CTA from "./sections/CTA";
import Footer from "./sections/Footer";
import ProcessAutomation from "./sections/ProcessAutomation";
import ProblemsSolutions from "./sections/ProblemsSolutions";
import Trust from "./sections/Trust";
import Impressum from "./sections/Impressum";
import ProjectPhases from "./sections/ProjectPhases";

function HomePage() {
  return (
    <Layout>
      <Header />
      <main>
        <Hero />
        <ValueProps />
        <Solution />
        <ProcessAutomation />
        <ProblemsSolutions />
        <Trust />
        <Urgency />
        <Mission />
        <ProjectPhases />
        <CTA />
      </main>
      <Footer />
    </Layout>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/impressum"
          element={
            <Layout>
              <Impressum />
              <Footer />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
