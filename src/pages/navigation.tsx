import { useState } from "react";

// Define the type for a single menu item
interface MenuItem {
  label: string;
  href: string;
}

// Define the props for the DropdownMenu component
interface DropdownMenuProps {
  menuItems: MenuItem[];
  buttonText: string;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ menuItems, buttonText }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative inline-block mx-2 text-left">
      <button
        type="button"
        onClick={toggleDropdown}
        className="btn btn-primary px-2 py-1 rounded text-sm d-flex items-center space-x-2 focus:outline-none"
      >
        <span>{buttonText}</span>
        <svg
          className="w-4 h-4 mx-2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
          <div className="py-1">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;