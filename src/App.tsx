import { useState } from 'react';
import { ClassicResume } from './components/ClassicResume';
import { ModernWithPhoto } from './components/ModernWithPhoto';
import { TwoColumnMinimal } from './components/TwoColumnMinimal';
import { ContemporaryWithPhoto } from './components/ContemporaryWithPhoto';
import { CorporateResume } from './components/CorporateResume';
import { CreativeWithPhoto } from './components/CreativeWithPhoto';
import { Button } from './components/ui/button';

const templates = [
  { id: 1, name: 'Classic Professional', component: ClassicResume },
  { id: 2, name: 'Modern with Photo', component: ModernWithPhoto },
  { id: 3, name: 'Two Column Minimal', component: TwoColumnMinimal },
  { id: 4, name: 'Contemporary with Photo', component: ContemporaryWithPhoto },
  { id: 5, name: 'Corporate Style', component: CorporateResume },
  { id: 6, name: 'Creative with Photo', component: CreativeWithPhoto },
];

export default function App() {
  const [selectedTemplate, setSelectedTemplate] = useState(0);

  const CurrentTemplate = templates[selectedTemplate].component;

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="bg-white border-b sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="mb-4">Professional Resume Templates</h1>
          <div className="flex flex-wrap gap-2">
            {templates.map((template, index) => (
              <Button
                key={template.id}
                onClick={() => setSelectedTemplate(index)}
                variant={selectedTemplate === index ? 'default' : 'outline'}
                size="sm"
              >
                {template.name}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-8">
        <div className="bg-white shadow-lg">
          <CurrentTemplate />
        </div>
      </div>
    </div>
  );
}
