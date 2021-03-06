# AngularCeliart

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

##  Angular project folder structure

    |-- app    
         |-- modules    
           |-- home    
               |-- [+] components    
               |-- [+] pages    
               |-- app-routing.module.ts    
               |-- app.module.ts    
         |-- core    
           |-- [+] authentication    
           |-- [+] footer    
           |-- [+] guards    
           |-- [+] http    
           |-- [+] interceptors    
           |-- [+] mocks    
           |-- [+] services    
           |-- [+] header    
           |-- core.module.ts    
           |-- ensureModuleLoadedOnceGuard.ts    
           |-- logger.service.ts    
         |    
         |-- shared    
              |-- [+] components    
              |-- [+] directives    
              |-- [+] pipes    
              |-- [+] models    
         |    
         |-- [+] configs    
    |-- assets    
         |-- scss    
              |-- [+] partials    
              |-- _base.scss    
              |-- styles.scss

### index.ts

We can import more than one component, module from same import statement even though they are in different .ts files.
This is possible because of index.ts file.  
"Typescript module resolution picks up index.ts file from folder name if it is there and try to import packages."  
We can now import all these components and module with a single statement  
