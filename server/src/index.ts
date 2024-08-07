import app from "./server";
import routes from "./routes/routes";
//INTIALIZE PORT
const PORT = process.env.PORT || 5500;
//routes

app.use("/", routes);

app.listen(PORT, () => {
  console.log(`server is running http://localhost:${PORT}`);
});
