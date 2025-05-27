export default function Exercicio3( {numero} )
{
    let quadrado = numero * numero;
    let cubo = numero * numero * numero;

    return (
        <div>
            <p>O quadrado do numero {numero} é {quadrado}</p>
            <p>O quadrado do numero {numero} é {cubo}</p>
        </div>
    );
}