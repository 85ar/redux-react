import AppContent from "../AppContent";
import Counter from "../Counter";
import Header from "../Header";
import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <AppContent />
      <Counter />
    </div>
  );
};

export default App;
