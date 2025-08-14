import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/section-title";
import { AnimatedButton } from "@/components/ui/animated-button";
import { projects } from "@/data/portfolio";
import { Github, ExternalLink, Clock } from "lucide-react";
import { useState } from "react";

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const categories = ["all", "Web Application", "Mobile Application", "Blockchain"];

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Featured Projects"
          subtitle="A showcase of my technical skills and creative solutions"
        />

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground shadow-primary"
                  : "bg-card text-muted-foreground hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {category === "all" ? "All Projects" : category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-500 border border-border hover:border-primary/30 h-full flex flex-col">
                {/* Project Image */}
                <div className="relative overflow-hidden h-48 bg-gradient-dark">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
                  
                  {/* Status Badge */}
                  {project.status === "coming-soon" && (
                    <div className="absolute top-4 right-4 bg-emerald/90 text-emerald-foreground px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      Coming Soon
                    </div>
                  )}
                  
                  {/* Quick Action Buttons */}
                  <div className="absolute top-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-background/90 backdrop-blur-sm rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.demo && project.status !== "coming-soon" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-background/90 backdrop-blur-sm rounded-full hover:bg-emerald hover:text-emerald-foreground transition-all duration-200"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">
                        {project.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {project.github && (
                      <AnimatedButton
                        variant="outline"
                        size="sm"
                        href={project.github}
                        icon={<Github className="w-4 h-4" />}
                        className="flex-1"
                      >
                        Code
                      </AnimatedButton>
                    )}
                    {project.demo && project.status !== "coming-soon" && (
                      <AnimatedButton
                        variant="emerald"
                        size="sm"
                        href={project.demo}
                        icon={<ExternalLink className="w-4 h-4" />}
                        className="flex-1"
                      >
                        Demo
                      </AnimatedButton>
                    )}
                    {project.status === "coming-soon" && (
                      <AnimatedButton
                        variant="outline"
                        size="sm"
                        disabled
                        className="flex-1"
                      >
                        Coming Soon
                      </AnimatedButton>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6 text-lg">
            Want to see more of my work?
          </p>
          <AnimatedButton
            variant="primary"
            size="lg"
            href="https://github.com/yassir"
            icon={<Github className="w-5 h-5" />}
          >
            View All Projects on GitHub
          </AnimatedButton>
        </motion.div>
      </div>
    </section>
  );
};