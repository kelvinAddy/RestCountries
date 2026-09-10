const EmptySearch = ({ setRegionName, setQuery }) => {
  const resetSearch = () => {
    setRegionName(null);
    setQuery('');
  };
  return (
    <div className="dark:text-white text-xl text-center my-20">
      <p>
        No country matches the query entered
        <button
          className="dark:bg-gray-900 rounded-sm text-md shadow-sm font-light px-2 ml-3.5"
          onClick={resetSearch}
        >
          Reset
        </button>
      </p>
    </div>
  );
};

export default EmptySearch;
