// Template 3: 2 Column, No Picture - Clean Minimal

export function TwoColumnMinimal() {
  return (
    <div className="w-full max-w-[8.5in] mx-auto bg-white flex">
      {/* Left Sidebar */}
      <div className="w-1/3 bg-slate-800 text-white p-8">
        <div className="mb-8">
          <h1 className="mb-2 text-white">MICHAEL ROBERTS</h1>
          <p className="text-slate-300">UX Designer</p>
        </div>

        {/* Contact */}
        <section className="mb-8">
          <h2 className="text-sm uppercase tracking-wider mb-3 text-slate-300">Contact</h2>
          <div className="space-y-2 text-sm">
            <p className="break-words">michael.roberts@email.com</p>
            <p>(555) 234-5678</p>
            <p>Seattle, WA</p>
            <p className="break-words">portfolio.michaelroberts.com</p>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-8">
          <h2 className="text-sm uppercase tracking-wider mb-3 text-slate-300">Skills</h2>
          <div className="space-y-3">
            <div>
              <p className="mb-1">UI/UX Design</p>
              <div className="w-full bg-slate-700 h-1.5 rounded">
                <div className="bg-blue-400 h-1.5 rounded" style={{ width: '95%' }}></div>
              </div>
            </div>
            <div>
              <p className="mb-1">Figma</p>
              <div className="w-full bg-slate-700 h-1.5 rounded">
                <div className="bg-blue-400 h-1.5 rounded" style={{ width: '90%' }}></div>
              </div>
            </div>
            <div>
              <p className="mb-1">User Research</p>
              <div className="w-full bg-slate-700 h-1.5 rounded">
                <div className="bg-blue-400 h-1.5 rounded" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div>
              <p className="mb-1">Prototyping</p>
              <div className="w-full bg-slate-700 h-1.5 rounded">
                <div className="bg-blue-400 h-1.5 rounded" style={{ width: '88%' }}></div>
              </div>
            </div>
            <div>
              <p className="mb-1">Design Systems</p>
              <div className="w-full bg-slate-700 h-1.5 rounded">
                <div className="bg-blue-400 h-1.5 rounded" style={{ width: '82%' }}></div>
              </div>
            </div>
          </div>
        </section>

        {/* Tools */}
        <section className="mb-8">
          <h2 className="text-sm uppercase tracking-wider mb-3 text-slate-300">Tools</h2>
          <div className="space-y-1 text-sm">
            <p>• Figma</p>
            <p>• Adobe XD</p>
            <p>• Sketch</p>
            <p>• InVision</p>
            <p>• Adobe Creative Suite</p>
            <p>• Miro</p>
          </div>
        </section>

        {/* Languages */}
        <section>
          <h2 className="text-sm uppercase tracking-wider mb-3 text-slate-300">Languages</h2>
          <div className="space-y-1 text-sm">
            <p>English - Native</p>
            <p>Spanish - Fluent</p>
            <p>French - Basic</p>
          </div>
        </section>
      </div>

      {/* Right Content */}
      <div className="w-2/3 p-8">
        {/* Summary */}
        <section className="mb-8">
          <h2 className="mb-3 text-slate-800">PROFILE</h2>
          <p className="text-slate-700">
            Creative UX designer with 6+ years of experience crafting intuitive digital experiences. 
            Skilled in user research, wireframing, and creating design systems that enhance user 
            satisfaction and drive business results.
          </p>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h2 className="mb-3 text-slate-800">EXPERIENCE</h2>
          
          <div className="mb-6">
            <h3 className="text-slate-800">Senior UX Designer</h3>
            <p className="text-slate-500 text-sm mb-2">Design Studio Co. | 2020 - Present</p>
            <ul className="list-disc list-outside ml-5 text-slate-700 space-y-1 text-sm">
              <li>Led redesign of mobile app increasing user engagement by 45%</li>
              <li>Conducted user research sessions with 100+ participants</li>
              <li>Created comprehensive design system used across 5 products</li>
              <li>Collaborated with developers to ensure design implementation</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-slate-800">UX Designer</h3>
            <p className="text-slate-500 text-sm mb-2">Tech Innovations | 2018 - 2020</p>
            <ul className="list-disc list-outside ml-5 text-slate-700 space-y-1 text-sm">
              <li>Designed user flows and wireframes for SaaS platform</li>
              <li>Improved conversion rate by 30% through A/B testing</li>
              <li>Developed interactive prototypes for stakeholder presentations</li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="mb-3 text-slate-800">EDUCATION</h2>
          <div className="mb-3">
            <h3 className="text-slate-800">Bachelor of Fine Arts in Design</h3>
            <p className="text-slate-500 text-sm">Rhode Island School of Design | 2014 - 2018</p>
          </div>
        </section>

        {/* Certifications */}
        <section>
          <h2 className="mb-3 text-slate-800">CERTIFICATIONS</h2>
          <div className="space-y-1 text-sm text-slate-700">
            <p>• Google UX Design Professional Certificate</p>
            <p>• Nielsen Norman Group UX Certification</p>
            <p>• Interaction Design Foundation Certificate</p>
          </div>
        </section>
      </div>
    </div>
  );
}
