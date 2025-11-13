// Template 6: 2 Column, With Picture - Creative Professional

export function CreativeWithPhoto() {
  return (
    <div className="w-full max-w-[8.5in] mx-auto bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-8 flex items-center gap-6">
        <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center flex-shrink-0 border-4 border-white shadow-lg">
          <svg className="w-16 h-16 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
        </div>
        <div className="text-white">
          <h1 className="mb-1 text-white">OLIVIA ANDERSON</h1>
          <p className="text-emerald-100 mb-3">Graphic Designer & Brand Specialist</p>
          <div className="flex flex-wrap gap-4 text-sm text-emerald-50">
            <span>olivia.anderson@email.com</span>
            <span>•</span>
            <span>(555) 567-8901</span>
            <span>•</span>
            <span>Portland, OR</span>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Left Column */}
        <div className="w-[38%] p-8 bg-slate-50">
          {/* About */}
          <section className="mb-8">
            <h2 className="text-emerald-600 mb-3 flex items-center gap-2">
              <div className="w-8 h-0.5 bg-emerald-600"></div>
              ABOUT
            </h2>
            <p className="text-slate-700 text-sm">
              Passionate graphic designer with a keen eye for aesthetics and 7+ years creating 
              compelling visual identities. Specialized in brand development, print design, and 
              digital media.
            </p>
          </section>

          {/* Skills */}
          <section className="mb-8">
            <h2 className="text-emerald-600 mb-3 flex items-center gap-2">
              <div className="w-8 h-0.5 bg-emerald-600"></div>
              SKILLS
            </h2>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-700">Adobe Illustrator</span>
                  <span className="text-slate-500">Expert</span>
                </div>
                <div className="w-full bg-slate-200 h-2 rounded-full">
                  <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-700">Photoshop</span>
                  <span className="text-slate-500">Expert</span>
                </div>
                <div className="w-full bg-slate-200 h-2 rounded-full">
                  <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '93%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-700">InDesign</span>
                  <span className="text-slate-500">Advanced</span>
                </div>
                <div className="w-full bg-slate-200 h-2 rounded-full">
                  <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '88%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-700">Figma</span>
                  <span className="text-slate-500">Advanced</span>
                </div>
                <div className="w-full bg-slate-200 h-2 rounded-full">
                  <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-700">Brand Development</span>
                  <span className="text-slate-500">Expert</span>
                </div>
                <div className="w-full bg-slate-200 h-2 rounded-full">
                  <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
            </div>
          </section>

          {/* Expertise */}
          <section className="mb-8">
            <h2 className="text-emerald-600 mb-3 flex items-center gap-2">
              <div className="w-8 h-0.5 bg-emerald-600"></div>
              EXPERTISE
            </h2>
            <div className="flex flex-wrap gap-2">
              {['Branding', 'Logo Design', 'Print Design', 'Digital Design', 
                'Typography', 'Packaging', 'Illustration', 'UI Design'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-white text-emerald-700 text-xs rounded-full border border-emerald-200">
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Awards */}
          <section>
            <h2 className="text-emerald-600 mb-3 flex items-center gap-2">
              <div className="w-8 h-0.5 bg-emerald-600"></div>
              AWARDS
            </h2>
            <div className="space-y-2 text-sm text-slate-700">
              <div>
                <p>AIGA Design Award</p>
                <p className="text-slate-500 text-xs">2023</p>
              </div>
              <div>
                <p>Best Brand Identity</p>
                <p className="text-slate-500 text-xs">Design Week 2022</p>
              </div>
              <div>
                <p>Creative Excellence Award</p>
                <p className="text-slate-500 text-xs">2021</p>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column */}
        <div className="w-[62%] p-8">
          {/* Experience */}
          <section className="mb-8">
            <h2 className="text-emerald-600 mb-4 flex items-center gap-2">
              <div className="w-8 h-0.5 bg-emerald-600"></div>
              EXPERIENCE
            </h2>
            
            <div className="mb-6 relative pl-6 border-l-2 border-emerald-200">
              <div className="absolute left-[-5px] top-1 w-2 h-2 bg-emerald-500 rounded-full"></div>
              <div className="flex justify-between items-start mb-1">
                <h3>Senior Graphic Designer</h3>
                <span className="text-slate-500 text-sm">2021 - Present</span>
              </div>
              <p className="text-emerald-600 text-sm mb-2">Creative Minds Studio | Portland, OR</p>
              <ul className="list-disc list-outside ml-5 text-slate-700 space-y-1 text-sm">
                <li>Lead designer for 20+ successful brand identity projects</li>
                <li>Developed comprehensive brand guidelines for Fortune 500 clients</li>
                <li>Managed design team of 4 junior designers</li>
                <li>Created award-winning packaging designs for consumer products</li>
                <li>Increased client retention by 40% through exceptional design delivery</li>
              </ul>
            </div>

            <div className="mb-6 relative pl-6 border-l-2 border-emerald-200">
              <div className="absolute left-[-5px] top-1 w-2 h-2 bg-emerald-500 rounded-full"></div>
              <div className="flex justify-between items-start mb-1">
                <h3>Graphic Designer</h3>
                <span className="text-slate-500 text-sm">2018 - 2021</span>
              </div>
              <p className="text-emerald-600 text-sm mb-2">Design Collective | Seattle, WA</p>
              <ul className="list-disc list-outside ml-5 text-slate-700 space-y-1 text-sm">
                <li>Designed marketing materials for diverse client portfolio</li>
                <li>Created social media graphics generating 200K+ engagements</li>
                <li>Collaborated with marketing teams on integrated campaigns</li>
                <li>Produced print and digital assets for product launches</li>
              </ul>
            </div>

            <div className="relative pl-6 border-l-2 border-emerald-200">
              <div className="absolute left-[-5px] top-1 w-2 h-2 bg-emerald-500 rounded-full"></div>
              <div className="flex justify-between items-start mb-1">
                <h3>Junior Designer</h3>
                <span className="text-slate-500 text-sm">2016 - 2018</span>
              </div>
              <p className="text-emerald-600 text-sm mb-2">Pixel Perfect Agency | Portland, OR</p>
              <ul className="list-disc list-outside ml-5 text-slate-700 space-y-1 text-sm">
                <li>Assisted senior designers with brand development projects</li>
                <li>Created illustrations and graphics for digital campaigns</li>
                <li>Prepared presentation materials for client meetings</li>
              </ul>
            </div>
          </section>

          {/* Education */}
          <section className="mb-8">
            <h2 className="text-emerald-600 mb-4 flex items-center gap-2">
              <div className="w-8 h-0.5 bg-emerald-600"></div>
              EDUCATION
            </h2>
            <div className="pl-6">
              <div className="flex justify-between items-start mb-1">
                <h3>Bachelor of Fine Arts in Graphic Design</h3>
                <span className="text-slate-500 text-sm">2012 - 2016</span>
              </div>
              <p className="text-slate-600">Portland State University | Portland, OR</p>
              <p className="text-slate-500 text-sm mt-1">Graduated Summa Cum Laude | GPA: 3.9/4.0</p>
            </div>
          </section>

          {/* Portfolio */}
          <section>
            <h2 className="text-emerald-600 mb-4 flex items-center gap-2">
              <div className="w-8 h-0.5 bg-emerald-600"></div>
              FEATURED PROJECTS
            </h2>
            <div className="space-y-4 pl-6">
              <div>
                <h3 className="text-slate-800">EcoLife Brand Identity</h3>
                <p className="text-slate-600 text-sm">Complete brand redesign for sustainable lifestyle company including logo, packaging, and marketing materials. Project resulted in 60% increase in brand recognition.</p>
              </div>
              <div>
                <h3 className="text-slate-800">TechStart Annual Report</h3>
                <p className="text-slate-600 text-sm">Designed 80-page annual report combining data visualization with compelling storytelling. Won AIGA Design Award 2023.</p>
              </div>
              <div>
                <h3 className="text-slate-800">Artisan Coffee Packaging</h3>
                <p className="text-slate-600 text-sm">Created premium packaging line for specialty coffee roaster. Design increased shelf appeal and sales by 45%.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
