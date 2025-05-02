import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { InputTooltip } from './InputTooltip';

// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <MantineProvider>
      <InputTooltip></InputTooltip>
    </MantineProvider>
  );
}
