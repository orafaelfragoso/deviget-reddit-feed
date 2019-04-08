import fetch from 'node-fetch'
import config from '../config.json'

export default class Reddit {
  constructor(options = {limit: config.perPage}) {
    this.options = options
  }

  get(nextPage = null) {
    let url = `${config.apiUrl}r/popular.json?limit=${this.options.limit}`

    if (nextPage !== null) {
      url += `&after=${nextPage}&count=${this.options.limit}`
    }

    return fetch(url)
            .then(response => response.json())
            .then(res => res.data)
  }

  getPost(id, type) {
    return fetch(`${config.apiUrl}api/info.json?id=${type}_${id}`)
            .then(response => response.json())
            .then(res => res.data.children)
  }
}
