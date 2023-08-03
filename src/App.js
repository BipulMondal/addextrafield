import { useState } from "react";
import "./App.css";


function App() {
  const [data, setData] = useState([""]);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(data);
  }

  return (
    <>
      {data.map((x, index) => {
        return (
          <div className=" w-1/2 flex items-center" key={index}>
            <div className="bg-gray-200 h-auto w-2/3 p-4 text-left">
              <label htmlFor="">Add Text</label>
              <br />
              <input
                type="text"
                onChange={(e) => {setData(prev => {
                  prev[index] = e.target.value;
                  
                  return JSON.parse(JSON.stringify(prev))
                })}}
                className="w-full p-2.5 text-lg"
              />
            </div>

            {data.length - 1 === index ? <button
              className="h-8 w-32 bg-gray-500 ml-4 text-white font-bold"
              onClick={() => {setData((prev) => {
                console.log("on add", prev);
                let updated = [...prev, ""]
                return JSON.parse(JSON.stringify(updated));
              })}}
            >
              Add
            </button> : <button className="h-8 w-32 bg-red-500 ml-4" onClick={() => {
              setData((prev) => {

                prev.splice(index, 1);
                console.log("on del", prev);

                let updated = [...prev,""]

                return JSON.parse(JSON.stringify(updated))
                
              })
            }}>
              delete
            </button>}


            {/* {showAdd === false ? (<button
              className="h-8 w-32 bg-gray-500 ml-4 text-white font-bold"
              onClick={handleAdd}
            >
              Add
            </button>) : (<button
              className="h-8 w-32 bg-gray-500 ml-4 text-white font-bold"
              onClick={handleAdd}
            >
            </button>)}


            {showDelete === true ? (<button 
            ></button>):(<button className="h-8 w-32 bg-red-500 ml-4" onClick={handleDelete}>
              delete
            </button>)} */}
          </div>
        );
      })}

      <button type="submit" className="mt-2 btn btn-primary" onClick={handleSubmit}>Submit</button>
    </>
  );
}

export default App;
