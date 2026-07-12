"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Calendar, Clock } from "lucide-react";

export default function SchedulerMockup() {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isBooked, setIsBooked] = useState(false);

  const dates = [
    { label: "Mon", day: "14", dateStr: "Monday, July 14" },
    { label: "Tue", day: "15", dateStr: "Tuesday, July 15" },
    { label: "Wed", day: "16", dateStr: "Wednesday, July 16" },
  ];

  const times = ["09:00 AM", "11:30 AM", "02:00 PM", "04:30 PM"];

  const handleBook = () => {
    if (selectedDate && selectedTime) {
      setIsBooked(true);
    }
  };

  return (
    <div className="w-full bg-background border border-border-custom rounded-2xl p-6 md:p-8 font-sans max-w-md mx-auto lg:mx-0 mt-8 shadow-md relative overflow-hidden text-foreground">
      <div className="absolute inset-0 bg-[#6D5DF6]/[0.01] pointer-events-none" />

      <div className="flex items-center gap-3 mb-6 border-b border-border-custom pb-4">
        <Calendar className="w-5 h-5 text-accent" />
        <span className="text-sm font-semibold uppercase tracking-wider">Book a Session</span>
      </div>

      <AnimatePresence mode="wait">
        {!isBooked ? (
          <motion.div
            key="scheduler"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex flex-col gap-6"
          >
            {/* Dates */}
            <div>
              <span className="text-xs text-muted uppercase tracking-widest block mb-3 font-semibold">
                Select Date
              </span>
              <div className="grid grid-cols-3 gap-3">
                {dates.map((date) => {
                  const isActive = selectedDate === date.dateStr;
                  return (
                    <button
                      key={date.day}
                      onClick={() => setSelectedDate(date.dateStr)}
                      className={`flex flex-col items-center py-3 border rounded-xl transition-all cursor-pointer ${
                        isActive
                          ? "border-accent bg-accent/5 text-accent font-medium shadow-sm"
                          : "border-border-custom hover:border-muted text-foreground"
                      }`}
                    >
                      <span className="text-xs uppercase tracking-wide opacity-60 mb-1">
                        {date.label}
                      </span>
                      <span className="text-lg font-mono font-bold">{date.day}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Times */}
            <div>
              <span className="text-xs text-muted uppercase tracking-widest block mb-3 font-semibold">
                Select Time Slot
              </span>
              <div className="grid grid-cols-2 gap-2">
                {times.map((time) => {
                  const isActive = selectedTime === time;
                  return (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`py-2 px-3 border rounded-lg text-xs font-mono text-center transition-all cursor-pointer ${
                        isActive
                          ? "border-accent bg-accent/5 text-accent font-semibold shadow-sm"
                          : "border-border-custom hover:border-muted text-foreground"
                      }`}
                    >
                      {time}
                    </button>
                  );
                })}
              </div>
            </div>

            <button
              onClick={handleBook}
              disabled={!selectedDate || !selectedTime}
              className={`w-full py-3.5 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                selectedDate && selectedTime
                  ? "bg-accent text-white hover:bg-[#5a4be4]"
                  : "bg-black/5 text-muted border border-border-custom/50 cursor-not-allowed"
              }`}
            >
              Confirm Appointment
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="confirmed"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="py-6 flex flex-col items-center justify-center text-center gap-4"
          >
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center">
              <Check className="w-6 h-6 text-emerald-500" />
            </div>
            <div>
              <h4 className="text-base font-serif font-medium text-foreground">
                Session Confirmed
              </h4>
              <div className="flex flex-col gap-1 items-center justify-center text-xs text-muted font-light mt-3">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-accent" />
                  {selectedDate}
                </span>
                <span className="flex items-center gap-1.5 mt-0.5">
                  <Clock className="w-3.5 h-3.5 text-accent" />
                  {selectedTime}
                </span>
              </div>
            </div>
            <button
              onClick={() => {
                setIsBooked(false);
                setSelectedDate(null);
                setSelectedTime(null);
              }}
              className="mt-4 text-xs text-muted hover:text-foreground transition-colors cursor-pointer font-semibold uppercase tracking-widest"
            >
              Book Another Slot
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
