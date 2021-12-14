import AppContent from "../AppContent";
import Counter from "../Counter";
import EmployeeList from "../EmployeeList";
import Header from "../Header";
import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <AppContent />
      <Counter />
      <EmployeeList />
    </div>
  );
};

export default App;
