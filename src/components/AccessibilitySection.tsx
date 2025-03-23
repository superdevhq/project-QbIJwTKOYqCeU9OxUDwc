
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const AccessibilitySection = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-4">Web Accessibility (a11y)</h3>
        <p className="text-slate-600 mb-4">
          Accessibility is about making websites usable by everyone, including people with disabilities.
          It's not just a nice-to-have—it's often a legal requirement.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card className="bg-gradient-to-br from-indigo-50 to-indigo-100 border-indigo-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-base text-indigo-700">Who Benefits?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex items-start gap-2">
              <div className="w-1 h-1 rounded-full bg-indigo-500 mt-2"></div>
              <p className="text-sm text-indigo-800">
                People with visual impairments using screen readers
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1 h-1 rounded-full bg-indigo-500 mt-2"></div>
              <p className="text-sm text-indigo-800">
                People with motor disabilities using keyboard navigation
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1 h-1 rounded-full bg-indigo-500 mt-2"></div>
              <p className="text-sm text-indigo-800">
                People with hearing impairments needing captions
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1 h-1 rounded-full bg-indigo-500 mt-2"></div>
              <p className="text-sm text-indigo-800">
                People with cognitive disabilities needing clear layouts
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1 h-1 rounded-full bg-indigo-500 mt-2"></div>
              <p className="text-sm text-indigo-800">
                Everyone using websites in challenging conditions
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-violet-50 to-violet-100 border-violet-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-base text-violet-700">WCAG Principles</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="bg-white/50 p-2 rounded-lg">
              <h4 className="font-medium text-sm text-violet-700">Perceivable</h4>
              <p className="text-xs text-violet-600">
                Information must be presentable to users in ways they can perceive
              </p>
            </div>
            <div className="bg-white/50 p-2 rounded-lg">
              <h4 className="font-medium text-sm text-violet-700">Operable</h4>
              <p className="text-xs text-violet-600">
                Interface components must be operable by all users
              </p>
            </div>
            <div className="bg-white/50 p-2 rounded-lg">
              <h4 className="font-medium text-sm text-violet-700">Understandable</h4>
              <p className="text-xs text-violet-600">
                Information and operation must be understandable
              </p>
            </div>
            <div className="bg-white/50 p-2 rounded-lg">
              <h4 className="font-medium text-sm text-violet-700">Robust</h4>
              <p className="text-xs text-violet-600">
                Content must be robust enough to work with various technologies
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">Implementation Techniques</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-medium text-amber-600 mb-2">Semantic HTML</h4>
            <p className="text-sm text-slate-600">
              Using the right HTML elements for their intended purpose
            </p>
            <div className="mt-2 p-2 bg-slate-50 rounded text-xs font-mono">
              &lt;button&gt; instead of &lt;div onclick&gt;
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-medium text-amber-600 mb-2">ARIA Attributes</h4>
            <p className="text-sm text-slate-600">
              Adding extra information for assistive technologies
            </p>
            <div className="mt-2 p-2 bg-slate-50 rounded text-xs font-mono">
              aria-label="Close menu"
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-medium text-amber-600 mb-2">Keyboard Navigation</h4>
            <p className="text-sm text-slate-600">
              Ensuring all features work without a mouse
            </p>
            <div className="mt-2 p-2 bg-slate-50 rounded text-xs font-mono">
              :focus { outline: 2px solid blue; }
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-medium mb-4">Testing Accessibility</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-medium text-emerald-600 mb-2">Automated Tools</h4>
            <p className="text-sm text-slate-600">
              Lighthouse, axe, WAVE - tools that can find common issues
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-medium text-emerald-600 mb-2">Manual Testing</h4>
            <p className="text-sm text-slate-600">
              Keyboard navigation, screen reader testing, color contrast checking
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
