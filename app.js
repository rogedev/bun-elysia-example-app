import Elysia from "elysia"
import { LinkedList } from "./src/LinkedList"

const app = new Elysia()
const PORT = process.env.PORT || 3000

app.get("/", () => "hello world")

app.post("/transformArrayToLinkedListApi", ({ body }) => {
  const { array } = body

  if (!Array.isArray(array)) return { errorMessage: "Invalid javascript Array" }

  return LinkedList.fromArray(array)
})

app.listen(PORT)

console.log(`💻 Elysia is running at 'http://localhost/'${PORT} 🌐`)
