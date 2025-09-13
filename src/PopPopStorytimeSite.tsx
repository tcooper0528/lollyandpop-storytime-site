// src/PopPopStorytimeSite.tsx
import React, { PropsWithChildren, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, BookOpen, Bot, Rocket, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import avatarUrl from "@/assets/poppop-avatar.png";

/* ---------- Layout helper ---------- */
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

/* ---------- Decorative: tiny starfield ---------- */
function StarsBG() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute left-[8%] top-[18%] twinkle w-1 h-1 rounded-full bg-indigo-400/80 shadow-[0_0_8px_2px_rgba(129,140,248,.55)]" />
      <div className="absolute left-[22%] top-[28%] twinkle delay-1 w-1 h-1 rounded-full bg-amber-400/80 shadow-[0_0_8px_2px_rgba(251,191,36,.50)]" />
      <div className="absolute left-[16%] top-[40%] twinkle delay-2 w-[3px] h-[3px] rounded-full bg-pink-400/80 shadow-[0_0_8px_2px_rgba(244,114,182,.50)]" />
      <div className="absolute right-[10%] top-[22%] twinkle delay-3 w-1 h-1 rounded-full bg-indigo-400/80 shadow-[0_0_8px_2px_rgba(129,140,248,.55)]" />
      <div className="absolute right-[18%] top-[36%] twinkle delay-1 w-[3px] h-[3px] rounded-full bg-amber-400/80 shadow-[0_0_8px_2px_rgba(251,191,36,.50)]" />
      <div className="absolute right-[14%] top-[46%] twinkle delay-2 w-1 h-1 rounded-full bg-pink-400/80 shadow-[0_0_8px_2px_rgba(244,114,182,.50)]" />
    </div>
  );
}

/* ---------- tiny confetti (kept for fun on submit) ---------- */
function fireConfetti(durationMs = 1000, pieces = 80) {
  const colors = ["#4f46e5", "#f59e0b", "#ec4899", "#22c55e", "#06b6d4", "#f43f5e"];
  for (let i = 0; i < pieces; i++) {
    const el = document.createElement("div");
    el.className = "confetti-piece";
    el.style.left = Math.random() * 100 + "vw";
    el.style.background = colors[Math.floor(Math.random() * colors.length)];
    el.style.transform = `translateY(-20vh) rotate(${Math.random() * 360}deg)`;
    el.style.animationDelay = Math.random() * 200 + "ms";
    el.style.opacity = "1";
    document.body.appendChild(el);
    setTimeout(() => el.remove(), durationMs + 400);
  }
}

export default function PopPopStorytimeSite() {
  // parallax shimmer blob
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const x = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  // confetti + programmatic Netlify submit
  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    fd.set("form-name", "storybot");
    fireConfetti(1200, 120);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(fd as any).toString(),
    })
      .then(() => setTimeout(() => (window.location.href = "/thanks"), 900))
      .catch(() => alert("Whoops! Storybot hit choppy waters—try again?"));
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-indigo-50 via-white to-amber-50 text-slate-900">
      {/* shimmer blob behind hero */}
      <motion.div
        style={{ y, x, scale }}
        className="shimmer-blob absolute -z-10 left-[-10%] top-[-10%] h-[50vh] w-[60vw] rounded-[80px]
                   bg-gradient-to-tr from-indigo-200 via-amber-200 to-pink-200"
      />
      <StarsBG />

      {/* NAV */}
      <nav className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-indigo-600" />
            <span className="font-semibold">PopPop Storytime</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            {/* CHANGED: Adventure now links to The Story Chest landing page */}
            <a href="/stories" className="hover:text-indigo-600">Adventure</a>
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
              <Button className="shadow btn-glow">Start Listening</Button>
              <a href="#storybot">
                <Button variant="outline" className="hover:shadow-md">Try Storybot</Button>
              </a>
            </div>
            <div className="mt-6 flex items-center gap-2 text-slate-600">
              <Heart className="h-4 w-4" />
              <span>Kid-safe • Grandparent-approved • 100% cozy</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-3xl blur-2xl bg-gradient-to-tr from-indigo-200/60 via-amber-200/40 to-pink-200/40" />
            <motion.img
              src={avatarUrl}
              alt="PopPop avatar"
              className="w-full aspect-square object-cover rounded-3xl ring-4 ring-amber-200"
              loading="lazy"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
      </Section>

      {/* STORYBOT (visible form) */}
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
              it’ll weave a gentle, values-forward bedtime adventure—voiced by PopPop.
            </p>

            <form
              name="storybot"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="grid md:grid-cols-2 gap-6"
            >
              <input type="hidden" name="form-name" value="storybot" />
              <p className="hidden">
                <label>Don’t fill this out: <input name="bot-field" /></label>
              </p>

              <div className="space-y-3">
                <label className="block text-sm font-medium" htmlFor="explorerName">Explorer’s name</label>
                <input id="explorerName" name="explorerName" required className="h-10 w-full rounded-lg border border-slate-300 px-3" placeholder="e.g., Xena" />

                <label className="block text-sm font-medium" htmlFor="sidekick">Sidekick</label>
                <input id="sidekick" name="sidekick" className="h-10 w-full rounded-lg border border-slate-300 px-3" placeholder="e.g., Jazzy the pup" />

                <label className="block text-sm font-medium" htmlFor="destination">Magical destination</label>
                <input id="destination" name="destination" className="h-10 w-full rounded-lg border border-slate-300 px-3" placeholder="e.g., Starry Seas" />

                <label className="block text sm font-medium" htmlFor="parentEmail">Parent email (optional)</label>
                <input id="parentEmail" name="parentEmail" type="email" className="h-10 w-full rounded-lg border border-slate-300 px-3" placeholder="you@example.com" />

                <label className="block text-sm font-medium" htmlFor="notes">Any cozy notes</label>
                <textarea id="notes" name="notes" className="w-full rounded-lg border border-slate-300 px-3 py-2" placeholder="Bedtime is 8pm; loves maps and stars." />
              </div>

              <div className="flex flex-col justify-between">
                <div className="flex items-center gap-2 text-slate-600">
                  <Rocket className="h-4 w-4" />
                  <span>Stories keep a classic, cozy tone.</span>
                </div>
                <Button type="submit" className="mt-4 md:mt-0 btn-glow">Spin a Story</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </Section>

      {/* ABOUT */}
      <Section id="about" className="py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-indigo-700">
              <BookOpen className="h-5 w-5" />
              <span className="font-semibold">About PopPop</span>
            </div>
            <p className="mt-3 text-slate-700">
              PopPop has a soft spot for timeless tales, gentle jokes, and family traditions.
              Each story is crafted to be calm, kind, and a touch adventurous—perfect for winding down.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl border bg-white p-6 text-slate-700"
          >
            <p>
              “We mix classic values with a sprinkle of wonder—so little listeners feel brave,
              safe, and ready for dreams.”
            </p>
          </motion.div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-sm text-slate-600">
        <div className="flex items-center justify-center gap-2">
          <Sparkles className="h-4 w-4" />
          <span>© {new Date().getFullYear()} PopPop Storytime</span>
        </div>
      </footer>
    </div>
  );
}


