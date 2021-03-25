import React from "react";
import ReactArchitectureDiagram from "../index";
import { ComponentTypes, LinkPosition, LinkType } from "../constants";
import RenderFullScreen from "./render";

export default {
  title: "Diagram/Services",
  component: ReactArchitectureDiagram,
};

export const Simple = () => (
  <RenderFullScreen>
    <ReactArchitectureDiagram
      config={{
        services: [
          {
            id: "1",
            type: ComponentTypes.Service,
            position: { x: 150, y: 50 },
            name: "first service",
            links: [],
          },
          {
            id: "2",
            type: ComponentTypes.Service,
            position: { x: 150, y: 175 },
            name: "second service",
          },
          {
            id: "3",
            type: ComponentTypes.Service,
            position: { x: 150, y: 300 },
            name: "third service",
            links: [
              { id: "2", start: LinkPosition.Top, end: LinkPosition.Bottom },
            ],
          },
          {
            id: "4",
            type: ComponentTypes.InternalRouting,
            height: 350,
            position: { x: 40, y: 30 },
            name: "api.adomain.com",
            links: [
              { id: "1", start: LinkPosition.Right, end: LinkPosition.Left },
              { id: "2", start: LinkPosition.Right, end: LinkPosition.Left },
              { id: "3", start: LinkPosition.Right, end: LinkPosition.Left },
            ],
          },
        ],
      }}
    />
  </RenderFullScreen>
);

export const TwoApis = () => (
  <RenderFullScreen>
    <ReactArchitectureDiagram
      config={{
        services: [
          {
            id: "1",
            type: ComponentTypes.Service,
            position: { x: 150, y: 50 },
            name: "first service",
            links: [
              { id: "2", start: LinkPosition.Bottom, end: LinkPosition.Top },
              {
                id: "8",
                start: LinkPosition.Right,
                end: LinkPosition.Left,
                dashed: 2,
                strokeWidth: 1,
                type: LinkType.Curved,
              },
            ],
          },
          {
            id: "2",
            type: ComponentTypes.Service,
            position: { x: 150, y: 175 },
            name: "second service",
          },
          {
            id: "3",
            type: ComponentTypes.Service,
            position: { x: 150, y: 300 },
            name: "third service",
            links: [
              { id: "2", start: LinkPosition.Top, end: LinkPosition.Bottom },
              {
                id: "8",
                start: LinkPosition.Right,
                end: LinkPosition.Left,
                dashed: 2,
                strokeWidth: 1,
                type: LinkType.Curved,
              },
            ],
          },
          {
            id: "4",
            type: ComponentTypes.InternalRouting,
            height: 350,
            position: { x: 40, y: 30 },
            name: "api.adomain.com",
            links: [
              {
                id: "1",
                start: LinkPosition.Right,
                end: LinkPosition.Left,
                type: LinkType.Curved,
              },
              { id: "2", start: LinkPosition.Right, end: LinkPosition.Left },
              {
                id: "3",
                start: LinkPosition.Right,
                end: LinkPosition.Left,
                type: LinkType.Curved,
                under: true,
              },
            ],
          },
          {
            id: "5",
            type: ComponentTypes.InternalRouting,
            height: 200,
            position: { x: 40, y: 400 },
            name: "www.adomain.com",
            links: [
              {
                id: "3",
                start: LinkPosition.Right,
                end: LinkPosition.Left,
                type: LinkType.Curved,
              },
              {
                id: "6",
                start: LinkPosition.Right,
                end: LinkPosition.Left,
                type: LinkType.Curved,
              },
              {
                id: "7",
                start: LinkPosition.Right,
                end: LinkPosition.Left,
                type: LinkType.Curved,
                under: true,
              },
            ],
          },
          {
            id: "6",
            type: ComponentTypes.Service,
            position: { x: 150, y: 420 },
            name: "first web app",
            color: "#ffffc4",
            links: [
              { id: "3", start: LinkPosition.Top, end: LinkPosition.Bottom },
            ],
          },
          {
            id: "7",
            type: ComponentTypes.Service,
            position: { x: 150, y: 540 },
            name: "second web app",
            color: "#ffffc4",
            links: [
              {
                id: "8",
                start: LinkPosition.Right,
                end: LinkPosition.Left,
                dashed: 2,
                strokeWidth: 1,
                type: LinkType.Curved,
                under: true,
              },
            ],
          },
          {
            id: "8",
            type: ComponentTypes.Service,
            position: { x: 400, y: 300 },
            name: "fourth service",
            links: [
              {
                id: "10",
                start: LinkPosition.Bottom,
                end: LinkPosition.Top,
                strokeWidth: 1,
              },
            ],
          },
          {
            id: "9",
            type: ComponentTypes.InternalRouting,
            height: 620,
            width: 20,
            color: "teal",
            position: { x: 3, y: 10 },
            name: "edge DDOS layer",
          },
          {
            id: "10",
            type: ComponentTypes.Service,
            position: { x: 440, y: 420 },
            name: "postgres",
          },
        ],
      }}
    />
  </RenderFullScreen>
);

