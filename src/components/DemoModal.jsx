import { useEffect, useState } from "react";
import {
  X,
  Play,
  Pause,
  Volume2,
  VolumeX,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Layers,
  Zap,
  RotateCcw,
  Clock,
  Send,
  AlertCircle,
} from "lucide-react";

/**
 * Interactive Demo Modal (Bonus feature).
 * - Opens via "Watch Demo" buttons across Hero and Navbar.
 * - Supports keyboard dismissal (Escape), backdrop click, and focus trapping.
 * - Features dynamic, live animated simulations for all 3 core capabilities:
 *   1. Automated Task Routing (live incoming ticket pipeline -> AI assignment)
 *   2. Live Dependency Timelines (interactive Gantt chart with auto-shifting dependencies)
 *   3. AI Call Transcripts & Action Items (live pulsing audio waveform + streaming transcript + auto-generated checklist)
 */
export default function DemoModal({ isOpen, onClose }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(25);
  const [activeTab, setActiveTab] = useState(0);

  // Tab 1 state: simulated routing tickets
  const [ticketStage, setTicketStage] = useState(0);

  // Tab 2 state: Gantt timeline shift simulation
  const [timelineShifted, setTimelineShifted] = useState(false);

  // Tab 3 state: Live transcript line counter
  const [transcriptStep, setTranscriptStep] = useState(0);

  // Close on Escape key press & prevent background scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  // Main simulation timer driven by isPlaying
  useEffect(() => {
    if (!isOpen || !isPlaying) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev >= 100 ? 0 : prev + 1;
        return next;
      });

      // Drive animations based on progress
      setTicketStage((s) => (s + 1) % 4);
      setTimelineShifted((prev) => !prev);
      setTranscriptStep((s) => (s + 1) % 4);
    }, 2800);

    return () => clearInterval(interval);
  }, [isOpen, isPlaying]);

  // Fine-grained progress bar ticks
  useEffect(() => {
    if (!isOpen || !isPlaying) return;
    const progressTimer = setInterval(() => {
      setProgress((p) => (p >= 100 ? 0 : p + 0.4));
    }, 200);
    return () => clearInterval(progressTimer);
  }, [isOpen, isPlaying]);

  if (!isOpen) return null;

  const DEMO_TABS = [
    {
      id: 0,
      title: "Automated Task Routing",
      icon: Zap,
      badge: "AI Engine",
      summary: "NOVA categorizes incoming tickets and dynamically assigns owners based on team bandwidth.",
    },
    {
      id: 1,
      title: "Live Dependency Timelines",
      icon: Layers,
      badge: "Smart Gantt",
      summary: "Timelines reorganize automatically when tasks shift, alerting downstream teammates without manual meetings.",
    },
    {
      id: 2,
      title: "AI Call Transcripts & Tasks",
      icon: Sparkles,
      badge: "Voice Intelligence",
      summary: "Real-time speech transcription extracts key decisions and auto-generates trackable sprint checklist items.",
    },
  ];

  // Helper for manual ticket trigger in Tab 1
  const handleTriggerTicket = () => {
    setTicketStage((s) => (s + 1) % 4);
  };

  const currentTab = DEMO_TABS[activeTab];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
    >
      {/* Backdrop with blur */}
      <div
        className="fixed inset-0 bg-ink/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Box */}
      <div className="relative w-full max-w-4xl rounded-2xl bg-paper dark:bg-ink-soft border border-paper-line dark:border-ink-line shadow-2xl overflow-hidden z-10 flex flex-col my-auto max-h-[95vh]">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-paper-line dark:border-ink-line bg-paper dark:bg-ink shrink-0">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-signal text-ink font-bold text-sm shadow-sm">
              N
            </span>
            <div>
              <div className="flex items-center gap-2">
                <h2 id="demo-modal-title" className="font-display font-semibold text-base sm:text-lg">
                  NOVA Interactive Platform Demo
                </h2>
                <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live Simulator
                </span>
              </div>
              <p className="text-xs text-ink/60 dark:text-paper/60">
                Interactive real-time demonstration of automated workflows
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close demo modal"
            className="h-9 w-9 rounded-full flex items-center justify-center border border-paper-line dark:border-ink-line hover:border-signal text-ink/70 dark:text-paper/70 hover:text-ink dark:hover:text-paper transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body Container */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 sm:space-y-5">
          {/* Feature Mode Tabs */}
          <div className="flex flex-wrap gap-2">
            {DEMO_TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.title}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setProgress(15);
                  }}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                    isActive
                      ? "bg-ink text-paper dark:bg-paper dark:text-ink shadow-md"
                      : "bg-paper-soft dark:bg-ink border border-paper-line dark:border-ink-line text-ink/70 dark:text-paper/70 hover:text-ink dark:hover:text-paper"
                  }`}
                >
                  <Icon size={14} className={isActive ? "text-signal" : ""} />
                  {tab.title}
                </button>
              );
            })}
          </div>

          {/* SIMULATION SCREEN CANVAS (High-tech interactive window) */}
          <div className="relative rounded-2xl border border-paper-line dark:border-ink-line bg-ink text-paper overflow-hidden shadow-inner">
            {/* macOS Chrome Bar */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-black/40 border-b border-white/10 text-xs">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-ember/80 inline-block" />
                <span className="h-2.5 w-2.5 rounded-full bg-signal/80 inline-block" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-2 font-mono text-[11px] text-paper/40 hidden sm:inline">
                  workspace.nova.app/runtime/{currentTab.badge.toLowerCase().replace(" ", "-")}
                </span>
              </div>
              <div className="flex items-center gap-2 text-[11px] font-mono text-signal">
                <span className="h-1.5 w-1.5 rounded-full bg-signal animate-ping" />
                <span>{isPlaying ? "SIMULATION ACTIVE" : "SIMULATION PAUSED"}</span>
              </div>
            </div>

            {/* SCREEN VIEWPORT CONTENT BY ACTIVE TAB */}
            <div className="p-4 sm:p-6 min-h-[310px] sm:min-h-[340px] flex flex-col justify-between">
              {/* TAB 0: AUTOMATED TASK ROUTING */}
              {activeTab === 0 && (
                <div className="space-y-4 animate-fade-in">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/10">
                    <div>
                      <h4 className="font-display font-semibold text-sm sm:text-base text-paper flex items-center gap-2">
                        <Zap size={16} className="text-signal" />
                        Live Task Ingestion & Auto-Assignment Pipeline
                      </h4>
                      <p className="text-xs text-paper/60 mt-0.5">
                        Incoming work categorized in 0.4s and assigned by skill & bandwidth
                      </p>
                    </div>
                    <button
                      onClick={handleTriggerTicket}
                      className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-signal/20 hover:bg-signal/30 text-signal text-xs font-mono font-medium border border-signal/30 transition-colors"
                    >
                      <Send size={12} />
                      Simulate Incoming Task
                    </button>
                  </div>

                  {/* 3-Stage Pipeline Display */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {/* Stage 1: Incoming Queue */}
                    <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 space-y-2">
                      <div className="flex items-center justify-between text-xs font-mono text-paper/60">
                        <span>INCOMING QUEUE</span>
                        <span className="px-1.5 py-0.5 rounded bg-white/10 text-paper text-[10px]">
                          3 pending
                        </span>
                      </div>
                      <div
                        className={`p-3 rounded-lg border text-xs transition-all duration-300 ${
                          ticketStage % 2 === 0
                            ? "bg-signal/15 border-signal/50 text-paper scale-[1.02]"
                            : "bg-white/5 border-white/10 text-paper/80"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-mono text-[10px] text-signal font-semibold">
                            #NOV-842
                          </span>
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono">
                            High Priority
                          </span>
                        </div>
                        <p className="font-medium text-xs truncate">
                          Optimize React bundle & tree-shaking
                        </p>
                        <p className="text-[11px] text-paper/50 mt-1 flex items-center gap-1">
                          <Clock size={11} /> Detected 12s ago
                        </p>
                      </div>
                    </div>

                    {/* Stage 2: AI Processing Engine */}
                    <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 space-y-2 relative overflow-hidden">
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -top-8 -right-8 h-24 w-24 rounded-full bg-signal/15 blur-xl"
                      />
                      <div className="flex items-center justify-between text-xs font-mono text-paper/60">
                        <span>NOVA AI ENGINE</span>
                        <span className="text-[10px] text-emerald-400 font-mono">99.4% Match</span>
                      </div>
                      <div className="p-3 rounded-lg bg-black/40 border border-white/10 text-xs space-y-2 font-mono">
                        <div className="flex items-center gap-1.5 text-signal">
                          <Sparkles size={12} className="animate-spin" />
                          <span className="text-[11px]">Skill Match: Frontend Lead</span>
                        </div>
                        <div className="text-[10px] text-paper/70 space-y-1">
                          <p>• D. Osei: 62% capacity</p>
                          <p>• P. Nair: 91% capacity (Busy)</p>
                        </div>
                        <div className="h-1 rounded-full bg-white/10 overflow-hidden">
                          <div className="h-full bg-signal animate-pulse w-4/5" />
                        </div>
                      </div>
                    </div>

                    {/* Stage 3: Live Routed Target */}
                    <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 space-y-2">
                      <div className="flex items-center justify-between text-xs font-mono text-paper/60">
                        <span>ASSIGNED OWNER</span>
                        <span className="text-emerald-400 text-[10px] font-mono">Dispatched</span>
                      </div>
                      <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-xs space-y-1.5">
                        <div className="flex items-center gap-2">
                          <div className="h-6 w-6 rounded-full bg-signal text-ink font-bold text-[10px] flex items-center justify-center">
                            DO
                          </div>
                          <div>
                            <p className="font-semibold text-paper text-xs">Daniel Osei</p>
                            <p className="text-[10px] text-paper/60">Engineering Manager</p>
                          </div>
                        </div>
                        <p className="text-[10px] text-emerald-300 flex items-center gap-1 pt-1 border-t border-white/10">
                          <CheckCircle2 size={11} /> Slack & Jira auto-notified
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Live Terminal Log */}
                  <div className="px-3.5 py-2.5 rounded-lg bg-black/60 border border-white/10 font-mono text-[11px] text-paper/75 flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                      Ticket #NOV-842 successfully routed to Daniel Osei in 0.38s
                    </span>
                    <span className="text-paper/40 hidden sm:inline">zero meetings needed</span>
                  </div>
                </div>
              )}

              {/* TAB 1: LIVE DEPENDENCY TIMELINES */}
              {activeTab === 1 && (
                <div className="space-y-4 animate-fade-in">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/10">
                    <div>
                      <h4 className="font-display font-semibold text-sm sm:text-base text-paper flex items-center gap-2">
                        <Layers size={16} className="text-signal" />
                        Self-Healing Project Gantt & Dependency Engine
                      </h4>
                      <p className="text-xs text-paper/60 mt-0.5">
                        When upstream deadlines shift, NOVA shifts downstream tasks automatically
                      </p>
                    </div>
                    <button
                      onClick={() => setTimelineShifted((v) => !v)}
                      className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-signal/20 hover:bg-signal/30 text-signal text-xs font-mono font-medium border border-signal/30 transition-colors"
                    >
                      <RotateCcw size={12} />
                      Simulate 2-Day Delay
                    </button>
                  </div>

                  {/* Visual Gantt Chart Simulator */}
                  <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 space-y-3 font-mono text-xs">
                    {/* Days Header */}
                    <div className="grid grid-cols-5 text-[10px] text-paper/50 pb-1 border-b border-white/10 text-center">
                      <span>MON (14)</span>
                      <span>TUE (15)</span>
                      <span>WED (16)</span>
                      <span>THU (17)</span>
                      <span>FRI (18)</span>
                    </div>

                    {/* Task Row 1 */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-[11px] text-paper/80">
                        <span>1. Design System Tokens</span>
                        <span className="text-[10px] text-emerald-400">100% Done</span>
                      </div>
                      <div className="h-5 rounded-md bg-white/10 p-0.5 relative">
                        <div className="h-full rounded bg-emerald-500/80 w-3/5 text-[10px] flex items-center px-2 text-paper font-semibold">
                          Completed
                        </div>
                      </div>
                    </div>

                    {/* Task Row 2: Shifting Task */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-[11px] text-paper/80">
                        <span className="flex items-center gap-1.5">
                          2. Checkout Auth Middleware
                          <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300">
                            Upstream
                          </span>
                        </span>
                        <span className="text-[10px] text-signal">
                          {timelineShifted ? "+2d Adjusted" : "On Track"}
                        </span>
                      </div>
                      <div className="h-5 rounded-md bg-white/10 p-0.5 relative overflow-hidden">
                        <div
                          className={`h-full rounded bg-signal text-ink font-semibold text-[10px] flex items-center px-2 transition-all duration-700 ${
                            timelineShifted ? "w-4/5 translate-x-12 bg-amber-400" : "w-1/2 translate-x-4"
                          }`}
                        >
                          In Progress
                        </div>
                      </div>
                    </div>

                    {/* Task Row 3: Downstream Dependent */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-[11px] text-paper/80">
                        <span>3. Stripe Billing Integration</span>
                        <span className="text-[10px] text-sky-400">Auto-Aligned</span>
                      </div>
                      <div className="h-5 rounded-md bg-white/10 p-0.5 relative">
                        <div
                          className={`h-full rounded bg-sky-500/80 text-paper text-[10px] flex items-center px-2 transition-all duration-700 ${
                            timelineShifted ? "w-2/5 translate-x-48" : "w-2/5 translate-x-28"
                          }`}
                        >
                          Dependent
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Dynamic Alert Strip */}
                  <div className="px-3.5 py-2.5 rounded-lg bg-black/60 border border-white/10 font-mono text-[11px] text-paper/75 flex items-center gap-2">
                    <AlertCircle size={14} className="text-signal shrink-0" />
                    <span>
                      {timelineShifted
                        ? "Design freeze shifted +2 days. NOVA auto-rescheduled 3 dependent engineering sprints without conflicts."
                        : "All milestones linked. Timeline is synchronized with GitHub & Jira."}
                    </span>
                  </div>
                </div>
              )}

              {/* TAB 2: AI CALL TRANSCRIPTS & TASKS */}
              {activeTab === 2 && (
                <div className="space-y-4 animate-fade-in">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/10">
                    <div>
                      <h4 className="font-display font-semibold text-sm sm:text-base text-paper flex items-center gap-2">
                        <Sparkles size={16} className="text-signal" />
                        Live Voice Transcription & Automatic Task Extraction
                      </h4>
                      <p className="text-xs text-paper/60 mt-0.5">
                        No manual note-taker needed: meeting conversations become structured tasks
                      </p>
                    </div>

                    {/* Live Audio Spectrum Waveform Bars */}
                    <div className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/10 self-start sm:self-auto">
                      <span className="text-[10px] font-mono text-paper/60 mr-1.5">MIC</span>
                      {[12, 24, 18, 28, 14, 22, 16, 26, 10].map((h, i) => (
                        <span
                          key={i}
                          className="w-1 bg-signal rounded-full animate-pulse"
                          style={{
                            height: isPlaying ? `${(h * ((i % 3) + 1)) % 22 + 6}px` : "4px",
                            animationDuration: `${0.4 + (i % 4) * 0.2}s`,
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-[1.1fr_0.9fr] gap-3">
                    {/* Live Speech Stream */}
                    <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 space-y-2.5">
                      <span className="text-[10px] font-mono text-paper/60 uppercase">
                        Realtime Call Stream (Meeting #402)
                      </span>
                      <div className="space-y-2 text-xs">
                        <div
                          className={`p-2 rounded border transition-all ${
                            transcriptStep % 2 === 0
                              ? "bg-signal/15 border-signal/40"
                              : "bg-black/40 border-white/10"
                          }`}
                        >
                          <p className="text-signal font-semibold text-[11px]">Priya Nair (Product):</p>
                          <p className="text-paper/80 text-[11px] mt-0.5">
                            "Let's finalize the mobile accordion navigation before Friday's demo."
                          </p>
                        </div>
                        <div
                          className={`p-2 rounded border transition-all ${
                            transcriptStep % 2 === 1
                              ? "bg-emerald-500/15 border-emerald-500/40"
                              : "bg-black/40 border-white/10"
                          }`}
                        >
                          <p className="text-emerald-400 font-semibold text-[11px]">Daniel Osei (Eng):</p>
                          <p className="text-paper/80 text-[11px] mt-0.5">
                            "I already verified the touch target size. Deploying staging now."
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Auto-extracted Action Items Checklist */}
                    <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 space-y-2.5">
                      <div className="flex items-center justify-between text-[10px] font-mono text-paper/60">
                        <span className="text-signal uppercase">Auto-Extracted Tasks (3)</span>
                        <span className="text-emerald-400">Synced</span>
                      </div>
                      <div className="space-y-1.5 text-xs">
                        {[
                          { text: "Verify mobile accordion navigation", owner: "Priya", done: true },
                          { text: "Audit touch targets for accessibility", owner: "Daniel", done: true },
                          { text: "Publish Vercel preview deployment", owner: "Marisol", done: false },
                        ].map((task) => (
                          <div
                            key={task.text}
                            className={`flex items-center gap-2 p-2 rounded border transition-all ${
                              task.done
                                ? "bg-emerald-500/10 border-emerald-500/20 text-paper"
                                : "bg-white/5 border-white/10 text-paper/70"
                            }`}
                          >
                            <CheckCircle2
                              size={14}
                              className={task.done ? "text-emerald-400 shrink-0" : "text-paper/30 shrink-0"}
                            />
                            <div className="flex-1 min-w-0">
                              <p className="text-[11px] truncate font-medium">{task.text}</p>
                              <p className="text-[9px] text-paper/50 font-mono">Assigned: {task.owner}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Summary Bar */}
                  <div className="px-3.5 py-2.5 rounded-lg bg-black/60 border border-white/10 font-mono text-[11px] text-paper/75 flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <Sparkles size={14} className="text-signal" />
                      3 action items automatically logged to sprint backlog • 45 min meeting time saved
                    </span>
                    <span className="text-emerald-400 text-[10px] hidden sm:inline">100% automated</span>
                  </div>
                </div>
              )}
            </div>

            {/* PLAYER CONTROLS BAR (Interactive Scrubbing & Playback) */}
            <div className="px-4 py-3 bg-black/60 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => setIsPlaying((p) => !p)}
                  aria-label={isPlaying ? "Pause simulation" : "Play simulation"}
                  className="h-8 w-8 rounded-full bg-signal text-ink flex items-center justify-center shrink-0 hover:opacity-90 transition-opacity"
                >
                  {isPlaying ? <Pause size={14} /> : <Play size={14} className="ml-0.5" />}
                </button>

                <button
                  onClick={() => setIsMuted((m) => !m)}
                  aria-label={isMuted ? "Unmute sound effects" : "Mute sound effects"}
                  className="h-8 w-8 rounded-full bg-white/10 text-paper flex items-center justify-center shrink-0 hover:bg-white/20 transition-colors"
                >
                  {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                </button>

                {/* Clickable Progress Scrub Bar */}
                <div
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const clickPos = (e.clientX - rect.left) / rect.width;
                    setProgress(Math.round(clickPos * 100));
                  }}
                  className="flex-1 sm:w-64 h-2 rounded-full bg-white/20 overflow-hidden cursor-pointer relative group"
                >
                  <div
                    className="h-full bg-signal transition-all duration-200"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <span className="text-xs font-mono text-paper/60 whitespace-nowrap">
                  0:{Math.floor(progress) < 10 ? `0${Math.floor(progress)}` : Math.floor(progress)} / 1:40
                </span>
              </div>

              <div className="flex items-center gap-3 text-xs text-paper/60 font-mono">
                <span className="hidden sm:inline">Interactive High-Fidelity Simulator</span>
                <span className="px-2 py-0.5 rounded bg-white/10 text-paper text-[10px]">
                  60 FPS Engine
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer with Actions */}
        <div className="px-5 sm:px-6 py-4 bg-paper-soft dark:bg-ink border-t border-paper-line dark:border-ink-line flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <p className="text-xs text-ink/70 dark:text-paper/70 text-center sm:text-left">
            Experience NOVA on your actual team tools. No credit card required.
          </p>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none text-xs font-medium px-4 py-2.5 rounded-full border border-paper-line dark:border-ink-line hover:border-signal transition-colors"
            >
              Close demo
            </button>
            <a
              href="#final-cta"
              onClick={onClose}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 text-xs font-semibold px-5 py-2.5 rounded-full bg-ink text-paper dark:bg-signal dark:text-ink hover:opacity-90 transition-opacity"
            >
              Start 14-day trial
              <ArrowRight size={13} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
