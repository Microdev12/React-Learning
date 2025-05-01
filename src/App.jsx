import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
// import componentImage from "./assets/components.png";
// import configImage from "./assets/config.png";
// import jsxUIImage from "./assets/jsx-ui.png";
// import stateMgmtImage from "./assets/state-mgmt.png";

// Object Destructing

function App() {
  function handlerClick() {
    console.log("Hello Aditya!");
  }

  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={handlerClick}>Components</TabButton>
            <TabButton onSelect={handlerClick}>JSX</TabButton>
            <TabButton onSelect={handlerClick}>Props</TabButton>
            <TabButton onSelect={handlerClick}>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
