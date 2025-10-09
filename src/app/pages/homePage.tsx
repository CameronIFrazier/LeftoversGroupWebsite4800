"use client";

import Link from "next/link";

type StaffMember = {
  name: string;
  role: string;
  email?: string;
};

type QuickLink = {
  title: string;
  desc: string;
  href: string;
  icon: string;
};

const STAFF: StaffMember[] = [
  { name: "Eric Lee", role: "Software Engineer", email: "ericjulee@gmail.com" },
  { name: "Cameron Frazier", role: "CEO" },
  { name: "Thuy An Nguyen", role: "UI/UX Developer", email: "99thuyannguyen@gmail.com"},
  { name: "Anson Ng", role: "CTO" }, 
  { name: "Justin Fok", role: "Software Engineer" },
];

const QUICK_LINKS: QuickLink[] = [
  {
    title: "Software Requirements Spec (SRS)",
    desc: "Project scope, user stories, and acceptance criteria.",
    href: "https://docs.google.com/document/d/1XfnV96k0DeQDW3HUAHEM5M8VGcHFgA-MlidrYnuRDOI/edit?tab=t.0",
    icon: "📄",
  },
  {
    title: "Meeting Logs",
    desc: "Agendas, notes, and action items for each session.",
    href: "https://docs.google.com/document/d/1_ELrDDgvbR8o-pfZ6fASHRBH1v6y83eYYFK4f6coeCg/edit?usp=sharing",
    icon: "🗒️",
  },
  {
    title: "Staff Directory",
    desc: "Roles, contacts, and profiles for the team.",
    href: "#directory",
    icon: "👥",
  },
];

function getInitials(fullName: string): string {
  return fullName
    .trim()
    .split(/\s+/)
    .map((word) => word[0]?.toUpperCase() ?? "")
    .slice(0, 2)
    .join("");
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white scroll-smooth">
      {/* navbar */}
      <header className="sticky top-0 z-50 border-b border-white/20 bg-black">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-lg font-semibold tracking-wide">
            Leftovers Staff
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            <a href="#links" className="hover:text-gray-300">
              Resources
            </a>
            <a href="#directory" className="hover:text-gray-300">
              Staff Directory
            </a>
          </nav>
        </div>
      </header>

      {/* hero */}
      <section className="py-20 text-center border-b border-white/10">
        <h1 className="text-5xl font-bold mb-4">Welcome to the Staff Portal</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Official Website for documentation, team info, and project collaboration.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#links"
            className="px-5 py-2 rounded-md border border-white text-sm hover:bg-white hover:text-black transition"
          >
            View Resources
          </a>
          <a
            href="#directory"
            className="px-5 py-2 rounded-md border border-white text-sm hover:bg-white hover:text-black transition"
          >
            Meet the Team
          </a>
        
        </div>
      </section>

      {/* quick links */}
      <section id="links" className="max-w-6xl mx-auto px-4 py-16 border-b border-white/10">
        <h2 className="text-2xl font-semibold mb-2">Quick Links</h2>
        <p className="text-gray-400 mb-8">Jump straight to your most-used resources.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {QUICK_LINKS.map((item) => {
            const isExternal = item.href.startsWith("http");
            return (
              <a
                key={item.title}
                href={item.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer" : undefined}
                className="block bg-zinc-900 border border-white/10 p-6 rounded-lg hover:bg-zinc-800 transition"
              >
                <div className="flex items-center gap-3 mb-2 text-lg">
                  <span>{item.icon}</span>
                  <h3 className="font-medium">{item.title}</h3>
                </div>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </a>
            );
          })}
        </div>
      </section>

      {/* staff dir */}
      <section id="directory" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-semibold mb-2">Staff Directory</h2>
        <p className="text-gray-400 mb-8">Meet the developers behind Leftovers.</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {STAFF.map((member) => (
            <div
              key={member.name}
              className="bg-zinc-900 border border-white/10 p-5 rounded-lg"
            >
              <div className="h-12 w-12 flex items-center justify-center bg-zinc-800 rounded-full mb-4 text-sm">
                {getInitials(member.name)}
              </div>
              <h3 className="font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-400">{member.role}</p>
              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className="text-xs text-gray-400 underline mt-2 block hover:text-white"
                >
                  {member.email}
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* footer */}
      <footer className="border-t border-white/10 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Leftovers. All Rights Reserved.
      </footer>
    </main>
  );
}
