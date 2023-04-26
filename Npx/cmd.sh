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

    - name: Install Chalk Animation Package
      cmd: npm install or yarn add chalk-animation

    - name: Install Chalk Animation Package In DevDependencies
      cmd: npm install or yarn add --save-dev @types/chalk-animation

    - name: Install Inquirer Package
      cmd: npm install or yarn add inquirer

    - name: Install Inquirer Package In DevDependencies
      cmd: npm install or yarn add --save-dev @types/inquirer

    - name: Transpile TypeScript To JavaScript File
      cmd: tsc

    - name: Run JavaScript In Shell
      cmd: node src/filename.js