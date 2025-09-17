import express from "express";
import { ExpressPeerServer } from "peer";

const app = express();

const server = app.listen(9000, () => {
  console.log("✅ PeerJS server running on port 9000");
});

// Настраиваем PeerJS
const peerServer = ExpressPeerServer(server, {
//   path: "/peerjs",
  allow_discovery: true,
});

app.use("/peerjs", peerServer);

app.get("/", (req, res) => {
  res.send("PeerJS server is running");
});
