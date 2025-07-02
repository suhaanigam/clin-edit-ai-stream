import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const PatientQuestionnaire = () => {
  const [formData, setFormData] = useState({
    ageGroup: "",
    genderIdentity: "",
    treatments: "",
    consequences: "",
    socioeconomicStatus: "",
    religion: "",
    ethnicity: "",
    nationality: "",
    relationshipStatus: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted data:", formData);
    // TODO: send data to backend API (once DB is connected)
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">

      <main className="flex-grow flex flex-col items-center px-4 py-10">
        <h1 className="text-3xl font-bold mb-6 text-center">Patient Questionnaire</h1>
        <form onSubmit={handleSubmit} className="w-full max-w-2xl bg-gray-800 rounded-xl shadow-lg p-8 space-y-6">
          <div>
            <label className="block mb-2">Age Group</label>
            <select name="ageGroup" value={formData.ageGroup} onChange={handleChange} className="w-full p-2 rounded bg-gray-700">
              <option value="">Select</option>
              <option value="under18">Under 18</option>
              <option value="18-30">18 - 30</option>
              <option value="31-50">31 - 50</option>
              <option value="51+">51+</option>
            </select>
          </div>

          <div>
            <label className="block mb-2">LGBTQ / Gender Identity</label>
            <input name="genderIdentity" type="text" value={formData.genderIdentity} onChange={handleChange} className="w-full p-2 rounded bg-gray-700" />
          </div>

          <div>
            <label className="block mb-2">Treatments</label>
            <textarea name="treatments" value={formData.treatments} onChange={handleChange} className="w-full p-2 rounded bg-gray-700" />
          </div>

          <div>
            <label className="block mb-2">Consequences (e.g., paralysis, blindness)</label>
            <textarea name="consequences" value={formData.consequences} onChange={handleChange} className="w-full p-2 rounded bg-gray-700" />
          </div>

          <div>
            <label className="block mb-2">Socioeconomic Status / Accessibility to Healthcare</label>
            <textarea name="socioeconomicStatus" value={formData.socioeconomicStatus} onChange={handleChange} className="w-full p-2 rounded bg-gray-700" />
          </div>

          <div>
            <label className="block mb-2">Religion</label>
            <input name="religion" value={formData.religion} onChange={handleChange} className="w-full p-2 rounded bg-gray-700" />
          </div>

          <div>
            <label className="block mb-2">Ethnicity</label>
            <input name="ethnicity" value={formData.ethnicity} onChange={handleChange} className="w-full p-2 rounded bg-gray-700" />
          </div>

          <div>
            <label className="block mb-2">Are you a Foreigner or Citizen?</label>
            <select name="nationality" value={formData.nationality} onChange={handleChange} className="w-full p-2 rounded bg-gray-700">
              <option value="">Select</option>
              <option value="foreigner">Foreigner</option>
              <option value="citizen">Citizen</option>
            </select>
          </div>

          <div>
            <label className="block mb-2">Relationship Status</label>
            <select name="relationshipStatus" value={formData.relationshipStatus} onChange={handleChange} className="w-full p-2 rounded bg-gray-700">
              <option value="">Select</option>
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="inRelationship">In a relationship</option>
            </select>
          </div>

          <Button type="submit" className="w-full bg-pink-600 hover:bg-pink-700">
            Submit Questionnaire
          </Button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default PatientQuestionnaire;
