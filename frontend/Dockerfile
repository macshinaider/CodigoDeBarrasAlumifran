# Etapa 1: Construir a aplicação React
FROM node:18 as build

# Defina o diretório de trabalho no contêiner
WORKDIR /app

# Copie o arquivo package.json e package-lock.json para o contêiner
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie o código fonte da aplicação para o contêiner
COPY . .

# Construa o projeto React
RUN npm run build

# Etapa 2: Preparar o servidor Nginx
FROM nginx:latest

# Copie os arquivos de compilação da aplicação React para o diretório de publicação do Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Exponha a porta 80 para acessar a aplicação
EXPOSE 80

# O servidor Nginx será iniciado automaticamente pelo Docker ao iniciar o contêiner

# Comando de inicialização do contêiner (não é necessário especificar aqui)
CMD ["nginx", "-g", "daemon off;"]
