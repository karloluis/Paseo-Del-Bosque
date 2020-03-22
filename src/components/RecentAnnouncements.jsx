import React from 'react';
import { Grid } from '@material-ui/core';

export default function RecentAnnouncements() {
  return (
    <Grid container spacing={3}>
      <Announcement title={'Test'} date={'020202'} summary={'Test text'} />
      <Announcement title={'Test2'} date={'020202'} summary={'Test text'} />
    </Grid>
  );
}

function Announcement({ title, date, summary, author }) {
  return (
    <Grid item spacing={2}>
      <article>
        <h1>{title}</h1>
        <h2>{date}</h2>
        <p>{summary}</p>
        {author && <p>{author}</p>}
      </article>
    </Grid>
  );
}
