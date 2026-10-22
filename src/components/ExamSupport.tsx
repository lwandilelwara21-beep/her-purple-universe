import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { CalendarClock, ExternalLink, Pause, Play, RotateCcw, Timer } from 'lucide-react';
import { exams, examLinks, studyEncouragements, studyTimer, verifyNote, type Exam } from '../data/examDates';
import Reveal from './Reveal';
import Section from './Section';

function useCountdown(iso: string) {
  const target = useMemo(() => new Date(iso).getTime(), [iso]);
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  return target - now;
}

function Countdown({ exam }: { exam: Exam }) {
  const diff = useCountdown(exam.dateISO);
  if (diff <= 0) return <p className="font-display text-2xl text-lavender">you did it. 💜</p>;
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  const cells: [string, number][] = [
    ['days', d],
    ['hrs', h],
    ['min', m],
    ['sec', s],
  ];
  return (
    <div className="flex gap-3">
      {cells.map(([label, val]) => (
        <div key={label} className="min-w-[3.4rem] rounded-xl border border-lavender/15 bg-deep/20 px-3 py-2 text-center">
          <div className="font-display text-2xl text-soft tabular-nums">{String(val).padStart(2, '0')}</div>
          <div className="text-[0.6rem] uppercase tracking-widest text-lavender/60">{label}</div>
        </div>
      ))}
    </div>
  );
}

function ExamCard({ exam }: { exam: Exam }) {
  return (
    <div className="glass flex h-full flex-col gap-5 rounded-3xl p-7">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[0.65rem] uppercase tracking-[0.3em] text-lavender/70">{exam.subject}</p>
          <h3 className="mt-1 font-display text-3xl text-soft">{exam.paper}</h3>
        </div>
        <CalendarClock className="h-6 w-6 shrink-0 text-lavender/70" />
      </div>
      <div className="flex flex-wrap gap-x-6 gap-y-1 text-soft/85">
        <span>{exam.dateLabel}</span>
        <span className="text-silver">•</span>
        <span>{exam.time}</span>
        <span className="text-silver">•</span>
        <span>{exam.durationHours} hours</span>
      </div>
      <Countdown exam={exam} />
      <p className="font-hand text-2xl text-lavender">{exam.note}</p>
    </div>
  );
}

function StudyTimer() {
  const [mode, setMode] = useState<'focus' | 'break'>('focus');
  const [seconds, setSeconds] = useState(studyTimer.focusMinutes * 60);
  const [running, setRunning] = useState(false);
  const length = (m: 'focus' | 'break') => (m === 'focus' ? studyTimer.focusMinutes : studyTimer.breakMinutes) * 60;

  useEffect(() => {
    if (!running) return;
    if (seconds <= 0) {
      const nextMode = mode === 'focus' ? 'break' : 'focus';
      setMode(nextMode);
      setSeconds(length(nextMode));
      setRunning(false);
      return;
    }
    const id = setTimeout(() => setSeconds((s) => s - 1), 1000);
    return () => clearTimeout(id);
  }, [running, seconds, mode]);

  const mm = String(Math.floor(seconds / 60)).padStart(2, '0');
  const ss = String(seconds % 60).padStart(2, '0');
  const pct = 100 - (seconds / length(mode)) * 100;

  return (
    <div className="glass flex h-full flex-col rounded-3xl p-7">
      <div className="mb-4 flex items-center gap-2 text-lavender/80">
        <Timer className="h-5 w-5" />
        <p className="text-[0.65rem] uppercase tracking-[0.3em]">study break timer</p>
      </div>
      <div className="mb-4 flex gap-2">
        {(['focus', 'break'] as const).map((m) => (
          <button
            key={m}
            onClick={() => {
              setMode(m);
              setSeconds(length(m));
              setRunning(false);
            }}
            className={`rounded-full px-4 py-1.5 text-xs uppercase tracking-widest transition ${
              mode === m ? 'bg-royal text-soft' : 'border border-lavender/25 text-lavender/70'
            }`}
          >
            {m === 'focus' ? `${studyTimer.focusMinutes}m focus` : `${studyTimer.breakMinutes}m break`}
          </button>
        ))}
      </div>
      <div className="font-display text-6xl text-soft tabular-nums">
        {mm}:{ss}
      </div>
      <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-ink">
        <motion.div className="h-full rounded-full bg-royal" animate={{ width: `${pct}%` }} transition={{ duration: 0.4 }} />
      </div>
      <div className="mt-5 flex gap-3">
        <button onClick={() => setRunning((r) => !r)} className="btn-primary px-5 py-2 text-sm">
          {running ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          {running ? 'Pause' : 'Start'}
        </button>
        <button onClick={() => { setSeconds(length(mode)); setRunning(false); }} className="btn-ghost px-5 py-2 text-sm">
          <RotateCcw className="h-4 w-4" /> Reset
        </button>
      </div>
    </div>
  );
}

export function ExamSupport() {
  const dayIndex = useMemo(() => Math.floor(Date.now() / 86400000) % studyEncouragements.length, []);
  const [enc, setEnc] = useState(dayIndex);

  return (
    <Section id="exams" eyebrow="your matric finals" title="YOU'VE GOT THIS, MY GIRL. 📚">
      <div className="grid gap-6 md:grid-cols-2">
        {exams.map((e, i) => (
          <Reveal key={e.id} delay={0.06 * i} y={22}>
            <ExamCard exam={e} />
          </Reveal>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        <a href={examLinks.timetable} target="_blank" rel="noopener noreferrer" className="btn-ghost text-sm">
          Official NSC timetable ↗
        </a>
        <a href={examLinks.pastPapers} target="_blank" rel="noopener noreferrer" className="btn-ghost text-sm">
          DBE past exam papers ↗
        </a>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <Reveal y={22}>
          <div className="glass flex h-full flex-col justify-between rounded-3xl p-7">
            <p className="mb-3 text-[0.65rem] uppercase tracking-[0.3em] text-lavender/70">a study reminder</p>
            <motion.p key={enc} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="font-display text-2xl leading-snug text-soft">
              {studyEncouragements[enc]}
            </motion.p>
            <button onClick={() => setEnc((e) => (e + 1) % studyEncouragements.length)} className="mt-5 self-start text-xs uppercase tracking-[0.25em] text-silver/70 hover:text-lavender">
              another one
            </button>
          </div>
        </Reveal>
        <Reveal y={22} delay={0.06}>
          <StudyTimer />
        </Reveal>
      </div>

      <p className="mx-auto mt-8 max-w-xl text-center text-xs leading-relaxed text-silver/50">
        <ExternalLink className="mr-1 inline h-3 w-3" />
        {verifyNote}
      </p>
    </Section>
  );
}

export default ExamSupport;
