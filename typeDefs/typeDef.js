import { gql } from 'apollo-server-express';
import { fileLoader, mergeTypes } from 'merge-graphql-schemas';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const typesArray = fileLoader(path.join(__dirname, '.', 'schema.graphql'));

export const typeDefs = mergeTypes(typesArray, { all: true });
