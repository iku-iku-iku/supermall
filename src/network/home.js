import { request } from "./request.js";

export function getMultidata() {
  return request({
    url: "home/multidata"
  });
}
