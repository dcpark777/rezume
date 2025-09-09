import Link from "next/link";
import { ArrowLeft, Share2, Download, Eye } from "lucide-react";

interface SharePageProps {
  params: {
    slug: string;
  };
}

export default function SharePage({ params }: SharePageProps) {
  const { slug } = params;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-3 py-2"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            <h1 className="text-2xl font-bold">Shared Resume</h1>
          </div>
          <div className="flex items-center space-x-2">
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-3 py-2">
              <Eye className="mr-2 h-4 w-4" />
              Preview
            </button>
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-3 py-2">
              <Download className="mr-2 h-4 w-4" />
              Download
            </button>
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-3 py-2">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </button>
          </div>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-semibold">Resume - {slug}</h2>
              <span className="text-sm text-muted-foreground">Public Link</span>
            </div>
            <p className="text-sm text-muted-foreground">
              This resume has been shared publicly. Anyone with this link can view it.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-4">Resume Content</h3>
                <div className="prose max-w-none">
                  <div className="p-6 bg-muted rounded-md">
                    <h4 className="text-xl font-bold mb-2">John Doe</h4>
                    <p className="text-muted-foreground mb-4">Senior Software Engineer</p>
                    
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold mb-2">Professional Summary</h5>
                        <p className="text-sm">
                          Experienced software engineer with 5+ years of experience in full-stack development, 
                          specializing in React, Node.js, and cloud technologies. Proven track record of delivering 
                          scalable solutions and leading development teams.
                        </p>
                      </div>

                      <div>
                        <h5 className="font-semibold mb-2">Skills</h5>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">JavaScript</span>
                          <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">TypeScript</span>
                          <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">React</span>
                          <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Node.js</span>
                          <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Python</span>
                          <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">AWS</span>
                        </div>
                      </div>

                      <div>
                        <h5 className="font-semibold mb-2">Experience</h5>
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between items-start">
                              <div>
                                <p className="font-medium">Senior Software Engineer</p>
                                <p className="text-sm text-muted-foreground">Tech Corp Inc.</p>
                              </div>
                              <span className="text-sm text-muted-foreground">2020 - Present</span>
                            </div>
                            <ul className="text-sm mt-1 space-y-1">
                              <li>• Led development of 3+ web applications serving 10,000+ users</li>
                              <li>• Implemented CI/CD pipelines reducing deployment time by 50%</li>
                              <li>• Mentored 5 junior developers</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                <h3 className="font-semibold mb-4">Share Information</h3>
                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-medium">Share Link</label>
                    <div className="flex items-center space-x-2 mt-1">
                      <input
                        type="text"
                        value={`https://rezume.com/share/${slug}`}
                        readOnly
                        className="flex h-8 w-full rounded-md border border-input bg-background px-3 py-1 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                      />
                      <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3 py-1">
                        Copy
                      </button>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <p>• Anyone with this link can view the resume</p>
                    <p>• No login required</p>
                    <p>• Share expires in 30 days</p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                <h3 className="font-semibold mb-4">Resume Stats</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Views</span>
                    <span className="font-medium">42</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Downloads</span>
                    <span className="font-medium">8</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Created</span>
                    <span className="font-medium">2 days ago</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Last Updated</span>
                    <span className="font-medium">1 day ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
