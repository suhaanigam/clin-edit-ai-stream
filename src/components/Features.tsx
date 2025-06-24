
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Database, FileText, Shield, Zap, BarChart3 } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Advanced machine learning algorithms analyze clinical data patterns and identify insights that would take humans weeks to discover."
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Process clinical trial data in real-time with our high-performance computing infrastructure, enabling faster decision-making."
    },
    {
      icon: Database,
      title: "Data Integration",
      description: "Seamlessly integrate data from multiple sources including EDC systems, labs, and imaging platforms into a unified workflow."
    },
    {
      icon: Shield,
      title: "Compliance & Security",
      description: "Built with FDA 21 CFR Part 11 compliance and enterprise-grade security to protect sensitive clinical data."
    },
    {
      icon: FileText,
      title: "Automated Reporting",
      description: "Generate comprehensive clinical study reports automatically, reducing manual work and ensuring consistency across studies."
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Leverage predictive models to forecast trial outcomes, patient recruitment, and potential safety signals early in the process."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Cutting-Edge <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">AI Features</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our platform combines the latest in artificial intelligence with deep clinical research expertise 
            to deliver unprecedented efficiency and accuracy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 hover:border-blue-500/50 transition-all duration-300 group">
              <CardHeader>
                <div className="h-12 w-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
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
    </section>
  );
};

export default Features;
