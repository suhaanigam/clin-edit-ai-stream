import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const PatientQuestionnaire = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    dateOfBirth: "",
    email: "",
    phone: "",
    ageGroup: "",
    genderIdentity: "",
    selfDescribedGender: "",
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:4000/api/patient", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        alert("Thank you! Your response has been recorded.");
        setFormData({
          fullName: "",
          dateOfBirth: "",
          email: "",
          phone: "",
          ageGroup: "",
          genderIdentity: "",
          selfDescribedGender: "",
          treatments: "",
          consequences: "",
          socioeconomicStatus: "",
          religion: "",
          ethnicity: "",
          nationality: "",
          relationshipStatus: "",
        });
      } else {
        alert("Something went wrong.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };


  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">

      <main className="flex-grow flex flex-col items-center px-4 py-10">
        <h1 className="text-3xl font-bold mb-6 text-center">Patient Questionnaire</h1>
        <form onSubmit={handleSubmit} className="w-full max-w-2xl bg-gray-800 rounded-xl shadow-lg p-8 space-y-6">
          <div>
            <label className="block mb-2">Full Name</label>
            <input
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-700"
              required
            />
          </div>

          <div>
            <label className="block mb-2">Date of Birth</label>
            <input
              name="dateOfBirth"
              type="date"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-700"
              required
            />
          </div>
          <div>
            <label className="block mb-2">Email Address</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-700"
            />
          </div>

          <div>
            <label className="block mb-2">Phone Number</label>
            <input
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-700"
            />
          </div>
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
            <label className="block mb-2">
              How do you currently identify your gender?
            </label>
            <select
              name="genderIdentity"
              value={formData.genderIdentity}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-700"
            >
              <option value="">Select your gender identity</option>
              <option value="woman">Woman</option>
              <option value="man">Man</option>
              <option value="nonbinary">Non-binary / Third gender</option>
              <option value="preferNotToSay">Prefer not to say</option>
              <option value="selfDescribe">Let me describe (fill below)</option>
            </select>

            {formData.genderIdentity === "selfDescribe" && (
              <input
                type="text"
                name="selfDescribedGender"
                value={formData.selfDescribedGender}
                onChange={handleChange}
                placeholder="Please describe your gender identity"
                className="mt-2 w-full p-2 rounded bg-gray-700"
              />
            )}
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
            <label className="block mb-2">Please describe any factors that may affect your access to healthcare (e.g., financial concerns, transportation, housing)</label>
            <textarea name="socioeconomicStatus" value={formData.socioeconomicStatus} onChange={handleChange} className="w-full p-2 rounded bg-gray-700" />
          </div>

          <div>
            <label className="block mb-2">Are there any religious or spiritual beliefs that might affect your medical care?</label>
            <input name="religion" value={formData.religion} onChange={handleChange} className="w-full p-2 rounded bg-gray-700" />
          </div>

          <div>
            <label className="block mb-2">Do you identify with a particular ethnic background? (Optional)</label>
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
