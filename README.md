# Projeto Laravel e React

Este é um projeto que combina Laravel como backend e React como frontend. Este README fornecerá instruções sobre como configurar e executar o projeto localmente.

<img src="https://imgur.com/G4FU6gs.png"/>

## Requisitos

- PHP >= 7.3
- Composer
- Node.js e npm
- Banco de dados MySQL ou outro suportado pelo Laravel

## Configuração do Backend (Laravel)

1. Clone este repositório.

2. Navegue até o diretório do backend:

   ```bash
   cd simbi-back
   ```

3. Instale as dependências do PHP usando o Composer:

   ```bash
   composer install
   ```

4. Copie o arquivo `.env.example` e renomeie para `.env`. Edite este arquivo para configurar as variáveis de ambiente, como as credenciais do banco de dados.

5. Gere uma chave de aplicativo Laravel:

   ```bash
   php artisan key:generate
   ```

6. Execute as migrações do banco de dados para criar as tabelas:

   ```bash
   php artisan migrate
   ```

7. Para rodar localmente, é necessário executar o comando `php artisan serve` com o IP da máquina. Você pode encontrar o endereço IP da sua máquina usando o comando `ipconfig` no Windows ou `ifconfig` no macOS e Linux. Em seguida, substitua `localhost` pelo seu endereço IP ao iniciar o servidor Laravel. Por exemplo:

```bash
php artisan serve --host=SEU_ENDEREÇO_IP --port=8000
```

O backend estará acessível em `http://SEU_ENDEREÇO_IP:8000`.

## Configuração do Frontend (React)

1. Navegue até o diretório do frontend:

   ```bash
   cd simbi
   ```

2. Instale as dependências do Node.js:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento do React:

   ```bash
   npm run dev
   ```

O frontend estará acessível em `http://localhost:3000`.

## Como Usar

Altere nos arquivos:

simbi/src/screens/list/index.tsx a linha 33 a url para http://SEU_ENDEREÇO_IP:8000/api/projects
simbi/src/screens/all/index.tsx a linha 24 a url para http://SEU_ENDEREÇO_IP:8000/api/projects/all

Com ambos os servidores rodando, você poderá acessar o frontend em `http://localhost:3000` e interagir com o aplicativo.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
