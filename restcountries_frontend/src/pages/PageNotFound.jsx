const PageNotFound = () => {
  return (
    <div className="my-50 text-center dark:text-white">
      <h1 className="my-auto text-8xl font-extrabold text-black-500 dark:text-inherit">
        404
      </h1>
      <p className="text-4xl font-medium text-gray-800 dark:text-inherit">
        Page not found
      </p>
      <p className="text-xl text-gray-800 mt-4 dark:text-inherit">
        The requested resource was not found
      </p>
    </div>
  );
};

export default PageNotFound;
