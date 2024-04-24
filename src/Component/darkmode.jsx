import { useState } from 'react';

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (!darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    return (<>
        <div className="relative inline-block w-10 h-6 bg-gray-300 dark:bg-gray-700 rounded-full py-1 cursor-pointer" onClick={toggleDarkMode}>
            <div className={`absolute left-0 w-4 h-4 bg-white dark:bg-gray-900 rounded-full transition-transform duration-300 ${darkMode ? 'transform translate-x-full' : ''}`}></div>
        </div>
        <div className= " text-center">
            <p style={{ fontSize:'8px'}}>Dark mode</p>
        </div>
        </>
    );
};

export default DarkModeToggle;
