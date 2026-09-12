const CountryCardSkeleton = () => {
  return (
    <div className="animate-pulse rounded-md shadow-md w-80 h-96 dark:bg-gray-900 flex flex-col space-y-5">
      <div className=" w-full h-3/5 rounded-t-md bg-gray-200 dark:bg-gray-800"></div>
      <div className="flex flex-col space-y-5 px-5 ">
        <h2 className="h-4 w-6/12 rounded bg-gray-200 dark:bg-gray-800"></h2>
        <div className="flex flex-col space-y-3">
          <p className="h-4 w-6/12 rounded bg-gray-200 dark:bg-gray-800"></p>
          <p className="h-4 w-6/12 rounded bg-gray-200 dark:bg-gray-800"></p>
          <p className="h-4 w-6/12 rounded bg-gray-200 dark:bg-gray-800"></p>
        </div>
      </div>
    </div>
  );
};

export default CountryCardSkeleton;
