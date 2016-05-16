

import { Injectable} from '@angular/core';
import { Http, Response} from '@angular/http';
import { Headers, RequestOptions} from '@angular/http';
import { Observable}     from 'rxjs/Observable';


@Injectable()
export class OdinService {
	private _url: string = 'http://localhost:8080';
    public id: number;
	
    constructor( private _http: Http ){ }

	public postOdin( modelRoute:string, body:string ){
        //REST post for saving data - route contains entity, body contains the columns that need to be added
        let _urlRoute = this._url + modelRoute;
        let headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'  });
        let options = new RequestOptions({ headers: headers, method: "post" });

        return this._http.post(_urlRoute, body, options)
            .map(res => res.json())
            .catch(this.handleError);
    }

	public getOdin( modelRoute:string ) {
        // REST call for any entity such as StudentAccount, StudentProfile ....
        // the caller formulates the route with any optional parameters
        let _urlRoute = this._url + modelRoute;

        // routes are mocked up for now and retrieved from a local file ??optional parameters will break this
        switch (modelRoute)
        {
            case 'StudentAccount':
                _urlRoute = 'StudentAccount.json';
                break;
        }
		return this._http.get(_urlRoute + this.id)
            .map(res => res.json())
            .catch(this.handleError);
	}


    private handleError (error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || ' error using Odin Service');
    }

}