interface Interview {
  id: number;
  appointmentDate: string;
  type: string[];
  interviewers: string[];
  notes: string;
  duration: number;
  platform: string;
  created: string;
}

type Status =
  | "applied"
  | "upcoming"
  | "offers"
  | "rejected"
  | "discarded"
  | "pending";

interface Application {
  id: number;
  title: string;
  company: string;
  country: string;
  salaryOffered: number;
  salaryWanted: number;
  requirements: string;
  applicationDate: string;
  interviews?: Interview[];
  technologies: string[];
  status: Status;
  link: string;
  benefits: string[];
  notes?: string;
}

export default Application;
