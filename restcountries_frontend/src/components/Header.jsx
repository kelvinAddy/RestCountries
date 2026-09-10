import ThemeIcon from './ThemeIcon';

const Header = () => {
  return (
    <header className="px-4 py-7 shadow-md mb-6 text-gray-950 dark:bg-gray-900 dark:text-white">
      <div className="flex justify-between items-center">
        <h1 className="font-extrabold text-4">Where in the world?</h1>
        <ThemeIcon />
      </div>
    </header>
  );
};

export default Header;
