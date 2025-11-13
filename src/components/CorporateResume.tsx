// Template 5: 2 Column, No Picture - Corporate Style

export function CorporateResume() {
  return (
    <div className="w-full max-w-[8.5in] mx-auto bg-white flex">
      {/* Left Sidebar */}
      <div className="w-[32%] bg-gradient-to-b from-slate-700 to-slate-800 text-white p-8">
        <div className="mb-8">
          <h1 className="mb-2 text-white">DAVID MARTINEZ</h1>
          <div className="h-1 w-12 bg-amber-500 mb-3"></div>
          <p className="text-slate-200">Project Manager</p>
        </div>

        {/* Contact */}
        <section className="mb-8">
          <h2 className="text-amber-500 mb-3 uppercase text-sm tracking-wider">Contact Info</h2>
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-slate-400 text-xs mb-1">Email</p>
              <p className="break-words">david.martinez@email.com</p>
            </div>
            <div>
              <p className="text-slate-400 text-xs mb-1">Phone</p>
              <p>(555) 456-7890</p>
            </div>
            <div>
              <p className="text-slate-400 text-xs mb-1">Location</p>
              <p>Austin, TX</p>
            </div>
            <div>
              <p className="text-slate-400 text-xs mb-1">LinkedIn</p>
              <p className="break-words">linkedin.com/in/davidmartinez</p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-amber-500 mb-3 uppercase text-sm tracking-wider">Education</h2>
          <div className="mb-4">
            <h3 className="text-white text-sm">MBA</h3>
            <p className="text-slate-300 text-xs mt-1">University of Texas</p>
            <p className="text-slate-400 text-xs">2015 - 2017</p>
          </div>
          <div>
            <h3 className="text-white text-sm">BS Business Admin</h3>
            <p className="text-slate-300 text-xs mt-1">Texas A&M University</p>
            <p className="text-slate-400 text-xs">2011 - 2015</p>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-8">
          <h2 className="text-amber-500 mb-3 uppercase text-sm tracking-wider">Core Skills</h2>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
              <span>Project Planning</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
              <span>Risk Management</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
              <span>Agile/Scrum</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
              <span>Budget Management</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
              <span>Stakeholder Relations</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
              <span>Team Leadership</span>
            </div>
          </div>
        </section>

        {/* Software */}
        <section className="mb-8">
          <h2 className="text-amber-500 mb-3 uppercase text-sm tracking-wider">Software</h2>
          <div className="space-y-1 text-sm">
            <p>• Jira</p>
            <p>• Microsoft Project</p>
            <p>• Asana</p>
            <p>• Slack</p>
            <p>• Confluence</p>
            <p>• Trello</p>
          </div>
        </section>

        {/* Certifications */}
        <section>
          <h2 className="text-amber-500 mb-3 uppercase text-sm tracking-wider">Certifications</h2>
          <div className="space-y-3 text-sm">
            <div>
              <p>PMP</p>
              <p className="text-slate-400 text-xs">Project Management Professional</p>
            </div>
            <div>
              <p>CSM</p>
              <p className="text-slate-400 text-xs">Certified Scrum Master</p>
            </div>
            <div>
              <p>Six Sigma Green Belt</p>
            </div>
          </div>
        </section>
      </div>

      {/* Right Content */}
      <div className="w-[68%] p-8">
        {/* Professional Summary */}
        <section className="mb-8">
          <h2 className="mb-3 text-slate-800 uppercase tracking-wide">Professional Summary</h2>
          <div className="h-0.5 w-full bg-amber-500 mb-4"></div>
          <p className="text-slate-700">
            Results-oriented project manager with 9+ years of experience leading cross-functional 
            teams and delivering complex projects on time and within budget. PMP-certified professional 
            with proven track record in Agile methodologies, risk management, and stakeholder engagement. 
            Successfully managed projects ranging from $500K to $5M with teams of up to 30 members.
          </p>
        </section>

        {/* Professional Experience */}
        <section className="mb-8">
          <h2 className="mb-3 text-slate-800 uppercase tracking-wide">Professional Experience</h2>
          <div className="h-0.5 w-full bg-amber-500 mb-4"></div>
          
          <div className="mb-6">
            <div className="flex justify-between items-baseline mb-1">
              <h3>Senior Project Manager</h3>
              <span className="text-slate-500">Jan 2020 - Present</span>
            </div>
            <p className="text-amber-600 mb-3">Enterprise Solutions Inc. | Austin, TX</p>
            <ul className="list-disc list-outside ml-5 text-slate-700 space-y-1.5">
              <li>Leading portfolio of 8 concurrent projects with combined budget of $12M</li>
              <li>Implemented Agile transformation reducing time-to-market by 35%</li>
              <li>Achieved 98% on-time delivery rate across all projects in 2024</li>
              <li>Managed stakeholder expectations for Fortune 500 clients</li>
              <li>Reduced project costs by 20% through process optimization</li>
            </ul>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-baseline mb-1">
              <h3>Project Manager</h3>
              <span className="text-slate-500">Mar 2017 - Dec 2019</span>
            </div>
            <p className="text-amber-600 mb-3">TechCorp Solutions | Dallas, TX</p>
            <ul className="list-disc list-outside ml-5 text-slate-700 space-y-1.5">
              <li>Managed software development projects for healthcare industry</li>
              <li>Coordinated teams of 15-20 developers, designers, and QA specialists</li>
              <li>Delivered 12 major projects with 95% client satisfaction rate</li>
              <li>Implemented risk mitigation strategies reducing project delays by 40%</li>
            </ul>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-baseline mb-1">
              <h3>Associate Project Manager</h3>
              <span className="text-slate-500">Jun 2015 - Feb 2017</span>
            </div>
            <p className="text-amber-600 mb-3">Digital Innovations | Houston, TX</p>
            <ul className="list-disc list-outside ml-5 text-slate-700 space-y-1.5">
              <li>Assisted in managing IT infrastructure projects</li>
              <li>Created project schedules and tracked milestones using MS Project</li>
              <li>Facilitated daily stand-ups and sprint planning meetings</li>
            </ul>
          </div>
        </section>

        {/* Key Achievements */}
        <section>
          <h2 className="mb-3 text-slate-800 uppercase tracking-wide">Key Achievements</h2>
          <div className="h-0.5 w-full bg-amber-500 mb-4"></div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-50 p-4 rounded">
              <p className="text-amber-600 mb-1">Project Success Rate</p>
              <p className="text-slate-700">98% on-time delivery</p>
            </div>
            <div className="bg-slate-50 p-4 rounded">
              <p className="text-amber-600 mb-1">Cost Savings</p>
              <p className="text-slate-700">$2.5M saved through optimization</p>
            </div>
            <div className="bg-slate-50 p-4 rounded">
              <p className="text-amber-600 mb-1">Team Growth</p>
              <p className="text-slate-700">Built team from 5 to 30 members</p>
            </div>
            <div className="bg-slate-50 p-4 rounded">
              <p className="text-amber-600 mb-1">Client Satisfaction</p>
              <p className="text-slate-700">96% average rating</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
