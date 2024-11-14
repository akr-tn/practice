import { Header } from "./Header";
import { Nav } from "./Nav";
import { Main } from "./Main";
import { Footer } from "./Footer";

function App() {
  return (
    <div className="app-container">
      <Header />
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9vTQQKswoaJXT5OQWWVtvyH9GKBoKlxMk1g&s" />
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
