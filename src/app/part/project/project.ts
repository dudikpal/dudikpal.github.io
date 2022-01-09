export class Project {

  constructor(
    public name: string,
    public thumbImage: string,
    public images: string[],
    public title: string,
    public selectors: string,
    public usedTechnology: string,
    public projectUrl: string,
    public projectDetails: string
  ) {
  }
}
