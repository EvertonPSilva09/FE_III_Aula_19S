import { useState } from "react";
import Box from "./components/box";
import Container from "./components/container/container";
import MyProvider from "./context/my-context";

function App() {
  const [value, setValue] = useState(100);
  return (
    <MyProvider>
      <main>
        <h1>Hello Mundo</h1>
        <Box />
        <Container />
      </main>
    </MyProvider>
  );
}

export default App;
