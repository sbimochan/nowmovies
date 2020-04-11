import { projectConfig } from "../projectConfig";

export function imgUrlMaker(path) {
  const url = `${projectConfig.imgURL}/${path}`;

  return url;
}
