import React from "react";

import AppLayout from "components/AppLayout";

export default function (props) {
  return (
    <AppLayout title={props.title}>
      <div>My brand</div>
    </AppLayout>
  );
}
