import React from 'react';

interface RecentSearchesProps {
  searches: string[];
  onSearchItemClick: (location: string) => void;
  onClear: () => void;
}

const RecentSearches: React.FC<RecentSearchesProps> = ({
  searches,
  onSearchItemClick,
  onClear,
}) => {
  return (
    <div className="mt-4">
      <h3 className="text-xl font-bold mb-2">Recent Searches</h3>
      <ul>
        {searches.map((location, index) => (
          <li
            key={index}
            className="cursor-pointer text-blue-500 hover:text-blue-700"
            onClick={() => onSearchItemClick(location)}
          >
            {location}
          </li>
        ))}
      </ul>
      {searches.length > 0 && (
        <button
          className="mt-2 text-sm text-red-500 hover:text-red-700"
          onClick={onClear}
        >
          Clear Searches
        </button>
      )}
    </div>
  );
};

export default RecentSearches;
