import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/section-title";
import { personalInfo, education } from "@/data/portfolio";
import { MapPin, Calendar, GraduationCap } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="About Me"
          subtitle="Passionate about technology and innovation"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image and Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="relative">
              <motion.div
                className="relative w-80 h-80 mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-glow"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/lovable-uploads/e2a87951-a639-4839-8727-567e3064e542.png"
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
              </motion.div>
              
              {/* Floating accent */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald/20 rounded-full blur-xl floating"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-xl floating" style={{ animationDelay: '-3s' }}></div>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <MapPin className="w-5 h-5 text-emerald" />
                <span className="text-muted-foreground">{personalInfo.location}</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <GraduationCap className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">Engineering Student at ENSIASD</span>
              </div>
            </div>
          </motion.div>

          {/* Bio and Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Bio */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold gradient-emerald-text">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {personalInfo.bio}
              </p>
            </div>

            {/* Education Timeline */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold gradient-text">Education</h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative pl-6 border-l-2 border-primary/30 hover:border-primary/60 transition-colors duration-300"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full shadow-primary"></div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-emerald">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                        {edu.status === 'current' && (
                          <span className="px-2 py-1 bg-emerald/20 text-emerald text-xs rounded-full">Current</span>
                        )}
                      </div>
                      <h4 className="text-lg font-semibold text-foreground">{edu.degree}</h4>
                      <p className="text-primary font-medium">{edu.school}</p>
                      <p className="text-muted-foreground text-sm">{edu.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};