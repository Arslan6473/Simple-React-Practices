import React, { useState } from "react";
import InputBox from "./Components/InputBox";
import useCurrencyInfo from "./Hooks/useCurrencyInfo";

function App() {
  
  const [amount , setAmount] = useState(0)
  const [covertedAmount , setConvertedAmount] = useState(0)
  const [from , setForm] = useState("usd")
  const [to , setTo] = useState("pkr")
  const currencyData = useCurrencyInfo(from)
  const options = Object.keys(currencyData)
  
  const convertHandle =()=>{
       setConvertedAmount(amount * currencyData[to])
       

  }

  const swapHandle =()=>{
     setForm(to)
     setTo(from)
     setConvertedAmount(amount)
     setAmount(covertedAmount)
  }



  

  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/4386465/pexels-photo-4386465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="w-full mb-1">
                <InputBox 
                label="From"
                options={options}
                setCurrency={setForm}
                amount={amount}
                currency={from}
                setAmount={setAmount}
                
                 />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                  onClick={swapHandle}
                >
                  swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox 
                label="To"
                options={options}
                setCurrency={setTo}
                amount={covertedAmount}
                setAmount={setAmount}
                currency={to}
                 />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                onClick={convertHandle}
              >
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
