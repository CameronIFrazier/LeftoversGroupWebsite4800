"use client";

import Link from "next/link";

import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";


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
  { name: "Cameron Frazier", role: "CEO" },
  { name: "Jimmy Thai", role: "Vice President" , email: "jimmythai1999@gmail.com" },
  { name: "Eric Lee", role: "Software Engineer", email: "ericjulee@gmail.com" },
  { name: "Thuy An Nguyen", role: "UI/UX Developer", email: "99thuyannguyen@gmail.com"},
  { name: "Anson Ng", role: "CTO", email: "ansonng778@gmail.com"}, 
  { name: "Justin Fok", role: "Software Engineer", email: "jcfok@cpp.edu"},
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

function smoothScrollToSection(sectionId: string, headerOffset: number = 80) {
  const element = document.getElementById(sectionId);
  if (element) {
    setTimeout(() => {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }, 10);
  }
}

export default function HomePage() {
  return (
    <BackgroundBeamsWithCollision className="min-h-screen bg-black text-white">
      <main className="relative z-10">
        {/* navbar */}
        <header className="sticky top-0 z-50 border-b border-white/20 bg-black/80 backdrop-blur-sm">
          <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
            <Link href="/" className="text-lg font-semibold tracking-wide">
              TheLeftOvers Staff
            </Link>
            <nav className="flex items-center gap-6 text-sm">
              <a className="hover:text-gray-300" onClick={() => smoothScrollToSection('links')}>
                Resources
              </a>
              <a className="hover:text-gray-300" onClick={() => smoothScrollToSection('directory')} >
                Staff Directory
              </a>
            </nav>
          </div>
        </header>

        {/* hero */}
        <section className="py-20 text-center border-b border-white/10"> {/*hero border*/}
          <h1 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-b from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Welcome to the Staff Portal
            </span>
          </h1>
          <p className="text-purple-400 max-w-2xl mx-auto">
            Official Website for documentation, team info, and project collaboration.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <button 
              onClick={(e) => {
                e.preventDefault();
                smoothScrollToSection('links');
              }}
              className="p-[3px] relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500 to-indigo-500 rounded-lg" />
              <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                View Resources
              </div>
            </button>
            <button 
              onClick={(e) => {
                e.preventDefault();
                smoothScrollToSection('directory');
              }}
              className="p-[3px] relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500 to-indigo-500 rounded-lg" />
              <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                Meet the Team
              </div>
            </button>
          
          </div>
        </section>

        {/* quick links */}
        <section id="links" className="max-w-6xl mx-auto px-4 py-16 border-b border-white/10">
          <h2 className="text-2xl font-semibold mb-2 bg-gradient-to-b from-indigo-500 to-purple-500 bg-clip-text text-transparent">Quick Links</h2>

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
          <h2 className="text-2xl font-semibold mb-2 bg-gradient-to-b from-indigo-500 to-purple-500 bg-clip-text text-transparent">Staff Directory</h2>
          <p className="text-white-400 mb-8">Meet the developers behind Leftovers.</p>
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
    </BackgroundBeamsWithCollision>
  );
}
