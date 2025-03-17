import React from "react";
import { createRoot } from "react-dom/client";
import TraficLight from "./components/TraficLight.jsx";

const root = createRoot(document.getElementById("root"));
root.render(<TraficLight />);
