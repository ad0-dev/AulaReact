import Exercicio4 from "./Exercicio4"
export default function App()
{
  return(
    <div>
      <h1>Chamadas para o Exercício 4</h1>
      <Exercicio4 temperatura={10} />
      <Exercicio4 temperatura={30} />
      <Exercicio4 temperatura={4} />
    </div>
  );
}