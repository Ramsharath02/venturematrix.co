import React, { useState } from 'react';
import { Mail, ChevronRight, TrendingUp, Users, Target, Zap, Building, DollarSign, MessageSquare } from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');
  const [contactEmail, setContactEmail] = useState('');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubscribe = (e: React.FormEvent, emailValue: string) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscribing email:', emailValue);
    // Reset form
    setEmail('');
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle contact form submission
    console.log('Contact email:', contactEmail);
    setContactEmail('');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-gray-900">VentureMatrix</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-[#28A745] transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('newsletter')}
                className="text-gray-700 hover:text-[#28A745] transition-colors duration-200"
              >
                Newsletter
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-[#28A745] transition-colors duration-200"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Decode the Future with{' '}
              <span className="text-[#28A745]">VentureMatrix</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4 font-medium">
              Weekly tech insights and innovation stories—delivered.
            </p>
            <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
              Curated news, founder insights, and tech you should care about.
            </p>
            
            <form onSubmit={(e) => handleSubscribe(e, email)} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#28A745] focus:border-transparent text-gray-900"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#28A745] text-white px-8 py-3 rounded-lg hover:bg-[#218838] transition-colors duration-200 flex items-center justify-center gap-2 font-medium"
                >
                  Subscribe
                  <ChevronRight size={20} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Section 1 - What Makes Us Different */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Makes Us Different
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We don't just collect news—we curate intelligence for forward-thinking minds.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-[#28A745]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#28A745]/20 transition-colors duration-300">
                <Target className="text-[#28A745]" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Curations</h3>
              <p className="text-gray-600 leading-relaxed">
                We pick what matters. Our editorial team filters through thousands of stories to bring you only the most impactful tech developments.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="bg-[#28A745]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#28A745]/20 transition-colors duration-300">
                <Users className="text-[#28A745]" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Viewpoints</h3>
              <p className="text-gray-600 leading-relaxed">
                Written by people who know. Our contributors include founders, investors, and industry leaders who share real insights.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="bg-[#28A745]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#28A745]/20 transition-colors duration-300">
                <TrendingUp className="text-[#28A745]" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Actionable Trends</h3>
              <p className="text-gray-600 leading-relaxed">
                Know what's next. We identify emerging patterns and translate them into actionable intelligence for your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - You'll Read About */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              You'll Read About
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From breakthrough innovations to market signals, we cover the stories that shape tomorrow.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="bg-gradient-to-r from-[#28A745] to-[#20c997] w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Zap className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Breakthroughs</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                AI, ClimateTech, BioTech—discover the innovations that will reshape industries and create new opportunities.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Latest AI model developments</li>
                <li>• Climate solution innovations</li>
                <li>• Biotech breakthroughs</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="bg-gradient-to-r from-[#28A745] to-[#20c997] w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Building className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Founder Logs</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Behind-the-scenes lessons from successful entrepreneurs who've built companies from zero to scale.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Startup building strategies</li>
                <li>• Product development insights</li>
                <li>• Team scaling lessons</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="bg-gradient-to-r from-[#28A745] to-[#20c997] w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <DollarSign className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Funding Signals</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                What VCs are betting on—track investment trends and identify the next wave of venture opportunities.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Investment trend analysis</li>
                <li>• Emerging market opportunities</li>
                <li>• VC firm strategies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Your Weekly Edge */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Your Weekly Edge
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-12">
            At VentureMatrix, we believe meaningful content creates clarity. We gather, analyze, and package the most important tech stories to help you grow, invest, or innovate with confidence.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[#28A745] mb-2">10K+</div>
              <p className="text-gray-600">Weekly readers</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#28A745] mb-2">50+</div>
              <p className="text-gray-600">Expert contributors</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#28A745] mb-2">100%</div>
              <p className="text-gray-600">Curated content</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="newsletter" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#28A745] to-[#20c997]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Be part of the matrix.<br />
            Get weekly clarity in your inbox.
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Join thousands of founders, investors, and tech leaders who rely on VentureMatrix for their weekly intelligence briefing.
          </p>
          
          <form onSubmit={(e) => handleSubscribe(e, email)} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-white/50 text-gray-900"
                required
              />
              <button
                type="submit"
                className="bg-white text-[#28A745] px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2 font-medium"
              >
                Subscribe
                <Mail size={20} />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Reach Out or Collaborate with Us
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Have insights to share? Want to contribute? Or simply want to connect? We'd love to hear from you.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's Connect</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-[#28A745]/10 w-10 h-10 rounded-full flex items-center justify-center">
                    <Mail className="text-[#28A745]" size={20} />
                  </div>
                  <span className="text-gray-600">venturematrix.co</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-[#28A745]/10 w-10 h-10 rounded-full flex items-center justify-center">
                    <MessageSquare className="text-[#28A745]" size={20} />
                  </div>
                  <span className="text-gray-600">Partnerships & Collaborations</span>
                </div>
              </div>
            </div>
            
            <div>
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <input
                  type="email"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#28A745] focus:border-transparent text-gray-900"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-[#28A745] text-white px-8 py-3 rounded-lg hover:bg-[#218838] transition-colors duration-200 flex items-center justify-center gap-2 font-medium"
                >
                  Get in Touch
                  <ChevronRight size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;