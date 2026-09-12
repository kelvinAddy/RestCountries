const CountryDetailsPageSkeleton = () => {
  return (
    <main className="flex flex-col justify-center items-center dark:text-white">
      <div className="w-12/13 h-12/13 animate-pulse">
        <div className="h-10 w-28 rounded-md bg-gray-200 dark:bg-gray-800 mb-12" />

        <div className="flex flex-col gap-y-10 lg:flex-row lg:gap-x-16 lg:items-center">
          <div className="w-full h-56 sm:h-72 lg:w-2/5 lg:h-80 rounded-sm bg-gray-200 dark:bg-gray-800" />

          <div className="flex-1">
            <div className="h-7 w-40 bg-gray-200 dark:bg-gray-800 rounded mb-6" />

            <div className="flex flex-col gap-y-8 sm:flex-row sm:gap-x-16">
              <div className="flex flex-col gap-y-4 w-full sm:w-1/2">
                <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-800 rounded" />
                <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-800 rounded" />
                <div className="h-4 w-1/2 bg-gray-200 dark:bg-gray-800 rounded" />
                <div className="h-4 w-3/5 bg-gray-200 dark:bg-gray-800 rounded" />
                <div className="h-4 w-1/2 bg-gray-200 dark:bg-gray-800 rounded" />
              </div>
              <div className="flex flex-col gap-y-4 w-full sm:w-1/2">
                <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-800 rounded" />
                <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-800 rounded" />
                <div className="h-4 w-1/2 bg-gray-200 dark:bg-gray-800 rounded" />
              </div>
            </div>

            <div className="mt-10">
              <div className="h-4 w-32 bg-gray-200 dark:bg-gray-800 rounded mb-4" />
              <div className="flex flex-wrap gap-2">
                <div className="h-7 w-24 bg-gray-200 dark:bg-gray-800 rounded" />
                <div className="h-7 w-20 bg-gray-200 dark:bg-gray-800 rounded" />
                <div className="h-7 w-28 bg-gray-200 dark:bg-gray-800 rounded" />
                <div className="h-7 w-32 bg-gray-200 dark:bg-gray-800 rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CountryDetailsPageSkeleton;
