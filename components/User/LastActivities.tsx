import React, {useEffect, useState} from 'react';
import axios from "axios";
import MyActivity, {Activity} from "./MyActivity";

interface Props {
  count: number
}

const LastActivities: React.FC<Props> = () => {
  const [activities, setActivities] = useState<Array<Activity>>(null);

  useEffect(() => {
    async function fetchActivities() {
      const data = await axios.get("/api/user/activities");
      setActivities(data.data);
    }

    fetchActivities();
  }, []);

  return (
    <>
      {activities && <div>
        {activities.map(activity => (
          <MyActivity activity={activity}/>
        ))}
      </div>
      }
    </>
  )
};


export default LastActivities;
