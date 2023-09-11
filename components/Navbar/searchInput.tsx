import { Command, CommandInput } from "@/components/ui/command";

const SearchInput = () => {
  return (
    <div>
      <Command className="max-md:hidden bg-transparent border-2 w-[300px] min-[900px]:w-[500px]">
        <CommandInput
          className="border-none text-white"
          placeholder="What do you want to watch?"
        />
      </Command>
    </div>
  );
};

export default SearchInput;
