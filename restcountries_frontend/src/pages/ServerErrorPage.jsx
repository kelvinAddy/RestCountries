const SeverError = ({ errorMessage }) => {
  return (
    <main className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-8xl font-extrabold text-red-500">
        {errorMessage?.status}
      </h1>
      <p className="text-4xl font-medium text-gray-800">
        {errorMessage.statusText}
      </p>
      <p className="text-xl text-gray-800 mt-4">{errorMessage?.data?.error}</p>
      <p className="text-xl text-gray-800 mt-4">
        Please refresh the page later
      </p>
    </main>
  );
};

export default SeverError;
