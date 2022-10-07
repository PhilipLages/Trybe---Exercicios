FROM node

WORKDIR /usr/src/app

COPY package.json .
# O ponto sinaliza o caminho do arquivo no diretório.

RUN npm install

COPY  . .
# O primeiro ponto sinaliza que vai copiar todos os arquivos do diretório da aplicação (no caso, index.js), enquanto o segundo ponto sinaliza que irá mandar os arquivos para o diretório de trabalho do container, o WORKDIR.

EXPOSE 3000
# A porta da aplicação no navegador (no caso, localhost:3000).

CMD ["node", "index.js"]
