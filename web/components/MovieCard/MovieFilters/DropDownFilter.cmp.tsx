import React, { useState } from 'react';
import { SingleFilterGroupsProps } from './filters.interface';
import { IoClose } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';
import { FaChevronDown } from 'react-icons/fa6';
import { FaChevronUp } from 'react-icons/fa6';

const DropDownFilter = ({
  id,
  options,
  toggleItem,
  selected,
}: SingleFilterGroupsProps) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleItem = (value: string) => {
    toggleItem(id, value);
  };

  const handleClearAll = () => {
    selected?.forEach(item => toggleItem(id, item));
  };

  return (
    <div className="relative w-full">
      {/* Dropdown Trigger */}
      <button
        className="w-full min-w-20 border-white transition-colors text-white flex justify-between items-center px-3 py-1 rounded-full border"
        onClick={() => setIsOpen(!isOpen)}
      >
        {t(`common.all`)}
        <span>
          {isOpen ? <FaChevronUp size={10} /> : <FaChevronDown size={10} />}
        </span>
      </button>

      {/* Dropdown Content */}
      {isOpen && (
        <div className="absolute z-50 mt-2 bg-black text-white rounded-lg shadow-lg w-full min-w-36 p-4">
          {/* Header */}
          <div className="flex justify-between items-center mb-2">
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-400"
            >
              <IoClose size={20} />
            </button>
            {selected.length > 0 && (
              <button
                onClick={handleClearAll}
                className="text-sm text-red-500 hover:underline"
              >
                Clear All
              </button>
            )}
          </div>

          {/* Options List */}
          <div className="max-h-40 overflow-y-auto space-y-1">
            {options.map(option => (
              <div
                key={`${id}-${option._id}`}
                className="flex items-center gap-2 px-2 py-1 hover:bg-gray-700 rounded"
              >
                <input
                  type="checkbox"
                  checked={selected.includes(option._id)}
                  onChange={() => handleToggleItem(option._id)}
                  className="cursor-pointer"
                />
                <span className="text-sm">{option.title}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDownFilter;
