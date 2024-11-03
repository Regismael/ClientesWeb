# ClientesWeb - Projeto Angular para Gerenciamento de Clientes

Este projeto Angular foi desenvolvido para servir como uma interface de cliente para uma API RESTful em C# dedicada ao gerenciamento de clientes (CRUD - Create, Read, Update, Delete). Utilizamos diversas bibliotecas e ferramentas para garantir uma experiência de usuário fluida e eficiente.

## Funcionalidades Principais

- **CRUD de Clientes**: Integração completa com a API em C# para as operações de criação, leitura, atualização e exclusão de clientes.
- **Paginação**: Implementada com a biblioteca `ngx-pagination` para facilitar a navegação entre páginas de registros.
- **Carregamento com Spinner**: Uso de `ngx-spinner` para exibir animações de carregamento durante as requisições à API.
- **Máscaras de Formulário**: `ngx-mask` foi adicionado para formatar campos de entrada, como CPF, telefone, etc.
- **Ligação com a API**: Conexão com a API RESTful através da biblioteca `HttpClient`, com CORS configurado para permitir requisições da aplicação Angular.

## Tecnologias Utilizadas

- **Angular**: Versão 18.2.10
- **Bootstrap**: A versão mais recente do Bootstrap foi utilizada para estilização e responsividade.
- **ngx-spinner**: Para feedback visual durante o carregamento dos dados.
- **ngx-pagination**: Implementação de paginação para a listagem de clientes.
- **ngx-mask**: Aplicação de máscaras de entrada nos formulários.
- **HttpClient**: Biblioteca do Angular para comunicação HTTP com a API, com suporte a CORS.

## Instalação

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seuusuario/ClientesWeb.git
   cd ClientesWeb
