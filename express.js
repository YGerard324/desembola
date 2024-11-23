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
app.use("/api/user", isAuth, userRouter);
app.use("/api/address", isAuth, addressRouter);
app.use("/api/student", isAuth, studentRouter);
app.use("/api/family", isAuth, familyRouter);
app.use("/api/teacher", isAuth, teacherRouter);
app.use("/api/class", isAuth, classRouter);
app.use("/api/lesson", isAuth, lessonRouter);
app.use("/api/exam", isAuth, examRouter);
app.use("/api/discipline", isAuth, disciplineRouter);
app.use("/api/ranking", isAuth, rankingRouter);
app.use("/api/status", isAuth, statusRouter);
app.use("/api/team", isAuth, teamRouter);

// Rotas públicas
app.use("/api/auth", authRouter);

const axios = require('axios');

async function getPublicIP() {
    try {
        const response = await axios.get('https://api.ipify.org?format=json');
        console.log(`Seu IP público é: ${response.data.ip}`);
    } catch (error) {
        console.error('Erro ao obter o IP público:', error);
    }
}

getPublicIP();

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
