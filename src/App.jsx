import { useState } from "react";
import Box from "./components/box";
import Container from "./components/container/container";

function App() {
  const [value, setValue] = useState(100);
  return (
    <main>
      <h1>Hello Mundo</h1>
      <Box />
      <Container />
    </main>
  );
}

export default App;
