/**
 * We can import more than one component, module from same import statement even though they are in different .ts files.
 * This is possible because of index.ts file.
 * "Typescript module resolution picks up index.ts file from folder name if it is there and try to import packages."
 * We can now import all these components and module with a single statement
 */
export * from './user.model';
