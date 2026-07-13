"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Settings, Sparkles } from "lucide-react";

export default function StoneCustomizer() {
  const [material, setMaterial] = useState("marble");
  const [font, setFont] = useState("serif");
  const [text, setText] = useState("CRAFTSMANSHIP");
  const [isOrdered, setIsOrdered] = useState(false);

  const materials = [
    { id: "marble", name: "Carrara Marble", bg: "bg-[#EAEAEA]", text: "text-[#3A3A3A]", shadow: "shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),_inset_-2px_-2px_4px_rgba(255,255,255,0.7)]" },
    { id: "granite", name: "Absolute Black", bg: "bg-[#1E1E1E]", text: "text-[#888888]", shadow: "shadow-[inset_2px_2px_6px_rgba(0,0,0,0.5),_inset_-2px_-2px_6px_rgba(255,255,255,0.05)]" },
    { id: "slate", name: "Welsh Slate", bg: "bg-[#2F3538]", text: "text-[#1F2224]", shadow: "shadow-[inset_1px_1px_3px_rgba(0,0,0,0.3),_inset_-1px_-1px_3px_rgba(255,255,255,0.1)]" },
  ];

  const fonts = [
    { id: "serif", name: "Classic Serif", class: "font-serif italic" },
    { id: "sans", name: "Modern Sans", class: "font-sans uppercase font-bold tracking-widest" },
    { id: "mono", name: "Minimal Mono", class: "font-mono tracking-tight" },
  ];

  const activeMaterial = materials.find((m) => m.id === material) || materials[0];
  const activeFont = fonts.find((f) => f.id === font) || fonts[0];

  const handleOrder = () => {
    if (text.trim()) {
      setIsOrdered(true);
    }
  };

  return (
    <div className="w-full bg-background border border-border-custom rounded-2xl p-6 md:p-8 font-sans max-w-md mx-auto lg:mx-0 mt-8 shadow-md relative overflow-hidden text-foreground">
      <div className="absolute inset-0 bg-[#6D5DF6]/[0.01] pointer-events-none" />

      <div className="flex items-center gap-3 mb-6 border-b border-border-custom pb-4">
        <Settings className="w-5 h-5 text-accent animate-spin-slow" />
        <span className="text-sm font-semibold uppercase tracking-wider">Live Configurator</span>
      </div>

      <AnimatePresence mode="wait">
        {!isOrdered ? (
          <motion.div
            key="customizer"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex flex-col gap-6"
          >
            {/* Live Material Preview */}
            <div>
              <span className="text-xs text-muted uppercase tracking-widest block mb-3 font-semibold">
                Live Preview (Engraving Render)
              </span>
              <div className={`w-full aspect-[16/8] rounded-xl relative flex items-center justify-center p-4 overflow-hidden border border-border-custom/80 transition-all duration-500 ${activeMaterial.bg}`}>
                {/* Simulated engraved texture using offset text shadows */}
                <div 
                  className={`text-xl sm:text-2xl text-center select-none ${activeFont.class} ${activeMaterial.text} transition-all duration-300`}
                  style={{
                    textShadow: material === "marble" 
                      ? "1px 1px 1px rgba(0,0,0,0.2), -1px -1px 1px rgba(255,255,255,0.8)"
                      : material === "granite"
                      ? "1px 1px 2px rgba(0,0,0,0.95), -1px -1px 1px rgba(255,255,255,0.2)"
                      : "1px 1px 1.5px rgba(0,0,0,0.55), -1px -1px 1px rgba(255,255,255,0.12)"
                  }}
                >
                  {text || "ENTER TEXT"}
                </div>
                <div className="absolute bottom-2 right-3 text-[9px] uppercase tracking-widest text-muted/60 font-mono">
                  {activeMaterial.name}
                </div>
              </div>
            </div>

            {/* Select Material */}
            <div>
              <span className="text-xs text-muted uppercase tracking-widest block mb-3 font-semibold">
                Select Stone
              </span>
              <div className="grid grid-cols-3 gap-3">
                {materials.map((mat) => (
                  <button
                    key={mat.id}
                    onClick={() => setMaterial(mat.id)}
                    className={`py-2 px-3 border rounded-xl transition-all cursor-pointer text-xs text-center font-medium ${
                      material === mat.id
                        ? "border-accent bg-accent/5 text-accent shadow-sm"
                        : "border-border-custom hover:border-muted text-foreground"
                    }`}
                  >
                    {mat.name.split(" ")[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Select Font */}
            <div>
              <span className="text-xs text-muted uppercase tracking-widest block mb-3 font-semibold">
                Select Style
              </span>
              <div className="grid grid-cols-3 gap-2">
                {fonts.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setFont(f.id)}
                    className={`py-2 px-2 border rounded-lg text-[10px] text-center transition-all cursor-pointer ${
                      font === f.id
                        ? "border-accent bg-accent/5 text-accent font-semibold"
                        : "border-border-custom hover:border-muted text-foreground"
                    }`}
                  >
                    {f.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Text */}
            <div>
              <span className="text-xs text-muted uppercase tracking-widest block mb-2 font-semibold">
                Engraving Inscription
              </span>
              <input
                type="text"
                maxLength={20}
                value={text}
                onChange={(e) => setText(e.target.value.toUpperCase())}
                placeholder="YOUR MESSAGE"
                className="w-full bg-black/[0.015] border border-border-custom focus:border-accent focus:ring-2 focus:ring-accent/20 rounded-lg px-4 py-2.5 text-sm text-foreground outline-none transition-all duration-300 font-mono"
              />
            </div>

            <button
              onClick={handleOrder}
              disabled={!text.trim()}
              className={`w-full py-3.5 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                text.trim()
                  ? "bg-accent text-white hover:bg-[#5a4be4]"
                  : "bg-black/5 text-muted border border-border-custom/50 cursor-not-allowed"
              }`}
            >
              Request Quote & Review Render
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="ordered"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="py-8 flex flex-col items-center justify-center text-center gap-4"
          >
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center">
              <Check className="w-6 h-6 text-emerald-500" />
            </div>
            <div>
              <h4 className="text-base font-serif font-medium text-foreground">Render Request Sent</h4>
              <p className="text-xs text-muted font-light mt-3 max-w-xs leading-relaxed">
                Your request for <strong className="text-foreground">{activeMaterial.name}</strong> with the inscription <strong className="text-foreground font-mono">"{text}"</strong> has been submitted. A designer will review the typographic spacing and email you a high-res draft.
              </p>
            </div>
            <button
              onClick={() => {
                setIsOrdered(false);
              }}
              className="mt-4 text-xs text-muted hover:text-foreground transition-colors cursor-pointer font-semibold uppercase tracking-widest flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              Configure Another Design
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
