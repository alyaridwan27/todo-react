import Header from "components/Header";
import Main from "components/Main";
import Footer from "components/Footer";
import { TodosProvider } from "contexts/todos";

function App() {
  return (
    <TodosProvider>
      <div className="todoapp">
        <Header />
        <Main />
        <Footer />
      </div>

      <div className="App">
      <div className="center-content">Alya Nursalma Ridwan -2602184265</div>
    </div>
    </TodosProvider>
  );
}

export default App;