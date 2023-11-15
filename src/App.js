import Photos from "./components/Photos";
import { photosList } from "./Data";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Photos photos={photosList} />
    </div>
  );
}
