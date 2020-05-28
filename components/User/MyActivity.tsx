import React from 'react';
import moment from "moment";

export interface Activity {
  label: string;
  date: string;
}

interface Props {
  activity: Activity
}

const MyActivity: React.FC<Props> = ({activity}) => {

  let date = moment(activity.date);

  return (
    <>
      {activity && <div>
        <p>{date.locale("fr").format('DD MMM')}</p>
        <p>Vous avez demandé la <b>{activity.label}</b>.</p>
        <hr/>
      </div>
      }
    </>
  )
};


export default MyActivity;
