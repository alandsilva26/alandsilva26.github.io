import React from "react";
import myData from "../../../data/my-data";

const Technical = (): JSX.Element => {
  const { technical } = myData;

  console.log(technical);

  //   const programmingLanguages = technical.language.map((item, index) => {
  //     return (
  //       <div key={index} className="chip">
  //         {item}
  //       </div>
  //     );
  //   });

  const dataList = technical.map((itemParent, indexParent) => {
    const childList = itemParent.content.map((itemChild, indexChild) => {
      return (
        <div key={indexChild} className="chip">
          {itemChild}
        </div>
      );
    });
    return (
      <div key={indexParent} className="col col-12 col-md-10">
        <div className="title">
          <p>{itemParent.name}</p>
        </div>
        <div className="chip-group">{childList}</div>
      </div>
    );
  });

  return (
    <div className="row technical">
      {/* <div className="col col-10">
        <div className="title">
          <p>Programming Languages</p>
        </div>
        <div className="chip-group">{programmingLanguages}</div>
      </div>
      <div className="col col-10">
        <div className="title">
          <p>Programming Languages</p>
        </div>
        <div className="chip-group">{programmingLanguages}</div>
      </div>
      <div className="col col-10">
        <div className="title">
          <p>Programming Languages</p>
        </div>
        <div className="chip-group">{programmingLanguages}</div>
      </div> */}
      {dataList}
    </div>
  );
};

export default Technical;
