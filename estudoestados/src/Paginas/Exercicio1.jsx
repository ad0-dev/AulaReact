import { useState } from "react";
export default function Exercicio1()
{  
    const[numero, setNumero] =useState(0);
    const[resultado, setResultado] =useState();

    function calcular ()
    {
    const quadrado = Number * Number;
    const cubo = Number* Number * Number;}

    setResultado("O quadrado é "+ quadrado+ "o cubo é"+ cubo);
}
    return (
      <div>
        <h1>Exercicio 1</h1>
  
        <div className="conteudo">
  
          <h3>Calculo do Quadrdo/Cubo</h3>
  
          <form>
            <p>
             Digite um numero qualquer:  <br />
              <input type="text" value={numero}
              onChange={(e) => setNumero (e.target.value)} />
            </p>

            <p>
              <input type="button" value="Calcular" 
              onClick={calcular} />
            </p>
            <p>
                <b>
                    o resultado
                </b>
            </p>
  
          </form>
          </div>
  
      </div>
    );
  }
  