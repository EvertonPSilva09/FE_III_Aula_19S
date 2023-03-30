import { useContext } from "react";
import { MyContext } from "../../context/my-context";

export default function Container() {
  const {nome, disciplina } = useContext(MyContext)
  return (
    <div style={{ background: "#773412" }}>
      <h1>CONTAINER</h1>
      <h2>Nome: {nome}</h2>
      <h2>Disciplina: {disciplina}</h2>
    </div>
  );
}
