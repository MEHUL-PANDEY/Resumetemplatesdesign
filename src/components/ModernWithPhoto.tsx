// Template 2: 1 Column, With Picture - Modern Professional

export function ModernWithPhoto() {
  return (
    <div className="w-full max-w-[8.5in] mx-auto bg-white">
      {/* Header with Photo */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-12 pb-8">
        <div className="flex items-center gap-6 mb-6">
          <div className="w-32 h-32 rounded-full bg-white/20 border-4 border-white flex items-center justify-center flex-shrink-0">
            <svg className="w-20 h-20 text-white/60" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>
          <div>
            <h1 className="mb-2 text-white">SARAH CHEN</h1>
            <p className="text-blue-100 mb-3">Marketing Director</p>
            <div className="flex gap-4 text-sm text-blue-100">
              <span>sarah.chen@email.com</span>
              <span>|</span>
              <span>(555) 987-6543</span>
              <span>|</span>
              <span>Boston, MA</span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-12 py-8">
        {/* About */}
        <section className="mb-8">
          <h2 className="text-blue-600 mb-3">ABOUT ME</h2>
          <p className="text-slate-700">
            Dynamic marketing professional with 10+ years of experience driving brand growth and 
            leading high-performing teams. Specialized in digital marketing strategies, content 
            creation, and data-driven campaign optimization. Passionate about creating compelling 
            narratives that resonate with target audiences.
          </p>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h2 className="text-blue-600 mb-3">EXPERIENCE</h2>
          
          <div className="mb-6 pl-4 border-l-2 border-blue-600">
            <div className="flex justify-between mb-1">
              <h3>Marketing Director</h3>
              <span className="text-slate-500">2019 - Present</span>
            </div>
            <p className="text-slate-600 mb-2">GlobalTech Solutions | Boston, MA</p>
            <ul className="list-disc list-outside ml-5 text-slate-700 space-y-1">
              <li>Increased brand awareness by 150% through integrated marketing campaigns</li>
              <li>Managed $2M annual marketing budget across digital and traditional channels</li>
              <li>Built and led team of 12 marketing professionals</li>
              <li>Launched successful product campaigns generating $10M+ in revenue</li>
            </ul>
          </div>

          <div className="mb-6 pl-4 border-l-2 border-blue-600">
            <div className="flex justify-between mb-1">
              <h3>Senior Marketing Manager</h3>
              <span className="text-slate-500">2015 - 2019</span>
            </div>
            <p className="text-slate-600 mb-2">Creative Brands Inc. | New York, NY</p>
            <ul className="list-disc list-outside ml-5 text-slate-700 space-y-1">
              <li>Developed content strategy increasing organic traffic by 200%</li>
              <li>Managed social media presence across 6 platforms with 500K+ followers</li>
              <li>Coordinated with sales team to align marketing efforts with revenue goals</li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-blue-600 mb-3">EDUCATION</h2>
          <div className="mb-1">
            <h3>MBA in Marketing</h3>
            <p className="text-slate-600">Harvard Business School | 2013 - 2015</p>
          </div>
          <div className="mt-3">
            <h3>Bachelor of Arts in Communications</h3>
            <p className="text-slate-600">Boston University | 2009 - 2013</p>
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-blue-600 mb-3">CORE COMPETENCIES</h2>
          <div className="flex flex-wrap gap-2">
            {['Digital Marketing', 'Brand Strategy', 'Content Marketing', 'SEO/SEM', 
              'Social Media', 'Analytics', 'Team Leadership', 'Budget Management',
              'Campaign Management', 'Marketing Automation'].map((skill) => (
              <span key={skill} className="px-3 py-1 bg-blue-50 text-blue-700 rounded">
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
