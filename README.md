# ClienteWeb

## Sobre o Projeto

**ClienteWeb** é o front-end desenvolvido para conectar e integrar os sistemas **UsuariosApp** e **ClientesApp**. Ele oferece uma interface moderna e responsiva para gerenciar autenticação de usuários e dados de clientes, garantindo uma experiência intuitiva e eficiente ao usuário final. O projeto é baseado em tecnologias modernas como Angular e segue as melhores práticas de desenvolvimento.

---

## Tecnologias Utilizadas

- **Angular** (versão mais recente): Framework front-end para aplicações web.
- **HttpClient**: Para comunicação com as APIs back-end.
- **Interceptors**: Gerenciamento de requisições e respostas HTTP, como inclusão de tokens JWT.
- **Guards**: Proteção de rotas com base no estado de autenticação do usuário.
- **Routes**: Navegação entre as diferentes páginas da aplicação.
- **Bootstrap 5**: Para estilização e criação de layouts responsivos.
- **Environment Configurations**: Configuração de variáveis por ambiente (desenvolvimento, produção, etc.).

---

## Funcionalidades

- **Autenticação de Usuários**: Integração com o **UsuariosApp** para login seguro via JWT.
- **Gestão de Clientes**: Consumo de serviços do **ClientesApp** para cadastrar, editar, listar e excluir clientes.
- **Guarda de Rotas**: Proteção de páginas sensíveis, permitindo acesso apenas para usuários autenticados.
- **Interface Responsiva**: Design moderno e acessível com Bootstrap 5.
- **Configuração Flexível**: Suporte a diferentes ambientes por meio de configurações dinâmicas.

---

## Estrutura do Projeto

- **Módulos Angular**: Modularização clara para facilitar a organização e manutenção do código.
- **Guards e Interceptors**: Implementação para proteger rotas e gerenciar tokens JWT.
- **Serviços HTTP**: Abstração das chamadas às APIs dos sistemas back-end.
- **Environment**: Configuração centralizada para endpoints e outros parâmetros específicos de ambiente.

---

## Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu_usuario/ClienteWeb.git
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Configure os arquivos de ambiente (`environment.ts`) com os endpoints de **UsuariosApp** e **ClientesApp**.
4. Inicie a aplicação:
   ```bash
   ng serve
   ```
5. Acesse no navegador:
   ```
   http://localhost:4200
   ```

---

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir **issues** ou enviar **pull requests** no repositório oficial.

---

## Licença

Este projeto é licenciado sob a [MIT License](LICENSE).

