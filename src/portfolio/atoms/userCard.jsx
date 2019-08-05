import React from "react";
import { InnerCardAtom } from "./innerCard";
import faker from "faker";
import { PortFolioContext } from "../portfolio";

const UserCards = props => {
  return (
    <PortFolioContext.Consumer>
      {context => (
        <section
          className="pfSection"
          style={{ backgroundImage: `url(${faker.image.city()})` }}
        >
          {GetInnerCards(context)}
        </section>
      )}
    </PortFolioContext.Consumer>
  );
};

const GetInnerCards = context => {
  return Object.keys(context).map((ele, i, arr) => {
    return ele !== "constituents" ? (
      <InnerCardAtom label={ele} value={context[ele]} />
    ) : (
      ""
    );
  });
};

export { UserCards };
