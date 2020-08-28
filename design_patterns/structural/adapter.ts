/*
  ADAPTER

  Intent: Converts a class interface into a different interface which the client expects. Adapter allows
  classes that otherwise would have incompatible interfaces to work together.
*/
const axios = require('axios')

type Methods = 'GET' | 'POST' | 'PUT' | 'DELETE'

interface RequestOptions {
  url: string;
  method: Methods;
  headers?: object;
  body?: object;
}

interface SuccessResponse {
  success: true;
  data?: any;
  status: 200 | 201;
}

interface FailureResponse {
  success: false;
  error: string;
  status: 500 | 403 | 404 | 409
  failures?: any;
}

type HttpResponse = SuccessResponse | FailureResponse

interface HttpHandler {
  makeRequest: (options: RequestOptions) => Promise<HttpResponse>
}

class AxiosAdapter implements HttpHandler {
  async makeRequest(options: RequestOptions): Promise<HttpResponse> {
    return await axios(options)
  }
}


// Consumer Code

(async () => {
  const httpHandler = new AxiosAdapter()
  const requestOptions: RequestOptions = {
    url: 'www.whatever.com',
    method: 'POST',
    body: {
      prop1: 'hi',
      prop2: 10
    },
    headers: {
      auth: '*token*'
    }
  }
  const response = await httpHandler.makeRequest(requestOptions)
  if (response.success) {
    console.log(response.data)
  } else {
    console.log(`Call to ${requestOptions.url} failed with status ${response.status} > ${(response as FailureResponse).error}`)
  }
})()