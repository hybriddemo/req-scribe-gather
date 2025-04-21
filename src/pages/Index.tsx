
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const RequirementsGathering = () => {
  const [activeTab, setActiveTab] = useState("project-info");

  const printRequirements = () => {
    window.print();
  };
  
  return (
    <div className="container mx-auto py-8 px-4 max-w-6xl">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Software Requirements Gathering Sheet</h1>
        <p className="text-muted-foreground mt-2">A comprehensive tool to document and analyze software project requirements</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-5 mb-8">
          <TabsTrigger value="project-info">Project Info</TabsTrigger>
          <TabsTrigger value="stakeholders">Stakeholders</TabsTrigger>
          <TabsTrigger value="functional">Functional Req.</TabsTrigger>
          <TabsTrigger value="non-functional">Non-Functional</TabsTrigger>
          <TabsTrigger value="technical">Technical</TabsTrigger>
        </TabsList>
        
        {/* Project Information Tab */}
        <TabsContent value="project-info">
          <Card>
            <CardHeader>
              <CardTitle>Project Information</CardTitle>
              <CardDescription>Basic information about the project</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="project-name">Project Name</Label>
                  <Input id="project-name" placeholder="Enter project name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="project-id">Project ID/Code</Label>
                  <Input id="project-id" placeholder="Enter project identifier" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="project-description">Project Description</Label>
                <Textarea 
                  id="project-description" 
                  placeholder="Provide a brief overview of the project, its goals, and its purpose" 
                  rows={4}
                />
              </div>
              
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <Label htmlFor="anticipated-start-date">Anticipated Start Date</Label>
                  <Input id="anticipated-start-date" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="anticipated-end-date">Anticipated End Date</Label>
                  <Input id="anticipated-end-date" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="project-priority">Project Priority</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="critical">Critical</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="low">Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="business-objectives">Business Objectives</Label>
                <Textarea 
                  id="business-objectives" 
                  placeholder="What business problems will this project solve? What are the key objectives?" 
                  rows={4}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="success-criteria">Success Criteria</Label>
                <Textarea 
                  id="success-criteria" 
                  placeholder="How will we measure the success of this project? What are the key success indicators?" 
                  rows={4}
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => setActiveTab("stakeholders")}>Next: Stakeholders</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Stakeholders Tab */}
        <TabsContent value="stakeholders">
          <Card>
            <CardHeader>
              <CardTitle>Stakeholders Information</CardTitle>
              <CardDescription>Identify key people and organizations involved</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Primary Stakeholders</Label>
                <div className="border rounded-md p-4 space-y-4">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div className="space-y-2">
                      <Label htmlFor="primary-name">Name</Label>
                      <Input id="primary-name" placeholder="Stakeholder name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="primary-role">Role</Label>
                      <Input id="primary-role" placeholder="Stakeholder role" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="primary-contact">Contact Info</Label>
                      <Input id="primary-contact" placeholder="Email or phone" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="primary-expectations">Expectations & Concerns</Label>
                    <Textarea 
                      id="primary-expectations" 
                      placeholder="What does this stakeholder expect from the project? Any concerns?" 
                      rows={3}
                    />
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Additional Stakeholders</Label>
                <div className="border rounded-md p-4 space-y-4">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div className="space-y-2">
                      <Label htmlFor="additional-name">Name</Label>
                      <Input id="additional-name" placeholder="Stakeholder name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="additional-role">Role</Label>
                      <Input id="additional-role" placeholder="Stakeholder role" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="additional-contact">Contact Info</Label>
                      <Input id="additional-contact" placeholder="Email or phone" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="additional-expectations">Expectations & Concerns</Label>
                    <Textarea 
                      id="additional-expectations" 
                      placeholder="What does this stakeholder expect from the project? Any concerns?" 
                      rows={3}
                    />
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="key-decision-makers">Key Decision Makers</Label>
                <Textarea 
                  id="key-decision-makers" 
                  placeholder="Who has final approval authority? Who needs to be consulted for key decisions?" 
                  rows={3}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="communication-plan">Communication Plan</Label>
                <Textarea 
                  id="communication-plan" 
                  placeholder="How often will stakeholders be updated? What communication channels will be used?" 
                  rows={3}
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => setActiveTab("project-info")}>Previous: Project Info</Button>
              <Button variant="outline" onClick={() => setActiveTab("functional")}>Next: Functional Requirements</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Functional Requirements Tab */}
        <TabsContent value="functional">
          <Card>
            <CardHeader>
              <CardTitle>Functional Requirements</CardTitle>
              <CardDescription>What the system should do - features and capabilities</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="core-features">Core Features & Functionality</Label>
                <Textarea 
                  id="core-features" 
                  placeholder="List the essential features that the system must provide"
                  rows={6}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="user-stories">User Stories / Use Cases</Label>
                <Textarea 
                  id="user-stories" 
                  placeholder="As a [type of user], I want to [goal/action] so that [benefit]. Add as many as needed."
                  rows={6}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="user-workflows">Key User Workflows</Label>
                <Textarea 
                  id="user-workflows" 
                  placeholder="Describe the step-by-step processes that users will follow to accomplish tasks"
                  rows={6}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="data-requirements">Data Requirements</Label>
                <Textarea 
                  id="data-requirements" 
                  placeholder="What data will the system need to store, process, or display? Include data entities and relationships if known."
                  rows={6}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="integration-requirements">Integration Requirements</Label>
                <Textarea 
                  id="integration-requirements" 
                  placeholder="What external systems or services must this application integrate with? (APIs, services, databases, etc.)"
                  rows={4}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="reporting-requirements">Reporting & Analytics Requirements</Label>
                <Textarea 
                  id="reporting-requirements" 
                  placeholder="Describe any reports, dashboards, or analytics features needed"
                  rows={4}
                />
              </div>
              
              <div className="space-y-2">
                <Label>Feature Priority Ranking</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="must-have">Must Have (MVP)</Label>
                    <Textarea 
                      id="must-have" 
                      placeholder="Features required for initial release"
                      rows={4}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="should-have">Should Have</Label>
                    <Textarea 
                      id="should-have" 
                      placeholder="High priority features but not critical for MVP"
                      rows={4}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="could-have">Could Have</Label>
                    <Textarea 
                      id="could-have" 
                      placeholder="Desirable features that could be included if time/budget allows"
                      rows={4}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="wont-have">Won't Have (this time)</Label>
                    <Textarea 
                      id="wont-have" 
                      placeholder="Features explicitly out of scope for this release"
                      rows={4}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => setActiveTab("stakeholders")}>Previous: Stakeholders</Button>
              <Button variant="outline" onClick={() => setActiveTab("non-functional")}>Next: Non-Functional Requirements</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Non-Functional Requirements Tab */}
        <TabsContent value="non-functional">
          <Card>
            <CardHeader>
              <CardTitle>Non-Functional Requirements</CardTitle>
              <CardDescription>Quality attributes, constraints, and performance criteria</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Performance Requirements</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="response-time">Response Time</Label>
                    <Textarea 
                      id="response-time" 
                      placeholder="Expected page load times, transaction processing times, etc."
                      rows={3}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="throughput">Throughput</Label>
                    <Textarea 
                      id="throughput" 
                      placeholder="Number of transactions per second, concurrent users, etc."
                      rows={3}
                    />
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="scalability">Scalability Requirements</Label>
                <Textarea 
                  id="scalability" 
                  placeholder="How must the system scale (users, data volume, geography)? Projected growth expectations?"
                  rows={3}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="availability">Availability Requirements</Label>
                <Textarea 
                  id="availability" 
                  placeholder="Expected uptime (e.g. 99.9%), maintenance windows, etc."
                  rows={3}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="security">Security Requirements</Label>
                <Textarea 
                  id="security" 
                  placeholder="Authentication, authorization, data encryption, compliance requirements (GDPR, HIPAA, etc.)"
                  rows={4}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="usability">Usability & Accessibility Requirements</Label>
                <Textarea 
                  id="usability" 
                  placeholder="User experience expectations, accessibility standards (WCAG compliance level), supported languages, etc."
                  rows={4}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="compatibility">Compatibility Requirements</Label>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Supported Browsers</Label>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="chrome" />
                        <label htmlFor="chrome">Chrome</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="firefox" />
                        <label htmlFor="firefox">Firefox</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="safari" />
                        <label htmlFor="safari">Safari</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="edge" />
                        <label htmlFor="edge">Edge</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="ie" />
                        <label htmlFor="ie">IE 11</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="other-browser" />
                        <label htmlFor="other-browser">Other</label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Supported Devices/Platforms</Label>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="desktop" />
                        <label htmlFor="desktop">Desktop</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="tablet" />
                        <label htmlFor="tablet">Tablet</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="mobile" />
                        <label htmlFor="mobile">Mobile</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="other-device" />
                        <label htmlFor="other-device">Other</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="regulatory">Compliance & Regulatory Requirements</Label>
                <Textarea 
                  id="regulatory" 
                  placeholder="Legal, regulatory, or industry standards that must be followed"
                  rows={3}
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => setActiveTab("functional")}>Previous: Functional Requirements</Button>
              <Button variant="outline" onClick={() => setActiveTab("technical")}>Next: Technical Requirements</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Technical Requirements Tab */}
        <TabsContent value="technical">
          <Card>
            <CardHeader>
              <CardTitle>Technical Requirements & Project Details</CardTitle>
              <CardDescription>Technology stack, implementation details, and project planning</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Technology Stack Preferences</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="frontend">Frontend Technologies</Label>
                    <Textarea 
                      id="frontend" 
                      placeholder="Languages, frameworks, libraries (e.g., React, Angular, Vue, etc.)"
                      rows={3}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="backend">Backend Technologies</Label>
                    <Textarea 
                      id="backend" 
                      placeholder="Languages, frameworks, APIs (e.g., Node.js, Django, .NET, etc.)"
                      rows={3}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="database">Database Technologies</Label>
                    <Textarea 
                      id="database" 
                      placeholder="Database preferences (e.g., PostgreSQL, MongoDB, MySQL, etc.)"
                      rows={3}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="infrastructure">Infrastructure/Hosting</Label>
                    <Textarea 
                      id="infrastructure" 
                      placeholder="Cloud providers, hosting requirements, containerization (e.g., AWS, Azure, Docker, etc.)"
                      rows={3}
                    />
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="deployment">Deployment & DevOps Requirements</Label>
                <Textarea 
                  id="deployment" 
                  placeholder="CI/CD, deployment frequency, environments needed (dev, staging, prod), monitoring requirements"
                  rows={4}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="constraints">Technical Constraints</Label>
                <Textarea 
                  id="constraints" 
                  placeholder="Any technical limitations that must be considered (existing systems, technology restrictions, etc.)"
                  rows={4}
                />
              </div>
              
              <div className="space-y-2">
                <Label>Development Methodology</Label>
                <RadioGroup defaultValue="agile" className="flex flex-col space-y-1">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="agile" id="agile" />
                    <Label htmlFor="agile">Agile/Scrum</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="waterfall" id="waterfall" />
                    <Label htmlFor="waterfall">Waterfall</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="kanban" id="kanban" />
                    <Label htmlFor="kanban">Kanban</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="hybrid" id="hybrid" />
                    <Label htmlFor="hybrid">Hybrid</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="other-method" id="other-method" />
                    <Label htmlFor="other-method">Other</Label>
                  </div>
                </RadioGroup>
              </div>
              
              <div className="space-y-2">
                <Label>Timeline & Milestones</Label>
                <div className="border rounded-md p-4 space-y-4">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="milestone-name">Milestone Name</Label>
                      <Input id="milestone-name" placeholder="e.g., Design Approval, MVP, Beta Release" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="milestone-date">Expected Date</Label>
                      <Input id="milestone-date" type="date" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="milestone-deliverables">Deliverables</Label>
                    <Textarea 
                      id="milestone-deliverables" 
                      placeholder="What will be delivered at this milestone?" 
                      rows={2}
                    />
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="budget">Budget Considerations</Label>
                <Textarea 
                  id="budget" 
                  placeholder="Budget constraints, funding sources, cost expectations"
                  rows={3}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="risks">Known Risks and Mitigation Strategies</Label>
                <Textarea 
                  id="risks" 
                  placeholder="Identify possible risks and how they will be addressed"
                  rows={4}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="approval">Approval Process</Label>
                <Textarea 
                  id="approval" 
                  placeholder="Who will review and approve requirements? What is the sign-off process?"
                  rows={3}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="additional">Additional Notes</Label>
                <Textarea 
                  id="additional" 
                  placeholder="Any other relevant information not covered elsewhere"
                  rows={4}
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => setActiveTab("non-functional")}>Previous: Non-Functional</Button>
              <Button variant="default" onClick={printRequirements}>Print Requirements Document</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
      
      <div className="print:hidden mt-8 text-center">
        <p className="text-sm text-muted-foreground">
          Complete all sections for a comprehensive requirements document. Use the "Print Requirements Document" button when finished.
        </p>
      </div>
      
      {/* Print-only summary that shows when document is printed */}
      <div className="hidden print:block mt-8">
        <h2 className="text-2xl font-bold">Requirements Document Summary</h2>
        <p className="text-sm text-muted-foreground mb-4">
          This document was generated using the Requirements Gathering Sheet. It contains all the information collected through the form.
        </p>
      </div>
    </div>
  );
};

export default RequirementsGathering;
