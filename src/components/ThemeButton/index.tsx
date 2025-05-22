'use client';

import { useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from 'lucide-react';
import clsx from 'clsx';

type AvailableThemes = 'dark' | 'light';

export function ThemeButton() {
  const [theme, setTheme] = useState<AvailableThemes>('dark');

  // Lê o localStorage no client
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as AvailableThemes;
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  const style = clsx(
    'flex',
    'rounded-md',
    'border',
    'border-transparent',
    'text-center',
    'justify-center',
    'items-center',
    'min-w-5',
    'max-w-8',
    'dark:bg-blue-300',
    'bg-blue-900',
    'p-1',
  );

  const nextThemeIcon = {
    light: <MoonIcon />,
    dark: <SunIcon />,
  };

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();

    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  }

  useEffect(() => {
    // Setting the theme changing <html> className attribut for the prefered theme
    document.documentElement.setAttribute('class', theme);
    // Saving users preferences of theme on localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className={style}>
      <a
        href='#'
        aria-label='Modificar Tema'
        title='Modificar Tema'
        onClick={handleThemeChange}
      >
        {nextThemeIcon[theme]}
      </a>
    </div>
  );
}
