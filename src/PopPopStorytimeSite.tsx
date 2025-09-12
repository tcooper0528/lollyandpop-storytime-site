import React, { PropsWithChildren } from "react";
import { motion } from "framer-motion";
import { Sparkles, BookOpen, Bot, Rocket, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AVATAR_URL = "/images/poppop-avatar.png";

/** Simple wrapper for consistent section spacing */
function Section({
  id,
  className = "",
  children,
}: PropsWithChildren<{ id?: string; className?: string }>) {
  return (
    <section id={id} className={`max-w-6xl mx-auto px-4 md:px-6 ${className}`}>
      {children}
    </section>
  );
}

export default function PopPopStorytimeSite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-amber-50 text-slate-900">
      {/* NAV */}
      <nav className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-indigo-600" />
            <span className="font-semibold">PopPop Storytime</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#adventure" className="hover:text-indigo-600">Adventure</a>
            <a href="#storybot" className="hover:text-indigo-600">Storybot</a>
            <a href="#about" className="hover:text-indigo-600">About</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <Section id="adventure" className="py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-5xl font-extrabold tracking-tight"
            >
              Set sail for <span className="text-indigo-600">magical adventures</span> with PopPop.
            </motion.h1>
            <p className="mt-4 text-lg text-slate-700">
              Climb aboard, matey! PopPop guides little explorers through glittering seas,
              starry skies, and secret forests — with gentle humor, warm values, and Pixar-style charm.
            </p>
            <div className="mt-6 flex gap-3">
              <Button className="shadow">Start Listening</Button>
              <a href="#storybot">
                <Button variant="outline">Try Storybot</Button>
              </a>
            </div>
            <div className="mt-6 flex items-center gap-2 text-slate-600">
              <Heart className="h-4 w-4" />
              <span>Kid-safe • Grandparent-approved • 100% cozy</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-3xl blur-2xl bg-gradient-to-tr from-indigo-200/60 via-amber-200/40 to-pink-200/40" />
            <img
              src={AVATAR_URL}
              alt="PopPop avatar"
              className="w-full aspect-square object-cover rounded-3xl ring-4 ring-amber-200"
              loading="lazy"
            />
          </div>
        </div>
      </Section>

      {/* STORYBOT */}
      <Section id="storybot" className="py-12">
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bot className="h-5 w-5 text-indigo-600" />
              PopPop’s Storytime Bot
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 mb-4">
              Tell the Storybot a few details (kid’s name, favorite pet, a place to explore) and
              it’ll weave a gent

