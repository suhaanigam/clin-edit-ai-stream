import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { User, Microscope } from "lucide-react";

const Questionnaire = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-900 text-white flex flex-col">
      <Header />

      {/* Centered Main Section */}
      <main className="flex flex-col items-center justify-center min-h-screen px-4 py-24">
        <h1 className="text-4xl font-bold mb-20 text-center">Who Are You?</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl w-full">
          {/* Patient Box */}
          <div
            onClick={() => navigate("/questionnaire/patient")}
            className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-3xl p-12 text-center cursor-pointer shadow-xl hover:scale-105 transition-transform"
          >
            <div className="flex justify-center mb-4">
              <User size={48} strokeWidth={2.5} />
            </div>
            <h2 className="text-3xl font-semibold mb-2">Patient</h2>
            <p className="text-gray-100 mb-4">
              Answer questions tailored for patients to help us connect you with clinical studies.
            </p>
            <p className="text-sm text-gray-200">
              Get personalized matches and free consultations.
            </p>
          </div>

          {/* Researcher Box */}
          <div
            onClick={() => navigate("/questionnaire/researcher")}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-center cursor-pointer shadow-xl hover:scale-105 transition-transform"
          >
            <div className="flex justify-center mb-4">
              <Microscope size={48} strokeWidth={2.5} />
            </div>
            <h2 className="text-3xl font-semibold mb-2">Clinical Researcher</h2>
            <p className="text-gray-100 mb-4">
              Fill in research-specific questions to find matching patients and trials.
            </p>
            <p className="text-sm text-gray-200">
              Streamline outreach, collaboration, and registry integration.
            </p>
          </div>
        </div>
      </main>

      {/* Footer shows up only when there's enough space */}
      <Footer />
    </div>
  );
};

export default Questionnaire;
