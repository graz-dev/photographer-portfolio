const configurations = {
  site: {
    title: "Photographer · Portfolio",
    description: "Photographer · Portfolio",
  },
  header: {
    title: "Photographer",
    desciption: "Portfolio",
    caption: "Caption",
    items: [
      {
        reference: "01",
        name: "Home",
        link: "/",
      },
      {
        reference: "02",
        name: "About",
        link: "/about",
      },
      {
        reference: "03",
        name: "Contact",
        link: "/contact",
      },
    ],
  },
  homepage: {
    title: "Homepage Title",
    subtitle: "Homepage Subtitle",
    gallery: [
      {
        source: "/gallery/placeholder-1.png",
        title: "",
      },
      {
        source: "/gallery/placeholder-2.png",
        title: "",
      },
      {
        source: "/gallery/placeholder-1.png",
        title: "",
      },
      {
        source: "/gallery/placeholder-2.png",
        title: "",
      },
      {
        source: "/gallery/placeholder-1.png",
        title: "",
      },
      {
        source: "/gallery/placeholder-1.png",
        title: "",
      },
      {
        source: "/gallery/placeholder-2.png",
        title: "",
      },
      {
        source: "/gallery/placeholder-1.png",
        title: "",
      },
      {
        source: "/gallery/placeholder-2.png",
        title: "",
      },
      {
        source: "/gallery/placeholder-1.png",
        title: "",
      },
    ],
  },
  footer: {
    title: "Photographer",
    caption: "Caption",
    copyright: "© 2023 Photographer",
    items: [
      {
        title: "Social",
        links: [
          {
            name: "Instagram",
            link: "",
            isExternal: true,
          },
        ],
      },
      {
        title: "Sitemap",
        links: [
          {
            name: "",
            link: "",
            isExternal: false,
          },
        ],
      },
      {
        title: "Legal",
        links: [
          {
            name: "",
            link: "",
            isExternal: false,
          },
        ],
      },
    ],
  },
  about: {
    title: "About me",
    image: {
      source: "/gallery/placeholder-1.png",
      title: "About Me",
    },
    paragraphs: [
      {
        ref: 1,
        content:
          "About me content",
      },
    ]
  },
  contacts: {
    rowCards: {
      enabled: false,
      items: [
        {
          title: "",
          svgIcon: "",
          paragraphs: [
            {
              ref: 1,
              content: "",
            },
          ],
        },
      ],
    },
    contactForm: {
      title: "Contact me",
      subtitle: "Let's keep in touch",
      action: "",
    },
  },
};

export default configurations;
