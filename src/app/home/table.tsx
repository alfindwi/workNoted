import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import { PaginationComponent } from "./pagination";
import { CompanySearch } from "./search";
import { Pencil, Trash2, View } from "lucide-react";
import { ModalViewCompany } from "./modalViewCompany";
import { Button } from "@/components/ui/button";
import { ModalEditCompany } from "./modalEditCompany";
import { ModalInputCompany } from "./modalInputCompany";

export function TableExample() {
  const companies = [
    {
      id: 1,
      userId: 1,
      companyName: "OpenAI",
      position: "Frontend Engineer",
      applicationDate: "2025-06-01",
      applicationMethod: "LinkedIn",
      status: "Applied",
      user: { id: 1, name: "Alice", email: "alice@example.com", role: "Admin" },
    },
    {
      id: 2,
      userId: 2,
      companyName: "TechNova",
      position: "Backend Developer",
      applicationDate: "2025-06-03",
      applicationMethod: "Company Website",
      status: "Interview",
      user: { id: 2, name: "Bob", email: "bob@example.com", role: "User" },
    },
    {
      id: 3,
      userId: 3,
      companyName: "Microsoft",
      position: "UI/UX Designer",
      applicationDate: "2025-06-05",
      applicationMethod: "Job Fair",
      status: "Rejected",
      user: {
        id: 3,
        name: "Charlie",
        email: "charlie@example.com",
        role: "Moderator",
      },
    },
    {
      id: 4,
      userId: 4,
      companyName: "Google",
      position: "Software Engineer",
      applicationDate: "2025-06-06",
      applicationMethod: "Referral",
      status: "Applied",
      user: { id: 4, name: "Diana", email: "diana@example.com", role: "User" },
    },
    {
      id: 5,
      userId: 5,
      companyName: "Amazon",
      position: "DevOps Engineer",
      applicationDate: "2025-06-07",
      applicationMethod: "LinkedIn",
      status: "Interview",
      user: { id: 5, name: "Ethan", email: "ethan@example.com", role: "Admin" },
    },
    {
      id: 6,
      userId: 6,
      companyName: "Meta",
      position: "Product Manager",
      applicationDate: "2025-06-08",
      applicationMethod: "Company Website",
      status: "Applied",
      user: { id: 6, name: "Fiona", email: "fiona@example.com", role: "User" },
    },
    {
      id: 7,
      userId: 7,
      companyName: "Tesla",
      position: "QA Engineer",
      applicationDate: "2025-06-09",
      applicationMethod: "Job Fair",
      status: "Rejected",
      user: {
        id: 7,
        name: "George",
        email: "george@example.com",
        role: "Moderator",
      },
    },
    {
      id: 8,
      userId: 8,
      companyName: "Netflix",
      position: "Data Scientist",
      applicationDate: "2025-06-10",
      applicationMethod: "Referral",
      status: "Interview",
      user: {
        id: 8,
        name: "Hannah",
        email: "hannah@example.com",
        role: "User",
      },
    },
    {
      id: 9,
      userId: 9,
      companyName: "Apple",
      position: "Security Analyst",
      applicationDate: "2025-06-11",
      applicationMethod: "LinkedIn",
      status: "Applied",
      user: { id: 9, name: "Ian", email: "ian@example.com", role: "User" },
    },
    {
      id: 10,
      userId: 10,
      companyName: "Airbnb",
      position: "Mobile Developer",
      applicationDate: "2025-06-12",
      applicationMethod: "Company Website",
      status: "Interview",
      user: {
        id: 10,
        name: "Julia",
        email: "julia@example.com",
        role: "Admin",
      },
    },
    {
      id: 11,
      userId: 11,
      companyName: "Spotify",
      position: "Sound Engineer",
      applicationDate: "2025-06-13",
      applicationMethod: "LinkedIn",
      status: "Applied",
      user: { id: 11, name: "Kevin", email: "kevin@example.com", role: "User" },
    },
    {
      id: 12,
      userId: 12,
      companyName: "Slack",
      position: "Support Engineer",
      applicationDate: "2025-06-14",
      applicationMethod: "Job Fair",
      status: "Interview",
      user: {
        id: 12,
        name: "Lana",
        email: "lana@example.com",
        role: "Moderator",
      },
    },
    {
      id: 13,
      userId: 13,
      companyName: "Zoom",
      position: "System Analyst",
      applicationDate: "2025-06-15",
      applicationMethod: "Referral",
      status: "Rejected",
      user: { id: 13, name: "Mike", email: "mike@example.com", role: "User" },
    },
    {
      id: 14,
      userId: 14,
      companyName: "Adobe",
      position: "Graphic Designer",
      applicationDate: "2025-06-16",
      applicationMethod: "Company Website",
      status: "Interview",
      user: { id: 14, name: "Nina", email: "nina@example.com", role: "Admin" },
    },
    {
      id: 15,
      userId: 15,
      companyName: "IBM",
      position: "Cloud Engineer",
      applicationDate: "2025-06-17",
      applicationMethod: "LinkedIn",
      status: "Applied",
      user: { id: 15, name: "Oscar", email: "oscar@example.com", role: "User" },
    },
    {
      id: 16,
      userId: 16,
      companyName: "Oracle",
      position: "Database Admin",
      applicationDate: "2025-06-18",
      applicationMethod: "Job Fair",
      status: "Rejected",
      user: {
        id: 16,
        name: "Pam",
        email: "pam@example.com",
        role: "Moderator",
      },
    },
    {
      id: 17,
      userId: 17,
      companyName: "Intel",
      position: "Hardware Engineer",
      applicationDate: "2025-06-19",
      applicationMethod: "Company Website",
      status: "Interview",
      user: { id: 17, name: "Quinn", email: "quinn@example.com", role: "User" },
    },
    {
      id: 18,
      userId: 18,
      companyName: "Samsung",
      position: "Embedded Engineer",
      applicationDate: "2025-06-20",
      applicationMethod: "Referral",
      status: "Applied",
      user: { id: 18, name: "Rick", email: "rick@example.com", role: "User" },
    },
    {
      id: 19,
      userId: 19,
      companyName: "LG",
      position: "Mechanical Engineer",
      applicationDate: "2025-06-21",
      applicationMethod: "LinkedIn",
      status: "Interview",
      user: { id: 19, name: "Sara", email: "sara@example.com", role: "Admin" },
    },
    {
      id: 20,
      userId: 20,
      companyName: "Nvidia",
      position: "AI Researcher",
      applicationDate: "2025-06-22",
      applicationMethod: "Company Website",
      status: "Applied",
      user: { id: 20, name: "Tom", email: "tom@example.com", role: "User" },
    },
  ];

  const [companiesData, setCompaniesData] = useState(companies);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleStatusChange = (id: number, newStatus: string) => {
    setCompaniesData((prev) =>
      prev.map((company) =>
        company.id === id ? { ...company, status: newStatus } : company
      )
    );
  };

  const filteredCompanies = companiesData.filter((company) =>
    `${company.companyName} ${company.position} ${company.applicationMethod} ${company.status}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredCompanies.length / itemsPerPage);

  const currentCompanies = filteredCompanies.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
        <CompanySearch
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <ModalInputCompany
          trigger={
            <Button variant="blue" className="md:w-auto">
              Create
            </Button>
          }
        />
      </div>

      <div className="rounded-lg shadow-[8px_8px_0px_#222222] border border-black overflow-x-auto">
        <Table className="bg-[#f2f7f5] text-black font-mono w-full min-w-[600px]">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px] hidden md:table-cell">#</TableHead>
              <TableHead>Company</TableHead>
              <TableHead>Position</TableHead>
              <TableHead className="hidden md:table-cell">Applied At</TableHead>
              <TableHead className="hidden md:table-cell">Method</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {currentCompanies.map((company) => (
              <TableRow key={company.id}>
                <TableCell className="hidden md:table-cell">
                  {company.id}
                </TableCell>
                <TableCell className="max-w-[100px] overflow-hidden text-ellipsis whitespace-nowrap">
                  {company.companyName}
                </TableCell>
                <TableCell className="max-w-[100px] overflow-hidden text-ellipsis whitespace-nowrap">
                  {company.position}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {company.applicationDate}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {company.applicationMethod}
                </TableCell>
                <TableCell>
                  <select
                    value={company.status}
                    onChange={(e) =>
                      handleStatusChange(company.id, e.target.value)
                    }
                    className="bg-[#f2f7f5] border border-black rounded shadow-[3px_3px_0px_#343131] px-2 py-1 text-sm"
                  >
                    <option value="Applied">Applied</option>
                    <option value="Interview">Interview</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                </TableCell>
                <TableCell className="flex gap-2">
                  <ModalViewCompany
                    company={company}
                    trigger={
                      <button className="bg-[#f2f7f5] border cursor-pointer border-black rounded shadow-[3px_3px_0px_#343131] px-2 py-1 text-sm">
                        <View className="w-4 h-4" />
                      </button>
                    }
                  />
                  <ModalEditCompany
                    company={company}
                    trigger={
                      <button className="bg-[#f2f7f5] cursor-pointer border border-black rounded shadow-[3px_3px_0px_#343131] px-2 py-1 text-sm">
                        <Pencil className="w-4 h-4" />
                      </button>
                    }
                  />
                  <button className="bg-[#f2f7f5] cursor-pointer border border-black rounded shadow-[3px_3px_0px_#343131] px-2 py-1 text-sm">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <PaginationComponent
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  );
}
