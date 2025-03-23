
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const BestPracticesSection = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-4">What is Modern Web Development?</h3>
        <p className="text-slate-600 mb-4">
          Modern web development is about creating websites and applications that are fast, secure, 
          accessible, and provide a great user experience across all devices.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-white/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Component-Based</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              Building websites using reusable components that can be combined in different ways
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Responsive Design</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              Creating websites that work well on all devices, from phones to desktops
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">User-Centered</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              Focusing on the needs of users and creating intuitive experiences
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-medium mb-4">Key Areas of Focus</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-medium text-indigo-600 mb-2">Architecture</h4>
            <p className="text-sm text-slate-600">
              How websites are structured and organized to be maintainable and scalable
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-medium text-purple-600 mb-2">Performance</h4>
            <p className="text-sm text-slate-600">
              Making websites load quickly and respond instantly to user interactions
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-medium text-pink-600 mb-2">Security</h4>
            <p className="text-sm text-slate-600">
              Protecting websites and user data from attacks and vulnerabilities
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-medium text-amber-600 mb-2">Accessibility</h4>
            <p className="text-sm text-slate-600">
              Ensuring websites can be used by everyone, including people with disabilities
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
