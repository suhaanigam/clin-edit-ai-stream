import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Questionnaire = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Who Are You?
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
          <div
            onClick={() => navigate("/questionnaire/patient")}
            className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl p-10 text-center cursor-pointer shadow-xl hover:scale-105 transition-transform"
          >
            <h2 className="text-3xl font-semibold mb-4">Patient</h2>
            <p className="text-gray-100">
              Answer questions tailored for patients to help us connect you with clinical studies.
            </p>
          </div>
          <div
            onClick={() => navigate("/questionnaire/researcher")}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-10 text-center cursor-pointer shadow-xl hover:scale-105 transition-transform"
          >
            <h2 className="text-3xl font-semibold mb-4">Clinical Researcher</h2>
            <p className="text-gray-100">
              Fill in research-specific questions to find matching patients and trials.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Questionnaire;
