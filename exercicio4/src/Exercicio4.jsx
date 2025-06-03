export default function Exercicio4({temperatura})
{
    let resultado=(temperatura) * 5/9

    return (
        <div>
            <p>A temperatura em graus é Celsius é {resultado}°C</p>
        </div>
    );
}