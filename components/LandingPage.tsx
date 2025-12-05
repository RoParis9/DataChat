"use client";
import { useAuthStore } from "@/store/AuthStore";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Cloud,
  Cpu,
  Hexagon,
  Menu,
  MessageCircle,
  Play,
  Search,
  Shield,
  X,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export const LandingPage: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  // useEffect(() => {
  //   if (!isAuthenticated) {
  //     router.push("/login")
  //   }
  //   if (isAuthenticated) {
  //     router.push("/dashboard")
  //   }
  // }, [isAuthenticated, router])

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      {/* 1. Navbar */}
      <nav className="fixed top-0 right-0 left-0 z-50 border-b border-slate-200/50 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center space-x-2">
            <div className="rounded-lg bg-indigo-600 p-1.5">
              <Hexagon className="h-5 w-5 fill-current text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">DataChat</span>
          </div>

          <div className="hidden items-center space-x-8 text-sm font-medium text-slate-600 md:flex">
            <a href="#features" className="transition-colors hover:text-indigo-600">
              Features
            </a>
            <a href="#how-it-works" className="transition-colors hover:text-indigo-600">
              Use Cases
            </a>
            <a href="#pricing" className="transition-colors hover:text-indigo-600">
              Pricing
            </a>
          </div>

          <div className="hidden items-center space-x-4 md:flex">
            <Link
              href="/login"
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
            >
              Login
            </Link>
            <button
              onClick={() => router.push("/signup")}
              className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-slate-800 hover:shadow-lg hover:shadow-indigo-500/20"
            >
              Get Started
            </button>
          </div>

          <button
            className="p-2 text-slate-600 md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white px-6 pt-20 md:hidden">
          <div className="flex flex-col space-y-6 text-lg font-medium">
            <a href="#features" onClick={() => setMobileMenuOpen(false)}>
              Features
            </a>
            <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)}>
              Use Cases
            </a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)}>
              Pricing
            </a>
            <hr className="border-slate-100" />
            <Link href="/login" className="text-left text-indigo-600">
              Login
            </Link>
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="relative z-10 mx-auto max-w-7xl text-center">
          {/* Badge */}
          <div className="b-8 shadow-sm-animate-in fade-in slide-in-from-bottom-4 inline-flex items-center space-x-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 duration-700">
            <span className="flex h-2 w-2 animate-pulse rounded-full bg-indigo-500"></span>
            <span className="text-sm font-medium text-slate-600">New: GPT-4o Integration</span>
          </div>

          {/* Headline */}
          <h1 className="animate-in fade-in slide-in-from-bottom-6 mb-6 text-5xl leading-[1.1] font-bold tracking-tight text-slate-900 delay-100 duration-1000 md:text-7xl">
            Stop Searching. <br className="hidden md:block" />
            <span className="animate-gradient-x bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
              Start Chatting
            </span>{" "}
            with your Data.
          </h1>

          <p className="text-x1 animate-in fade-in slide-in-from-bottom-6 mx-auto mb-10 max-w-2xl leading-relaxed text-slate-500 delay-200 duration-1000">
            The AI search engine for your company. Upload PDFS, Notion docs, and Microsoft docs. Get
            instant, cited anwsers in seconds.
          </p>

          <div className="animate-in fade-in slide-in-from-bottom-6 mb-20 flex flex-col items-center justify-center space-y-4 delay-300 duration-1000 md:flex-row md:space-y-0 md:space-x-4">
            <button
              onClick={() => router.push("/signup")}
              className="group flex w-full items-center justify-center rounded-full bg-indigo-600 px-8 py-4 text-lg font-medium text-white transition-all hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-500/25 md:w-auto"
            >
              Start Now
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="flex w-full items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-4 text-lg font-medium text-slate-700 shadow-sm transition-colors hover:bg-slate-50 hover:shadow-md md:w-auto">
              <Play className="mr-2 h-5 w-5 fill-slate-700" />
              View Demo
            </button>
          </div>

          {/* 3D Dashboard Mockup */}
          <div className="perspective-1000 group relative mx-auto max-w-5xl">
            <div className="relative transform rounded-xl bg-slate-900 p-2 shadow-2xl ring-1 shadow-indigo-500/20 ring-slate-900/10 transition-transform duration-700 ease-out hover:rotate-0 md:rotate-x-12 md:hover:scale-[1.02]">
              {/* Fake Browser Header */}
              <div className="flex items-center rounded-t-lg border-b border-slate-700/50 bg-slate-800 px-4 py-3">
                <div className="flex space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-500/20"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500/20"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500/20"></div>
                </div>
                <div className="mx-auto rounded-md bg-slate-900/50 px-4 py-1 font-mono text-xs text-slate-500 md:px-32">
                  datachat.ai/dashboard
                </div>
              </div>

              {/* Mockup Content */}
              <div className="flex aspect-[16/9] overflow-hidden rounded-b-lg bg-slate-50">
                {/* Mock Sidebar */}
                <div className="flex w-16 flex-col border-r border-slate-800 bg-slate-900 p-2 md:flex md:w-48 md:p-4">
                  <div className="mb-8 flex items-center space-x-2">
                    <div className="h-6 w-6 rounded bg-indigo-600"></div>
                    <div className="hidden h-4 w-20 rounded bg-slate-700 md:block"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-8 w-full rounded-r border-l-2 border-indigo-500 bg-indigo-600/20"></div>
                    <div className="h-8 w-full rounded bg-slate-800/50"></div>
                    <div className="h-8 w-3/4 rounded bg-slate-800/50"></div>
                  </div>
                </div>
                
                {/* Mock Main Area */}
                <div className="flex-1 p-6">
                  <div className="mb-6 h-8 w-1/3 rounded border border-slate-200 bg-white"></div>
                  <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                    <div className="h-24 rounded border border-slate-200 bg-white p-4">
                      <div className="mb-2 h-8 w-8 rounded bg-indigo-100"></div>
                      <div className="h-4 w-12 rounded bg-slate-100"></div>
                    </div>
                    <div className="h-24 rounded border border-slate-200 bg-white p-4">
                      <div className="mb-2 h-8 w-8 rounded bg-emerald-100"></div>
                      <div className="h-4 w-12 rounded bg-slate-100"></div>
                    </div>
                    <div className="h-24 rounded border border-slate-200 bg-white p-4">
                      <div className="mb-2 h-8 w-8 rounded bg-amber-100"></div>
                      <div className="h-4 w-12 rounded bg-slate-100"></div>
                    </div>
                  </div>
                  <div className="flex h-48 items-center justify-center rounded-xl border-2 border-dashed border-indigo-200 bg-white">
                    <div className="text-center">
                      <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50">
                        <Cloud className="h-6 w-6 text-indigo-500" />
                      </div>
                      <div className="mx-auto h-4 w-32 rounded bg-slate-100"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Glow */}
            <div className="absolute -inset-4 -z-10 rounded-[3rem] bg-indigo-500/20 blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* 3. Social Proof */}
      <section className="border-y border-slate-200 bg-white py-10">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="mb-8 text-sm font-medium text-slate-500">
            Trusted by engineering teams at top companies
          </p>
          <div className="flex flex-wrap justify-center gap-8 opacity-50 grayscale transition-all duration-500 hover:grayscale-0 md:gap-16">
            <span className="font-serif text-xl font-bold text-slate-800">Acme Corp</span>
            <span className="text-xl font-extrabold tracking-tighter text-slate-800">LAYERS</span>
            <span className="text-xl font-semibold text-slate-800 italic">Sisyphus</span>
            <span className="flex items-center text-xl font-bold text-slate-800">
              <span className="mr-1 h-4 w-4 rounded-full bg-slate-800"></span> Circool
            </span>
            <span className="text-xl font-light tracking-widest text-slate-800">Catalog</span>
          </div>
        </div>
      </section>

      {/* 4. Bento Grid Features - Redesigned */}
      <section id="features" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 max-w-2xl">
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-slate-900">
              Built for the AI era.
            </h2>
            <p className="text-lg text-slate-500">
              Enterprise-grade capabilities for your documents.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Feature 1: Semantic Search (Large, Left) */}
            <div className="relative col-span-1 overflow-hidden rounded-3xl bg-slate-950 p-10 text-white shadow-xl md:col-span-2">
              <div className="relative z-10 max-w-md">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/20">
                  <Search className="h-6 w-6 text-indigo-400" />
                </div>
                <h3 className="mb-3 text-2xl font-bold">Semantic Vector Search</h3>
                <p className="text-lg leading-relaxed text-slate-400">
                  Beyond keywords. We embed your data into high-dimensional vector space to
                  understand context, intent, and nuance.
                </p>
              </div>

              {/* Visual: Abstract Nodes */}
              <div className="pointer-events-none absolute top-0 right-0 bottom-0 w-1/3 bg-gradient-to-l from-indigo-900/20 to-transparent"></div>
              <div className="absolute -right-10 -bottom-10 rotate-12 transform opacity-20">
                <div className="flex gap-4">
                  <div className="h-64 w-24 rounded-full bg-slate-700 blur-xl"></div>
                  <div className="h-64 w-24 translate-y-12 rounded-full bg-indigo-900 blur-xl"></div>
                  <div className="h-64 w-24 rounded-full bg-violet-900 blur-xl"></div>
                </div>
              </div>
              <div className="absolute right-10 bottom-10 rotate-3 transform rounded-xl border border-slate-800 bg-slate-900/80 p-4 shadow-2xl backdrop-blur transition-transform duration-500 hover:rotate-0">
                <div className="mb-2 flex items-center space-x-3 text-sm text-slate-300 md:">
                  <div className="h-2 w-2 rounded-full z-90 bg-emerald-500"></div>
                  <span>Cosine Similarity: 0.984</span>
                </div>
                <div className="h-2 w-48 overflow-hidden rounded-full bg-slate-800">
                  <div className="h-full w-[98%] bg-emerald-500"></div>
                </div>
              </div>
            </div>

            {/* Feature 2: Security (Small, Right Top) */}
            <div className="group relative col-span-1 overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-8 transition-colors hover:border-indigo-200">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm transition-transform duration-300 group-hover:scale-110">
                <Shield className="h-6 w-6 text-slate-900" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-slate-900">SOC2 Compliant</h3>
              <p className="text-slate-500">Bank-grade encryption for your most sensitive data.</p>
              <div className="absolute top-8 right-8 translate-x-2 transform text-emerald-500 opacity-0 transition-opacity group-hover:translate-x-0 group-hover:opacity-100">
                <CheckCircle2 className="h-6 w-6" />
              </div>
            </div>

            {/* Feature 3: Integrations (Col 1) */}
            <div className="group relative col-span-1 overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-md">
              <div className="mb-6 flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-slate-100 text-xs font-bold text-slate-600"
                  >
                    <div className="h-4 w-4 rounded-sm bg-slate-400 opacity-50"></div>
                  </div>
                ))}
                <div className="z-20 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-indigo-50 text-xs font-bold text-indigo-600">
                  +100
                </div>
              </div>
              <h3 className="mb-2 text-xl font-bold text-slate-900">100+ Integrations</h3>
              <p className="text-sm text-slate-500">Slack, Notion, Drive, and more.</p>
            </div>

            {/* Feature 4: Analytics (Col 2 & 3) */}
            <div className="relative col-span-1 flex flex-col items-center gap-8 overflow-hidden rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-white p-8 md:col-span-2 md:flex-row">
              <div className="flex-1">
                <h3 className="mb-2 text-2xl font-bold text-indigo-950">Deep Analytics</h3>
                <p className="text-slate-600">
                  Track usage, token costs, and user queries in real-time.
                </p>
              </div>
              <div className="flex h-32 w-full items-end justify-between space-x-2 px-4 pb-0 md:w-1/2">
                {[40, 70, 45, 90, 60, 75, 50].map((h, i) => (
                  <div
                    key={i}
                    className="w-full rounded-t-md bg-indigo-200 transition-colors duration-300 hover:bg-indigo-500"
                    style={{ height: `${h}%` }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. How It Works */}
      <section id="how-it-works" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900">
              From Upload to Answer in Seconds
            </h2>
          </div>

          <div className="relative grid grid-cols-1 gap-12 md:grid-cols-3">
            {/* Connector Line (Desktop) */}
            <div className="absolute top-12 right-[16%] left-[16%] -z-10 hidden h-0.5 border-t-2 border-dashed border-slate-200 md:block"></div>

            {/* Step 1 */}
            <div className="relative bg-white p-4 text-center">
              <div className="relative z-10 mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-slate-100 bg-white shadow-sm">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                  <Cloud className="h-8 w-8" />
                </div>
                <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full border-4 border-white bg-slate-900 font-bold text-white">
                  1
                </div>
              </div>
              <h3 className="mb-2 text-xl font-bold">Upload Data</h3>
              <p className="text-slate-500">
                Drag & drop PDFs, Docs, or connect your Notion workspace.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative bg-white p-4 text-center">
              <div className="relative z-10 mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-slate-100 bg-white shadow-sm">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-50 text-violet-600">
                  <Cpu className="h-8 w-8" />
                </div>
                <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full border-4 border-white bg-slate-900 font-bold text-white">
                  2
                </div>
              </div>
              <h3 className="mb-2 text-xl font-bold">Instant Indexing</h3>
              <p className="text-slate-500">We chunk and vectorise your content automatically.</p>
            </div>

            {/* Step 3 */}
            <div className="relative bg-white p-4 text-center">
              <div className="relative z-10 mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-slate-100 bg-white shadow-sm">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <MessageCircle className="h-8 w-8" />
                </div>
                <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full border-4 border-white bg-slate-900 font-bold text-white">
                  3
                </div>
              </div>
              <h3 className="mb-2 text-xl font-bold">Start Chatting</h3>
              <p className="text-slate-500">
                Ask questions and get answers based strictly on your data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Pricing */}
      <section id="pricing" className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900">Simple, transparent pricing</h2>
            <p className="text-slate-500">Start for free, scale as you grow.</p>
          </div>

          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-3">
            {/* Free */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-lg font-medium text-slate-900">Starter</h3>
              <div className="mt-4 mb-6">
                <span className="text-4xl font-bold text-slate-900">$15</span>
                <span className="text-slate-500">/mo</span>
              </div>
              <button
                onClick={()=>router.push("/login")}
                className="mb-8 w-full rounded-xl bg-slate-100 px-4 py-3 font-medium text-slate-900 transition-colors hover:bg-slate-200"
              >
                Start for Free
              </button>
              <ul className="space-y-4 text-sm text-slate-600">
                <li className="flex items-center">
                  <Check className="mr-3 h-4 w-4 text-slate-400" /> 50 Documents
                </li>
                <li className="flex items-center">
                  <Check className="mr-3 h-4 w-4 text-slate-400" /> 1 User
                </li>
                <li className="flex items-center">
                  <Check className="mr-3 h-4 w-4 text-slate-400" /> Basic Support
                </li>
              </ul>
            </div>

            {/* Pro - Highlighted */}
            <div className="relative transform rounded-2xl border-2 border-indigo-600 bg-white p-8 shadow-xl md:-translate-y-4">
              <div className="absolute top-0 right-0 -mt-3 -mr-3 rounded-full bg-indigo-600 px-3 py-1 text-xs font-bold text-white">
                MOST POPULAR
              </div>
              <h3 className="text-lg font-medium text-slate-900">Pro</h3>
              <div className="mt-4 mb-6">
                <span className="text-4xl font-bold text-slate-900">$29</span>
                <span className="text-slate-500">/mo</span>
              </div>
              <button
                onClick={()=>router.push("/login")}
                className="mb-8 w-full rounded-xl bg-indigo-600 px-4 py-3 font-medium text-white shadow-lg shadow-indigo-200 transition-colors hover:bg-indigo-700"
              >
                Get Started
              </button>
              <ul className="space-y-4 text-sm text-slate-600">
                <li className="flex items-center">
                  <Check className="mr-3 h-4 w-4 text-indigo-500" /> Unlimited Documents
                </li>
                <li className="flex items-center">
                  <Check className="mr-3 h-4 w-4 text-indigo-500" /> 5 Team Members
                </li>
                <li className="flex items-center">
                  <Check className="mr-3 h-4 w-4 text-indigo-500" /> Priority Support
                </li>
                <li className="flex items-center">
                  <Check className="mr-3 h-4 w-4 text-indigo-500" /> GPT-4o Access
                </li>
              </ul>
            </div>

            {/* Enterprise */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-lg font-medium text-slate-900">Enterprise</h3>
              <div className="mt-4 mb-6">
                <span className="text-4xl font-bold text-slate-900">Custom</span>
              </div>
              <button onClick={()=>router.push("/sales-form")}
              className="mb-8 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 font-medium text-slate-900 transition-colors hover:bg-slate-50">
                Contact Sales
              </button>
              <ul className="space-y-4 text-sm text-slate-600">
                <li className="flex items-center">
                  <Check className="mr-3 h-4 w-4 text-slate-400" /> Unlimited Seats
                </li>
                <li className="flex items-center">
                  <Check className="mr-3 h-4 w-4 text-slate-400" /> SSO & SAML
                </li>
                <li className="flex items-center">
                  <Check className="mr-3 h-4 w-4 text-slate-400" /> Dedicated Success Manager
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-16 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-4">
          <div className="col-span-1">
            <div className="mb-6 flex items-center space-x-2">
              <div className="rounded-lg bg-indigo-600 p-1.5">
                <Hexagon className="h-5 w-5 fill-current text-white" />
              </div>
              <span className="text-lg font-bold">DataChat</span>
            </div>
            <p className="mb-6 text-sm text-slate-400">
              Making organizational knowledge accessible and actionable through AI.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-l-lg border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-white focus:border-indigo-500 focus:outline-none"
              />
              <button className="rounded-r-lg bg-indigo-600 px-4 py-2 text-sm font-medium transition-colors hover:bg-indigo-700">
                Subscribe
              </button>
            </div>
          </div>

          <div>
            <h4 className="mb-6 font-bold">Product</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Changelog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-bold">Company</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-bold">Legal</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-7xl border-t border-slate-900 px-6 pt-8 text-center text-sm text-slate-500">
          © 2024 DataChat AI Inc. All rights reserved.
        </div>
      </footer>
    </div>
  );
};
