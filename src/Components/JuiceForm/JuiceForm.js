import React, { useState } from "react";
// import "./Components/JuiceCards/JuiceCards.css";

function JuiceForm() {
  const [show, setForm] = useState([
    {
      isShow: false,
    },
  ]);
  const [data, setData] = useState([
    {
      name: '',
      image: ''
    }
  ])
  const handleNameInput = (event) => {
    setData({name: event.target.value})
    console.log(event.target.value)
  }
  const handleImageInput = (event) => {
    setData({image: event.target.value})
    console.log(data)
  }
  const postEvent = (event, name, image) => {
    event.preventDefault()
    console.log(data)
    console.log({...data})
    const API_URL = "https://629e71fe3dda090f3c19d701.mockapi.io/v1/meals";
    fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify()
    })
      .then((response) => response.json())
      .then((data) => {
        
      })
      .catch((err) => console.log(err));
  }
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
        // method="post"
        onSubmit={postEvent}
      >
        <div className="wrapper">
          <input
            type="text"
            name="name"
            id=""
            placeholder="Enter the juice name .."
            onChange={ handleNameInput}
          />
          <input
            type="text"
            name="image"
            id=""
            placeholder="https://example.com"
            onChange={handleImageInput}
          />
          <input type="submit" />
        </div>
      </form>
    </>
  );
}

export default JuiceForm;
