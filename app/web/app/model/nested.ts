declare module Organization_Type {
    
  interface Organization_Type { 
    id: number;
    is_active: boolean;
    date_created: Date;
  }

  interface Names {
    id: number;
    organization_type_id: number;
    lang: string;
    name: string;
  }

  var Organization_Type: {
    new(name:string, options?:any):Organization_Type;
    prototype:Organization_Type;
    Names: { 
      new(params?:any):Names;
      prototype: Names;
    }
  }
}

var orgs = new Organization_Type.Organization_Type.Names();





// declare module OpenLayers {
//   interface Layer { 
//    ....
//   }

//   interface Markers {
//     ....
//   }

//   var Layer: {
//     new(name:string, options?:any):Layer;
//     prototype:Layer;
//     Markers: { 
//       new(params?:any):Markers;
//       prototype: Markers;
//     }
//   }
// }

// var markers = new OpenLayers.Layer.Markers();