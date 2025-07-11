# Luz Control - Sistema de Gerenciamento


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

### ✅ **IMPLEMENTADOS (7/8)**

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

#### 6. **Recursos da API (3+)** ✅
- **Localização**: `src/services/api.js`
- **Recursos implementados**:
  - `getUsers()` - Lista usuários (Home)
  - `getUserById(id)` - Busca usuário (Perfil)
  - `createUser(data)` - Cria usuário (Registro)

#### 7. **Testes com Dados Mockados** ✅
- **Localização**: `src/test/`
- **Arquivos**:
  - `Home.test.jsx` - Testa componente Home
  - `mockData.test.js` - Testa operações com dados mockados
  - `mockData.js` - Dados de teste
- **Execução**: `npm test`

### ❌ **NÃO IMPLEMENTADO (1/8)**

#### 8. **Autenticação Bearer Token** ❌
- **Status**: Não implementado
- **Necessário**: 
  - Interceptors do Axios para Bearer Token
  - Sistema de refresh token
  - Headers de autorização automáticos

## 🏗️ Estrutura do Projeto

```
src/
├── components/
│   ├── LayoutPadrao/     # Layout com navegação
│   └── Login/            # Componente de login
├── pages/
│   ├── Home.jsx          # Lista de usuários
│   ├── Perfil.jsx        # Detalhes do usuário
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

## 📝 Próximos Passos

Para completar 100% dos requisitos:

1. **Implementar Bearer Token Authentication**
   - Adicionar interceptors no Axios
   - Sistema de refresh token
   - Headers automáticos de autorização

2. **Melhorias Opcionais**
   - Persistência real no backend
