import ThemeIcon from './ThemeIcon';

const Header = () => {
  return (
    <header className="px-4 py-7 shadow-md mb-6 text-gray-950 dark:bg-gray-900 dark:text-white">
      <div className="flex justify-between items-center">
        <span className="font-extrabold text-base">Where in the world?</span>
        <ThemeIcon />
      </div>
    </header>
  );
};

export default Header;
