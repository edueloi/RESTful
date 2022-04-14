# API, REST e RESTFUL


Cliente (client)
Garçon (pedidos, levar seus pedidos, para a cozinha)(API)
Cozinha(Server)

Oque é (API) Acronimo de Application Programing Interface (Interface de Programação de Aplicações) é basicamente um conjunto de rotinas e padrões estabelecidos por uma aplicação, para que outras aplicações possam utilizar as funcionalidades desta aplicação.

- Responsável por estabelecer comunicação entre diferentes serviços.
- Meio de campo entre as tecnologias.
- Intermediador para troca de informações.


## REST

Um acrônimo para Representar State Transfer ( Transferencia de Estado Representativo).

Será feita a transferência de dados de uma maneira simbólica, figurativa, representativa, de maneira didática.

A transferencia de dados, geralmente, usando o protocolo HTTP.

O Rest, Delimita algumas obrigações nessas transferência de dados.

Resources seria então, uma entidade, um objeto.

### 6 NECESSIDADES (Constrains) para ser um RESful

- _Client-server_: Separação do cliente e do armazanamento de dados (servidor), dessa forma, usando o React para WEB e React Nativepara o smartphone, por exemplo.

- _Stateless_: Cada requisição que o cliente faz para o servidor, deverá conter todas as informações necessárias para o servidor entender e responder (RESPONSE) a requisição (REQUEST). Exemplo: A sessão do usuario devera ser enviada em todas as requisições, para saber se aquele usúario está autenticando e apto a usar os serviços, e o servidor não pode lembrar que o cliente foi autenticado na requisição anterior. Nos nossos cursos, temos por padrão usar tokens para as comunicações.

- _Cacheable_: As respostas para uma requisição, deverão ser explicitas ao dizer se aquela requisição, pode ou não ser cacheada pelo cliente

- _Layered System_: O cliente acessa a um endpoint, sem precisar saber da complexidade, de quais passos estão sendo necessarios para o servidor responder a requisição, ou quais outras camadas o servidor estará lidando, para que a requisição seja respondida.

- _Code_on_demand_(optional)_: Dá a possibilidade da nossa aplicação pegar codigos, como o javascript, por exemplo, e executar no cliente;

## RESTFUL

Restful, é a aplicação dos padrões REST.

## BOAS PRATICAS

- Utilizar verbos HTTP para nossas requisições.
- Utilizar plural ou singular na criação dos endpoints? _NÃO_IMPORTA!_ use um padrão!!
- Não deixar barra no final do endpoint

### VERBOS HTTP

- GET: Recebe dados de um Resource.
- POST: Enviar dados ou informações para serem processados por um Resource.
- PUT: Atualizar dados de um Resource.
- DELETE: Deletar um Resource.

- RESOURCE: Um Resource é a chave da abstração no REST. Um resource é qualquer coisa importante o suficiente para ser referenciado com um nome. O REST usa um URI (Uniform Resource Identifier) para identificar o resource. Resource é qualquer coisa que possa ter uma URI.

