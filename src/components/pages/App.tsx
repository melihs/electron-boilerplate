import Sidebar from "../organisms/sidebar/Sidebar";
import AppLayout from "../templates/appLayout/AppLayout";

const App = () => {
  return (
    <main className="container">
      <Sidebar />
      <AppLayout />
    </main>
  );
};

export default App;
