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
      npx tsc --init --rootDir src --outDir lib --esModuleInterop --resolveJsonModule --lib es6,dom --module commonjs

    -Incluir no tsconfig.json
      "include": ["src"],
      "exclude": ["node_modules", "**/__tests__/*"]
    
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
`;

console.log(comment);
