import { myra } from '@myraui/react';
import React from 'react';
import { useTheme } from 'next-themes';

export const Testing: React.FC<TestingProps> = (props) => {
  const { theme, setTheme } = useTheme();

  console.log(myra, '--------------------------------');

  return (
    <myra.div className="h-screen flex flex-col p-2">
      {theme && (
        <div className="h-12 text-white bg-black items-center justify-center flex">
          <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>{theme[0].toUpperCase() + theme.slice(1)}</button>
        </div>
      )}
      <div className="p-4">
        <myra.button>Hello World</myra.button>

        <p className="text-foreground">What is going on?</p>
      </div>
    </myra.div>
  );
};

interface TestingProps {
  colorScheme: string;
}
