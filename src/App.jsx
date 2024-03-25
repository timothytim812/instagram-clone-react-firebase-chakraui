import { BrowserRouter as Router } from "react-router-dom";
import PageLayout from "./assets/Layouts/PageLayout";
import Routes from "./Routes";

function App() {
  return (
    <Router>
      <PageLayout>
        <Routes />
      </PageLayout>
    </Router>
  );
}

export default App;
