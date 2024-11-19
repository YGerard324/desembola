const express = require("express");
const userRouter = require("./routes/UserRouter");
const authRouter = require("./routes/AuthRouter");
const addressRouter = require("./routes/AddressRouter");
const studentRouter = require("./routes/StudentRouter");
const familyRouter = require("./routes/FamilyRouter");
const teacherRouter = require("./routes/TeacherRouter");
const classRouter = require("./routes/ClassRouter");
const lessonRouter = require("./routes/LessonRouter");
const examRouter = require("./routes/ExamRouter");
const disciplineRouter = require("./routes/DisciplineRouter");
const rankingRouter = require("./routes/RankingRouter");
const statusRouter = require("./routes/StatusRouter");
const teamRouter = require("./routes/TeamRouter");
const isAuth = require("./middleware/IsAuth");

const app = express();
const port = 3000;

app.use(express.json());

// Rotas protegidas com autenticação
app.use("/user", isAuth, userRouter);
app.use("/address", isAuth, addressRouter);
app.use("/student", isAuth, studentRouter);
app.use("/family", isAuth, familyRouter);
app.use("/teacher", isAuth, teacherRouter);
app.use("/class", isAuth, classRouter);
app.use("/lesson", isAuth, lessonRouter);
app.use("/exam", isAuth, examRouter);
app.use("/discipline", isAuth, disciplineRouter);
app.use("/ranking", isAuth, rankingRouter);
app.use("/status", isAuth, statusRouter);
app.use("/team", isAuth, teamRouter);

// Rotas públicas
app.use("/auth", authRouter);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
