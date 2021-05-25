import React from "react";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";
import { useRef } from "react";

function NewMeetupForm(props) {
  const titleRef = useRef();
  const imageRef = useRef();
  const addressRef = useRef();
  const descriptionRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const titleInput = titleRef.current.value;
    const imageInput = imageRef.current.value;
    const addressInput = addressRef.current.value;
    const descriptionInput = descriptionRef.current.value;

    const meetupData = {
      title: titleInput,
      image: imageInput,
      address: addressInput,
      description: descriptionInput,
    };


    props.onAddMeetup(meetupData);

    
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" id="title" required ref={titleRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" id="image" required ref={imageRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" id="address" required ref={addressRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button> Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
