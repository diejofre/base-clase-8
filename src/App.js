import Header from "./components/Header";
import List from "./components/List";

import data from "./data.json";

const App = function () {
  const { movies, series } = data;
  return (
    <div>
      <Header />
      <main>
        <nav>
          <h3>Movies</h3>
          <h3>Series</h3>
        </nav>
        <ul>
          <List list={movies} />
          <List list={series} />
        </ul>
      </main>
    </div>
  );
};

export default App;
