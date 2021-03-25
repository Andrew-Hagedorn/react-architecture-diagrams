import React from "react";
import { LinkType } from "../constants";
import StraightLine from "./StraightLine";
import CurvedLine from "./CurvedLine";

export default function PlacedLink({ link }) {
  const start = link.start.service.Component.computePlacement(link.start);
  const end = link.end.service.Component.computePlacement(link.end);

  if (link.type === LinkType.Curved) {
    return <CurvedLine {...link} start={start} end={end} />;
  }

  return <StraightLine {...link} start={start} end={end} />;
}
