const SeverError = ({ errorMessage }) => {
  return (
    <main className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl lg:text-7xl font-extrabold text-red-500">
        {errorMessage?.status ?? 'Unknown Error Encountered'}
      </h1>
      <p className="text-base md:text-4xl font-medium text-gray-800">
        {errorMessage?.statusText ??
          'We could not fetch the data from the server'}
      </p>
      <p className="text-base lg:text-xl text-gray-800 mt-4">
        {errorMessage?.data?.error ?? 'Error'}
      </p>
      <p className="text-base lg:text-xl text-gray-800 mt-4">
        Please refresh the page later
      </p>
    </main>
  );
};

export default SeverError;
