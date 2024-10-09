import { Topbar } from './components/Topbar/Topbar.tsx'
import { ImmoCards } from './components/ImmoCards/ImmoCards.tsx';
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';

function App() {

  return <MantineProvider>{
    <>
      <div>
        <Topbar />
      </div>
      <div>
        <ImmoCards />
      </div>
    </>
    }</MantineProvider>;
}

export default App
