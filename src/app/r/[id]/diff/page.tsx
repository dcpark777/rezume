import Link from "next/link";
import { ArrowLeft, GitCompare } from "lucide-react";

interface DiffPageProps {
  params: {
    id: string;
  };
}

export default function DiffPage({ params }: DiffPageProps) {
  const { id } = params;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link
              href={`/r/${id}`}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-3 py-2"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Resume
            </Link>
            <div className="flex items-center space-x-2">
              <GitCompare className="h-5 w-5 text-muted-foreground" />
              <h1 className="text-2xl font-bold">Version Comparison</h1>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Resume #{id} - Version Diff</h2>
            <div className="flex items-center space-x-4">
              <select className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-3 py-2">
                <option>v1.0</option>
                <option>v1.1</option>
              </select>
              <span className="text-muted-foreground">vs</span>
              <select className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-3 py-2">
                <option>v1.1</option>
                <option>v1.0</option>
              </select>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-4">
              <h3 className="font-semibold text-green-600">Added Content</h3>
              <div className="p-4 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-md">
                <div className="space-y-2">
                  <p className="text-sm">
                    <span className="font-medium">Skills Section:</span>
                  </p>
                  <ul className="text-sm text-muted-foreground ml-4 space-y-1">
                    <li>• JavaScript, TypeScript, React</li>
                    <li>• Node.js, Python, SQL</li>
                    <li>• AWS, Docker, Git</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-red-600">Removed Content</h3>
              <div className="p-4 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-md">
                <div className="space-y-2">
                  <p className="text-sm">
                    <span className="font-medium">Old Summary:</span>
                  </p>
                  <p className="text-sm text-muted-foreground line-through">
                    "Experienced developer looking for new opportunities..."
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold mb-4">Modified Content</h3>
            <div className="space-y-4">
              <div className="p-4 bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-md">
                <div className="space-y-2">
                  <p className="text-sm font-medium">Experience Section:</p>
                  <div className="text-sm">
                    <p className="text-red-600 line-through">
                      "Developed web applications using various technologies"
                    </p>
                    <p className="text-green-600">
                      "Led development of 3+ web applications serving 10,000+ users using React, Node.js, and PostgreSQL"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-muted rounded-md">
            <h4 className="font-semibold mb-2">Summary of Changes</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Added comprehensive skills section</li>
              <li>• Updated experience descriptions with quantifiable metrics</li>
              <li>• Removed generic summary statement</li>
              <li>• Improved ATS compatibility</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
