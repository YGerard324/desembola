
# **Desembola - Projeto com Arquitetura N-Layer**

Este projeto segue uma arquitetura em camadas (N-Layer) que promove a separação de responsabilidades, modularidade e escalabilidade da aplicação. Abaixo está a descrição das camadas, entidades e exemplos de uso.

---

## **Visão Geral da Arquitetura**

A arquitetura N-Layer é composta pelas seguintes camadas principais:

1. **Application**: Implementa a lógica de negócios da aplicação.
2. **Controller**: Controladores que recebem e processam requisições HTTP.
3. **Data**: Configuração e modelos do banco de dados.
4. **Dependency Injection**: Gerencia a injeção de dependências entre classes.
5. **Facade**: Simplifica a interação entre camadas e fornece métodos de alto nível.
6. **Repository**: Interface de acesso ao banco de dados, seguindo o padrão Repository.
7. **Middleware**: Intercepta requisições HTTP para autenticação e autorização.
8. **Routes**: Define as rotas de endpoints HTTP.

---

## **Estrutura do Projeto**

A estrutura do projeto está organizada da seguinte forma:

```
src/
├── application/        # Lógica de negócios
├── config/             # Configurações do banco de dados e ambiente
├── controller/         # Manipulação das requisições HTTP
├── data/               # Modelos Sequelize e inicialização do banco
├── dependency/         # Injeção de dependências
├── facade/             # Camada intermediária para simplificar chamadas
├── factory/            # Criação de instâncias configuradas
├── interface/          # Contratos para os repositórios
├── middleware/         # Middleware para autenticação e validações
├── repository/         # Operações diretas no banco de dados
├── routes/             # Rotas de cada entidade
├── express.js          # Configuração principal do Express.js
└── README.md           # Documentação do projeto
```

---

## **Camadas e Arquivos Importantes**

### **1. Application**

- Contém a lógica de negócios das entidades.
- Exemplo: `application/UserApplication.js`
  - **Métodos**:
    - `add(data)`: Adiciona um novo usuário.
    - `getById(id)`: Recupera usuário pelo ID.
    - `getAll()`: Retorna todos os usuários.
    - `update(data)`: Atualiza dados do usuário.
    - `delete(id)`: Remove um usuário.

---

### **2. Controller**

- Manipula as requisições HTTP, chamando as camadas de aplicação.
- Exemplo: `controller/UserController.js`
  - **Métodos**:
    - `add(req, res)`: Adiciona um usuário.
    - `getById(req, res)`: Recupera um usuário.
    - `update(req, res)`: Atualiza um usuário.
    - `delete(req, res)`: Remove um usuário.

---

### **3. Data**

- Contém os modelos Sequelize e a configuração do banco de dados.
- Exemplo: `data/UserModel.js`
  - Modelo `User`:
    - Campos: `id`, `name`, `email`, `password`, `cpf`, `phone`, etc.

---

### **4. Dependency Injection**

- Configura e injeta dependências entre camadas.
- Exemplo: `dependency/injection.js`
  - Instancia repositórios, aplicações e facades.

---

### **5. Facade**

- Interface simplificada para interagir com as funcionalidades da aplicação.
- Exemplo: `facade/UserFacade.js`

---

### **6. Repository**

- Realiza operações diretas no banco de dados.
- Exemplo: `repository/UserRepository.js`

---

### **7. Middleware**

- Exemplo: `middleware/IsAuth.js`
  - Verifica tokens JWT para autenticação.

---

### **8. Routes**

- Define os endpoints HTTP.
- Exemplo: `routes/UserRouter.js`

---

## **Configuração do Banco de Dados**

O arquivo **`config/dbConfig.js`** contém as credenciais para o banco de dados. Certifique-se de configurá-lo antes de iniciar o servidor:

**Exemplo de `dbConfig.js`:**
```javascript
module.exports = {
  DB: "desembola",
  USERNAME: "root",
  PASSWORD: "password",
  HOST: "localhost",
  DIALECT: "mysql",
  PORT: 3306,
};
```

No arquivo `data/dbContext.js`, o Sequelize é inicializado com estas configurações.

---

## **Execução do Projeto**

1. **Instale as dependências**:
   ```bash
   npm install
   ```

2. **Configure o banco de dados**:
   Ajuste as credenciais em `config/dbConfig.js`.

3. **Inicie o servidor**:
   ```bash
   npm start
   ```

4. **Teste os endpoints**:
   Utilize o **Postman** ou **Insomnia** para verificar os endpoints com os exemplos de payload.

---

## **Exemplos de Payloads**

A ordem de inserção dos dados deve respeitar as dependências entre as entidades.

### **1. User**
**POST /user**
```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "password123",
  "cpf": "12345678901",
  "phone": "123456789",
  "image_path": "path/to/image.jpg",
  "born_date": "1990-01-01",
  "access_level": 1
}
```

---

### **2. Family**
**POST /family**
```json
{
  "user_id": 1,
  "parentesco": "Father"
}
```

---

### **3. Team**
**POST /team**
```json
{
  "name": "Team Alpha",
  "student_id": 1
}
```

---

### **4. Class**
**POST /class**
```json
{
  "teacher_id": 1,
  "student_id": 1
}
```

---

### **5. Discipline**
**POST /discipline**
```json
{
  "lessons_id": 1,
  "name": "Mathematics"
}
```

---

### **6. Teacher**
**POST /teacher**
```json
{
  "user_id": 1,
  "class_id": 1
}
```

---

### **7. Lesson**
**POST /lesson**
```json
{
  "image_path": "path/to/image.jpg",
  "name": "Lesson 1",
  "description": "Introduction to Algebra",
  "answers": "Option A, Option B, Option C",
  "level": 1
}
```

---

### **8. Status**
**POST /status**
```json
{
  "discipline_id": 1,
  "progress": 50,
  "description": "Halfway through the course"
}
```

---

### **9. Student**
**POST /student**
```json
{
  "neurodivergent": 0,
  "user_id": 1,
  "family_id": 1,
  "team_id": 1,
  "status_id": 1,
  "class_id": 1
}
```

---

### **10. Ranking**
**POST /ranking**
```json
{
  "position": 1,
  "team_id": 1
}
```

---

### **11. Exam**
**POST /exam**
```json
{
  "application_date": "2023-12-01",
  "lesson_id": 1,
  "student_id": 1
}
```

---

### **12. Address**
**POST /address**
```json
{
  "uf": "NY",
  "number": "123",
  "street": "Main Street",
  "cep": "12345",
  "city": "New York",
  "user_id": 1
}
```

---

## **Considerações Finais**

Este projeto implementa uma API modular com base na arquitetura N-Layer, ideal para sistemas escaláveis e organizados. Se houver dúvidas ou ajustes necessários, sinta-se à vontade para contribuir. 🚀
