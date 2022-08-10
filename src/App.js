import Header from "./components/Header";
import Button from "./components/Button";
import { Image } from "./components/image";
import Navbar from "./components/Navbar";

function App(){
  return  (
    <div>
      <Navbar/>
      <Header />
      <Button label="Add to Cart"/>
      <Button label="Read more"/>
      <Button label="Register"/>
      <Button label="Log in"/>
      <Button label="Sign in"/>
      
      <Image/>
    </div>
    );
}

export default App;