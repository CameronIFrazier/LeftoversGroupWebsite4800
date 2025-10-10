"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import GradientText from "@/components/ui/GradientText";
import GradientBorder from "@/components/ui/GradientBorder";

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
  { name: "Jimmy Thai", role: "Vice President", email: "jimmythai1999@gmail.com" },
  { name: "Eric Lee", role: "Software Engineer", email: "ericjulee@gmail.com" },
  { name: "Thuy An Nguyen", role: "UI/UX Developer", email: "99thuyannguyen@gmail.com" },
  { name: "Anson Ng", role: "CTO", email: "ansonng778@gmail.com" },
  { name: "Justin Fok", role: "Software Engineer", email: "jcfok@cpp.edu" },
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

function smoothScrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

export default function HomePage() {
  // Set page-specific title
  useEffect(() => {
    document.title = "TheLeftOvers Staff page";
  }, []);

  return (
    <BackgroundBeamsWithCollision className="min-h-screen bg-black text-white">
      <main className="relative z-10">
        {/* hero */}
        <section className="pt-36 md:pt-28 pb-20 text-center border-b border-white/10">
          <h1 className="mb-4 flex items-baseline justify-center">
            <Link href="/" className="text-5xl font-bold tracking-wide">
              <GradientText
                colors={["#f540ffff", "#ac40ffff", "#321e8fff", "#4079ff", "#f540ffff"]}
                animationSpeed={4}
                showBorder={false}
                className="text-5xl font-bold tracking-wide"
              >
                TheLeftOvers
              </GradientText>
            </Link>
            <span className="text-purple-400 text-3xl font-bold tracking-wide ml-2">Staff Page</span>
          </h1>
          <p className="text-purple-400 max-w-2xl mx-auto">
            Official Website for documentation, team info, and project collaboration.
          </p>
          {/* <div className="mt-8 flex justify-center gap-4">
            <button 
              onClick={(e) => {
                e.preventDefault();
                smoothScrollToSection('links');
              }}
              className="p-[3px] relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500 to-indigo-500 rounded-lg" />
              <div className="px-8 py-2  bg-black rounded-[15px]  relative group transition duration-200 text-purple-400 hover:bg-transparent hover:text-white">
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
              <div className="px-8 py-2  bg-black rounded-[15px]  relative group transition duration-200 text-purple-400 hover:bg-transparent hover:text-white">
                Meet the Team
              </div>
            </button>
          
          </div> */}
        </section>

        {/* quick links */}
        <section id="links" className="max-w-6xl mx-auto px-4 py-16 border-b border-white/10">
          <h2 className="text-2xl font-semibold mb-2 bg-gradient-to-b from-indigo-500 to-purple-500 bg-clip-text text-transparent">Quick Links</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {QUICK_LINKS.map((item) => {
              const isExternal = item.href.startsWith("http");
              return (
                <GradientBorder
                  key={item.title}
                  as="a"
                  href={item.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                >
                  <div className="bg-zinc-900 p-6 rounded-md transition-colors duration-200 h-full group">
                    <div className="flex items-center gap-3 mb-2 text-lg">
                      <span className="transition-colors duration-200 group-hover:text-purple-400">{item.icon}</span>
                      <h3 className="font-bold transition-colors duration-200 group-hover:text-purple-400">{item.title}</h3>
                    </div>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </GradientBorder>
              );
            })}
          </div>
        </section>

        {/* staff dir */}
        <section id="directory" className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-semibold mb-2 bg-gradient-to-b from-indigo-500 to-purple-500 bg-clip-text text-transparent">Staff Directory</h2>
          <p className="text-purple-400 mb-8">Meet the developers behind Leftovers.</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {STAFF.map((member) => (
              <GradientBorder key={member.name}>
                <div className="bg-zinc-900 p-5 rounded-md h-full group">
                  <div className="h-12 w-12 flex items-center justify-center bg-zinc-800 rounded-full mb-4 text-sm transition-colors duration-200 group-hover:bg-purple-500 group-hover:text-white">
                    {getInitials(member.name)}
                  </div>
                  <h3 className="font-semibold">{member.name}</h3>
                  <p className="text-sm text-gray-400">{member.role}</p>
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="text-xs text-gray-400 underline mt-2 block hover:text-purple-400 transition-colors duration-200"
                    >
                      {member.email}
                    </a>
                  )}
                </div>
              </GradientBorder>
            ))}
          </div>
        </section>

        {/* footer */}
        <footer className="border-t border-white/10 py-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Leftovers. All Rights Reserved.
        </footer>

        {/* Floating Navigation */}
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
          <div className="flex items-center gap-3 bg-black/80 backdrop-blur-md rounded-full px-4 py-3 shadow-lg">
            <button 
              onClick={(e) => {
                e.preventDefault();
                smoothScrollToTop();
              }}
              className="p-[2px] relative group"
              title="Back to top"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500 to-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              <div className="w-10 h-10 bg-black/80 rounded-full flex items-center justify-center text-purple-400 text-lg font-bold group-hover:bg-transparent group-hover:text-white transition-all duration-200 relative z-10">
                <span className="mt-[5px]">⌃</span>
              </div>
            </button>
            <button 
              onClick={(e) => {
                e.preventDefault();
                smoothScrollToSection('links');
              }}
              className="p-[2px] relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500 to-indigo-500 rounded-full" />
              <div className="px-6 py-2 bg-black rounded-full relative transition duration-200 text-purple-400 hover:bg-transparent hover:text-white text-sm">
                View Resources
              </div>
            </button>
            <button 
              onClick={(e) => {
                e.preventDefault();
                smoothScrollToSection('directory');
              }}
              className="p-[2px] relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500 to-indigo-500 rounded-full" />
              <div className="px-6 py-2 bg-black rounded-full relative transition duration-200 text-purple-400 hover:bg-transparent hover:text-white text-sm">
                Meet the Team
              </div>
            </button>
          </div>
        </div>
      </main>
    </BackgroundBeamsWithCollision>
  );
}
