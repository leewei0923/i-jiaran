export class HandleTab {
  getUrl(url) {
    if (typeof url !== 'string') return 'the type of data is not string';
    const urlReg = /^(http:\/\/|https:\/\/)(\w*-\w*\.)*\w*\.\w*/g;
    const ipReg = /^http:\/\/\d*\.*\d\.*\d\.*\d:\d*/g;
    const hostReg = /^http:\/\/localhost:\d*/g;

    if (urlReg.test(url)) {
      return url.match(urlReg)[0];
    }
    if (ipReg.test(url)) {
      return url.match(ipReg)[0];
    }
    if (hostReg.test(url)) {
      return url.match(hostReg)[0];
    }

    return `${url} has error, can't match accurate`;
  }

  getList(arr) {
    if (!(arr instanceof Array)) return 'the type of data is not array';
    const map = new Map();

    for (let i = 0; i < arr.length; i++) {
      const { id, title, typedCount, url, visitCount } = arr[i];
      try {
        const hostUrl = this.getUrl(url);
        if (map.has(hostUrl)) {
          const {
            id: hId,
            title: hTitle,
            typedCount: hTypedCount,
            url: hUrl,
            visitCount: hVisitCount
          } = map.get(hostUrl);

          if (hVisitCount > visitCount) {
            map.set(hostUrl, { id: hId, title: hTitle, typedCount: hTypedCount, url: hUrl, visitCount: hVisitCount });
          }
        } else {
          map.set(hostUrl, { id, title, typedCount, url, visitCount });
        }
      } catch (err) {
        throw ('err', err);
      }
    }

    const list = [];
    map.forEach((v) => {
      list.push(v);
    });

    list.sort((a, b) => b.visitCount - a.visitCount);

    return list;
  }
}