export const DatabaseAllSides = () => (
  <RenderFullScreen>
    <ReactArchitectureDiagram
      config={{
        services: [
          {
            id: "1",
            type: ComponentTypes.Database,
            position: { x: 300, y: 50 },
            name: "top db",
            links: [
              { id: "2", start: LinkPosition.Bottom, end: LinkPosition.Top },
              {
                id: "3",
                start: LinkPosition.Left,
                end: LinkPosition.Top,
                type: LinkType.Curved,
              },
              {
                id: "4",
                start: LinkPosition.Right,
                end: LinkPosition.Top,
                type: LinkType.Curved,
              },
            ],
          },
          {
            id: "2",
            type: ComponentTypes.Database,
            position: { x: 300, y: 175 },
            name: "middle db",
          },
          {
            id: "3",
            type: ComponentTypes.Database,
            position: { x: 10, y: 175 },
            name: "left db",
            links: [
              { id: "2", start: LinkPosition.Right, end: LinkPosition.Left },
              {
                id: "1",
                start: LinkPosition.Top,
                end: LinkPosition.Left,
                type: LinkType.Curved,
                under: true,
              },
              {
                id: "5",
                start: LinkPosition.Bottom,
                end: LinkPosition.Left,
                type: LinkType.Curved,
                under: true,
              },
            ],
          },
          {
            id: "4",
            type: ComponentTypes.Database,
            position: { x: 590, y: 175 },
            name: "right db",
            links: [
              { id: "2", start: LinkPosition.Left, end: LinkPosition.Right },
              {
                id: "1",
                start: LinkPosition.Top,
                end: LinkPosition.Right,
                type: LinkType.Curved,
                under: true,
              },
              {
                id: "5",
                start: LinkPosition.Bottom,
                end: LinkPosition.Right,
                type: LinkType.Curved,
                under: true,
              },
            ],
          },
          ,
          {
            id: "5",
            type: ComponentTypes.Database,
            position: { x: 300, y: 300 },
            name: "bottom db",
            links: [
              { id: "2", start: LinkPosition.Top, end: LinkPosition.Bottom },
              {
                id: "3",
                start: LinkPosition.Left,
                end: LinkPosition.Bottom,
                type: LinkType.Curved,
              },
              {
                id: "4",
                start: LinkPosition.Right,
                end: LinkPosition.Bottom,
                type: LinkType.Curved,
              },
            ],
          },
        ],
      }}
    />
  </RenderFullScreen>
);

export const ServiceAllSides = () => (
  <RenderFullScreen>
    <ReactArchitectureDiagram
      config={{
        services: [
          {
            id: "1",
            type: ComponentTypes.Service,
            position: { x: 300, y: 50 },
            name: "top db",
            links: [
              { id: "2", start: LinkPosition.Bottom, end: LinkPosition.Top },
              {
                id: "3",
                start: LinkPosition.Left,
                end: LinkPosition.Top,
                type: LinkType.Curved,
              },
              {
                id: "4",
                start: LinkPosition.Right,
                end: LinkPosition.Top,
                type: LinkType.Curved,
              },
            ],
          },
          {
            id: "2",
            type: ComponentTypes.Service,
            position: { x: 300, y: 175 },
            name: "middle db",
          },
          {
            id: "3",
            type: ComponentTypes.Service,
            position: { x: 10, y: 175 },
            name: "left db",
            links: [
              { id: "2", start: LinkPosition.Right, end: LinkPosition.Left },
              {
                id: "1",
                start: LinkPosition.Top,
                end: LinkPosition.Left,
                type: LinkType.Curved,
                under: true,
              },
              {
                id: "5",
                start: LinkPosition.Bottom,
                end: LinkPosition.Left,
                type: LinkType.Curved,
                under: true,
              },
            ],
          },
          {
            id: "4",
            type: ComponentTypes.Service,
            position: { x: 590, y: 175 },
            name: "right db",
            links: [
              { id: "2", start: LinkPosition.Left, end: LinkPosition.Right },
              {
                id: "1",
                start: LinkPosition.Top,
                end: LinkPosition.Right,
                type: LinkType.Curved,
                under: true,
              },
              {
                id: "5",
                start: LinkPosition.Bottom,
                end: LinkPosition.Right,
                type: LinkType.Curved,
                under: true,
              },
            ],
          },
          ,
          {
            id: "5",
            type: ComponentTypes.Service,
            position: { x: 300, y: 300 },
            name: "bottom db",
            links: [
              { id: "2", start: LinkPosition.Top, end: LinkPosition.Bottom },
              {
                id: "3",
                start: LinkPosition.Left,
                end: LinkPosition.Bottom,
                type: LinkType.Curved,
              },
              {
                id: "4",
                start: LinkPosition.Right,
                end: LinkPosition.Bottom,
                type: LinkType.Curved,
              },
            ],
          },
        ],
      }}
    />
  </RenderFullScreen>
);
