import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { FiSearch } from "react-icons/fi";

export const SearchBar = () => {
  // const { register, handleSubmit } = useForm();

  const onSubmitSearch = (data: { stringToSearch?: string }) => {
    const { stringToSearch } = data;
   
  };
  return (
    <form className="relative flex" 
    // onSubmit={handleSubmit(onSubmitSearch)}
    >
      <FiSearch className=" absolute text-muted-foreground left-2  top-3" />
      <Input
        type="search"
        size={1}
        placeholder="Rechercher ..."
        className="flex-1 pl-8 pr-3 border-none focus:border-solid bg-muted"
        // {...register("stringToSearch", {
        //   required: true,
        // })}
      />
      {/* <Button
        type="submit"
        className={cn(" absolute right-0 rounded-l-none ")}
        variant="outline"
      >
        Rechercher
      </Button> */}
    </form>
  );
};



