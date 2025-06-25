const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const azulRoutes = require("./routes/azulRoutes");
const authRoutes = require("./routes/authRoutes");
const pesquisaRoutes = require("./routes/pesquisaRoutes");

const app = express();
const port = process.env.PORT || 5000;

// ✅ Configura CORS de forma segura
app.use(cors({
  origin: [
    "http://31.97.170.249",
    "http://usegroup.com.br",
    "https://usegroup.com.br",
    "https://www.usegroup.com.br",
    "http://www.usegroup.com.br"
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

// 🔗 Rotas da API
app.use("/api", authRoutes);
app.use("/api", pesquisaRoutes);
app.use("/api", azulRoutes);

// 🔥 (Opcional) Caso queira servir o Front junto no mesmo servidor
// app.use(express.static(path.join(__dirname, "../dist")));
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../dist/index.html"));
// });

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

