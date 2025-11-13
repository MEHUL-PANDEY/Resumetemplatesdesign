// Template 4: 2 Column, With Picture - Contemporary

export function ContemporaryWithPhoto() {
  return (
    <div className="w-full max-w-[8.5in] mx-auto bg-white flex">
      {/* Left Sidebar */}
      <div className="w-[35%] bg-slate-50 p-8 border-r border-slate-200">
        {/* Photo */}
        <div className="mb-6">
          <div className="w-40 h-40 mx-auto rounded-lg bg-gradient-to-br from-purple-200 to-purple-300 flex items-center justify-center">
            <svg className="w-24 h-24 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>
        </div>

        <div className="text-center mb-6">
          <h1 className="mb-1">EMMA WILLIAMS</h1>
          <p className="text-purple-600">Data Analyst</p>
        </div>

        {/* Contact */}
        <section className="mb-6 pb-6 border-b border-slate-300">
          <h2 className="text-sm uppercase tracking-wider mb-3 text-purple-600">Contact</h2>
          <div className="space-y-2 text-sm text-slate-700">
            <p className="break-words">emma.williams@email.com</p>
            <p>(555) 345-6789</p>
            <p>Chicago, IL</p>
            <p className="break-words">linkedin.com/in/emmawilliams</p>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-6 pb-6 border-b border-slate-300">
          <h2 className="text-sm uppercase tracking-wider mb-3 text-purple-600">Technical Skills</h2>
          <div className="space-y-2 text-sm text-slate-700">
            <p>• Python, R, SQL</p>
            <p>• Tableau, Power BI</p>
            <p>• Statistical Analysis</p>
            <p>• Machine Learning</p>
            <p>• Data Visualization</p>
            <p>• Excel (Advanced)</p>
            <p>• Google Analytics</p>
          </div>
        </section>

        {/* Soft Skills */}
        <section className="mb-6 pb-6 border-b border-slate-300">
          <h2 className="text-sm uppercase tracking-wider mb-3 text-purple-600">Soft Skills</h2>
          <div className="space-y-2 text-sm text-slate-700">
            <p>• Problem Solving</p>
            <p>• Communication</p>
            <p>• Critical Thinking</p>
            <p>• Team Collaboration</p>
            <p>• Presentation Skills</p>
          </div>
        </section>

        {/* Certifications */}
        <section>
          <h2 className="text-sm uppercase tracking-wider mb-3 text-purple-600">Certifications</h2>
          <div className="space-y-2 text-sm text-slate-700">
            <p>Google Data Analytics Certificate</p>
            <p className="text-slate-500 text-xs">2023</p>
            <p className="mt-2">Microsoft Certified: Data Analyst Associate</p>
            <p className="text-slate-500 text-xs">2022</p>
          </div>
        </section>
      </div>

      {/* Right Content */}
      <div className="w-[65%] p-8">
        {/* Summary */}
        <section className="mb-8">
          <h2 className="mb-3 text-purple-600 border-b-2 border-purple-600 pb-2">PROFESSIONAL SUMMARY</h2>
          <p className="text-slate-700">
            Detail-oriented data analyst with 5+ years of experience transforming complex datasets 
            into actionable insights. Proven expertise in statistical analysis, data visualization, 
            and predictive modeling. Skilled at communicating technical findings to non-technical 
            stakeholders to drive strategic decision-making.
          </p>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h2 className="mb-3 text-purple-600 border-b-2 border-purple-600 pb-2">WORK EXPERIENCE</h2>
          
          <div className="mb-6">
            <div className="flex justify-between items-start mb-1">
              <h3>Senior Data Analyst</h3>
              <span className="text-slate-500 text-sm">2021 - Present</span>
            </div>
            <p className="text-purple-600 text-sm mb-2">DataTech Solutions | Chicago, IL</p>
            <ul className="list-disc list-outside ml-5 text-slate-700 space-y-1">
              <li>Analyzed customer behavior data to identify trends, resulting in 25% increase in retention</li>
              <li>Created interactive dashboards used by C-level executives for strategic planning</li>
              <li>Led data quality initiatives improving accuracy by 40%</li>
              <li>Mentored junior analysts on best practices and statistical methods</li>
            </ul>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-start mb-1">
              <h3>Data Analyst</h3>
              <span className="text-slate-500 text-sm">2019 - 2021</span>
            </div>
            <p className="text-purple-600 text-sm mb-2">Analytics Corp | Chicago, IL</p>
            <ul className="list-disc list-outside ml-5 text-slate-700 space-y-1">
              <li>Developed predictive models that improved forecast accuracy by 35%</li>
              <li>Automated reporting processes saving 15 hours per week</li>
              <li>Collaborated with marketing team on campaign performance analysis</li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="mb-3 text-purple-600 border-b-2 border-purple-600 pb-2">EDUCATION</h2>
          <div className="mb-3">
            <div className="flex justify-between items-start mb-1">
              <h3>Master of Science in Data Science</h3>
              <span className="text-slate-500 text-sm">2017 - 2019</span>
            </div>
            <p className="text-slate-600">Northwestern University | Evanston, IL</p>
          </div>
          <div>
            <div className="flex justify-between items-start mb-1">
              <h3>Bachelor of Science in Statistics</h3>
              <span className="text-slate-500 text-sm">2013 - 2017</span>
            </div>
            <p className="text-slate-600">University of Illinois | Urbana-Champaign, IL</p>
          </div>
        </section>

        {/* Projects */}
        <section>
          <h2 className="mb-3 text-purple-600 border-b-2 border-purple-600 pb-2">KEY PROJECTS</h2>
          <div className="space-y-3">
            <div>
              <h3 className="text-slate-800">Customer Segmentation Analysis</h3>
              <p className="text-slate-700 text-sm">Implemented clustering algorithm to segment 500K customers, enabling targeted marketing strategies that increased conversion by 28%</p>
            </div>
            <div>
              <h3 className="text-slate-800">Sales Forecasting Model</h3>
              <p className="text-slate-700 text-sm">Built time-series forecasting model using Python that predicted quarterly sales with 92% accuracy</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
