import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import { Toaster } from "react-hot-toast";
import { store } from "./redux/store";
import { Provider } from "react-redux";
function App() {
  return (
    <div>
      <Toaster />
      <Provider store={store}>
        <RouterProvider router={routes} />
      </Provider>
    </div>
  );
}

export default App;
