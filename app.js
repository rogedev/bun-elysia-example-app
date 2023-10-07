import Elysia from "elysia"
import { api } from "./src/api/api";

const app = new Elysia()
api(app)
