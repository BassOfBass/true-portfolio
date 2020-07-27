import React from "react";
import { SuperForm } from "./SuperForm";
import { DaveTutorials } from "./DaveTutorials";

export function MiscMaster() {
  return (
    <section className="miscellaneous">
      <h2>Misc components demo</h2>
      <SuperForm />
      <DaveTutorials />
    </section>
  );
}