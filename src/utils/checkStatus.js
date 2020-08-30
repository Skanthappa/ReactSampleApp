import { replace } from "react-router-redux";
async function _parseResponse(response) {
    const contentType = response.headers.get('content-type');
  
    if (contentType && contentType.indexOf('application/json') !== -1) {
      return await response.json();
    } else if (contentType && contentType.indexOf('text/plain') !== -1) {
      return await response.text();
    } else if (contentType && contentType.indexOf('application/xml') !== -1) {
        return await response.text();
    } else {
        throw new Error('Un recognized content type' + contentType);
    }
}

export async function checkStatus(response){
    let data = await _parseResponse(response)
    if (response && response.ok) {
        return data;
      } else {
        const error = new Error();
        error.message = data.message;
        error.status = response.status;
        throw error;
      }
}