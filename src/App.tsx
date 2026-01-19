import Layout from "./components/Layout";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import ValueProps from "./sections/ValueProps";
import Solution from "./sections/Solution";
import Urgency from "./sections/Urgency";
import Mission from "./sections/Mission";
import Footer from "./sections/Footer";
import ProcessAutomation from "./sections/ProcessAutomation";
import ProblemsSolutions from "./sections/ProblemsSolutions";
import Trust from "./sections/Trust";

function App() {
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
      </main>
      <Footer />
    </Layout>
  );
}

export default App;
