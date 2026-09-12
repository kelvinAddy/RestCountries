const EmptySearch = ({ setRegionName, setQuery }) => {
  const resetSearch = () => {
    setRegionName(null);
    setQuery('');
  };
  return (
    <div className="dark:text-white text-lg text-center my-20">
      <p>
        No country matches the query entered
        <button
          className="dark:bg-gray-900 rounded-sm text-base shadow-sm font-light px-2 ml-3.5 cursor-pointer"
          onClick={resetSearch}
        >
          Reset
        </button>
      </p>
    </div>
  );
};

export default EmptySearch;
