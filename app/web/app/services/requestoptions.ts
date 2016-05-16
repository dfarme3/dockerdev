import {BaseRequestOptions, Request, RequestMethod} from '@angular/http';

export const  requestOptions = new BaseRequestOptions();
var req = new Request(requestOptions.merge({
  method: RequestMethod.Post,
  url: 'https://uoentrada.info/auth'
}));
console.log('req.method:', RequestMethod[req.method]); // Post
console.log('options.url:', requestOptions.url); // null
console.log('req.url:', req.url); // https://google.com