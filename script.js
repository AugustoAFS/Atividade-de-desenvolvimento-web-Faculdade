function executarExercicio(exercicio)
{
    switch (exercicio) 
    {
        case 1:
            contarNegativos();
            break;
        case 2:
            calcularLitros();
            break;
        case 3:
            encontrarAlunos();
            break;
        case 4:
            somaAte100();
            break;
        case 5:
            somaParesAte100();
            break;
        case 6:
            calcularFatorial();
            break;
        case 7:
            calcularMedia();
            break;
        case 8:
            calcularTabuada();
            break;
        default:
            alert("Exercício não encontrado.");
            break;
    }
}
/*
  Utilizei a mesma logica de pergunta para o usuario em quase todos os codigos.
*/

function contarNegativos() 
{
  let negativos;
  let repetir;
  let numNegativo = [];
  do 
  {
    negativos = 0;
    numNegativo = [];
    for (let i = 1; i <= 5; i++) 
    {
      let valor = prompt(`Informe o valor ${i}:`);
      if (valor === null || valor.trim() === "") 
      {
        repetir = confirm("nunhuma entrada valida, deseja repetir o processo?");
        if(repetir == true)
        {
          return contarNegativos();
        }
        else
        {
          return ;
        }
      }
      else
      {
        valor = parseInt(valor);
        if (!isNaN(valor) && valor < 0) 
        {
          negativos++;
          numNegativo.push(valor);
        }
        else
        {
        }
      }
    }
  l;  if (numNegativo.length > 0) 
    {
      alert(`Esses são os numeros negativos: \n${numNegativo}\nQuantidade de valores negativos: ${negativos}`);
    } 
    else 
    {
      alert("Nenhum número negativo foi inserido.");
    }
    repetir = confirm("Deseja repetir o processo?");
  } while (repetir);
}
/*




*/
function calcularLitros() 
{
  let repetir;
  let precoLitro = 0;
  let pagamento = 0;
  let litros = 0;
    do
    {
        precoLitro = prompt("Informe o preço do litro da gasolina:");
        if(precoLitro === null || precoLitro.trim() === "")
        {
          repetir = confirm("nunhuma entrada valida, deseja repetir o processo?");
          if(repetir == true)
          {
            return calcularLitros();
          }
          else
          {
            return;
          }
        }
        else
        {
          precoLitro = parseFloat(precoLitro);
          if (isNaN(precoLitro) || precoLitro <= 0.0) 
          {
            repetir = confirm("valor do combustivel invalido deseja repetir o processo?");
            if(repetir == true)
            {
              return calcularLitros();
            }
            else
            {
              return;
            }
          }
          else
          {
            pagamento = prompt("Informe o valor do pagamento:");
            if(pagamento === null || pagamento.trim() === "")
            {
              repetir = confirm("nunhuma entrada valida, deseja repetir o processo?");
              if(repetir == true)
              {
                return calcularLitros();
              }
              else
              {
                return;
              }
            }
            else
            {
              pagamento = parseFloat(pagamento);
              if (isNaN(pagamento) || pagamento <= 0.0) 
              {  
                repetir = confirm("valor do pagamento invalido deseja repetir o processo?");
                if(repetir == true)
                {
                  return calcularLitros();
                }
                else
                {
                  return;
                }
              }
              else
              {
                litros = pagamento / precoLitro;  
              }
            }
          } 
        }
      alert(`Litros colocados no tanque: ${litros.toFixed(2)}`);
      precoLitro = 0;
      pagamento = 0;
      litros = 0;
      repetir = confirm("Deseja repetir o processo?");
    } while (repetir);
}
/*




*/
function encontrarAlunos() 
{
  let repetir;
  let maisAlto = { nome: 0, altura: 0 };
  let maisBaixo = { nome: 0, altura: Infinity };
  let nome;
  let altura;

    do
    {
      for (let i = 1; i <= 5; i++) 
      {  
        nome = prompt(`Informe o nome do aluno ${i}:`);
          if(nome === null || nome.trim() === "")
            {
              repetir = confirm("nunhuma entrada valida, deseja repetir o processo?");
              if(repetir == true)
                {
                  return encontrarAlunos();
                }
                else
                {
                  return;
                }
            }
            
            altura = prompt(`Informe a altura do aluno ${i} em cm:`);
            if(altura === null || altura.trim() === "")
              {
                repetir = confirm("nunhum informação inserida deseja repetir o processo?");
                if(repetir == true)
                  {
                    return encontrarAlunos();
                  }
                  else
                  {
                    return;
                  }
              }
              else
              {
                altura = parseFloat(altura);
                if (isNaN(altura) || altura <= 0.0) 
                    {  
                      repetir = confirm("valor do pagamento invalido deseja repetir o processo?");
                      if(repetir == true)
                      {
                        return encontrarAlunos();
                      }
                      else
                      {
                        return;
                      }
                    }
                    else
                    {
                      if (altura > maisAlto.altura) 
                      {
                        maisAlto.nome = nome;
                        maisAlto.altura = altura;
                      }
                      else
                      {
                      }
                      if (altura < maisBaixo.altura) 
                      {
                        maisBaixo.nome = nome;
                        maisBaixo.altura = altura;
                      }
                      else
                      {
                      }
                    }  
              }
      }
      alert(`Aluno mais alto: Nome ${maisAlto.nome}, Altura ${maisAlto.altura}cm\nAluno mais baixo: Número ${maisBaixo.nome}, Altura ${maisBaixo.altura}cm`);
      repetir = confirm("deseja continuar o processo?");
    }while(repetir);
}
/*




*/
function somaAte100() 
            {
                let soma = 0;
                for (let i = 0; i <= 100; i++)
                {
                  soma += i;
                }
                alert(`A soma dos números de 0 a 100 é: ${soma}`);
            }
