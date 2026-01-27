import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Hero from "./sections/Hero";
import SolutionsIntro from "./sections/SolutionsIntro";
import AIServicesSection from "./sections/AIServicesSection";
import EnterpriseAISection from "./sections/EnterpriseAISection";
import ProcessPipeline from "./sections/ProcessPipeline";
import ValueProps from "./sections/ValueProps";
import Urgency from "./sections/Urgency";
import Mission from "./sections/Mission";
import CTA from "./sections/CTA";
import Footer from "./sections/Footer";
import ProblemsSolutions from "./sections/ProblemsSolutions";
import Trust from "./sections/Trust";
import Impressum from "./sections/Impressum";
import AIWorkflow from "./sections/AIWorkflow";
import Services from "./sections/Services";
import Topseller from "./sections/Topseller";
import ServicesPage from "./sections/pages/Services";
import IndustriesPage from "./sections/pages/Industries";
import CasesPage from "./sections/pages/Cases";
import CompanyPage from "./sections/pages/Company";
import CareersPage from "./sections/pages/Careers";
import TrainingsPage from "./sections/pages/Trainings";
import InsightsPage from "./sections/pages/Insights";

function HomePage() {
  return (
    <Layout>
      <main>
        <Hero />
        <SolutionsIntro />
        {/*<CloudServices />*/}
        <AIServicesSection />
        <EnterpriseAISection />
        <ProcessPipeline />
        <Topseller />
        <ValueProps />
        <Services />
        <ProblemsSolutions />
        <AIWorkflow />
        <Trust />
        <Urgency />
        <Mission />
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
        <Route
          path="/services"
          element={
            <Layout>
              <ServicesPage />
              <Footer />
            </Layout>
          }
        />
        <Route
          path="/industries"
          element={
            <Layout>
              <IndustriesPage />
              <Footer />
            </Layout>
          }
        />
        <Route
          path="/cases"
          element={
            <Layout>
              <CasesPage />
              <Footer />
            </Layout>
          }
        />
        <Route
          path="/trainings"
          element={
            <Layout>
              <TrainingsPage />
              <Footer />
            </Layout>
          }
        />
        <Route
          path="/insights"
          element={
            <Layout>
              <InsightsPage />
              <Footer />
            </Layout>
          }
        />
        <Route
          path="/company"
          element={
            <Layout>
              <CompanyPage />
              <Footer />
            </Layout>
          }
        />
        <Route
          path="/careers"
          element={
            <Layout>
              <CareersPage />
              <Footer />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
