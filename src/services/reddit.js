import fetch from 'node-fetch'

export default class Reddit {
  constructor(options = {limit: 50}) {
    this.options = options
  }

  get(nextPage = null) {
    let url = `https://www.reddit.com/r/all/top.json?limit=${this.options.limit}`

    if (nextPage !== null) {
      url += `&after=${nextPage}&count=${this.options.limit}`
    }

    return fetch(url)
            .then(response => response.json())
            .then(res => res.data)
  }

  getPost(id, type) {
    return fetch(`https://www.reddit.com/api/info.json?id=${type}_${id}`)
            .then(response => response.json())
            .then(res => res.data.children)
  }
}
