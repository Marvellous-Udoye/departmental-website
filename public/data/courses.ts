export interface CourseProps {
  courseTitle: string;
  unit: string;
  courseCode: string;
  instructor?: string;
  venue?: string;
  description?: string;
  projectDeadline?: string;
  resources?: ResourceItem[];
  schedule?: ScheduleItem[];
}

export interface ResourceItem {
  fileName: string;
  format: string;
  url?: string;
  fileSize?: string;
}

interface ScheduleItem {
  time: string;
  event: string;
}

export const courses = [
  {
    courseTitle: "Basic Electrical Machines",
    unit: "2 Units",
    courseCode: "EEE 313",
    instructor: "Dr. Johnson",
    venue: "Engineering Block A",
    description: "This course covers fundamental principles of electrical machines, including DC and AC machines, transformers, and motor control systems.",
    projectDeadline: "December 15th",
    resources: [
      { fileName: "Week 1-2 Notes", format: "pdf", fileSize: "2.3MB", url: "/resources/eee313/week1-2.pdf" },
      { fileName: "Circuit Simulator", format: "exe", fileSize: "15MB", url: "/resources/eee313/simulator.exe" },
      { fileName: "Lab Manual", format: "pdf", fileSize: "5MB", url: "/resources/eee313/lab-manual.pdf" }
    ],
    schedule: [
      { time: "09:00", event: "Lecture Begins" },
      { time: "10:30", event: "Lab Session" },
      { time: "11:30", event: "Class Ends" }
    ]
  },
  {
    courseTitle: "Signal and Systems",
    unit: "2 Units",
    courseCode: "TCE 301",
    instructor: "Prof. Sarah Chen",
    venue: "TCE Lab Complex",
    description: "Introduction to continuous and discrete-time signals and systems with applications to communications, signal processing, and control systems.",
    projectDeadline: "November 30th",
    resources: [
      { fileName: "Signal Processing Tools", format: "zip", fileSize: "45MB", url: "/resources/tce301/tools.zip" },
      { fileName: "MATLAB Examples", format: "pdf", fileSize: "3.8MB", url: "/resources/tce301/matlab.pdf" },
      { fileName: "Course Notes", format: "pdf", fileSize: "8.2MB", url: "/resources/tce301/notes.pdf" }
    ],
    schedule: [
      { time: "14:00", event: "Lecture Begins" },
      { time: "15:30", event: "Tutorial" },
      { time: "16:00", event: "Class Ends" }
    ]
  },
  {
    courseTitle: "Engineering Mathematics",
    unit: "3 Units",
    courseCode: "ENG 301",
    instructor: "Dr. Michael Torres",
    venue: "Main Lecture Theatre",
    description: "Advanced mathematics concepts including differential equations, complex analysis, and numerical methods with engineering applications.",
    projectDeadline: "January 10th",
    resources: [
      { fileName: "Mathematics Handbook", format: "pdf", fileSize: "12MB", url: "/resources/eng301/handbook.pdf" },
      { fileName: "Problem Sets", format: "pdf", fileSize: "4.5MB", url: "/resources/eng301/problems.pdf" },
      { fileName: "Calculator Guide", format: "docx", fileSize: "1.2MB", url: "/resources/eng301/calc-guide.docx" }
    ],
    schedule: [
      { time: "10:00", event: "Lecture" },
      { time: "11:30", event: "Problem Solving Session" },
      { time: "12:30", event: "Class Ends" }
    ]
  },
  {
    courseTitle: "Electrical Circuit Theory",
    unit: "2 Units",
    courseCode: "EEE 307",
    instructor: "Dr. Emily Rodriguez",
    venue: "Electronics Lab",
    description: "Advanced analysis of electrical circuits, including network theorems, frequency response, and resonance phenomena.",
    projectDeadline: "December 20th",
    resources: [
      { fileName: "Circuit Analysis Software", format: "exe", fileSize: "25MB", url: "/resources/eee307/spice.exe" },
      { fileName: "Lecture Slides", format: "ppt", fileSize: "15MB", url: "/resources/eee307/slides.ppt" },
      { fileName: "Practice Problems", format: "pdf", fileSize: "3.5MB", url: "/resources/eee307/practice.pdf" }
    ],
    schedule: [
      { time: "13:00", event: "Theory Class" },
      { time: "14:30", event: "Practical Session" },
      { time: "16:00", event: "Class Ends" }
    ]
  },
  {
    courseTitle: "Introduction to Python Analysis",
    unit: "1 Unit",
    courseCode: "ICT 323",
    instructor: "Mr. David Kumar",
    venue: "Computer Lab 2",
    description: "Fundamentals of Python programming with focus on data analysis, scientific computing, and problem-solving techniques.",
    projectDeadline: "December 5th",
    resources: [
      { fileName: "Python Installation Guide", format: "pdf", fileSize: "1.5MB", url: "/resources/ict323/setup.pdf" },
      { fileName: "Code Examples", format: "zip", fileSize: "8MB", url: "/resources/ict323/examples.zip" },
      { fileName: "Assignment Templates", format: "ipynb", fileSize: "2.1MB", url: "/resources/ict323/templates.ipynb" }
    ],
    schedule: [
      { time: "16:00", event: "Lecture Begins" },
      { time: "17:00", event: "Coding Practice" },
      { time: "18:00", event: "Class Ends" }
    ]
  },
  {
    courseTitle: "Software Development Techniques",
    unit: "2 Units",
    courseCode: "CEN 301",
    instructor: "Prof. James Wilson",
    venue: "Software Engineering Lab",
    description: "Modern software development methodologies, version control, testing strategies, and best practices in software engineering.",
    projectDeadline: "January 5th",
    resources: [
      { fileName: "Git Tutorial", format: "pdf", fileSize: "2.8MB", url: "/resources/cen301/git-guide.pdf" },
      { fileName: "Project Templates", format: "zip", fileSize: "18MB", url: "/resources/cen301/templates.zip" },
      { fileName: "Testing Framework", format: "exe", fileSize: "35MB", url: "/resources/cen301/testing-tool.exe" }
    ],
    schedule: [
      { time: "11:00", event: "Lecture" },
      { time: "12:30", event: "Project Work" },
      { time: "14:00", event: "Class Ends" }
    ]
  },
  {
    courseTitle: "Electrical/Electronics Lab I",
    unit: "1 Unit",
    courseCode: "EEE 315",
    instructor: "Dr. Lisa Chang",
    venue: "Advanced Electronics Lab",
    description: "Hands-on laboratory experiments in electrical and electronic circuits, measurements, and instrumentation.",
    projectDeadline: "November 25th",
    resources: [
      { fileName: "Lab Safety Guide", format: "pdf", fileSize: "1.8MB", url: "/resources/eee315/safety.pdf" },
      { fileName: "Experiment Manuals", format: "pdf", fileSize: "12MB", url: "/resources/eee315/manuals.pdf" },
      { fileName: "Data Sheets", format: "zip", fileSize: "22MB", url: "/resources/eee315/datasheets.zip" }
    ],
    schedule: [
      { time: "14:00", event: "Lab Briefing" },
      { time: "14:30", event: "Practical Work" },
      { time: "17:30", event: "Lab Ends" }
    ]
  },
  {
    courseTitle: "Electromagnetic Field Theory",
    unit: "2 Units",
    courseCode: "TCE 303",
    instructor: "Dr. Robert Blake",
    venue: "Physics Lecture Room",
    description: "Study of electric and magnetic fields, Maxwell's equations, wave propagation, and electromagnetic radiation.",
    projectDeadline: "December 12th",
    resources: [
      { fileName: "Field Simulator", format: "exe", fileSize: "42MB", url: "/resources/tce303/simulator.exe" },
      { fileName: "Weekly Notes", format: "pdf", fileSize: "15MB", url: "/resources/tce303/notes.pdf" },
      { fileName: "Problem Set", format: "pdf", fileSize: "3.2MB", url: "/resources/tce303/problems.pdf" }
    ],
    schedule: [
      { time: "08:00", event: "Theory Class" },
      { time: "09:30", event: "Tutorial" },
      { time: "10:30", event: "Class Ends" }
    ]
  },
  {
    courseTitle: "Digital Electronics I",
    unit: "2 Units",
    courseCode: "EEE 317",
    instructor: "Prof. Alan Martinez",
    venue: "Digital Systems Lab",
    description: "Introduction to digital logic, Boolean algebra, combinational and sequential circuits, and digital system design.",
    projectDeadline: "January 8th",
    resources: [
      { fileName: "Logic Simulator", format: "exe", fileSize: "28MB", url: "/resources/eee317/logisim.exe" },
      { fileName: "Design Examples", format: "pdf", fileSize: "5.6MB", url: "/resources/eee317/examples.pdf" },
      { fileName: "Lab Sheets", format: "docx", fileSize: "2.4MB", url: "/resources/eee317/labs.docx" }
    ],
    schedule: [
      { time: "15:00", event: "Lecture" },
      { time: "16:30", event: "Lab Work" },
      { time: "18:00", event: "Class Ends" }
    ]
  },
  {
    courseTitle: "Introduction to Entrepreneurial studies",
    unit: "2 Units",
    courseCode: "BUS 311",
    instructor: "Dr. Rachel Adams",
    venue: "Business School Auditorium",
    description: "Fundamentals of entrepreneurship, business planning, market analysis, and startup management.",
    projectDeadline: "December 18th",
    resources: [
      { fileName: "Business Plan Template", format: "docx", fileSize: "1.8MB", url: "/resources/bus311/template.docx" },
      { fileName: "Case Studies", format: "pdf", fileSize: "4.2MB", url: "/resources/bus311/cases.pdf" },
      { fileName: "Market Analysis Tools", format: "xlsx", fileSize: "3.5MB", url: "/resources/bus311/tools.xlsx" }
    ],
    schedule: [
      { time: "12:00", event: "Lecture" },
      { time: "13:30", event: "Group Discussion" },
      { time: "14:30", event: "Class Ends" }
    ]
  },
  {
    courseTitle: "Electronics Engineering I",
    unit: "2 Units",
    courseCode: "EEE 305",
    instructor: "Dr. Thomas Wright",
    venue: "Electronics Design Studio",
    description: "Study of electronic devices, amplifier circuits, frequency response, and basic analog circuit design.",
    projectDeadline: "January 15th",
    resources: [
      { fileName: "Circuit Design Software", format: "exe", fileSize: "56MB", url: "/resources/eee305/designer.exe" },
      { fileName: "Component Datasheets", format: "pdf", fileSize: "18MB", url: "/resources/eee305/datasheets.pdf" },
      { fileName: "Tutorial Guide", format: "pdf", fileSize: "4.8MB", url: "/resources/eee305/tutorial.pdf" }
    ],
    schedule: [
      { time: "10:00", event: "Theory Class" },
      { time: "11:30", event: "Design Lab" },
      { time: "13:00", event: "Class Ends" }
    ]
  }
];