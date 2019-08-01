Esse é um projeto base escrito em node utilizando typescript. 
Como ferramenta de revisão de código é utilizado eslint

### Configuração do typescript

As configurações do typescript encontram-se no arquivo tsconfig.json

### Configurações do eslint

As configurações do eslint estão nos arquivos .eslintignore e .eslintrs.js.
Como auxiliar é utilizado o prettier, que tem seu arquivo de configuração localizado no arquivo .prettierrc.js

### Dependências globais

É recomendado ter como dependência global o ts-node, typescript e o eslint.

npm install --global ts-node typescript eslint

### NPM Install
npm install

### Rodar o projeto
npm run start

### Rodar o lint/corrigir o código 
npm run lint

npm run lint-fix

### Compilar o projeto
npm run build
