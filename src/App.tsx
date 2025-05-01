import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import { ThemeProvider } from "./components/theme-provider";
import Analyze from "./pages/Analyze";
import Results from "./pages/Results";
import WrongPage from "./pages/WrongPage";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import Baustelle from "./pages/Baustelle";

const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      { path: "/", Component: Home },
      { path: "/analyze", Component: Analyze },
      { path: "/results", Component: Results },
      { path: "/impressum", Component: Impressum },
      { path: "/datenschutz", Component: Datenschutz },
      { path: "/baustelle", Component: Baustelle },
      { path: "*", Component: WrongPage },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
