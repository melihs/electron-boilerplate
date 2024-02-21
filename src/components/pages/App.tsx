import Sidebar from "../organisms/sidebar/Sidebar";
import AppLayout from "../templates/appLayout/AppLayout";
import Footer from "../organisms/footer/Footer";

const App = () => {
  return (
    <main className="container">
      <Sidebar />
      <AppLayout />
      <Footer />
    </main>
  );
};

export default App;
