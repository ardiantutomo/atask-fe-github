import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { ReactNode, useState } from "react";
type AccordionProps = {
  title: string;
  children: ReactNode;
};
const Accordion = ({ title, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border rounded-md mb-5">
      <div
        className="flex justify-between items-center p-4 cursor-pointer select-none"
        onClick={handleClick}
      >
        <h2 className="text-lg font-medium">{title}</h2>
        {isOpen ? (
          <ChevronUpIcon className="h-5 w-5 text-black" />
        ) : (
          <ChevronDownIcon className="h-5 w-5 text-black" />
        )}
      </div>
      {isOpen && <div className="p-4">{children}</div>}
    </div>
  );
};

export default Accordion;
