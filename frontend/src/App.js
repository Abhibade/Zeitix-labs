import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import { Toaster } from "sonner";
import LandingPage from "@/pages/LandingPage";

function App() {
  return (
    <div className="App">
      <div className="noise-overlay" />
      <ReactLenis root options={{ lerp: 0.08, duration: 1.4 }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </BrowserRouter>
      </ReactLenis>
      <Toaster position="bottom-right" theme="dark" richColors />
    </div>
  );
}

export default App;
