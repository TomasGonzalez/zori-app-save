import React from "react";

import Modal2 from "components/Modal2";

export default function () {
  return (
    <Modal2
      title={"Team purchase pricing rules"}
      subTitle={
        "Specify rules on how you want team purchasing to work for this product"
      }
      isOpen={true}
    >
      <p>This is the team purchase pricing rule</p>
    </Modal2>
  );
}
