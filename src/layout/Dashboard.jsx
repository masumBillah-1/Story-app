import React from "react";

import {
  FileText,
  BarChart3,
  Settings,
  Eye,
  Pencil,
  Trash2,
  ChevronLeft,
  ChevronRight,
  PenSquare,
} from "lucide-react";
const Dashboard = () => {
  const navItems = [
    {
      icon: <FileText className="w-5 h-5" />,
      label: "My Stories",
      active: true,
    },
    { icon: <PenSquare className="w-5 h-5" />, label: "Drafts" },
    { icon: <BarChart3 className="w-5 h-5" />, label: "Stats" },
    { icon: <Settings className="w-5 h-5" />, label: "Settings" },
  ];
  const stories = [
    {
      id: 1,
      title: "Neon Dreams in Neo-Tokyo",
      genre: "Cyberpunk",
      wordCount: "12,400 words",
      status: "Published",
      views: "42.1k views",
      comments: "85 comments",
      lastEdited: "Oct 24, 2023",
      coverColor: "from-cyan-400 to-blue-500",
    },
    {
      id: 2,
      title: "The Silent Echo",
      genre: "Mystery",
      wordCount: "8,200 words",
      status: "Draft",
      lastEdited: "Today, 2:14 PM",
      coverColor: "from-amber-400 to-orange-500",
    },
    {
      id: 3,
      title: "Beyond the Veil",
      genre: "Fantasy",
      wordCount: "45,000 words",
      status: "Published",
      views: "86.3k views",
      comments: "1.2k comments",
      lastEdited: "Sep 12, 2023",
      coverColor: "from-emerald-400 to-teal-500",
    },
  ];
  return (
    <div>
      <div className="min-h-screen bg-gray-50 flex">
        {/* Sidebar */}
        <aside className="w-72 min-h-screen bg-white  dark:bg-[#1a2632] border-r border-sidebar-border border-gray-200 flex flex-col">
          {/* Logo */}
          <div className="p-6 flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <PenSquare className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-semibold text-foreground">Writer Portal</h1>
              <p className="text-xs text-muted-foreground">Manage your works</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-3 py-4">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href="#"
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                      item.active
                        ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                        : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                    }`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* User Profile */}
          <div className="p-4 border-t border-sidebar-border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                <span className="text-sm font-medium text-primary">AC</span>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Alex Chen</p>
                <p className="text-xs text-muted-foreground">alex@writer.com</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">My Stories</h1>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              + Write New Story
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-6 mb-6">
            <div className="bg-white p-4 rounded shadow">
              <p className="text-gray-500 text-sm">Total Views</p>
              <p className="text-2xl font-bold">
                128,450 <span className="text-green-500">↑12%</span>
              </p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <p className="text-gray-500 text-sm">Total Stories</p>
              <p className="text-2xl font-bold">
                24 <span className="text-green-500">↑2%</span>
              </p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <p className="text-gray-500 text-sm">Drafts</p>
              <p className="text-2xl font-bold">7</p>
              <p className="text-gray-400 text-sm">4 ready for review</p>
            </div>
          </div>

          {/* Search */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search your stories..."
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Stories Table */}
          <div className="bg-card rounded-xl border border-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-6 py-4">
                      Story Title
                    </th>
                    <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-6 py-4">
                      Status
                    </th>
                    <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-6 py-4">
                      Stats
                    </th>
                    <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-6 py-4">
                      Last Edited
                    </th>
                    <th className="text-right text-xs font-medium text-muted-foreground uppercase tracking-wider px-6 py-4">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {stories.map((story) => (
                    <tr
                      key={story.id}
                      className="hover:bg-muted/50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-10 h-12 rounded-lg bg-gradient-to-br ${story.coverColor} flex items-center justify-center shadow-sm`}
                          />
                          <div>
                            <p className="font-medium text-primary hover:underline cursor-pointer">
                              {story.title}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {story.genre} • {story.wordCount}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                            story.status === "Published"
                              ? "bg-success/10 text-success"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {story.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        {story.status === "Published" ? (
                          <div>
                            <p className="font-medium text-foreground">
                              {story.views}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {story.comments}
                            </p>
                          </div>
                        ) : (
                          <div>
                            <p className="text-muted-foreground">--</p>
                            <p className="text-sm text-muted-foreground">
                              Private
                            </p>
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">
                        {story.lastEdited}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <button className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors">
                            <Pencil className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-lg transition-colors">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="px-6 py-4 border-t border-border flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Showing 3 of 24 stories
              </p>
              <div className="flex items-center gap-1">
                <button className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Analytics CTA */}
          <div className="mt-6 p-4 bg-blue-50 rounded flex justify-between items-center">
            <p>
              Want to reach more readers? Try our new analytics tools to see
              exactly where your audience is coming from and what tropes they
              love most.
            </p>
            <button className="text-blue-600 font-semibold hover:underline">
              View detailed stats →
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
