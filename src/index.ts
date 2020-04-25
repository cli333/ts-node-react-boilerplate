import express from "express";
import path from "path";
const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());

app.get("/backend", (req: express.Request, res: express.Response) => {
  res.json({ message: "Hello world!" });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => console.log(`Listening on port: ${port}`));
