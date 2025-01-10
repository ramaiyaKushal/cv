function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "Python", "JavaScript/TypeScript", "C++"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["Spring Boot", "React", "Node.js", "FastAPI"]
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "Docker", "Kubernetes", "AWS"]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category) => (
          <div key={category.title} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;