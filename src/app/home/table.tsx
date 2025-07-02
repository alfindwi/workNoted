import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useAppDispatch, useAppSelector } from "@/store";
import { getCompany } from "@/store/company/async";
import { Pencil, Trash, View } from "lucide-react";
import { useEffect, useState } from "react";
import { ModalDeleteCompany } from "./modalDeleteCompany";
import { ModalEditCompany } from "./modalEditCompany";
import { ModalInputCompany } from "./modalInputCompany";
import { ModalViewCompany } from "./modalViewCompany";
import { PaginationComponent } from "./pagination";
import { CompanySearch } from "./search";

export function TableComponent() {
  const dispatch = useAppDispatch();
  const companies = useAppSelector((state) => state.company.companies);

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredCompanies = companies.filter((company) =>
    `${company.companyName} ${company.position} ${company.applicationMethod} ${company.status} ${company.applicationDate}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredCompanies.length / itemsPerPage);

  const currentCompanies = filteredCompanies.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    dispatch(getCompany());
  }, [dispatch]);

  return (
    <div className="w-full mt-10 max-w-6xl mx-auto px-4 py-3 ">
      <div className="flex  mt-5 flex-col-reverse md:flex-row items-start md:items-center justify-between gap-4 mb-4">
        <CompanySearch
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="w-full flex justify-end md:w-auto">
          <ModalInputCompany
            trigger={
              <Button
                variant="blue"
                className="w-24 md:w-25 text-sm py-2 px-4 mb-4 shadow-[6px_6px_0px_#222222] active:shadow-[4px_4px_0px_#222222] transition-all duration-150"
              >
                Create
              </Button>
            }
          />
        </div>
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
            {currentCompanies.map((company, index) => (
              <TableRow key={company.id}>
                <TableCell className="hidden md:table-cell">
                  {index + 1}
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
                <TableCell>{company.status}</TableCell>
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
                  <ModalDeleteCompany
                    company={company}
                    trigger={
                      <button className="bg-[#f2f7f5] cursor-pointer border border-black rounded shadow-[3px_3px_0px_#343131] px-2 py-1 text-sm">
                        <Trash className="w-4 h-4" />
                      </button>
                    }
                  />
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
