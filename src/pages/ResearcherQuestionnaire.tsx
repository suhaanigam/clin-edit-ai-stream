import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const ResearcherQuestionnaire = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    institution: "",
    country: "",
    typeOfResearch: "",
    targetDiseases: "",
    interestedInCollab: "",
    needsAutomation: "",
    automationPreferences: "",
    pricingInterest: "",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:4000/api/researcher", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        alert("Thank you! Your information has been submitted.");
        setFormData({
          fullName: "",
          email: "",
          institution: "",
          country: "",
          typeOfResearch: "",
          targetDiseases: "",
          interestedInCollab: "",
          needsAutomation: "",
          automationPreferences: "",
          pricingInterest: "",
          notes: "",
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
      <Header />

      <main className="flex-grow flex flex-col items-center justify-center px-4 py-24">
        <h1 className="text-4xl font-bold mb-10 text-center">Researcher Questionnaire</h1>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-6xl bg-gray-800 rounded-2xl shadow-2xl p-12 space-y-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block mb-2">Full Name</label>
              <input
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-700"
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
                className="w-full p-3 rounded bg-gray-700"
                required
              />
            </div>

            <div>
              <label className="block mb-2">Institution / Organization</label>
              <input
                name="institution"
                type="text"
                value={formData.institution}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-700"
              />
            </div>

            <div>
              <label className="block mb-2">Country</label>
              <input
                name="country"
                type="text"
                placeholder="Country"
                value={formData.country}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-700"
              />
            </div>

            <div>
              <label className="block mb-2">
                Type of Research (e.g. clinical trials, observational)
              </label>
              <textarea
                name="typeOfResearch"
                value={formData.typeOfResearch}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-700"
                rows={3}
              />
            </div>

            <div>
              <label className="block mb-2">Target Diseases / Conditions</label>
              <textarea
                name="targetDiseases"
                value={formData.targetDiseases}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-700 resize-y"
                rows={3}
              />
            </div>

            <div>
              <label className="block mb-2">
                Are you interested in collaborating with other researchers?
              </label>
              <select
                name="interestedInCollab"
                value={formData.interestedInCollab}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-700"
              >
                <option value="">Select an option</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            <div>
              <label className="block mb-2">Do you need automation support?</label>
              <select
                name="needsAutomation"
                value={formData.needsAutomation}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-700"
              >
                <option value="">Select an option</option>
                <option value="emailsCallsDataEntry">Emails, Calls, Data Entry</option>
                <option value="marketing">Marketing Automation</option>
                <option value="both">Both</option>
                <option value="none">Not needed</option>
              </select>
            </div>

            <div>
              <label className="block mb-2">Describe any automation preferences</label>
              <textarea
                name="automationPreferences"
                value={formData.automationPreferences}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-700 resize-y"
                rows={3}
              />
            </div>

            <div>
              <label className="block mb-2">Interested in Pricing Plan?</label>
              <select
                name="pricingInterest"
                value={formData.pricingInterest}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-700"
              >
                <option value="">Select an option</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            <div>
              <label className="block mb-2">Additional Notes or Questions</label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-700 resize-y"
                rows={3}
              />
            </div>
          </div>

          <div className="flex justify-center pt-8">
            <Button type="submit" className="px-8 py-3 bg-pink-600 hover:bg-pink-700">
              Submit Questionnaire
            </Button>
          </div>
        </form>
      </main>

      <Footer />
    </div>
  );
};

export default ResearcherQuestionnaire;
