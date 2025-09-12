import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles, Star, BookOpen, Bot, Baby, Dog, Mail, PlayCircle, Rocket, Heart, Menu, X, ShieldCheck, Lock, ThumbsUp } from "lucide-react";

// PopPop avatar image (3D Pixar style)
// TODO: replace with a public URL (e.g., /images/poppop-avatar.png) when deploying
const AVATAR_URL = "/images/poppop-avatar.png";

const Section = ({ id, children, className = "" }) => (
  <section id={id} className={`py-16 md:py-24 ${className}`}>
    <div className="mx-auto max-w-6xl px-4">{children}</div>
  </section>
);

const Badge = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-medium shadow-sm bg-amber-50">
    <Sparkles className="h-4 w-4 text-amber-500" />
    {children}
  </span>
);

function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden">
      <Button size="icon" variant="outline" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>
      {open && (
        <div className="absolute left-0 right-0 top-[60px] border-b bg-white/90 backdrop-blur">
          <nav className="mx-auto max-w-6xl px-4 py-4 grid gap-3 text-sm">
            {["About", "Stories", "Storybot", "How it works", "Contact"].map((label) => (
              <a key={label} href={`#${label.toLowerCase().replace(/ /g, "")}`} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 hover:bg-slate-100">
                {label}
              </a>
            ))}
            <Button asChild className="mt-2">
              <a href="#storybot" onClick={() => setOpen(false)}>Try Storytime Storybot</a>
            </Button>
          </nav>
        </div>
      )}
    </div>
  );
}

export default function PopPopStorytimeSite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-amber-50 text-slate-900">
      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#top" className="flex items-center gap-2 font-extrabold tracking-tight">
            <span className="text-xl">🦜</span>
            <span className="text-xl">PopPop Storytime</span>
          </a>
          <nav className="hidden gap-6 md:flex text-sm">
            <a href="#about" className="hover:underline">About</a>
            <a href="#stories" className="hover:underline">Stories</a>
            <a href="#storybot" className="hover:underline">Storybot</a>
            <a href="#how" className="hover:underline">How it works</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
          <div className="hidden md:block">
            <Button size="sm" asChild>
              <a href="#storybot">Try Storytime Storybot</a>
            </Button>
          </div>
          <MobileMenu />
        </div>
      </header>

      {/* HERO */}
      <Section id="top" className="pb-8 pt-12 md:pt-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Badge>Magical adventures for little imaginations</Badge>
              <h1 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
                Set sail on <span className="text-indigo-600">enchanted stories</span> with PopPop!
              </h1>
              <p className="mt-4 max-w-prose text-lg text-slate-700">

- import { Button } from "@/components/ui/button";
- import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
+ import { Button } from "./components/ui/button";
+ import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
