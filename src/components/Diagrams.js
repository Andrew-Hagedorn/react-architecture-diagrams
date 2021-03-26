import React, { useMemo } from "react";
import styled from "styled-components";
import InternalRouting from "./InternalRouting";
import Service from "./Service";
import Database from "./Database";
import PlacedLink from "./PlacedLink";
import { ComponentTypes } from "../constants";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;

function groupServices(config) {
  const links = [];
  const services = config.services || [];
  const serviceMap = {};
  services.forEach((x) => {
    serviceMap[x.id] = x;
    if (x.Component) {
      return;
    }

    if (x.type === ComponentTypes.Service) {
      x.Component = Service;
    } else if (x.type === ComponentTypes.InternalRouting) {
      x.Component = InternalRouting;
    } else if (x.type === ComponentTypes.Database) {
      x.Component = Database;
    }
  });

  let linkCounter = 1;
  services.forEach((x) => {
    if (x.links) {
      x.links.forEach((l) => {
        l.end = {
          placement: l.end,
          service: serviceMap[l.id],
        };
        l.start = {
          placement: l.start,
          service: x,
        };
        l.counter = linkCounter++;
        links.push(l);
      });
    }
  });

  return { services, links };
}

export default function ReactArchitectureDiagram({ config = {} }) {
  const { services, links } = useMemo(() => {
    return groupServices(config);
  }, [config]);

  return (
    <Wrapper>
      {services.map((x, index) => {
        return <x.Component key={`s-${index}`} {...x} />;
      })}
      {links.map((link, index) => (
        <PlacedLink key={`l-${index}`} link={link} />
      ))}
    </Wrapper>
  );
}
