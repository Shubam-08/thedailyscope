"use client";
import React from "react";

export default function AboutPage() {
  return (
    <div className="bg-black text-gray-300 min-h-screen py-12 px-6">
      {/* Container */}
      <div className="max-w-5xl mx-auto">

        {/* Hero Section */}
        <section className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-white">
            About <span className="text-yellow-400">The Daily Scope</span>
          </h1>
          <p className="text-lg text-gray-400 mt-3">
            Your trusted source for <span className="text-blue-400 font-bold">breaking news</span>, insightful articles, and trending topics.
          </p>
        </section>

        {/* Mission & Vision */}
        <section className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-900 p-5 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-white">Our Mission</h2>
            <p className="text-gray-400 mt-2">
              We aim to provide timely, unbiased, and insightful news to keep you informed.
            </p>
          </div>
          <div className="bg-gray-900 p-5 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-white">Our Vision</h2>
            <p className="text-gray-400 mt-2">
              To be the most **trusted digital news platform**, delivering relevant news in real-time.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-gray-900 p-6 rounded-lg shadow-md text-center mb-8">
          <h2 className="text-2xl font-bold text-white">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            {[
              { value: "500K+", label: "Monthly Readers", color: "text-yellow-400" },
              { value: "10K+", label: "Articles Published", color: "text-blue-400" },
              { value: "1M+", label: "Social Followers", color: "text-green-400" },
              { value: "24/7", label: "News Coverage", color: "text-red-400" }
            ].map((stat, index) => (
              <div key={index}>
                <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Meet the Team */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white text-center mb-5">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { name: "Alice Johnson", role: "Editor-in-Chief", img: "/team1.jpg" },
              { name: "Michael Smith", role: "Senior Reporter", img: "/team2.jpg" },
              { name: "Emily Brown", role: "Content Strategist", img: "/team3.jpg" }
            ].map((member, index) => (
              <div key={index} className="bg-gray-900 p-4 rounded-lg shadow-md text-center">
                <img src={member.img} alt={member.name} className="mx-auto h-20 w-20 rounded-full object-cover mb-3" />
                <h3 className="text-lg font-bold text-white">{member.name}</h3>
                <p className="text-gray-400 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gray-900 p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-bold text-white">Join Our Community</h2>
          <p className="text-gray-400 mt-2 text-sm">Stay informed with the latest news and articles from The Daily Scope.</p>
          <button className="mt-3 px-4 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition">
            Subscribe Now
          </button>
        </section>

      </div>
    </div>
  );
}
