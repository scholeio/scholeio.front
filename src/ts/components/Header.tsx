import * as React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = () => ({});

const Header: React.FC = () => {
  return (
    <React.Fragment>
      <div>
        <div className="">スコレイオ</div>
        <div className="">Scholeio</div>
      </div>
      <div className="">
        <span>スコレイオとは？</span>
        <span>ニュース</span>
        <span>よくある質問</span>
        <span>スコレイオとは？</span>
      </div>
    </React.Fragment>
  );
};

export default withStyles(styles)(Header);
