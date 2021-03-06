function greeter(person: string): string {
  return `Hello, ${person}`;
}

let user = 'Mateus R Marmitt';

console.log(greeter(user));

let comment = ` 
  Commentario:
    -Iniciar projeto
      npm init -y

    //Convertendo pra typescript e buildando
    -Se não existir o tsconfig.js
      npx tsc --init --rootDir ./src --outDir ./dist --esModuleInterop --resolveJsonModule --lib es2018,dom --module commonjs

    -Incluir no tsconfig.json
      "include": ["src"],
      "exclude": ["node_modules", "**/__tests__/*", "dist"]
    
    -Aterar no tsconfig.json
      "outDir": "./dist",
      "rootDir": "./src",
    
    //Adicionando o lint  
    -Tutorial:
      https://dev.to/robertcoopercode/using-eslint-and-prettier-in-a-typescript-project-53jb

      -Adicionando o lint plugin
        npm install --save-dev eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser
      -Criar arquivo
        eslintrc.js    

      -Adicionar handle code format
        npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier
      -Criar arquivo
        prettierrc.js

      -Adicionando o nodemon para não precisar recompliar o projeto o tempo todo (sucrase é pra compilar rapido)
        npm install --save-dev nodenom sucrase
      -Criar arquivo
        nodemon.json
        
`;

console.log(comment);
