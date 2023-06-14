import { StarIcon } from "@heroicons/react/24/solid";

type RepositoryItemProps = {
  name: string;
  star: number;
  description: string;
};

const RepositoryItem = ({ name, description, star }: RepositoryItemProps) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-5">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-bold">{name}</h2>
        <div className="flex items-center">
          <p className="mr-1">{star}</p>
          <StarIcon className="h-5 w-5 text-black" />
        </div>
      </div>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default RepositoryItem;
