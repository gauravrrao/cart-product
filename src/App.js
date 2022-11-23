import Main from "./components/Main";
import "./App.css";
import Frame from "./components/Frame";

function App() {
  return (
    <>
     
        <div className="App">
          <Main
            image={"./Screenshot from 2022-11-23 17-20-42.png"}
            name="Relaxed Fit T-shity"
            price="$12.99"
          />
          <Main
            image={"./Screenshot from 2022-11-23 17-20-58.png"}
            name="Nylon Sports Cap"
            price="$14.99"
          />
          <Main
            image={"./Screenshot from 2022-11-23 17-21-10.png"}
            name="Sneakers"
            price="$34.99"
          />
          <Main
            image={"./Screenshot from 2022-11-23 17-34-36.png"}
            name="Slim Fit Suit Vest"
            price="$17.99"
          />
        </div>
        <div className="container">
          <Frame/>
      </div>
    </>
  );
}

export default App;
