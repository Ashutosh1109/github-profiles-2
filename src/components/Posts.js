import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles({
  title: {
    background: ""
  },
  name: {
    background: "#39a0ca"
  }
});

const Posts = ({ posts, loading }) => {
  const classes = useStyles();
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      {posts.map(post => (
        // <li key={post.id} className="list-group-item">
        //   {post.name}
        // </li>
        <Card className={classes.title}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                <img src={post.avatar_url} />
              </Avatar>
            }
            title={post.login}
            subheader={post.id}
          />
          <CardContent>
            <Typography className={classes.root}>
              <Link href={post.html_url}> Profile Link</Link>
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Posts;
