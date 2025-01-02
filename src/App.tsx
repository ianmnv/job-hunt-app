import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import DashBoard from "./pages/DashBoard";
import MainContext from "./MainContext";
import Application from ".";
import EachJob from "./components/EachJob";

function App() {
  const jobApplications: Application[] = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Tech Solutions Inc.",
      country: "USA",
      salaryOffered: 85000,
      salaryWanted: 90000,
      requirements: "3+ years of experience with React and TypeScript",
      applicationDate: "2023-12-01",
      technologies: ["React", "TypeScript", "JavaScript", "CSS"],
      status: "applied",
      link: "https://techsolutions.com/jobs/frontend-developer",
      benefits: ["Health Insurance", "401(k)", "Remote Work"],
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "Code Innovators Ltd.",
      country: "Canada",
      salaryOffered: 95000,
      salaryWanted: 100000,
      requirements: "Experience with Node.js and PostgreSQL",
      applicationDate: "2023-12-05",
      technologies: ["Node.js", "PostgreSQL", "Docker"],
      status: "pending",
      link: "https://codeinnovators.com/careers/backend-developer",
      benefits: ["Stock Options", "Relocation Assistance", "Flexible Hours"],
    },
    {
      id: 3,
      title: "Full Stack Engineer",
      company: "Global Tech Corp",
      country: "UK",
      salaryOffered: 80000,
      salaryWanted: 85000,
      requirements: "Full stack development with Angular and .NET",
      applicationDate: "2023-12-10",
      technologies: ["Angular", ".NET", "C#", "SQL"],
      status: "upcoming",
      link: "https://globaltech.com/jobs/fullstack-engineer",
      benefits: ["Paid Vacation", "Free Meals", "Hybrid Work Environment"],
    },
    {
      id: 4,
      title: "Mobile App Developer",
      company: "Innovate Mobile",
      country: "Germany",
      salaryOffered: 70000,
      salaryWanted: 75000,
      requirements: "Proficient in React Native and mobile app deployment",
      applicationDate: "2023-12-15",
      technologies: ["React Native", "iOS", "Android", "JavaScript"],
      status: "rejected",
      link: "https://innovatetech.com/careers/mobile-developer",
      benefits: ["Gym Membership", "Travel Allowance", "Team Outings"],
    },
    {
      id: 5,
      title: "Frontend Developer",
      company: "Monsters Inc.",
      country: "USA",
      salaryOffered: 85000,
      salaryWanted: 90000,
      requirements:
        "3+ years of experience with React Native, TypeScript, TDD & many more shit",
      applicationDate: "2023-12-28",
      technologies: [
        "React Native",
        "TypeScript",
        "JavaScript",
        "CSS",
        "TDD",
        "Jest",
      ],
      status: "applied",
      link: "https://myexample.com/jobs/frontend-developer",
      benefits: ["Health Insurance", "$500 cash", "Remote Work", "Laptop"],
    },
  ];

  return (
    <MainContext.Provider value={jobApplications}>
      <Header />
      <EachJob />

      <BrowserRouter>
        <main id="main-content">
          <Routes>
            <Route path="/" element={<DashBoard />} />
            {/* <Route path="/" element={<DashBoard />} /> */}
          </Routes>
        </main>
      </BrowserRouter>
    </MainContext.Provider>
  );
}

export default App;
