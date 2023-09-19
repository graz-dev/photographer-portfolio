export class HomePage {

    siteNameNavbar: string;
    siteDescriptionNavbar: string;
    siteTitle: string;
    siteSubtitle: string;
    constructor(siteNameNavbar: string, siteDescriptionNavbar: string, siteTitle: string, siteSubtitle: string){
        this.siteNameNavbar = siteNameNavbar;
        this.siteDescriptionNavbar = siteDescriptionNavbar;
        this.siteTitle = siteTitle;
        this.siteSubtitle = siteSubtitle;
    }

}