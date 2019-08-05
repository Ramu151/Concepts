import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { model_portfolios as model } from "./data";
import { UserCards } from "./atoms/userCard";

import "./portfolio.scss";
const PortFolioContext = React.createContext();

const PortFolio = () => {
  const GetPortfolioModel = (ele, arr) => {
    return (
      <PortFolioContext.Provider value={ele}>
        <UserCards name="suresh" />
      </PortFolioContext.Provider>
    );
  };
  const template = model.map((ele, index, arr) => {
    return GetPortfolioModel(ele, arr);
  });

  return <main>{template}</main>;
};

ReactDOM.render(<PortFolio />, document.getElementById("root"));
export { PortFolioContext };

// const UserCards = props => {
//   console.log('context ',props);
//   let {volatility,currency,mean_return, name} = props;
//   let childCards = []
//   for(let user in props){
//     console.log('userData',user,props[user]);
//     childCards.push(<InnerCardAtom label={user} value={props[user]}/>)
//   }
//   console.log('childCards',childCards);
//   return (
//         <section
//     className="pfSection"
//     style={{ backgroundImage: `url(${faker.image.avatar()})` }}
//     >
//     {childCards}
//     </section>
//   );
// };

// const InnerCardAtom = props => {
//   console.log('innercard',props)
//   return(
//     <div className="pfAttrElement">
//       <div className="attrLabelClass">{props.label}</div>
//       <div className="attrValueClass">{props.value}</div>
//     </div>
//   )
// }
