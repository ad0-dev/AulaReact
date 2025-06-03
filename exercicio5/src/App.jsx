import Exercicio5 from "./Exercicio5"
export default function App()
{
    return(
        <div>
            <h1>Chamada para o Exercício 5</h1>
            <Exercicio5 prestacao={1500} taxa={100} tempo={3}/>
        </div>
    );
}