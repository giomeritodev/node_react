const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3333;


const indexRouter = require("./routes/index");
const ongsRouter = require("./routes/ongs_route");
const incidentsRouter = require("./routes/incidents_route");
const profileRouter = require("./routes/profile_route");
const sessionRouter = require("./routes/session_route");

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());


app.use("/", indexRouter);
app.use("/ongs", ongsRouter);
app.use("/incidents", incidentsRouter);
app.use("/profile", profileRouter);
app.use("/session", sessionRouter);

app.listen(port);