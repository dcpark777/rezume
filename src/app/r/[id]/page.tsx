import Link from "next/link";
import { ArrowLeft, Share, Download, Eye, MessageSquare } from "lucide-react";

interface ResumePageProps {
  params: {
    id: string;
  };
}

export default function ResumePage({ params }: ResumePageProps) {
  const { id } = params;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-3 py-2"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Link>
            <h1 className="text-2xl font-bold">Resume #{id}</h1>
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
              <Share className="mr-2 h-4 w-4" />
              Share
            </button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Resume Content</h2>
              <div className="prose max-w-none">
                <p className="text-muted-foreground">
                  Resume content will be displayed here. This is a placeholder for the actual resume content.
                </p>
                <div className="mt-4 p-4 bg-muted rounded-md">
                  <h3 className="font-semibold mb-2">John Doe</h3>
                  <p className="text-sm text-muted-foreground mb-2">Software Engineer</p>
                  <p className="text-sm">
                    Experienced software engineer with 5+ years of experience in full-stack development...
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
              <h3 className="font-semibold mb-4">AI Quick Review</h3>
              <div className="space-y-3">
                <div className="p-3 bg-muted rounded-md">
                  <p className="text-sm font-medium">Overall Score: 8.5/10</p>
                  <p className="text-xs text-muted-foreground">Strong content and structure</p>
                </div>
                <div className="p-3 bg-muted rounded-md">
                  <p className="text-sm font-medium">Suggestions:</p>
                  <ul className="text-xs text-muted-foreground mt-1 space-y-1">
                    <li>• Add more quantifiable achievements</li>
                    <li>• Consider adding a skills section</li>
                    <li>• Optimize for ATS compatibility</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Comments</h3>
                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3 py-1">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Add Comment
                </button>
              </div>
              <div className="text-sm text-muted-foreground">
                No comments yet. Be the first to add feedback!
              </div>
            </div>

            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
              <h3 className="font-semibold mb-4">Versions</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-muted rounded">
                  <span className="text-sm">v1.0 - Initial version</span>
                  <span className="text-xs text-muted-foreground">2 days ago</span>
                </div>
              </div>
              <Link
                href={`/r/${id}/diff`}
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3 py-1 mt-4 w-full"
              >
                View Diff
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
