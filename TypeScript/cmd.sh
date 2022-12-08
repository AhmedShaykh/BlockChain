    - name: Create Package.json File
      cmd: npm init

    - name: Create TS Config.json File
      cmd: tsc --init

    - name: Install Node Types
      cmd: npm install or yarn add --save-dev @types/node

    - name: Transpile TypeScript To JavaScript File
      cmd: tsc

    - name: Run JavaScript In Shell
      cmd: node src/filename.js