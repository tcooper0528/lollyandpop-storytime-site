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
                PopPop the Pirate‑Grandpa leads families on whimsical journeys filled with treasure maps, rocketships, and laughter. Classic storytime magic — with Pixar‑style wonder!
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button size="lg" className="rounded-2xl" asChild>
                  <a href="#stories"><PlayCircle className="mr-2 h-5 w-5" /> Watch a Story</a>
                </Button>
                <Button size="lg" variant="outline" className="rounded-2xl" asChild>
                  <a href="#storybot"><Bot className="mr-2 h-5 w-5" /> Try Storybot</a>
                </Button>
              </div>
              <div className="mt-6 flex items-center gap-4 text-sm text-slate-600">
                <div className="flex items-center gap-1"><Star className="h-4 w-4" /> kid‑approved</div>
                <div className="flex items-center gap-1"><Heart className="h-4 w-4" /> grandparent‑powered</div>
                <div className="flex items-center gap-1"><BookOpen className="h-4 w-4" /> read‑along friendly</div>
              </div>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-indigo-200/60 via-amber-200/40 to-pink-200/40 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border bg-white shadow-xl">
                <img
                  src={AVATAR_URL}
                  alt="PopPop Pirate Avatar"
                  className="aspect-[4/3] w-full object-contain p-6"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* STORYBOT (updated with avatar) */}
      <Section id="storybot" className="bg-white/60">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-bold flex items-center gap-2"><Bot className="h-6 w-6" /> Storytime Storybot</h2>
            <p className="mt-3 text-slate-700">
              With PopPop’s enchanted compass and treasure map, the Storytime Storybot transforms your child’s details into a magical picture‑book journey. Classic storytime meets Pixar‑style wonder.
            </p>
            <ul className="mt-4 list-disc pl-6 text-slate-700">
              <li>Simple form: name, age, favorites, special places</li>
              <li>PopPop’s Global Consistency for character & art style</li>
              <li>Private review link before anything goes public</li>
            </ul>
            <div className="mt-6 flex gap-3">
              <Button size="lg" asChild>
                <a href="/storybot" aria-label="Open the Storytime Storybot">Open Storybot</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#how">See how it works</a>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-amber-100/70 to-pink-100/70 blur-xl" />
            <Card className="relative overflow-hidden border bg-white shadow-lg">
              <CardHeader>
                <CardTitle>PopPop by your side</CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  src={AVATAR_URL}
                  alt="PopPop Pirate Avatar next to Storybot"
                  className="mx-auto max-h-72 object-contain"
                  loading="lazy"
                />
                <p className="mt-3 text-slate-600 text-center text-sm">
                  PopPop guides you as you fill out the Storybot form — map and compass in hand!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Other sections unchanged (About, Stories, Values, How, FAQ, Testimonials, Newsletter, Contact) */}
    </div>
  );
}
