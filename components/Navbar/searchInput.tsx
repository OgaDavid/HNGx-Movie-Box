import { Command, CommandInput } from "@/components/ui/command";

const SearchInput = () => {
  return (
    <div>
      <Command className="bg-transparent border w-[300px] min-[900px]:w-[500px]">
        <CommandInput
          className="border-none"
          placeholder="What do you want to watch?"
        />
      </Command>
    </div>
  );
};

export default SearchInput;
