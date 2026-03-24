import { Activity, useEffect, useState } from 'react'
import {Typography } from "@mui/material"
import axios from 'axios';

function App() {


  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get<Activity[]>('https://localhost:5001/api/activities')
    .then(response => setActivities(response.data))

  }, [])

  return (
    <>
    <Typography>Social Media App</Typography>
    <ul>
      {activities.map((activity) => (
        <li key={activity.id}>{activity.title}</li>
      ))}
    </ul>
    </>
    
  )
}

export default App
