// adapters/page1Adapter/index.tsx

import { get, post } from "../xhr";
import socket from "socketio";

// well-named functions
export function getData(someUrl){
  return get(someUrl);
}

export function setData(requestData, someUrl){
  return post(someUrl, requestData);
}

// ... and so on ...
