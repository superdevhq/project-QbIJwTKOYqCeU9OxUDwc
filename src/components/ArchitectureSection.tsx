
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const ArchitectureSection = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-4">Modern Web Architecture</h3>
        <p className="text-slate-600 mb-4">
          Web architecture refers to how websites and applications are structured. Modern approaches focus on 
          creating maintainable, scalable, and efficient systems.
        </p>
      </div>

      <div className="relative bg-white p-6 rounded-lg shadow-sm mb-8">
        <div className="architecture-diagram">
          <div className="box primary">UI Components</div>
          <div className="arrow">↓</div>
          <div className="box secondary">State Management</div>
          <div className="arrow">↓</div>
          <div className="box accent">Data Fetching</div>
          <div className="arrow">↓</div>
          <div className="box neutral">API Layer</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-white/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Frontend Patterns</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div>
              <h4 className="font-medium text-sm">Component-Based Design</h4>
              <p className="text-xs text-slate-600">
                Building UIs from reusable, independent components
              </p>
            </div>
            <div>
              <h4 className="font-medium text-sm">State Management</h4>
              <p className="text-xs text-slate-600">
                Organizing and controlling application data
              </p>
            </div>
            <div>
              <h4 className="font-medium text-sm">Client-Side Routing</h4>
              <p className="text-xs text-slate-600">
                Navigating between pages without full page reloads
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Backend Patterns</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div>
              <h4 className="font-medium text-sm">Microservices</h4>
              <p className="text-xs text-slate-600">
                Breaking applications into smaller, specialized services
              </p>
            </div>
            <div>
              <h4 className="font-medium text-sm">Serverless</h4>
              <p className="text-xs text-slate-600">
                Running code without managing servers
              </p>
            </div>
            <div>
              <h4 className="font-medium text-sm">API-First Design</h4>
              <p className="text-xs text-slate-600">
                Designing APIs before implementing features
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-medium mb-4">Popular Approaches</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-medium text-indigo-600 mb-2">JAMstack</h4>
            <p className="text-sm text-slate-600">
              JavaScript, APIs, and Markup - pre-rendered sites with dynamic features
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-medium text-purple-600 mb-2">Single Page Apps</h4>
            <p className="text-sm text-slate-600">
              Applications that load once and update dynamically
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-medium text-pink-600 mb-2">Server Components</h4>
            <p className="text-sm text-slate-600">
              Components that render on the server for better performance
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
