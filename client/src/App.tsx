import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { CreatePost, Home } from "./pages";

import { walleLogo } from "./assets";

const App = () => (
  <BrowserRouter>
    <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
      <Link to="/">
        <img src={walleLogo} alt="logo" className="w-28 object-contain" />
      </Link>

      <Link
        to="/create-post"
        className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
      >
        Create
      </Link>
    </header>
    <main
      className="sm:p-8 px-4 py-8 w-full bg-gradient-to-r
    from-pink-200
    via-red-200
    to-yellow-200
    background-animate min-h-[calc(100vh-73px)]"
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </main>
  </BrowserRouter>
);

export default App;
