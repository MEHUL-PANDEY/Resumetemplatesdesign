// Template 1: 1 Column, No Picture - Classic Professional

export function ClassicResume() {
  return (
    <div className="w-full max-w-[8.5in] mx-auto bg-white p-12">
      {/* Header */}
      <div className="text-center mb-8 pb-6 border-b-2 border-slate-900">
        <h1 className="mb-2">JOHN ANDERSON</h1>
        <p className="text-slate-600 mb-3">Senior Software Engineer</p>
        <div className="flex justify-center gap-6 flex-wrap text-sm text-slate-600">
          <span>john.anderson@email.com</span>
          <span>•</span>
          <span>(555) 123-4567</span>
          <span>•</span>
          <span>New York, NY</span>
          <span>•</span>
          <span>linkedin.com/in/johnanderson</span>
        </div>
      </div>

      {/* Professional Summary */}
      <section className="mb-8">
        <h2 className="mb-3 pb-2 border-b border-slate-300">PROFESSIONAL SUMMARY</h2>
        <p className="text-slate-700">
          Results-driven software engineer with 8+ years of experience building scalable web applications. 
          Proven track record of leading development teams and delivering high-quality solutions that 
          drive business growth. Expert in modern JavaScript frameworks and cloud technologies.
        </p>
      </section>

      {/* Experience */}
      <section className="mb-8">
        <h2 className="mb-3 pb-2 border-b border-slate-300">PROFESSIONAL EXPERIENCE</h2>
        
        <div className="mb-6">
          <div className="flex justify-between mb-1">
            <h3>Senior Software Engineer</h3>
            <span className="text-slate-600">2020 - Present</span>
          </div>
          <p className="text-slate-600 mb-2">Tech Solutions Inc. | San Francisco, CA</p>
          <ul className="list-disc list-outside ml-5 text-slate-700 space-y-1">
            <li>Led development of microservices architecture serving 2M+ daily active users</li>
            <li>Reduced application load time by 40% through optimization and caching strategies</li>
            <li>Mentored team of 5 junior developers and conducted code reviews</li>
            <li>Implemented CI/CD pipeline reducing deployment time by 60%</li>
          </ul>
        </div>

        <div className="mb-6">
          <div className="flex justify-between mb-1">
            <h3>Software Engineer</h3>
            <span className="text-slate-600">2017 - 2020</span>
          </div>
          <p className="text-slate-600 mb-2">Digital Innovations LLC | New York, NY</p>
          <ul className="list-disc list-outside ml-5 text-slate-700 space-y-1">
            <li>Developed responsive web applications using React and Node.js</li>
            <li>Collaborated with design team to implement pixel-perfect UI components</li>
            <li>Improved test coverage from 45% to 85% across all projects</li>
          </ul>
        </div>
      </section>

      {/* Education */}
      <section className="mb-8">
        <h2 className="mb-3 pb-2 border-b border-slate-300">EDUCATION</h2>
        <div className="flex justify-between mb-1">
          <h3>Bachelor of Science in Computer Science</h3>
          <span className="text-slate-600">2013 - 2017</span>
        </div>
        <p className="text-slate-600">University of California, Berkeley | GPA: 3.8/4.0</p>
      </section>

      {/* Skills */}
      <section>
        <h2 className="mb-3 pb-2 border-b border-slate-300">SKILLS</h2>
        <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-slate-700">
          <div><span className="font-medium">Languages:</span> JavaScript, TypeScript, Python, Java</div>
          <div><span className="font-medium">Frameworks:</span> React, Node.js, Express, Next.js</div>
          <div><span className="font-medium">Databases:</span> PostgreSQL, MongoDB, Redis</div>
          <div><span className="font-medium">Tools:</span> Git, Docker, AWS, Jenkins</div>
        </div>
      </section>
    </div>
  );
}
