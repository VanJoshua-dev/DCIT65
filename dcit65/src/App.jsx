import "./App.css";
import MainContainer from "./main-container";
import "@fontsource/anonymous-pro";
import TargetCursor from "./components/TargetCursor";
function App() {
  return (
    <>
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor={true}
        parallaxOn={true}
      />
      <MainContainer />
    </>
  );
}

export default App;
