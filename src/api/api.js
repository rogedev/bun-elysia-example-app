import { transformArrayToLinkedList } from "../services/transformArrayToLinkedList";
export function api(app) {
    const PORT = process.env.PORT || 3000

    app.get("/", () => "hello world")

    app.post("/transformArrayToLinkedListApi", ({ body }) => {
        const { array }  = body;
        return transformArrayToLinkedList(array);
    })

    app.listen(PORT)

    console.log(`💻 Elysia is running at 'http://localhost/'${PORT} 🌐`)
}