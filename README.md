Qualquer duvida entrar em contato por favor

Requisitos necessarios node e mysql

# Como Conectar ao Banco de Dados e Criar a Tabela "orcamentos"

Este repositório contém informações sobre como conectar ao seu banco de dados MySQL usando o MySQL Workbench e criar a tabela "orcamentos" utilizando duas opções: importar o arquivo SQL ou executar a declaração SQL diretamente.

## Opção 1: Importar o arquivo SQL

1. Baixe o arquivo SQL do link fornecido em (https://drive.google.com/file/d/1SliN08QCK_MQvunptJ7yhB1CVdQxMXnd/view?usp=sharing) e salve-o em um local acessível no seu computador.

2. Abra o MySQL Workbench e conecte-se ao servidor de banco de dados onde deseja criar a tabela "orcamentos".

3. Na seção "SCHEMAS" do MySQL Workbench, selecione o banco de dados onde você deseja importar a tabela "orcamentos". Caso o banco de dados não exista, crie-o usando o MySQL Workbench ou outro cliente MySQL.

4. No menu superior, clique em "Server" (Servidor) e, em seguida, selecione "Data Import" (Importar Dados).

5. Na janela de importação, escolha a opção "Import from Self-Contained File" (Importar de Arquivo Autônomo).

6. Clique no botão "..." para navegar até o local onde você salvou o arquivo SQL baixado e selecione-o.

7. Certifique-se de que o "Default Target Schema" (Esquema de Destino Padrão) corresponda ao nome do banco de dados onde deseja importar a tabela.

8. Clique no botão "Start Import" (Iniciar Importação). O MySQL Workbench importará o arquivo SQL e criará a tabela "orcamentos" no banco de dados selecionado.

## Opção 2: Executar a declaração SQL diretamente

1. Abra o MySQL Workbench e conecte-se ao servidor de banco de dados onde deseja criar a tabela "orcamentos".

2. Na seção "SCHEMAS" do MySQL Workbench, selecione o banco de dados onde você deseja criar a tabela "orcamentos". Caso o banco de dados não exista, crie-o usando o MySQL Workbench ou outro cliente MySQL.

3. No menu superior, clique em "Query" (Consulta) para abrir o editor de consulta do MySQL Workbench.

4. Cole a seguinte declaração SQL no editor de consulta:

```sql
CREATE TABLE `orcamentos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cliente` varchar(255) NOT NULL,
  `vendedor` varchar(255) NOT NULL,
  `valor_orcado` decimal(12,2) NOT NULL,
  `data_hora` datetime NOT NULL,
  `descricao` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
```

5. Clique no botão "Execute" (Executar) na barra de ferramentas para executar a declaração SQL. O MySQL Workbench criará a tabela "orcamentos" no banco de dados selecionado.
Após seguir qualquer uma das opções acima, a tabela "orcamentos" será criada com sucesso no banco de dados especificado e estará pronta para uso. Lembre-se de que, ao importar o arquivo SQL ou executar a declaração SQL, você estará criando uma nova tabela e, se já houver uma tabela com o mesmo nome no banco de dados, ela será substituída. Certifique-se de estar trabalhando no banco de dados correto antes de criar a tabela.



# Configuração do arquivo db.js para conexão ao banco de dados MySQL

O arquivo `db.js` contém a configuração para a conexão ao banco de dados MySQL no projeto backend. Antes de iniciar o servidor, é necessário ajustar as informações de conexão para que o servidor se conecte corretamente ao banco de dados.

Siga os passos abaixo para configurar o arquivo `db.js` de acordo com as configurações do seu ambiente local:

1. Abra o arquivo `db.js` que está localizado na pasta `api` do projeto backend.

2. Localize a constante `db` onde estão definidas as configurações de conexão:

```js
import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "crud2"
})
```

Faça as alterações necessárias nas informações de conexão para refletir as configurações do seu banco de dados MySQL. Os parâmetros que precisam ser configurados são:

host: O endereço do servidor MySQL. Por padrão, quando executado localmente, costuma ser "localhost", mas se o seu banco de dados estiver em outro servidor, substitua pelo endereço correto.

user: O nome de usuário utilizado para se conectar ao banco de dados.

password: A senha associada ao usuário informado. Se não houver senha, deixe a propriedade vazia ou ajuste conforme a configuração do seu banco de dados.

database: O nome do banco de dados que você deseja utilizar. Certifique-se de que o banco de dados já existe no servidor MySQL.

Após realizar as alterações, salve o arquivo db.js.

Agora o arquivo db.js está configurado corretamente para a conexão ao seu banco de dados MySQL local. Ao executar o servidor backend, ele utilizará essas informações para estabelecer a conexão com o banco de dados.

Lembre-se de que, caso esteja usando credenciais de acesso diferentes em ambientes de produção ou outros ambientes, é importante que o arquivo db.js seja configurado adequadamente para cada cenário.


Ao seguir esse passo a passo, o usuário terá configurado corretamente o arquivo `db.js` para a conexão ao banco de dados MySQL em seu ambiente local. Certifique-se de que as informações de conexão estejam corretas, como usuário, senha, host e nome do banco de dados, para garantir que a conexão seja estabelecida corretamente e o servidor backend possa acessar o banco de dados de forma adequada.

# Rodando o Projeto - API e Frontend

Este guia explica como executar o projeto com duas pastas separadas, uma para a API (backend) em Node.js e outra para o frontend em React.

## Pré-requisitos

Antes de começar, certifique-se de que você tenha o Node.js instalado em sua máquina.

## Passo 1: Configuração da API (backend)

1. Abra o terminal no Visual Studio Code ou outro ambiente de desenvolvimento.

2. Navegue até a pasta `api` do projeto usando o comando: cd api

3. Execute o comando para instalar as dependências do backend: npm install
   
4. Após a instalação das dependências, execute o servidor backend com o comando:

O servidor backend será iniciado e estará ouvindo em uma porta específica.

## Passo 2: Configuração do Frontend (React)

1. Abra um novo terminal no Visual Studio Code ou outro ambiente de desenvolvimento.

2. Navegue até a pasta `frontend` do projeto usando o comando: cd frontend

3. Execute o comando para instalar as dependências do frontend (React): npm install ou npm i 

4. Após a instalação das dependências, inicie o servidor de desenvolvimento do frontend com o comando: npm start

O aplicativo frontend será iniciado e estará disponível em seu navegador.

## Acesso ao Projeto

Agora você tem o servidor backend (API) e o servidor de desenvolvimento do frontend (React) em execução simultaneamente, cada um em seu próprio terminal. O servidor backend estará tratando as solicitações de API, enquanto o servidor de desenvolvimento do frontend estará disponibilizando o aplicativo React para interação no navegador.

Você poderá acessar o aplicativo frontend em execução no navegador através do endereço local indicado pelo servidor de desenvolvimento do React (por padrão, geralmente é http://localhost:3000). E qualquer solicitação de API feita pelo frontend será tratada pelo servidor backend, que deve estar ouvindo em uma porta diferente daquela usada pelo servidor de desenvolvimento do React (por exemplo, http://localhost:5000).

Lembre-se de que o servidor backend e o servidor de desenvolvimento do frontend precisam estar em execução simultaneamente para que o projeto funcione corretamente. Para parar a execução dos servidores, basta pressionar `Ctrl + C` nos terminais correspondentes.
