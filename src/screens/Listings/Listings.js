import React, { useState } from "react";
import AppLayout from "components/AppLayout";

import NoListings from "screens/Listings/NoListings";
import NewListing from "screens/Listings/NewListing";

export default function (props) {
  const [isCreatingList, setIsCreatingList] = useState(true); //remember to change this to false

  return (
    <AppLayout title={props.title}>
      {!isCreatingList ? (
        <NoListings onClick={() => setIsCreatingList(true)} />
      ) : (
        <NewListing />
      )}
    </AppLayout>
  );
}
