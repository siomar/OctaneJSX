# Octane JSX
  
> Projeto em Typescript (https://www.typescriptlang.org/) que demonstra o uso do JSX sem o uso do React para renderizar os componentes


## Start do projeto

Entre no projeto e execute o seguinte comando no terminal:

    > yarn
    > yarn start

## Resumo

O Typescript suporta incorporação, verificação de tipo e compilação de JSX diretamente para JavaScript. O JSX ficou popular com o React, mas isso não impede de usarmos sem ele em nosso projeto.

Para trabalharmos com o JSX e o Typescript entenda, precisamos habilitar a opção **jsx** no **tsconfig.json** e nomear os arquivos **.ts** para **.tsx**, esse modo afeta apenas a fase de emissão.

    "jsx": "react",
    "jsxFactory": "Octane.createElement",


O parâmetro **jsxFactory** é a grande mágica do nosso projeto, o jsx quando é "buildado" pelo Typescript ele transforma a sintaxe para uma função **Octane.createElement** que definimos. 

Caso não fosse configurado o parâmetro **jsxFactory** ele utilizaria o método **React.createElement** por conta do valor **react** no parâmetro jsx.

Configurando o parâmetro **jsx** (https://www.typescriptlang.org/docs/handbook/jsx.html)

Exemplo:

    // JSX
	    Octane.render(<Welcome  title="Octane JSX"  />, document.getElementById("root"));
    
    // JS
	    Octane.render(Octane.createElement(Welcome, { title:  "Octane JSX" }), document.getElementById("root"));

Baseado nas principais funções do React, foram criado os métodos **render** e **createElement** .

Outra configuração importante é a definição do JSX de forma global para o Typescript interpretar.

    declare  namespace  JSX {
    	interface  Element {}
    	interface  IntrinsicElements {
    		[elemName:  string]:  JSX.Element;
    	}
    }

Ele vai parar com os erros ao escrever HTML no arquivo **.tsx**
## Resultado

<img src="https://raw.githubusercontent.com/siomar/OctaneJSX/main/ghfiles/print.png" width="100%" alt="Prévia"/>

