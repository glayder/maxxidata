# maxxidata

### Iniciar Postgress
Iniciará o servidor para criarmos o banco de dados
```
docker-compose up -d
```

### Criar banco de dados
Acessar: http://localhost:8080/
#### Dados para entrar no servidor
- Servidor: pgsql
- Sistema: PostgreSQL
- Usuário: pguser
- Senha: pgpassword
- Criar Base de dados: nestjs

### Iniciar backend
Ao ser iniciado, irão ser criadas as tabelas automaticamente
```
cd backend
npm run start:dev
```

### Iniciar frontend
Cadastrar o Tipo de Profissao para vincular posteriormente com o usuário
```
cd ../frontend
npm run dev
```
### Funcionalidade da tela
 Deverá ser cadastrado o tipo de profissão e, logo depois, será mostrado a opção cadastrada ao cadastrar o usuário. Fazendo assim, a vinculação entre Usuário e Tiopo de Profissão
 
#### Cadastrar o Tipo de Profissao
- Botão Cadastrar Tipo de Profissão, ex: médico

#### Cadastrar Usuário
- Botão Cadastrar Usuário

## Ferramentas utilizadas

### Back-end
- Nodejs
- Nestjs
- TypeOrm
- Postgres
- Docker
- Typescript

### Front-end
- Reactjs
- Typescript
- Vitejs
- Material
