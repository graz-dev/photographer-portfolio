import type { GalleryItem } from "./GalleryItem";
import { HomePage } from "./Homepage";
import type { NavLink } from "./NavLink";
import galleryitems from "../config/gallery";
import navbaritems from "../config/navbar";

export class Configuration {
  siteTitle: string;
  siteDescription: string;
  homepageConfig: HomePage;
  gallery: GalleryItem[];
  navbar: NavLink[];
  constructor(
    siteTitle: string,
    siteDescription: string,
    siteNameNavbar: string,
    siteDescriptionNavbar: string,
    siteHomeTitle: string,
    siteSubtitle: string
  ) {
    this.siteTitle = siteTitle;
    this.siteDescription = siteDescription;
    this.homepageConfig = new HomePage(
        siteNameNavbar,
        siteDescriptionNavbar,
        siteHomeTitle,
        siteSubtitle
    )
    this.gallery = galleryitems as GalleryItem[];
    this.navbar = navbaritems as NavLink[];
  }
}
