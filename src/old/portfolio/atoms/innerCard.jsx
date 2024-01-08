import React from "react";

export const InnerCardAtom = props => {
  return (
    <div className="pfAttrElement">
      <div className="attrLabelClass">{props.label}</div>
      <div className="attrValueClass">{props.value}</div>
    </div>
  );
};