/*




*/
function somaParesAte100() 
            {
                let soma = 0;
                for (let i = 0; i <= 100; i += 2) 
                {
                  soma += i;
                }
                alert(`A soma dos números pares de 0 a 100 é: ${soma}`);
            }
/*




*/
function calcularFatorial() 
            {
                  let repetir= true;
                  let numero ;
                  let fatorial = 1;
              do
              {
                  numero = 0;
                  fatorial = 0;
                  fatorial = 1;
                  numero = prompt("Informe um número para calcular o fatorial:");
                  if(numero === null || numero.trim() === "")
                  {
                    repetir = confirm("nunhuma entrada valida, deseja repetir o processo?");
                    if(repetir == true)
                    {
                      return calcularFatorial();
                    }
                    else
                    {
                      return;
                    }
                  }
                  else
                  {
                    numero = parseInt(numero);
                    if(isNaN(numero) && numero <0)
                    {
                      repetir = confirm("numero invalido deseja repetir o processo?");
                      if(repetir == true)
                      {
                        return calcularFatorial();
                      }
                      else
                      {
                        return;
                      }
                    }
                    else
                    {
                      if(numero == 0)
                      {
                        alert(`fatorial de ${numero} é: ${fatorial}`);
                      
                      }
                      else
                      {
                        for (let i = 1; i <= numero; i++)
                              {
                                fatorial *= i;
                              }
                              alert(`O fatorial de ${numero} é: ${fatorial}`);
                      }
                    }
                  }
                  
                  repetir = confirm("deseja repetir o processo?");
              }while(repetir);
            }
/*




*/         
function calcularMedia() 
            {
                let repetir;
                let soma = 0;
                let contador = 0;
                let continuar = true;
                let valor;
              
              do
              {
                while (continuar) 
                {
                  valor = prompt("Informe um valor inteiro positivo (ou digite 0 para encerrar):");
                  if(valor === null || valor.trim() === "")
                  {
                    repetir = confirm("numero invalido deseja repetir o processo?");
                      if(repetir == true)
                      {
                        return calcularMedia();
                      }
                      else
                      {
                        return;
                      }
                  }
                  else
                  {
                    return;
                  }
                  valor = parseFloat(valor);
                  if(isNaN(valor) && valor < 0)
                  {
                    repetir = confirm("numero invalido deseja repetir o processo?");
                      if(repetir == true)
                      {
                        return calcularMedia();
                      }
                      else
                      {
                        return;
                      }
                  }
                  else
                  {
                    if (valor === 0.0) 
                    {
                      continuar = false;
                    } 
                    else if (valor > 0.0) 
                    {
                      soma += valor;
                      contador++;
                    }
                    if (contador > 0.0) 
                    {
                      let media = soma / contador;
                      alert(`A média dos valores informados é: ${media.toFixed(2)}`);
                    } 
                    else 
                    {
                      alert("Nenhum valor válido foi informado.");
                    }
                  }
                }
                repetir = confirm("deseja repetir o processo?");
              }while(repetir);
              alert("processo encerrado!");
            }
/*




*/
function calcularTabuada()
          {
              let numero = parseInt(prompt("Informe um número para calcular a tabuada:"));
              let resultadoTB = "<p>Tabuada do " + numero + "</p>";
              for (let i = 1; i <= 10; i++) 
              {
                  let resultado = numero * i;
                  resultadoTB += "<li>" + numero + " x " + i + " = " + resultado + "</li>";
              }
              resultadoTB += "</ul>";
              document.getElementById("resultado").innerHTML = resultadoTB;
          }          