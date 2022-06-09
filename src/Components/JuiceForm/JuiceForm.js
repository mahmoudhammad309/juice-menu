import React, { useState } from "react";
// import "./Components/JuiceCards/JuiceCards.css";

function JuiceForm() {
  //? this state shows and hides the form
  const [show, setForm] = useState([
    {
      isShow: false,
    },
  ]);

  //? this state stores the name and links image that comes from the user
  const [data, setData] = useState([
    {
      name: "",
      image: "",
    },
  ]);

  //? this function is responsible for getting the data from the user and storing it in the data state
  const handleInput = (event) => {
    const newData = { ...data };
    newData[event.target.id] = event.target.value;
    setData(newData);
  };

  //? this function is responsible for posting the data to API
  const postEvent = (event) => {
    event.preventDefault();
    if (data.name && data.image) {
      const API_URL = "https://629e71fe3dda090f3c19d701.mockapi.io/v1/meals";
      fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .catch((err) => console.log(err));
      setForm({ isShow: false });
    }
  };
  return (
    <>
      <button
        onClick={() => {
          show.isShow ? setForm({ isShow: false }) : setForm({ isShow: true });
        }}
      >
        +
      </button>
      <form
        className={`${!show.isShow ? "hideForm" : "showForm"}`}
        action=""
        onSubmit={(e) => postEvent(e)}
      >
        <div className="wrapper">
          <input
            type="text"
            name="name"
            id="name"
            value={data.name}
            placeholder="Enter the juice name .."
            onChange={(e) => handleInput(e)}
          />
          <p>{!data.name && "you can not enter empty value"}</p>
          <input
            type="url"
            name="image"
            id="image"
            value={data.image}
            placeholder="https://example.com"
            onChange={(e) => handleInput(e)}
          />
          <input type="submit" />
        </div>
      </form>
    </>
  );
}

export default JuiceForm;
