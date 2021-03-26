/*
    Pull all the stories from storybook as a blob:

    JSON.stringify(
        Array.from(document.querySelectorAll('[data-nodetype]'))
            .filter(x => x.dataset["nodetype"] === 'story')
            .map(x => x.dataset["itemId"]).map(x => ({ name: x.split('--')[1], id: x}))
    , null, 2)
*/

describe("Storybook screenshots", () => {
  [
    {
      name: "api",
      id: "diagram-components-internalrouting--api",
    },
    {
      name: "www",
      id: "diagram-components-internalrouting--www",
    },
    {
      name: "search",
      id: "diagram-components-service--search",
    },
    {
      name: "geolocation",
      id: "diagram-components-service--geolocation",
    },
    {
      name: "red",
      id: "diagram-components-service--red",
    },
    {
      name: "is-down-and-to-the-right",
      id: "diagram-components-straightline--is-down-and-to-the-right",
    },
    {
      name: "is-down-and-to-the-left",
      id: "diagram-components-straightline--is-down-and-to-the-left",
    },
    {
      name: "is-up-and-to-the-right",
      id: "diagram-components-straightline--is-up-and-to-the-right",
    },
    {
      name: "is-up-and-to-the-left",
      id: "diagram-components-straightline--is-up-and-to-the-left",
    },
    {
      name: "is-straight-up",
      id: "diagram-components-straightline--is-straight-up",
    },
    {
      name: "is-straight-down",
      id: "diagram-components-straightline--is-straight-down",
    },
    {
      name: "is-straight-left",
      id: "diagram-components-straightline--is-straight-left",
    },
    {
      name: "is-straight-right",
      id: "diagram-components-straightline--is-straight-right",
    },
    {
      name: "narrow",
      id: "diagram-components-database--narrow",
    },
    {
      name: "wide",
      id: "diagram-components-database--wide",
    },
    {
      name: "withcolor",
      id: "diagram-components-database--withcolor",
    },
    {
      name: "simple",
      id: "diagram-services--simple",
    },
    {
      name: "two-apis",
      id: "diagram-services--two-apis",
    },
    {
      name: "database-all-sides",
      id: "diagram-services--database-all-sides",
    },
    {
      name: "service-all-sides",
      id: "diagram-services--service-all-sides",
    },
    {
      name: "cloud-all-sides",
      id: "diagram-services--cloud-all-sides",
    },
    {
      name: "cloud--default-size",
      id: "diagram-components-cloud--default-size",
    },
    {
      name: "cloud--multiple-lines",
      id: "diagram-components-cloud--multiple-lines",
    },
    {
      name: "cloud--big",
      id: "diagram-components-cloud--big",
    },
    {
      name: "cloud--withcolor",
      id: "diagram-components-cloud--withcolor",
    },
  ].forEach((test) => {
    it(`screenshot matches for ${test.name}`, () => {
      cy.visit(`/iframe.html?id=${test.id}&viewMode=story`);

      cy.get("#wrapper").matchImageSnapshot(test.name);
    });
  });
});
