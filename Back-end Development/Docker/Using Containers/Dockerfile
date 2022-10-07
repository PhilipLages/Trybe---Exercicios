FROM node

WORKDIR /usr/src/app

COPY package.json .
# O ponto sinaliza que o arquivo está no pathname do WORKDIR;

RUN npm install

COPY  . .
# O primeiro ponto sinaliza que vai copiar todos os arquivos da aplicação, enquanto o segundo ponto sinaliza que irá mandar os arquivos para o diretório de trabalho, o WORKDIR

EXPOSE 3000

CMD ["node", "index.js"]
