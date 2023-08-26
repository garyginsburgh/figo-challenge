type Props = {
  page: number;
  setPage: (page: number) => void;
  numberOfUsers: number;
};

const PaginationButtons = ({ page, setPage, numberOfUsers }: Props) => {
  const numberOfPages = Math.round(numberOfUsers / 10);

  const handleClick = (number: number) => {
    setPage(number);
  };
  const handleIncrement = () => {
    if (page === numberOfPages) return;
    setPage(page + 1);
  };
  const handleDecrement = () => {
    if (page === 1) return;
    setPage(page - 1);
  };
  return (
    <>
      <nav aria-label="Page navigation example" className="mb-4 ml-4 mt-2">
        <ul className="inline-flex h-10 -space-x-px text-base">
          <li>
            <button
              type="button"
              onClick={handleDecrement}
              className="ml-0 flex h-10 items-center justify-center rounded-l-lg border border-gray-300 bg-white px-4 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Previous
            </button>
          </li>
          {Array.from({ length: numberOfPages }, (_, index) => (
            <li key={index}>
              <button
                type="button"
                onClick={() => handleClick(index + 1)}
                className={`flex h-10 items-center justify-center border bg-white px-4 leading-tight text-gray-500 ${
                  page === index + 1
                    ? "border-blue-600 bg-blue-50 text-blue-600 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
                    : "border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                }`}
              >
                {index + 1}
              </button>
            </li>
          ))}
          <li>
            <button
              type="button"
              onClick={handleIncrement}
              className="flex h-10 items-center justify-center rounded-r-lg border border-gray-300 bg-white px-4 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default PaginationButtons;
