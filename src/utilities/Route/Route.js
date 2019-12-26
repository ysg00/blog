const parameterRegex = /:[^/]*/;

class Route {
  static replaceListParameters(route, paramsList) {
    let path = route;

    paramsList.forEach(param => {
      const escapedValue = encodeURIComponent(param);
      path = path.replace(parameterRegex, escapedValue);
    });

    return path;
  }

  static replaceNamedParameters(route, paramsObj) {
    let path = route;

    for(const key in paramsObj) {
      const escapedValue = encodeURIComponent(paramsObj[key]);
      path = path.replace(`:${key}`, escapedValue);
    }

    return path;
  }
  
  constructor(route) {
    this.route = route;
  }

  getPath() {
    if (!this.route) {
      return '';
    }

    const routeHasParameter = this.route.search(parameterRegex) !== -1;

    if (!routeHasParameter) {
      return this.route;
    }

    const args = [...arguments];

    if (!args) {
      throw new Error(`The route "${this.route}" containers parameters, yet none were provided.  Please specify the route parameters to get a path.`);
    }

    if (typeof args[0] === 'string') {
      return Route.replaceListParameters(this.route, args);
    } else if (typeof args[0] === 'object') {
      return Route.replaceNamedParameters(this.route, args[0]);
    } else {
      throw new Error('getPath() only accepts strings or objects as arguments');
    }
  }
}

export default Route;