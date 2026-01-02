<<<<<<< HEAD
import { createContext, useContext, useEffect, useState } from 'react';
=======
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
>>>>>>> 713e091 (Initial project upload)

type Theme = 'dark' | 'light' | 'system';

type ThemeProviderProps = {
<<<<<<< HEAD
  children: React.ReactNode;
=======
  children: ReactNode;
>>>>>>> 713e091 (Initial project upload)
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: 'light' | 'dark';
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: 'light',
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
<<<<<<< HEAD
  defaultTheme = 'system',
  storageKey = 'vite-ui-theme',
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');
=======
  defaultTheme = 'light',
  storageKey = 'vite-ui-theme',
  ...props
}: ThemeProviderProps) {
  // Initialize theme state - handle SSR safely
  const getInitialTheme = (): Theme => {
    if (typeof window === 'undefined' || !window.localStorage) {
      return defaultTheme;
    }
    const stored = localStorage.getItem(storageKey);
    return (stored as Theme) || defaultTheme;
  };

  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>(() => {
    const initialTheme = getInitialTheme();
    if (initialTheme === 'system') {
      if (typeof window !== 'undefined') {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }
      return 'light';
    }
    return initialTheme;
  });
>>>>>>> 713e091 (Initial project upload)

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove('light', 'dark');

    let currentTheme: 'light' | 'dark';
    
    if (theme === 'system') {
      currentTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light';
    } else {
      currentTheme = theme;
    }

    root.classList.add(currentTheme);
    setResolvedTheme(currentTheme);
  }, [theme]);

  const value = {
    theme: resolvedTheme,
    setTheme: (newTheme: Theme) => {
      localStorage.setItem(storageKey, newTheme);
      setTheme(newTheme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider');

  return context;
};

