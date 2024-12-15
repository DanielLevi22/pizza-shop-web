FROM node:23-alpine

WORKDIR /app

# Instalar pnpm globalmente
RUN npm install -g pnpm

# Copiar os arquivos para o contêiner
COPY . .

# Mudar a propriedade dos arquivos para o usuário "daniel"
RUN addgroup dev && adduser -S -G dev daniel
RUN chown -R daniel:dev /app

# Rodar como root para garantir a instalação das dependências
USER root
RUN pnpm install

RUN chown -R daniel:dev /app/node_modules

# Voltar para o usuário "daniel" após a instalação
USER daniel

# Expor a porta para o Vite
EXPOSE 5173

# Comando para rodar a aplicação
CMD ["pnpm", "run", "dev"]
