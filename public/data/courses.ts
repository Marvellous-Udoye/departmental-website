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
    courseTitle: "Introduction to Computer Science",
    unit: "2 Units",
    courseCode: "CSC101",
    instructor: "Dr. Johnson",
    venue: "Computer Science Lab A",
    description: "Introduction to fundamental concepts of computer science, including programming basics, algorithms, and problem-solving techniques.",
    projectDeadline: "December 15th",
    resources: [
      { fileName: "Programming Basics", format: "pdf", fileSize: "2.3MB", url: "/resources/csc101/week1-2.pdf" },
      { fileName: "Code Editor Setup", format: "exe", fileSize: "15MB", url: "/resources/csc101/editor.exe" },
      { fileName: "Lab Manual", format: "pdf", fileSize: "5MB", url: "/resources/csc101/lab-manual.pdf" }
    ],
    schedule: [
      { time: "09:00", event: "Lecture Begins" },
      { time: "10:30", event: "Lab Session" },
      { time: "11:30", event: "Class Ends" }
    ]
  },
  {
    courseTitle: "Mathematics III",
    unit: "2 Units",
    courseCode: "MTH301",
    instructor: "Prof. Sarah Chen",
    venue: "Mathematics Department",
    description: "Advanced mathematics topics including calculus, linear algebra, and differential equations.",
    projectDeadline: "November 30th",
    resources: [
      { fileName: "Mathematical Tools", format: "zip", fileSize: "45MB", url: "/resources/mth301/tools.zip" },
      { fileName: "Problem Sets", format: "pdf", fileSize: "3.8MB", url: "/resources/mth301/problems.pdf" },
      { fileName: "Course Notes", format: "pdf", fileSize: "8.2MB", url: "/resources/mth301/notes.pdf" }
    ],
    schedule: [
      { time: "14:00", event: "Lecture Begins" },
      { time: "15:30", event: "Tutorial" },
      { time: "16:00", event: "Class Ends" }
    ]
  },
  {
    courseTitle: "Engineering Fundamentals",
    unit: "3 Units",
    courseCode: "ENG103",
    instructor: "Dr. Michael Torres",
    venue: "Engineering Block",
    description: "Introduction to engineering principles, problem-solving methodologies, and basic engineering design.",
    projectDeadline: "January 10th",
    resources: [
      { fileName: "Engineering Handbook", format: "pdf", fileSize: "12MB", url: "/resources/eng103/handbook.pdf" },
      { fileName: "Design Projects", format: "pdf", fileSize: "4.5MB", url: "/resources/eng103/projects.pdf" },
      { fileName: "CAD Guide", format: "docx", fileSize: "1.2MB", url: "/resources/eng103/cad-guide.docx" }
    ],
    schedule: [
      { time: "10:00", event: "Lecture" },
      { time: "11:30", event: "Design Studio" },
      { time: "12:30", event: "Class Ends" }
    ]
  },
  {
    courseTitle: "Physics I",
    unit: "2 Units",
    courseCode: "PHY105",
    instructor: "Dr. Emily Rodriguez",
    venue: "Physics Laboratory",
    description: "Fundamental principles of physics including mechanics, waves, and thermodynamics.",
    projectDeadline: "December 20th",
    resources: [
      { fileName: "Physics Simulator", format: "exe", fileSize: "25MB", url: "/resources/phy105/simulator.exe" },
      { fileName: "Lecture Slides", format: "ppt", fileSize: "15MB", url: "/resources/phy105/slides.ppt" },
      { fileName: "Practice Problems", format: "pdf", fileSize: "3.5MB", url: "/resources/phy105/practice.pdf" }
    ],
    schedule: [
      { time: "13:00", event: "Theory Class" },
      { time: "14:30", event: "Lab Session" },
      { time: "16:00", event: "Class Ends" }
    ]
  },
  {
    courseTitle: "Chemistry I",
    unit: "1 Unit",
    courseCode: "CHM101",
    instructor: "Mr. David Kumar",
    venue: "Chemistry Lab",
    description: "Introduction to general chemistry principles, atomic structure, and chemical reactions.",
    projectDeadline: "December 5th",
    resources: [
      { fileName: "Lab Safety Guide", format: "pdf", fileSize: "1.5MB", url: "/resources/chm101/safety.pdf" },
      { fileName: "Experiment Guides", format: "zip", fileSize: "8MB", url: "/resources/chm101/experiments.zip" },
      { fileName: "Chemical Database", format: "xlsx", fileSize: "2.1MB", url: "/resources/chm101/database.xlsx" }
    ],
    schedule: [
      { time: "16:00", event: "Lecture Begins" },
      { time: "17:00", event: "Lab Work" },
      { time: "18:00", event: "Class Ends" }
    ]
  },
  {
    courseTitle: "Engineering Drawing",
    unit: "2 Units",
    courseCode: "ENG111",
    instructor: "Prof. James Wilson",
    venue: "Technical Drawing Studio",
    description: "Principles of engineering drawing, technical sketching, and computer-aided design.",
    projectDeadline: "January 5th",
    resources: [
      { fileName: "CAD Tutorial", format: "pdf", fileSize: "2.8MB", url: "/resources/eng111/cad-guide.pdf" },
      { fileName: "Drawing Templates", format: "zip", fileSize: "18MB", url: "/resources/eng111/templates.zip" },
      { fileName: "AutoCAD Basics", format: "exe", fileSize: "35MB", url: "/resources/eng111/autocad-basic.exe" }
    ],
    schedule: [
      { time: "11:00", event: "Lecture" },
      { time: "12:30", event: "Drawing Practice" },
      { time: "14:00", event: "Class Ends" }
    ]
  },
  {
    courseTitle: "Computer Science II",
    unit: "1 Unit",
    courseCode: "CSC201",
    instructor: "Dr. Lisa Chang",
    venue: "Computer Lab B",
    description: "Advanced programming concepts, data structures, and algorithms.",
    projectDeadline: "November 25th",
    resources: [
      { fileName: "Algorithm Guide", format: "pdf", fileSize: "1.8MB", url: "/resources/csc201/algorithms.pdf" },
      { fileName: "Code Examples", format: "pdf", fileSize: "12MB", url: "/resources/csc201/examples.pdf" },
      { fileName: "Project Files", format: "zip", fileSize: "22MB", url: "/resources/csc201/projects.zip" }
    ],
    schedule: [
      { time: "14:00", event: "Lecture" },
      { time: "14:30", event: "Programming Lab" },
      { time: "17:30", event: "Class Ends" }
    ]
  },
  {
    courseTitle: "Electrical Engineering Fundamentals",
    unit: "2 Units",
    courseCode: "EEE201",
    instructor: "Dr. Robert Blake",
    venue: "Electrical Engineering Lab",
    description: "Basic principles of electrical engineering, circuits, and electrical systems.",
    projectDeadline: "December 12th",
    resources: [
      { fileName: "Circuit Simulator", format: "exe", fileSize: "42MB", url: "/resources/eee201/simulator.exe" },
      { fileName: "Course Notes", format: "pdf", fileSize: "15MB", url: "/resources/eee201/notes.pdf" },
      { fileName: "Practice Problems", format: "pdf", fileSize: "3.2MB", url: "/resources/eee201/problems.pdf" }
    ],
    schedule: [
      { time: "08:00", event: "Theory Class" },
      { time: "09:30", event: "Lab Work" },
      { time: "10:30", event: "Class Ends" }
    ]
  },
  {
    courseTitle: "Statistics II",
    unit: "2 Units",
    courseCode: "STA201",
    instructor: "Prof. Alan Martinez",
    venue: "Statistics Lab",
    description: "Advanced statistical methods, probability theory, and data analysis techniques.",
    projectDeadline: "January 8th",
    resources: [
      { fileName: "Statistical Software", format: "exe", fileSize: "28MB", url: "/resources/sta207/statpack.exe" },
      { fileName: "Case Studies", format: "pdf", fileSize: "5.6MB", url: "/resources/sta207/cases.pdf" },
      { fileName: "Data Sets", format: "xlsx", fileSize: "2.4MB", url: "/resources/sta207/datasets.xlsx" }
    ],
    schedule: [
      { time: "15:00", event: "Lecture" },
      { time: "16:30", event: "Data Analysis Lab" },
      { time: "18:00", event: "Class Ends" }
    ]
  },
  {
    courseTitle: "Mathematics II",
    unit: "2 Units",
    courseCode: "MTH203",
    instructor: "Dr. Rachel Adams",
    venue: "Mathematics Department",
    description: "Intermediate mathematics concepts including multivariable calculus and differential equations.",
    projectDeadline: "December 18th",
    resources: [
      { fileName: "Math Software", format: "exe", fileSize: "1.8MB", url: "/resources/mth203/mathtools.exe" },
      { fileName: "Problem Sets", format: "pdf", fileSize: "4.2MB", url: "/resources/mth203/problems.pdf" },
      { fileName: "Formula Guide", format: "pdf", fileSize: "3.5MB", url: "/resources/mth203/formulas.pdf" }
    ],
    schedule: [
      { time: "12:00", event: "Lecture" },
      { time: "13:30", event: "Tutorial" },
      { time: "14:30", event: "Class Ends" }
    ]
  },
  {
    courseTitle: "Electronic Circuits",
    unit: "2 Units",
    courseCode: "EEE305",
    instructor: "Dr. Thomas Wright",
    venue: "Electronics Lab",
    description: "Analysis and design of electronic circuits, including analog and digital systems.",
    projectDeadline: "January 15th",
    resources: [
      { fileName: "Circuit Design Software", format: "exe", fileSize: "56MB", url: "/resources/eee305/designer.exe" },
      { fileName: "Component Guide", format: "pdf", fileSize: "18MB", url: "/resources/eee305/components.pdf" },
      { fileName: "Lab Manual", format: "pdf", fileSize: "4.8MB", url: "/resources/eee305/manual.pdf" }
    ],
    schedule: [
      { time: "10:00", event: "Theory Class" },
      { time: "11:30", event: "Circuit Lab" },
      { time: "13:00", event: "Class Ends" }
    ]
  }
];