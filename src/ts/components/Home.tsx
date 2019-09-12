import * as React from "react";
import { withStyles } from "@material-ui/core/styles";
import Header from "./Header";
import myImage from "../../img/scholeio.png";

const styles = () => ({
  topImage: {
    backgroundImage: `url(${myImage})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100%",
    height: "90vh"
  }
});

const Home: React.FC<any> = props => {
  const { classes } = props;
  return (
    <React.Fragment>
      <Header />
      aabテスト
      <div className={classes.topImage} />
    </React.Fragment>
  );
};

export default withStyles(styles)(Home);
