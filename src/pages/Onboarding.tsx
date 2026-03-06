import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2, MapPin, Users2, ChevronRight, ChevronLeft,
  Plus, Trash2, Check, SkipForward,
} from "lucide-react";
import ibloovLogo from "@/assets/ibloov-logo.jpeg";

/* ── Types ── */
interface Venue {
  name: string;
  type: string;
}

interface TeamMember {
  name: string;
  email: string;
  role: string;
}

const industries = [
  "Restaurant",
  "Hotel & Resort",
  "Bar & Lounge",
  "Café & Coffee Shop",
  "Fast Casual & QSR",
  "Nightclub & Club",
  "Catering & Events",
  "Food Truck",
  "Bakery & Patisserie",
  "Spa & Wellness",
];

const venueTypes = ["Restaurant", "Hotel", "Event Space", "Gym/Studio", "Office", "Retail Store", "Other"];

const teamRoles = ["Admin", "Manager", "Coordinator", "Staff"];

const steps = [
  { id: 1, label: "Business", icon: Building2 },
  { id: 2, label: "Venues", icon: MapPin },
  { id: 3, label: "Team", icon: Users2 },
];

const Onboarding = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  // Step 1
  const [industry, setIndustry] = useState("");

  // Step 2
  const [venues, setVenues] = useState<Venue[]>([{ name: "", type: "" }]);

  // Step 3
  const [members, setMembers] = useState<TeamMember[]>([{ name: "", email: "", role: "" }]);


  const addVenue = () => setVenues([...venues, { name: "", type: "" }]);
  const removeVenue = (i: number) => venues.length > 1 && setVenues(venues.filter((_, idx) => idx !== i));
  const updateVenue = (i: number, field: keyof Venue, val: string) => {
    const updated = [...venues];
    updated[i] = { ...updated[i], [field]: val };
    setVenues(updated);
  };

  const addMember = () => setMembers([...members, { name: "", email: "", role: "" }]);
  const removeMember = (i: number) => members.length > 1 && setMembers(members.filter((_, idx) => idx !== i));
  const updateMember = (i: number, field: keyof TeamMember, val: string) => {
    const updated = [...members];
    updated[i] = { ...updated[i], [field]: val };
    setMembers(updated);
  };

  const finish = () => {
    localStorage.setItem("aura_onboarded", "true");
    navigate("/welcome");
  };

  const skip = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      finish();
    }
  };

  const next = () => {
    if (step < 3) setStep(step + 1);
    else finish();
  };

  const back = () => step > 1 && setStep(step - 1);

  const slideVariants = {
    enter: { opacity: 0, x: 40 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -40 },
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="border-b border-border/40 bg-card/50 backdrop-blur">
        <div className="max-w-3xl mx-auto px-5 h-14 flex items-center">
          <div className="flex items-center gap-2">
            <img src={ibloovLogo} alt="iBloov" className="h-7 w-auto rounded-lg" />
            <span className="font-semibold text-sm">AuraLink</span>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-5 py-8">
        <div className="w-full max-w-xl">
          {/* Step indicator */}
          <div className="flex items-center justify-center gap-2 mb-8">
            {steps.map((s, i) => (
              <div key={s.id} className="flex items-center gap-2">
                <div
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    step === s.id
                      ? "bg-primary text-primary-foreground"
                      : step > s.id
                      ? "bg-primary/10 text-primary"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {step > s.id ? <Check className="w-3 h-3" /> : <s.icon className="w-3 h-3" />}
                  <span className="hidden sm:inline">{s.label}</span>
                  <span className="sm:hidden">{s.id}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className={`w-8 h-px ${step > s.id ? "bg-primary" : "bg-border"}`} />
                )}
              </div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {/* ── Step 1: Business ── */}
            {step === 1 && (
              <motion.div
                key="step1"
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="text-center mb-6">
                  <h2 className="text-xl sm:text-2xl font-display font-bold">Verify Your Business</h2>
                  <p className="text-sm text-muted-foreground mt-1">Tell us about your company</p>
                </div>

                <div className="p-6 rounded-2xl bg-card border space-y-5">
                  {/* Industry */}
                  <div>
                    <label className="text-xs font-semibold text-muted-foreground mb-2 block">Industry *</label>
                    <div className="grid grid-cols-2 gap-2">
                      {industries.map((ind) => (
                        <button
                          key={ind}
                          onClick={() => setIndustry(ind)}
                          className={`px-3 py-2.5 rounded-xl text-xs font-medium text-left transition-all border ${
                            industry === ind
                              ? "bg-primary text-primary-foreground border-primary"
                              : "bg-muted/50 border-border hover:border-primary/30"
                          }`}
                        >
                          {ind}
                        </button>
                      ))}
                    </div>
                  </div>

                </div>
              </motion.div>
            )}

            {/* ── Step 2: Venues ── */}
            {step === 2 && (
              <motion.div
                key="step2"
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="text-center mb-6">
                  <h2 className="text-xl sm:text-2xl font-display font-bold">Add Venues / Locations</h2>
                  <p className="text-sm text-muted-foreground mt-1">Where do you operate?</p>
                </div>

                <div className="space-y-3">
                  {venues.map((venue, i) => (
                    <div key={i} className="p-5 rounded-2xl bg-card border space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-muted-foreground">Venue {i + 1}</span>
                        {venues.length > 1 && (
                          <button onClick={() => removeVenue(i)} className="p-1 rounded-lg hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors">
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                      <input
                        value={venue.name}
                        onChange={(e) => updateVenue(i, "name", e.target.value)}
                        placeholder="Venue name"
                        className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />
                      <div className="flex flex-wrap gap-2">
                        {venueTypes.map((type) => (
                          <button
                            key={type}
                            onClick={() => updateVenue(i, "type", type)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all border ${
                              venue.type === type
                                ? "bg-primary text-primary-foreground border-primary"
                                : "bg-muted/50 border-border hover:border-primary/30"
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={addVenue}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl border-2 border-dashed border-border hover:border-primary/30 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  Add Another Venue
                </button>
              </motion.div>
            )}

            {/* ── Step 3: Team ── */}
            {step === 3 && (
              <motion.div
                key="step3"
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="text-center mb-6">
                  <h2 className="text-xl sm:text-2xl font-display font-bold">Team Setup</h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    Invite your team members to help manage your AuraLink presence. You can skip this and add later.
                  </p>
                </div>

                <div className="space-y-3">
                  {members.map((member, i) => (
                    <div key={i} className="p-5 rounded-2xl bg-card border space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-muted-foreground">Member {i + 1}</span>
                        {members.length > 1 && (
                          <button onClick={() => removeMember(i)} className="p-1 rounded-lg hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors">
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                      <input
                        value={member.name}
                        onChange={(e) => updateMember(i, "name", e.target.value)}
                        placeholder="Full name"
                        className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />
                      <input
                        value={member.email}
                        onChange={(e) => updateMember(i, "email", e.target.value)}
                        placeholder="email@company.com"
                        type="email"
                        className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />
                      <div className="flex flex-wrap gap-2">
                        {teamRoles.map((role) => (
                          <button
                            key={role}
                            onClick={() => updateMember(i, "role", role)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all border ${
                              member.role === role
                                ? "bg-primary text-primary-foreground border-primary"
                                : "bg-muted/50 border-border hover:border-primary/30"
                            }`}
                          >
                            {role}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={addMember}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl border-2 border-dashed border-border hover:border-primary/30 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  Add Another Member
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation buttons */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={back}
              disabled={step === 1}
              className={`flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                step === 1 ? "opacity-0 pointer-events-none" : "border border-border hover:bg-muted"
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              Back
            </button>
            <div className="flex items-center gap-2">
              <button
                onClick={skip}
                className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl border border-border text-sm font-medium text-muted-foreground hover:bg-muted transition-colors"
              >
                <SkipForward className="w-3.5 h-3.5" />
                Skip
              </button>
              <button
                onClick={next}
                className="flex items-center gap-1.5 px-6 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                {step === 3 ? "Finish Setup" : "Continue"}
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
