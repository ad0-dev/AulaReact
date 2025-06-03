export default function Exercicio5({prestacao, taxa, tempo})
{
    let ValorParcela = prestacao + (prestacao*((taxa*taxa)/100)*tempo);
    
    return( 
        <div>
            <p>O valor da parcela será de: {ValorParcela}</p>
            <p>O valor da prestação é: {prestacao}</p>
            <p>A taxa em juros é: {taxa}</p>
            <p>O tempo em dias: {ValorParcela}</p>
        </div>
    );
}