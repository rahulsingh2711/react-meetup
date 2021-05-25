import React from "react";
import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useHistory} from 'react-router-dom'


export default function NewMeetup() {
    const history = useHistory();

  function addMeetupHandler(meetupData) {
    fetch(
      "https://react-meetup-project-12713-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(
        history.replace('/')
    );
  }
  return (
    <section>
      <h1> Add new Meetup </h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}
