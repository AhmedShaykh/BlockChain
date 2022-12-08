    - name: Create Package.json
      cmd: npm init

    - name: Create TS Config.json
      cmd: tsc --init

    - name: Install Node Types In DevDependencies
      cmd: npm install or yarn add --save-dev @types/node

    - name: Install Chalk Package
      cmd: npm install or yarn add chalk

    - name: Install Chalk Package In DevDependencies
      cmd: npm install or yarn add --save-dev @types/chalk

    - name: Transpile TypeScript To JavaScript File
      cmd: tsc

    - name: Run JavaScript In Shell
      cmd: node src/filename.js