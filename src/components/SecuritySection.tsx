
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const SecuritySection = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-4">Web Security</h3>
        <p className="text-slate-600 mb-4">
          Security is about protecting websites, users, and data from threats. Modern web development 
          requires a strong focus on security best practices.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-white/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Common Threats</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="bg-red-50 p-3 rounded-lg">
              <h4 className="font-medium text-sm text-red-700">Cross-Site Scripting (XSS)</h4>
              <p className="text-xs text-red-600">
                Attackers inject malicious scripts into websites viewed by users
              </p>
            </div>
            <div className="bg-orange-50 p-3 rounded-lg">
              <h4 className="font-medium text-sm text-orange-700">SQL Injection</h4>
              <p className="text-xs text-orange-600">
                Attackers insert malicious SQL code into database queries
              </p>
            </div>
            <div className="bg-amber-50 p-3 rounded-lg">
              <h4 className="font-medium text-sm text-amber-700">Cross-Site Request Forgery</h4>
              <p className="text-xs text-amber-600">
                Tricking users into performing unwanted actions on websites they're logged into
              </p>
            </div>
            <div className="bg-yellow-50 p-3 rounded-lg">
              <h4 className="font-medium text-sm text-yellow-700">Data Breaches</h4>
              <p className="text-xs text-yellow-600">
                Unauthorized access to sensitive user information
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Protection Strategies</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="bg-emerald-50 p-3 rounded-lg">
              <h4 className="font-medium text-sm text-emerald-700">HTTPS Everywhere</h4>
              <p className="text-xs text-emerald-600">
                Encrypting all data transmitted between users and websites
              </p>
            </div>
            <div className="bg-teal-50 p-3 rounded-lg">
              <h4 className="font-medium text-sm text-teal-700">Content Security Policy</h4>
              <p className="text-xs text-teal-600">
                Controlling which resources can be loaded by a webpage
              </p>
            </div>
            <div className="bg-cyan-50 p-3 rounded-lg">
              <h4 className="font-medium text-sm text-cyan-700">Input Validation</h4>
              <p className="text-xs text-cyan-600">
                Checking all user input to ensure it's safe and expected
              </p>
            </div>
            <div className="bg-sky-50 p-3 rounded-lg">
              <h4 className="font-medium text-sm text-sky-700">Regular Updates</h4>
              <p className="text-xs text-sky-600">
                Keeping all software and dependencies up to date
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-medium mb-4">Authentication & Authorization</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-medium text-indigo-600 mb-2">Multi-Factor Authentication</h4>
            <p className="text-sm text-slate-600">
              Requiring multiple forms of verification for login
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-medium text-purple-600 mb-2">OAuth & OpenID</h4>
            <p className="text-sm text-slate-600">
              Secure authorization protocols for third-party access
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-medium text-pink-600 mb-2">JWT Tokens</h4>
            <p className="text-sm text-slate-600">
              Secure method for transmitting information between parties
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
