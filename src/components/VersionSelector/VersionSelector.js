import React from "react";
import Card from "../UI/Card";

import classes from "./VersionSelector.module.css";

const VersionSelector = (props) => {
  return (
    <React.Fragment>
      <Card className={classes.input}>
        <h1 className={classes.header}>Select Version</h1>
        <button className={classes.btn_selector}>Dungeons & Dragons 5e</button>
        <button className={classes.btn_selector}>
          Dungeons & Dragons Rick and Morty
        </button>
      </Card>
    </React.Fragment>
  );
};

export default VersionSelector;
