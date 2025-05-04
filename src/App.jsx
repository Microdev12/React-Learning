import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import { useState } from "react";
import { EXAMPLES } from './data.js'
// import componentImage from "./assets/components.png";
// import configImage from "./assets/config.png";
// import jsxUIImage from "./assets/jsx-ui.png";
// import stateMgmtImage from "./assets/state-mgmt.png";

// Object Destructing

function App() {

  const [selectedTopic, setSelectedTopic] = useState()

  function handlerClick(selectedValue) {
    // TabContent = 'Hello This Tab Print '
    setSelectedTopic(selectedValue)
    console.log(selectedTopic)
  }
  // Second Alternative Solution to render UI Conditionally
  let tabContet = <p>Please select the topic</p>;

  if(selectedTopic) {
    tabContet = <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
  }
  // Using Second Approach the code is bit cleaner 

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
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handlerClick('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handlerClick('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handlerClick('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handlerClick('state')}>State</TabButton>
          </menu>
          {/* {!selectedTopic ?  <p>Please select the Topic</p> : <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>} */ tabContet}

        </section>

      </main>
    </div>
  );
}

export default App;
