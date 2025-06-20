import { Input } from "@/components/ui/input";

export function CompanySearch({
  value,
  onChange,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="w-full max-w-xl mb-4">
      <Input
        type="text"
        id="search"
        placeholder="Search by company or position..."
        value={value}
        onChange={onChange}
        className="bg-[#f2f7f5] border border-black text-black font-mono rounded shadow-[4px_4px_0px_#222222] placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
      />
    </div>
  );
}
