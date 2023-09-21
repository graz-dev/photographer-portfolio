# Photographer Portfolio

![cover](https://github.com/graz-dev/photographer-portfolio/assets/62215881/d103ac45-e872-4393-9e72-178de117c686)

### [Live Demo]()

In today's world, having a website is like carving out a piece of the digital realm just for yourself. This is especially crucial for creative professionals who need their own space to showcase their work. Unfortunately, if you lack technical know-how, it can often be too complicated for the average person to publish their work somewhere other than social media, creating their own portfolio.

That's where this project comes in: to empower everyone, whether they have technical skills or not, to effortlessly create their own photography portfolio. All it takes is a simple configuration file edit, and you can release it online for free. Your creative corner of the web awaits!

## Features

This project enables anyone to create a photography portfolio with the following features:

1. [X] Homepage with a Masonry Gallery component to showcase your photos
2. [X] Lightbox feature for the Masonry Gallery component
3. [X] Preventing unauthorized file downloads to safeguard your photos from being reused without consent.
4. [X] About and Contact Pages with Email Subscription Capability
5. [X] Entire website fully configurable via a single configuration file - no need to change your code!
6. [X] Easily deployable on [Vercel](https://vercel.com/)

Numerous features are in the pipeline for development in the upcoming period, including:

1. [ ] Blog section with the possibility to post markdown posts
2. [ ] Possibility to use a CDN to serve your images
3. [ ] Possibility to extract shoot information from image files to compile your statistics as photographer (eg: most used focal lense)
4. [ ] Possibility to organize your photos into galleries

I welcome any ideas or suggestions! Feel free to reach out to us here:

- [Instagram](https://www.instagram.com/graz.ph)
- [Email](mailto:cst.grzn@gmail.com)

Support the project by leaving a star here on GitHub and following me on my social media profiles.

## Configurations

```

{
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
}
}

```
