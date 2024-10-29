
# Documentação da API

## Sumário
- [Sobre](#sobre)
- [Arquitetura](#arquitetura)
- [Configuração do Projeto](#configuração-do-projeto)
- [Camadas da Arquitetura](#camadas-da-arquitetura)
  - [Model](#model)
  - [Repository](#repository)
  - [Service](#service)
  - [Controller](#controller)
- [Endpoints](#endpoints)
  - [Criar Usuário](#criar-usuário)
  - [Buscar Usuário por ID](#buscar-usuário-por-id)
  - [Atualizar Usuário](#atualizar-usuário)
  - [Excluir Usuário](#excluir-usuário)
  - [Listar Todos os Usuários](#listar-todos-os-usuários)
- [Considerações Finais](#considerações-finais)

---

## Sobre

Esta API Node.js com TypeScript é construída com o padrão N-Layer para organizar a aplicação em diferentes camadas. Cada camada possui responsabilidades distintas, facilitando a manutenção e a escalabilidade do projeto.

---

## Arquitetura

A arquitetura segue o padrão **N-Layer** (ou multi-camadas), onde cada camada possui uma responsabilidade específica, conforme o diagrama:

```
Presentation Layer      <-- (Express - Controladores e Rotas)
         |
Application Layer       <-- (Serviços - Lógica de Negócios)
         |
Data Access Layer       <-- (Repositórios - Acesso ao Banco de Dados)
         |
Data Layer              <-- (Modelos - Estrutura de Dados)
```

Cada camada interage apenas com a camada diretamente inferior, mantendo a organização e separação de responsabilidades.

---

## Configuração do Projeto

1. **Clonar o repositório**:
   ```bash
   git clone <URL do repositório>
   cd <nome-do-projeto>
   ```

2. **Instalar as dependências**:
   ```bash
   npm install
   ```

3. **Configurar o banco de dados** com Sequelize e definir as variáveis de ambiente no arquivo `.env`.

4. **Executar a aplicação**:
   ```bash
   npm run dev
   ```

---

## Camadas da Arquitetura

### Model

A camada de **Model** define a estrutura do banco de dados e os tipos de dados associados. No caso deste projeto, o modelo `User` define as colunas e os tipos, como `id`, `name`, `email`, `password`, etc.

#### Exemplo: `User.ts`
```typescript
class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes { /* ... */ }
export const initUserModel = (sequelize: Sequelize): typeof User => { /* ... */ }
```

### Repository

A camada de **Repository** gerencia o acesso direto ao banco de dados e encapsula as operações CRUD. Essa camada usa métodos de `User` para realizar operações específicas.

#### Exemplo: `UserRepository.ts`
```typescript
class UserRepository {
  async createUser(data: UserCreationAttributes): Promise<User> { /* ... */ }
  async getUserById(id: number): Promise<User | null> { /* ... */ }
  async updateUser(id: number, data: Partial<UserAttributes>): Promise<number> { /* ... */ }
  async deleteUser(id: number): Promise<number> { /* ... */ }
}
export default new UserRepository();
```

### Service

A camada de **Service** contém a lógica de negócios da aplicação. Ela utiliza a camada de repositório para manipular dados e executa validações ou regras antes de processar uma operação.

#### Exemplo: `UserService.ts`
```typescript
class UserService {
  async createUser(data: UserCreationAttributes): Promise<UserAttributes> { /* ... */ }
  async deleteUser(id: number): Promise<number> { /* ... */ }
}
export default new UserService();
```

### Controller

A camada de **Controller** é responsável por receber as requisições HTTP, chamar os métodos da camada de serviço e retornar as respostas adequadas.

#### Exemplo: `UserController.ts`
```typescript
class UserController {
  async createUser(req: Request, res: Response): Promise<Response> { /* ... */ }
  async getUserById(req: Request, res: Response): Promise<Response> { /* ... */ }
  async deleteUser(req: Request, res: Response): Promise<Response> { /* ... */ }
}
export default new UserController();
```

---

## Endpoints

### Criar Usuário

- **URL**: `/api/users`
- **Método**: `POST`
- **Descrição**: Cria um novo usuário.
- **Corpo da Requisição**:
  ```json
  {
    "name": "Nome do Usuário",
    "email": "email@dominio.com",
    "password": "senha123",
    "cpf": "12345678901",
    "phone": "123456789",
    "bornDate": "1990-01-01"
  }
  ```
- **Resposta de Sucesso**:
  - **Código**: `201 CREATED`
  - **Conteúdo**:
    ```json
    {
      "id": 1,
      "name": "Nome do Usuário",
      "email": "email@dominio.com",
      ...
    }
    ```

### Buscar Usuário por ID

- **URL**: `/api/users/:id`
- **Método**: `GET`
- **Descrição**: Retorna os dados de um usuário específico.
- **Resposta de Sucesso**:
  - **Código**: `200 OK`
  - **Conteúdo**:
    ```json
    {
      "id": 1,
      "name": "Nome do Usuário",
      "email": "email@dominio.com",
      ...
    }
    ```
- **Resposta de Erro**:
  - **Código**: `404 NOT FOUND`
  - **Conteúdo**:
    ```json
    { "error": "Usuário não encontrado" }
    ```

### Atualizar Usuário

- **URL**: `/api/users/:id`
- **Método**: `PUT`
- **Descrição**: Atualiza os dados de um usuário específico.
- **Corpo da Requisição**:
  ```json
  {
    "name": "Nome Atualizado",
    "email": "novoemail@dominio.com"
  }
  ```
- **Resposta de Sucesso**:
  - **Código**: `200 OK`
  - **Conteúdo**: Dados do usuário atualizado.

### Excluir Usuário

- **URL**: `/api/users/:id`
- **Método**: `DELETE`
- **Descrição**: Exclui um usuário específico.
- **Resposta de Sucesso**:
  - **Código**: `204 NO CONTENT`
- **Resposta de Erro**:
  - **Código**: `404 NOT FOUND`
  - **Conteúdo**:
    ```json
    { "error": "Usuário não encontrado para exclusão." }
    ```

### Listar Todos os Usuários

- **URL**: `/api/users`
- **Método**: `GET`
- **Descrição**: Retorna uma lista de todos os usuários.
- **Resposta de Sucesso**:
  - **Código**: `200 OK`
  - **Conteúdo**:
    ```json
    [
      {
        "id": 1,
        "name": "Nome do Usuário",
        "email": "email@dominio.com",
        ...
      }
    ]
    ```

---

## Considerações Finais

Este projeto está organizado para suportar operações CRUD e pode ser facilmente expandido para incluir novas funcionalidades. O padrão N-Layer facilita a manutenção e escalabilidade da aplicação, separando a lógica de apresentação, de negócios e de acesso a dados em camadas distintas.

## Proximas implementações

* Autenticação
* Middleware
* Relacionamento User : Address
