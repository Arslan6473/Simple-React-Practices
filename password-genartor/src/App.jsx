import React from "react";
import { useRef } from "react";
import { useState, useCallback, useEffect } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [checkNum, setCheckNum] = useState(false);
  const [checkChar, setCheckChar] = useState(false);
  const passRef = useRef(null);

  const passwordGenartor = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (checkNum) str += "1234567890";
    if (checkChar) str += "!£$%^&*()_=-+}{][~#'@;:>.,<?/";

    for (let index = 1; index <= length; index++) {
      let charIndex = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(charIndex);
    }

    setPassword(pass);
  }, [length, checkNum, checkChar, setPassword]);

  const copyClick = () => {
    passRef.current?.select();
    window.navigator.clipboard.writeText(password);
  };
  useEffect(() => {
    passwordGenartor();
  }, [length, checkNum, checkChar, passwordGenartor]);

  return (
    <>
      <div className="bg-gray-900 min-h-[100vh] ">
        <div className="h-[50vh] flex justify-center items-center">
          <div className="w-full max-w-md mx-auto  bg-gray-700 text-yellow-600 rounded-lg ">
            <p className="text-white text-center py-4 ">
              Generate Strong Password
            </p>
            <div className="flex w-full px-2 ">
              <input
                type="text"
                className="w-full py-3 px-2 rounded-l-lg outline-none"
                placeholder="Password"
                id="password"
                value={password}
                ref={passRef}
                readOnly
              />
              <button
                onClick={copyClick}
                className="bg-blue-500 text-white py-3 px-3 rounded-r-lg"
              >
                Copy
              </button>
            </div>
            <div className=" flex gap-x-4 m-5 pb-4 ">
              <div>
                <input
                  type="range"
                  min={6}
                  max={50}
                  id="passRange"
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                />
                <label htmlFor="passRange">Length : {length}</label>
              </div>

              <div>
                <input
                  type="checkbox"
                  id="inputNum"
                  defaultChecked={checkNum}
                  onChange={() => setCheckNum((prev) => !prev)}
                />
                <label htmlFor="inputNum">Numbers</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="inputChar"
                  defaultChecked={checkChar}
                  onChange={(prev) => setCheckChar((prev) => !prev)}
                />
                <label htmlFor="inputChar">Characters</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
