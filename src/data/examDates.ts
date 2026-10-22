// Her NSC matric finals — exam survival space.
//
// IMPORTANT: The dates below are transcribed to match the South African DBE
// national NSC October/November 2026 timetable pattern. If her school, admission
// letter, or examination board differs, EDIT the two entries below to match her
// ACTUAL arrangements before sharing. Countdowns are computed from `dateISO`
// (South African Standard Time = UTC+02:00).
export interface Exam {
  id: string;
  subject: string;
  paper: string;
  dateISO: string;
  dateLabel: string;
  time: string;
  durationHours: number;
  note: string;
}

export const examLinks = {
  timetable:
    'https://www.education.gov.za/Portals/0/Documents/Publications/2026/2026%20Nov%20NSC%20Timetable.pdf',
  pastPapers:
    'https://www.education.gov.za/Curriculum/NationalSeniorCertificate%28NSC%29Examinations/NSCPastExaminationpapers.aspx',
};

export const verifyNote =
  'Please double-check these against your own exam admission letter / school timetable — if anything differs, he can update this page to match.';

export const exams: Exam[] = [
  {
    id: 'physics-p1',
    subject: 'Physical Sciences',
    paper: 'Physics Paper 1',
    dateISO: '2026-10-30T09:00:00+02:00',
    dateLabel: 'Friday, 30 October 2026',
    time: '09:00',
    durationHours: 3,
    note: 'One question at a time. You have prepared for this — trust it.',
  },
  {
    id: 'chemistry-p2',
    subject: 'Physical Sciences',
    paper: 'Chemistry Paper 2',
    dateISO: '2026-11-02T09:00:00+02:00',
    dateLabel: 'Monday, 2 November 2026',
    time: '09:00',
    durationHours: 3,
    note: 'Breathe, read carefully, and let your preparation do the work.',
  },
];

export const studyEncouragements: string[] = [
  'one question at a time. you’ve got this.',
  'you have worked too hard to doubt yourself now.',
  'breathe, read carefully, trust your preparation.',
  'God gave you a mind capable of learning. Give yourself the patience to use it.',
  'your future is bigger than this one paper.',
  'rest is part of the work, not a reward for finishing it.',
  'you are allowed to be nervous and still be ready.',
];

// Pomodoro-style study break timer configuration.
export const studyTimer = {
  focusMinutes: 25,
  breakMinutes: 5,
};

export default exams;
