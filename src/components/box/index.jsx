import { useContext } from "react";
import { MyContext } from "../../context/my-context";
export default function Box() {
  const { nome, disciplina } = useContext(MyContext);
  return (
    <div style={{ background: "#999" }}>
      <h1>BOX</h1>
      <h2>Nome: {nome}</h2>
      <h2>Disciplina: {disciplina}</h2>
    </div>
  );
}
