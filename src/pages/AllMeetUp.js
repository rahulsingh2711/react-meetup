import React, { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

export default function AllMeetUp() {
  const [Loading, setLoading] = useState(true);
  const [loadedMeetUps, setloadedMeetUps] = useState([]);
  useEffect(() => {
    setLoading(true);
    fetch(
      "https://react-meetup-project-12713-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup)
        }

        

        setLoading(false);
        setloadedMeetUps(meetups);
      });
  }, []);

  if (Loading) {
    return <section></section>;
  }

  return (
    <section>
      <h1> All Meetups</h1>
      <MeetupList meetups={loadedMeetUps} />
    </section>
  );
}
