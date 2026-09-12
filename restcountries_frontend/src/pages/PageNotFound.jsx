import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <main className="mt-60  text-center dark:text-white">
      <div>
        <h1 className="text-8xl font-extrabold text-gray-950 dark:text-inherit">
          404
        </h1>
        <p className="text-4xl font-medium text-gray-800 dark:text-inherit">
          Page not found
        </p>
        <p className="text-xl text-gray-800 mt-4 dark:text-inherit">
          The requested resource was not found
        </p>
      </div>
      <div className="mt-6">
        <Link
          className="shadow-md px-2 py-1 rounded-md dark:bg-gray-900"
          to={'/'}
        >
          Return Home
        </Link>
      </div>
    </main>
  );
};

export default PageNotFound;
