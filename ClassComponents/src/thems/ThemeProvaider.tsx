import { ReactNode, useContext, useState } from 'react';
import { themeType, ThemeContext } from './ThemeContex';

export const Theme = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<themeType>('light');

    return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
