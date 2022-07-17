## Note

### Prisma

> Prisma generate command will build schema and output

### Federation & @apollo/subgraph

> Implement if splitting backend into microservices to
> unify subgraphs into single graph

When adding new models and resolvers, export them in typeDefs, generate prisma schema, dont use generate folder.
Add to mappers in codegen

Generated folder can probably be used, just import correct prisma client in graphql server file
