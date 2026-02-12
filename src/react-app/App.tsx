import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "@/react-app/pages/Home";
import ProgramsPage from "@/react-app/pages/Programs";
import ProofPage from "@/react-app/pages/Proof";
import WhatsAppButton from "@/react-app/components/WhatsAppButton";
import InstagramButton from "@/react-app/components/InstagramButton";

export default function App() {
  return (
    <Router>
      <WhatsAppButton />
      <InstagramButton />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/proof" element={<ProofPage />} />
      </Routes>
    </Router>
  );
}
