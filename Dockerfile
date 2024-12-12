   FROM node:20.2.0 AS builder

   # Create app directory inside the container
   WORKDIR /app

   # Copy package.json and package-lock.json for dependency installation
   COPY package*.json ./
   # COPY .env ./

   # Install app dependencies inside the container
   RUN npm install -f

   # Copy the rest of the application code
   COPY ./app/  ./app/ 
   COPY ./components/  ./components/ 
   COPY ./lib/  ./lib/ 
   COPY ./public/  ./public/ 
   COPY ./styles/  ./styles/ 
   COPY ./types/  ./types/ 
   COPY ./config/  ./config/ 
   COPY ./lib/  ./lib/ 
   COPY ./*.ts ./
   COPY ./*.config.js ./
   COPY ./*.json ./

   EXPOSE 3000


   # Use the latest Node.js image as the base for the final stage
   # FROM node:20.2.0 AS final

   # Set working directory inside the container
 
   # Copy necessary files from the builder stage
   # COPY --from=builder /app/node_modules ./node_modules
   # COPY --from=builder /app/package*.json ./
   # #COPY --from=builder /app/dist ./dist
   # COPY --from=builder /app/prisma ./prisma

   # Specify the user under which the application should run
   #USER node
   # Build the application
   RUN npm run build

   # 👇 new migrate and start app script
   CMD [  "npm", "run", "start" ]

