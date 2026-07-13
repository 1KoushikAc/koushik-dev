"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ShieldCheck, Loader2 } from "lucide-react";

export default function PaymentSimulator() {
  const [step, setStep] = useState<"idle" | "securing" | "signing" | "done">("idle");
  const [amount, setAmount] = useState("250.00");

  const startTransfer = async () => {
    setStep("securing");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setStep("signing");
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setStep("done");
  };

  const reset = () => {
    setStep("idle");
  };

  return (
    <div className="w-full bg-[#121212] border border-white/[0.08] rounded-2xl p-6 md:p-8 font-sans max-w-md mx-auto lg:mx-0 mt-8 shadow-2xl relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-[#6D5DF6]/5 to-transparent pointer-events-none" />

      <div className="flex items-center justify-between mb-6 border-b border-white/[0.08] pb-4">
        <span className="text-xs uppercase tracking-widest text-accent font-semibold">
          ONJI Secure Node
        </span>
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
      </div>

      <AnimatePresence mode="wait">
        {step === "idle" && (
          <motion.div
            key="idle"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex flex-col gap-4"
          >
            <div>
              <label className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold block mb-1">
                Recipient
              </label>
              <div className="w-full bg-[#1c1c1c] border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-white font-medium flex justify-between items-center">
                <span>Alice Vance</span>
                <span className="text-xs text-accent font-mono">alice.onji</span>
              </div>
            </div>

            <div>
              <label className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold block mb-1">
                Amount (USD)
              </label>
              <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full bg-[#1c1c1c] border border-white/[0.08] focus:border-accent focus:ring-2 focus:ring-accent/20 rounded-lg px-4 py-3 text-lg font-mono text-white outline-none transition-all duration-300"
              />
            </div>

            <button
              onClick={startTransfer}
              className="w-full py-3.5 bg-accent hover:bg-[#5a4be4] text-white text-sm font-semibold rounded-lg transition-colors cursor-pointer mt-2"
            >
              Initialize Transfer
            </button>
          </motion.div>
        )}

        {step === "securing" && (
          <motion.div
            key="securing"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="py-8 flex flex-col items-center justify-center text-center gap-4"
          >
            <Loader2 className="w-10 h-10 text-accent animate-spin" />
            <div>
              <h4 className="text-sm font-semibold text-white">Securing local node...</h4>
              <p className="text-xs text-gray-500 font-light mt-1">
                Generating ephemeral key exchange
              </p>
            </div>
          </motion.div>
        )}

        {step === "signing" && (
          <motion.div
            key="signing"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="py-8 flex flex-col items-center justify-center text-center gap-4"
          >
            <ShieldCheck className="w-10 h-10 text-accent animate-pulse" />
            <div>
              <h4 className="text-sm font-semibold text-white">Signing transaction...</h4>
              <p className="text-xs text-gray-500 font-light mt-1">
                Validating ledger consistency hashes
              </p>
            </div>
          </motion.div>
        )}

        {step === "done" && (
          <motion.div
            key="done"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="py-4 flex flex-col items-center justify-center text-center gap-4"
          >
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center">
              <Check className="w-6 h-6 text-emerald-500" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Transfer Completed</h4>
              <p className="text-xs text-gray-400 font-mono mt-1">${amount} sent successfully</p>
              <span className="text-[10px] text-gray-600 font-mono mt-3 block overflow-hidden text-ellipsis max-w-[200px]">
                TX: 0x93f...82e9
              </span>
            </div>
            <button
              onClick={reset}
              className="mt-2 text-xs text-gray-500 hover:text-white transition-colors cursor-pointer"
            >
              Start New Transfer
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
