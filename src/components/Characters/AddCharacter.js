import React from "react";
import Card from "../UI/Card";

import classes from "./AddCharacter.module.css";

const AddCharacter = (props) => {
  return (
    <React.Fragment>
      <Card className={classes.input}>
        <form>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" />
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddCharacter;
