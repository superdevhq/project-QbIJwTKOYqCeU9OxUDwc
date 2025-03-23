
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const PerformanceSection = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-4">Web Performance</h3>
        <p className="text-slate-600 mb-4">
          Performance is about making websites fast, responsive, and efficient. Good performance 
          improves user experience, conversion rates, and search engine rankings.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-base text-green-700">LCP</CardTitle>
            <CardDescription className="text-green-600">
              Largest Contentful Paint
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-green-800">
              Measures how quickly the main content of a page loads
            </p>
            <p className="text-xs font-medium mt-2 text-green-700">
              Target: Under 2.5 seconds
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-base text-blue-700">FID</CardTitle>
            <CardDescription className="text-blue-600">
              First Input Delay
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-blue-800">
              Measures how quickly a page responds to user interactions
            </p>
            <p className="text-xs font-medium mt-2 text-blue-700">
              Target: Under 100 milliseconds
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-base text-purple-700">CLS</CardTitle>
            <CardDescription className="text-purple-600">
              Cumulative Layout Shift
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-purple-800">
              Measures visual stability of a page
            </p>
            <p className="text-xs font-medium mt-2 text-purple-700">
              Target: Under 0.1
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-medium mb-4">Optimization Techniques</h3>
          <div className="space-y-3">
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <h4 className="font-medium text-sm">Image Optimization</h4>
              <p className="text-xs text-slate-600">
                Using proper formats, sizes, and lazy loading
              </p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <h4 className="font-medium text-sm">Code Splitting</h4>
              <p className="text-xs text-slate-600">
                Loading only the code needed for each page
              </p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <h4 className="font-medium text-sm">Caching Strategies</h4>
              <p className="text-xs text-slate-600">
                Storing data to avoid unnecessary requests
              </p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <h4 className="font-medium text-sm">Minification</h4>
              <p className="text-xs text-slate-600">
                Removing unnecessary characters from code
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Measuring Performance</h3>
          <div className="space-y-3">
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <h4 className="font-medium text-sm">Lighthouse</h4>
              <p className="text-xs text-slate-600">
                Google's tool for measuring page quality
              </p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <h4 className="font-medium text-sm">WebPageTest</h4>
              <p className="text-xs text-slate-600">
                Detailed performance analysis from multiple locations
              </p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <h4 className="font-medium text-sm">Chrome DevTools</h4>
              <p className="text-xs text-slate-600">
                Built-in browser tools for performance debugging
              </p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <h4 className="font-medium text-sm">Real User Monitoring</h4>
              <p className="text-xs text-slate-600">
                Collecting performance data from actual users
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
