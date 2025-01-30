interface DocumentItem {
  id: number;
  name: string;
  category: string;
  deadline: string;
  status: "approved" | "pending" | "complete" | "incomplete";
}

const initialDocuments: DocumentItem[] = [
  {
    id: 1,
    name: "Course Registration Form",
    category: "Academics",
    deadline: "2024-11-20",
    status: "approved",
  },
  {
    id: 2,
    name: "Tuition Fee Receipt",
    category: "Finance",
    deadline: "2024-12-01",
    status: "pending",
  },
  {
    id: 3,
    name: "Hostel Allocation Letter",
    category: "Accommodation",
    deadline: "2024-11-25",
    status: "complete",
  },
  {
    id: 4,
    name: "Medical Clearance Form",
    category: "Health",
    deadline: "2024-11-18",
    status: "incomplete",
  },
  {
    id: 5,
    name: "Library Clearance",
    category: "Library",
    deadline: "2024-11-22",
    status: "approved",
  },
  {
    id: 6,
    name: "Examination Permit",
    category: "Academics",
    deadline: "2024-11-30",
    status: "pending",
  },
  {
    id: 7,
    name: "Identity Card Request",
    category: "Administration",
    deadline: "2024-11-15",
    status: "complete",
  },
];

export default initialDocuments;