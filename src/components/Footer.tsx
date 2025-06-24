
import { Mail, Phone, MapPin, Heart, Users, Brain } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              ClinEdit
            </h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Revolutionizing clinical research through inclusive patient outreach, AI-powered matching, 
              and intelligent automation. Connecting communities and advancing medical discoveries together.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center text-gray-400">
                <Mail className="h-4 w-4 mr-2" />
                <span>connect@clinedit.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center">
              <Heart className="h-4 w-4 mr-2 text-pink-400" />
              For Patients
            </h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">Free Consultations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">Community Matching</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">LGBTQ+ Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">Patient Networks</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center">
              <Brain className="h-4 w-4 mr-2 text-blue-400" />
              For Researchers
            </h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Outreach Automation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Smart Scheduling</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Registry Integration</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Cross-Study Analysis</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 ClinEdit. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0 flex items-center">
              <Users className="h-4 w-4 mr-2" />
              Connecting patients and researchers through inclusive AI.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
