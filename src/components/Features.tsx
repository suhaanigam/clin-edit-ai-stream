
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Video, Heart, Brain, Network, Calendar, Phone, FileText, Database, Shield } from "lucide-react";

const Features = () => {
  const patientFeatures = [
    {
      icon: Video,
      title: "Free Remote Consultations",
      description: "Access healthcare professionals through free video consultations, breaking down geographic and financial barriers to clinical trial participation."
    },
    {
      icon: Users,
      title: "Inclusive Smart Matching",
      description: "AI-powered matching based on diagnosis, age, gender identity (including LGBTQ+ and non-binary), socioeconomic status, and shared experiences."
    },
    {
      icon: Network,
      title: "Community Networks",
      description: "Graph network analysis creates clusters connecting patients, caregivers, and those with similar struggles across related diseases and treatments."
    }
  ];

  const researcherFeatures = [
    {
      icon: Phone,
      title: "Automated Outreach",
      description: "Streamline patient recruitment with AI-powered phone and email outreach, reducing manual effort while maintaining personal connection."
    },
    {
      icon: FileText,
      title: "Voice-to-Form Entry",
      description: "Convert voice recordings directly into structured forms, eliminating repetitive data entry and reducing transcription errors."
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "AI coordinator manages complex appointment scheduling across researchers, clinics, patients, and family members automatically."
    },
    {
      icon: Brain,
      title: "Cross-Study Intelligence",
      description: "Identify related diseases and collaboration opportunities by analyzing shared biological pathways and treatment mechanisms."
    }
  ];

  const platformFeatures = [
    {
      icon: Database,
      title: "Registry Integration",
      description: "Seamlessly connect with existing patient registries and clinical databases for comprehensive trial management."
    },
    {
      icon: Shield,
      title: "Privacy-First Design",
      description: "Built with privacy-conscious architecture ensuring HIPAA compliance and secure handling of sensitive patient data."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Comprehensive <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Clinical Research Platform</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto">
            From inclusive patient outreach to automated research coordination, ClinEdit bridges the gap between 
            patients and researchers with AI-powered tools that prioritize accessibility and efficiency.
          </p>
        </div>

        {/* Patient-Focused Features */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            <Heart className="inline-block h-6 w-6 mr-2 text-pink-400" />
            For Patients & Communities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {patientFeatures.map((feature, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:border-pink-500/50 transition-all duration-300 group">
                <CardHeader>
                  <div className="h-12 w-12 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400 text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Researcher-Focused Features */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            <Brain className="inline-block h-6 w-6 mr-2 text-blue-400" />
            For Researchers & Clinicians
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {researcherFeatures.map((feature, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:border-blue-500/50 transition-all duration-300 group">
                <CardHeader>
                  <div className="h-12 w-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-white text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Platform Features */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            <Shield className="inline-block h-6 w-6 mr-2 text-green-400" />
            Platform & Security
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {platformFeatures.map((feature, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:border-green-500/50 transition-all duration-300 group">
                <CardHeader>
                  <div className="h-12 w-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400 text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
