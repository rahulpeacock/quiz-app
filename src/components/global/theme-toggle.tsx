'use client';

import { useTheme } from '@/client/providers/theme-provider';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { Laptop } from 'lucide-react';

const THEME_OPTIONS = [
  {
    id: 1,
    label: 'light',
    value: 'light',
    icon: SunIcon,
  },
  {
    id: 2,
    label: 'dark',
    value: 'dark',
    icon: MoonIcon,
  },
  {
    id: 3,
    label: 'system',
    value: 'system',
    icon: Laptop,
  },
] as const;

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' size='icon' className='w-10 h-10'>
          <SunIcon className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
          <MoonIcon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
          <span className='sr-only'>Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='min-w-[10rem] font-medium' align='end' sideOffset={8}>
        {THEME_OPTIONS.map((val) => (
          <DropdownMenuItem
            key={val.id}
            className={cn(
              'capitalize py-2 px-3 text-xs text-muted-foreground focus:text-muted-foreground',
              `${theme === val.value && 'text-foreground focus:text-foreground'}`,
            )}
            onClick={() => setTheme(val.value)}
          >
            {<val.icon size={16} className='mr-4' />}
            {val.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
