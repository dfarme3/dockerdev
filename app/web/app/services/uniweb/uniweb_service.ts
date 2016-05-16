import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Headers, RequestOptions} from '@angular/http';
import {Observable}     from 'rxjs/Observable';


@Injectable()
export class UniwebService {
	private _url: string = 'http://localhost:8080';
	constructor(private _http: Http) { }

	public getUniweb(modelRoute: string) {
        let _urlRoute = this._url + modelRoute;
		return this._http.get(_urlRoute)
            .map(res => res.json())
            .catch(this.handleError);
	}

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || ' error using Uniweb Service');
    }
}
