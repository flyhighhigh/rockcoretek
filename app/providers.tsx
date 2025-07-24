import { ThemeProvider } from "next-themes";
import { StaticThemeProvider } from "../context/theme-provider";
import { TooltipProvider } from "../common/tooltip";
import { StaticTheme, defaultTheme } from "../lib/data/static-content";

export function Providers({ children, theme = defaultTheme }: { children: React.ReactNode; theme?: StaticTheme }) {
  return (
    <ThemeProvider enableSystem attribute="class" defaultTheme="system">
      <StaticThemeProvider theme={theme} />
      <TooltipProvider>{children}</TooltipProvider>
    </ThemeProvider>
  );
}
