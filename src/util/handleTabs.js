export class HandleTab {
  getUrl(url) {
    if (typeof url !== 'string') return 'the type of data is not string';
    const urlReg = /(https|http):\/\/[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/g;
    const ipReg = /^http:\/\/\d*\.*\d\.*\d\.*\d:\d*/g;

    if (urlReg.test(url)) {
      return url.match(urlReg)[0];
    }
    if (ipReg.test(url)) {
      return url.match(ipReg)[0];
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
            id: hId, // 原来id
            title: hTitle, // 标题
            typedCount: hTypedCount, // 通过输入栏输入的的次数
            url: hUrl, // 网页的地址
            visitCount: hVisitCount, // 访问的次数
          } = map.get(hostUrl);

          if (hVisitCount > visitCount) {
            map.set(hostUrl, {
              id: hId,
              title: hTitle,
              typedCount: hTypedCount,
              url: hUrl,
              visitCount: hVisitCount,
              hostDomain: hostUrl
            });
          }
        } else {
          map.set(hostUrl, { id, title, typedCount, url, visitCount, hostDomain: hostUrl });
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
