import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-end mt-8">
      <nav className="inline-flex space-x-2">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-3 py-1 rounded-md border ${
              page === currentPage
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
            }`}
          >
            {page}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Pagination;
