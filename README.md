# EcoWATT - Sistema de Gerenciamento


## 🚀 Como Inicializar o Projeto

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

1. **Clone o repositório**
```bash
git clone <url-do-repositorio>
cd DesenvolvimentoFront2
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute o projeto**
```bash
npm run dev
```

4. **Execute os testes**
```bash
npm test
```

5. **Acesse a aplicação**
- URL: `http://localhost:5173`
- Login padrão: `admin` / `1234`

## 📋 Status dos Requisitos

### ✅ **IMPLEMENTADOS (10/10)**

#### 1. **React Router** ✅
- **Localização**: `src/main.jsx`
- **Implementação**: `createBrowserRouter` e `RouterProvider`
- **Rotas configuradas**: `/`, `/registro`, `/home`, `/perfil/:userId`

#### 2. **Rotas Aninhadas com Layout Padrão** ✅
- **Localização**: `src/components/LayoutPadrao/LayoutPadrao.jsx`
- **Implementação**: Componente com `<Outlet />` para rotas filhas
- **Rotas protegidas**: `/home` e `/perfil/:userId` usam o layout

#### 3. **Páginas de Login e Registro** ✅
- **Login**: `src/components/Login/Login.jsx` (rota `/`)
- **Registro**: `src/pages/Registro.jsx` (rota `/registro`)
- **Funcionalidades**: Validação, localStorage, navegação

#### 4. **Duas Páginas Adicionais** ✅
- **Home**: `src/pages/Home.jsx` - Lista usuários da API
- **Perfil**: `src/pages/Perfil.jsx` - Detalhes do usuário

#### 5. **useParams** ✅
- **Localização**: `src/pages/Perfil.jsx`
- **Implementação**: `const { userId } = useParams()`
- **Rota**: `/perfil/:userId`

#### 6. **Recursos da API (5)** ✅
- **Localização**: `src/services/api.js` e `src/context/ApiContext.jsx`
- **Recursos implementados**:
  - `getUsers()` - Lista usuários (Home)
  - `getUserById(id)` - Busca usuário (Perfil)
  - `createUser(data)` - Cria usuário (Adicionar)
  - `updateUser(id, data)` - Atualiza usuário (Home)
  - `deleteUser(id)` - Remove usuário (Home)

#### 7. **Testes com Dados Mockados** ✅
- **Localização**: `src/test/`
- **Arquivos**:
  - `Home.test.jsx` - Testa componente Home
  - `mockData.test.js` - Testa operações com dados mockados
  - `mockData.js` - Dados de teste
- **Execução**: `npm test`

#### 8. **Autenticação Bearer Token** ✅
- **Localização**: `src/services/api.js` e `src/context/AuthContext.jsx`
- **Implementação**: 
  - Interceptors do Axios para Bearer Token automático
  - Headers de autorização em todas as requisições
  - Logout automático em caso de erro 401
  - Funções para gerenciar token (authService)

#### 9. **CRUD Completo** ✅
- **Localização**: `src/context/ApiContext.jsx` e `src/pages/`
- **Implementação**:
  - **Create**: Adicionar usuários (`/adicionar`)
  - **Read**: Listar e visualizar usuários (`/home`, `/perfil/:id`)
  - **Update**: Editar usuários inline na Home
  - **Delete**: Excluir usuários com confirmação

#### 10. **Context API** ✅
- **Localização**: `src/context/`
- **Implementação**:
  - `ApiContext.jsx` - Gerencia chamadas à API e estado relacionado
  - `AuthContext.jsx` - Gerencia autenticação e estado do usuário
  - Separação de responsabilidades entre componentes e lógica de negócio
  - Centralização de chamadas à API e gerenciamento de estado

## 🏗️ Estrutura do Projeto

```
src/
├── components/
│   ├── LayoutPadrao/     # Layout com navegação
│   └── Login/            # Componente de login
├── context/
│   ├── ApiContext.jsx    # Context para chamadas à API
│   └── AuthContext.jsx   # Context para autenticação
├── pages/
│   ├── Home.jsx          # Lista de usuários
│   ├── Perfil.jsx        # Detalhes do usuário
│   ├── AdicionarUsuario.jsx # Adicionar usuário
│   └── Registro.jsx      # Cadastro de usuários
├── services/
│   └── api.js            # Serviços da API
├── data/
│   └── db.json           # Dados locais
└── test/
    ├── Home.test.jsx     # Testes do Home
    ├── mockData.test.js  # Testes com dados mockados
    └── mockData.js       # Dados de teste
```

## 🔐 Sistema de Autenticação

### Usuários Padrão
- **Admin**: `admin` / `1234`
- **Fernando**: `fernando` / `123456`
- **Maria**: `maria` / `123456`

### Fluxo de Login
1. Usuário acessa `/`
2. Insere credenciais
3. Sistema valida contra `db.json` + `localStorage`
4. Redireciona para `/home` se válido
5. Dados do usuário salvos no `localStorage`

## 🧪 Testes

### Executar Testes
```bash
npm test          # Executa todos os testes
npm run test:ui   # Interface gráfica dos testes
```

### Cobertura de Testes
- ✅ Componente Home com dados da API
- ✅ Operações CRUD mockadas
- ✅ Validação de estrutura de dados
- ✅ Simulação de login/registro

## 🛠️ Tecnologias Utilizadas

- **React 19.1.0** - Framework principal
- **React Router DOM 7.6.2** - Roteamento
- **Axios 1.10.0** - Cliente HTTP
- **Vite 6.3.5** - Build tool
- **Vitest 2.1.8** - Framework de testes
- **Testing Library** - Testes de componentes
- **Context API** - Gerenciamento de estado

## 🎉 Projeto Completo!

**Todos os 10 requisitos foram implementados com sucesso!**

### 🔐 Sistema de Autenticação Bearer Token

- **Token gerado**: Automaticamente no login
- **Headers automáticos**: Todas as requisições incluem `Authorization: Bearer <token>`
- **Interceptors configurados**: Request e Response
- **Logout automático**: Em caso de erro 401
- **Gerenciamento**: Funções para set/get/remove token

### 📝 Context API

- **ApiContext**: Centraliza todas as chamadas à API
  - Gerencia estado de loading e error
  - Implementa funções para CRUD de usuários
  - Lida com usuários locais e da API externa

- **AuthContext**: Centraliza autenticação
  - Gerencia login, logout e registro
  - Mantém estado do usuário atual
  - Integra com localStorage para persistência

### 📝 Melhorias Futuras
- Sistema de refresh token
- Persistência real no backend