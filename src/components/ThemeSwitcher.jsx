import { useState, useEffect } from 'react';

const ThemeSwitcher = () => {
    const [isDark, setIsDark] = useState(() => {
        return localStorage.theme === 'dark' ? true : false;
    });

    useEffect(() => {
        const root = window.document.documentElement;
        if (isDark) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }, [isDark]);

    const handleThemeSwitch = () => {
        setIsDark((prev) => !prev);
    };

    return (
        <div
            className={`flex justify-center items-center theme-switcher ${
                isDark ? `theme-switcher--dark` : 'theme-switcher--light'
            }`}
            onClick={() => handleThemeSwitch()}></div>
    );
};

export default ThemeSwitcher;
