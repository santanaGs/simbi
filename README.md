# Projeto Laravel e React

Este é um projeto que combina Laravel como backend e React como frontend. Este README fornecerá instruções sobre como configurar e executar o projeto localmente.

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

7. Inicie o servidor de desenvolvimento do Laravel:

   ```bash
   php artisan serve
   ```

O backend estará acessível em `http://localhost:8000`.

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

Com ambos os servidores rodando, você poderá acessar o frontend em `http://localhost:3000` e interagir com o aplicativo.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
