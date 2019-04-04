import React, { useState } from "react";
import ReactDOM from "react-dom";

import * as wasm from "wasm-1";

function App() {
  let [primeArg, setPrimeArg] = useState(100);
  let [fibArg, setFibArg] = useState(10);
  let [primeRes, setPrimeRes] = useState(null);
  let [fibRes, setFibRes] = useState(null);

  let [testRes, setTestRes] = useState(null);

  let runPrime = () => {
    let res = wasm.primes_up_to(primeArg);
    setPrimeRes(res);
  };
  let runFib = () => {
    let res = wasm.fibonacci(fibArg);
    setFibRes(res);
  };
  /* ------------- TEST FUNCTION ------ */
  let runTestFn = () => {
    let res = wasm.test2("Webinar");
    setTestRes(res);
  };

  return (
    <main role="main" className="container">
      <div className="starter-template">
        <h1>WASM TEST</h1>
        <p className="lead">Testing webassembly calls</p>
      </div>
      <div className="list-group">
        <div className={"list-group-item"}>
          <div>
            <p>PRIME</p>
            <input
              type={"number"}
              value={primeArg}
              onChange={e => setPrimeArg(e.target.value)}
            />
            <br />
            <button className={"btn btn-primary"} onClick={runPrime}>
              RUN
            </button>
            <pre>{JSON.stringify(primeRes, null, 2)}</pre>
          </div>
        </div>
        <div className={"list-group-item"}>
          <div>
            <p>FIBONACCI</p>
            <input
              type={"number"}
              value={fibArg}
              onChange={e => setFibArg(e.target.value)}
            />
            <br />
            <button className={"btn btn-primary"} onClick={runFib}>
              RUN
            </button>
            <pre>{JSON.stringify(fibRes, null, 2)}</pre>
          </div>{" "}
        </div>

        <div className={"list-group-item"}>
          <div>
            <p>TEST</p>

            <button className={"btn btn-primary"} onClick={runTestFn}>
              RUN
            </button>
            <pre>{JSON.stringify(testRes, null, 2)}</pre>
          </div>
        </div>
      </div>
    </main>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
