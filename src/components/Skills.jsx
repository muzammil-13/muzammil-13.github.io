import React from 'react';

const skillCategories = [
    {
        title: "Programming Languages",
        icon: "fa-code",
        skills: [
            { name: "Python", icon: "fab fa-python" },
            { name: "JavaScript", icon: "fab fa-js" },
            { name: "HTML5", icon: "fab fa-html5" },
            { name: "Bash", icon: "fas fa-terminal" }
        ]
    },
    {
        title: "Frontend Development",
        icon: "fa-laptop-code",
        skills: [
            { name: "React", icon: "fab fa-react" },
            { name: "Next.js", icon: "" },
            { name: "Bootstrap", icon: "fab fa-bootstrap" },
            { name: "MUI", icon: "" },
            { name: "CSS3", icon: "fab fa-css3-alt" },
            { name: "Flutter", icon: "" }
        ]
    },
    {
        title: "Backend Development",
        icon: "fa-server",
        skills: [
            { name: "Django", icon: "" },
            { name: "Node.js", icon: "fab fa-node-js" },
            { name: "Express.js", icon: "" },
            { name: "Flask", icon: "" }
        ]
    },
    {
        title: "Cloud & Databases",
        icon: "fa-cloud",
        skills: [
            { name: "Google Cloud", icon: "" },
            { name: "Firebase", icon: "" },
            { name: "MongoDB", icon: "" },
            { name: "Supabase", icon: "" }
        ]
    },
    {
        title: "DevOps & Tools",
        icon: "fa-tools",
        skills: [
            { name: "Docker", icon: "fab fa-docker" },
            { name: "Git", icon: "fab fa-git-alt" },
            { name: "Terraform", icon: "" },
            { name: "Postman", icon: "" },
            { name: "Figma", icon: "" },
            { name: "Notion", icon: "" }
        ]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-gray-50/50 dark:bg-black/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="section-title text-center" data-aos="fade-up">🛠️ Tech Stack</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="card group hover:border-mikadoYellow/30"
                            data-aos="fade-up"
                            data-aos-delay={index * 50}
                        >
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-roseTaupe dark:text-gray-200">
                                <i className={`fas ${category.icon} text-mikadoYellow`}></i>
                                {category.title}
                            </h3>

                            <div className="flex flex-wrap gap-2.5">
                                {category.skills.map((skill, skillIndex) => (
                                    <span
                                        key={skillIndex}
                                        className="badge"
                                    >
                                        {skill.icon && <i className={`${skill.icon} text-lg`}></i>}
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
