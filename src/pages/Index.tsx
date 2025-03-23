
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BestPracticesSection } from "@/components/BestPracticesSection";
import { ArchitectureSection } from "@/components/ArchitectureSection";
import { PerformanceSection } from "@/components/PerformanceSection";
import { SecuritySection } from "@/components/SecuritySection";
import { AccessibilitySection } from "@/components/AccessibilitySection";

const Index = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 p-4 md:p-8">
      <header className="max-w-5xl mx-auto mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-2 text-slate-800">
          Modern Web Development Best Practices
        </h1>
        <p className="text-center text-slate-600 max-w-2xl mx-auto">
          A simple guide to understanding today's web development landscape
        </p>
      </header>

      <main className="max-w-5xl mx-auto">
        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-6 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="architecture">Architecture</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
            <TabsTrigger value="future">Future Trends</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Welcome to Web Development</CardTitle>
                <CardDescription>
                  Understanding the basics of modern web development
                </CardDescription>
              </CardHeader>
              <CardContent>
                <BestPracticesSection />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="architecture" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Architecture Patterns</CardTitle>
                <CardDescription>
                  How modern web applications are structured
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ArchitectureSection />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="performance" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Performance Optimization</CardTitle>
                <CardDescription>
                  Making websites fast and responsive
                </CardDescription>
              </CardHeader>
              <CardContent>
                <PerformanceSection />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Security Best Practices</CardTitle>
                <CardDescription>
                  Keeping web applications safe
                </CardDescription>
              </CardHeader>
              <CardContent>
                <SecuritySection />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="accessibility" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Accessibility (a11y)</CardTitle>
                <CardDescription>
                  Making the web usable for everyone
                </CardDescription>
              </CardHeader>
              <CardContent>
                <AccessibilitySection />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="future" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Future Trends</CardTitle>
                <CardDescription>
                  What's coming next in web development
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Emerging Technologies</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="bg-white/50">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">AI-Assisted Development</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">
                          AI tools that help write code, find bugs, and suggest improvements
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="bg-white/50">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">WebAssembly</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">
                          Running high-performance code in browsers
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="bg-white/50">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Edge Computing</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">
                          Running code closer to users for better performance
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="bg-white/50">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Low-Code Platforms</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">
                          Building applications with minimal coding required
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="flex justify-between mt-8">
          <Button 
            variant="outline"
            onClick={() => {
              const tabs = ["overview", "architecture", "performance", "security", "accessibility", "future"];
              const currentIndex = tabs.indexOf(activeTab);
              if (currentIndex > 0) {
                setActiveTab(tabs[currentIndex - 1]);
              }
            }}
            disabled={activeTab === "overview"}
          >
            Previous
          </Button>
          <Button 
            onClick={() => {
              const tabs = ["overview", "architecture", "performance", "security", "accessibility", "future"];
              const currentIndex = tabs.indexOf(activeTab);
              if (currentIndex < tabs.length - 1) {
                setActiveTab(tabs[currentIndex + 1]);
              }
            }}
            disabled={activeTab === "future"}
          >
            Next
          </Button>
        </div>
      </main>

      <footer className="max-w-5xl mx-auto mt-12 pt-6 border-t border-slate-200 text-center text-slate-500 text-sm">
        <p>Modern Web Development Guide - Created with React and Shadcn UI</p>
      </footer>
    </div>
  );
};

export default Index;
