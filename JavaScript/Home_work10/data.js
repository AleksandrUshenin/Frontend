const datas = [
    `{"results":[{"gender":"female","name":{"title":"Mrs","first":"Benedicte","last":"Wangberg"},"location":{"street":{"number":592,"name":"Mikrobølgen"},"city":"Tromsdalen","state":"Buskerud","country":"Norway","postcode":"0015","coordinates":{"latitude":"45.8489","longitude":"95.7625"},"timezone":{"offset":"-12:00","description":"Eniwetok, Kwajalein"}},"email":"benedicte.wangberg@example.com","login":{"uuid":"2e5009d2-d1a0-4131-bcf3-eb99da6e2ce3","username":"browntiger772","password":"yoda","salt":"gQahnfnV","md5":"4bdb3fd668bb8ff1969298317ba2c2e1","sha1":"08687874d6fc63d0f15f18155f4331e5a2ccaeb2","sha256":"31cef8e834dd92e14cbe838103a791e019e0e1bc38370582421823a37f4c1123"},"dob":{"date":"1979-07-22T02:47:39.876Z","age":43},"registered":{"date":"2014-07-12T09:14:35.025Z","age":9},"phone":"64917824","cell":"94827747","id":{"name":"FN","value":"22077946261"},"picture":{"large":"https://randomuser.me/api/portraits/women/79.jpg","medium":"https://randomuser.me/api/portraits/med/women/79.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/79.jpg"},"nat":"NO"}],"info":{"seed":"2cdf53de8896a3a5","results":1,"page":1,"version":"1.4"}}`,
    `{"results":[{"gender":"female","name":{"title":"Madame","first":"Cinzia","last":"Faure"},"location":{"street":{"number":7743,"name":"Rue Denfert-Rochereau"},"city":"Courtedoux","state":"Aargau","country":"Switzerland","postcode":3080,"coordinates":{"latitude":"-58.5540","longitude":"147.9211"},"timezone":{"offset":"-7:00","description":"Mountain Time (US & Canada)"}},"email":"cinzia.faure@example.com","login":{"uuid":"3452ca30-08dc-47b0-bf8b-58261d3e4eac","username":"sadfrog573","password":"linkin","salt":"I2VERaR8","md5":"bca936b605563c91510fc2d69b91b898","sha1":"dc6faebf01ac37da04dd81c0eeeb90f3343375cb","sha256":"e4dd7a9414b2c8320cb1de82336b295dc6d2fc88f0d9b120c5797b88745336c1"},"dob":{"date":"1955-02-03T08:13:28.543Z","age":68},"registered":{"date":"2010-09-25T08:21:39.649Z","age":12},"phone":"079 296 70 28","cell":"076 706 97 17","id":{"name":"AVS","value":"756.2212.8922.05"},"picture":{"large":"https://randomuser.me/api/portraits/women/10.jpg","medium":"https://randomuser.me/api/portraits/med/women/10.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/10.jpg"},"nat":"CH"}],"info":{"seed":"03201fa6b0b4bb7d","results":1,"page":1,"version":"1.4"}}`,
    `{"results":[{"gender":"male","name":{"title":"Mr","first":"Luke","last":"Morris"},"location":{"street":{"number":6908,"name":"Pioneer Highway"},"city":"Palmerston North","state":"Tasman","country":"New Zealand","postcode":54229,"coordinates":{"latitude":"54.8088","longitude":"-0.1852"},"timezone":{"offset":"-11:00","description":"Midway Island, Samoa"}},"email":"luke.morris@example.com","login":{"uuid":"b80ba9c7-b9f6-4d23-9412-ab5ef7218691","username":"beautifulcat668","password":"darryl","salt":"QJ0y2hoe","md5":"9ffdd28e58a452768c20ee5453d3f6d5","sha1":"16298203dc0c41459d2f91053229cc80d71ba6de","sha256":"99c518820f9c0e6e0e4b7ddac58028e2709f1004f58948f6e0978aeea601ff77"},"dob":{"date":"1985-12-09T03:03:47.175Z","age":37},"registered":{"date":"2008-07-13T22:26:19.246Z","age":14},"phone":"(941)-054-6066","cell":"(997)-703-5556","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/men/93.jpg","medium":"https://randomuser.me/api/portraits/med/men/93.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/93.jpg"},"nat":"NZ"}],"info":{"seed":"dc7ac13fff043442","results":1,"page":1,"version":"1.4"}}`
];

const datasParse =[];
for (let i = 0; i < datas.length; i++) {
    datasParse.push(JSON.parse(datas[i]).results[0]);
}
console.log(datasParse);

const content = document.querySelector('.content');
for (let i = 0; i < datasParse.length; i++) {
    const item = document.createElement('div');
    item.classList.add('item', `item_${i}`);

    const name = document.createElement('h3');
    name.classList.add('head');
    name.textContent = `${datasParse[i].name.first} ${datasParse[i].name.last}`;

    const img = document.createElement('img');
    img.classList.add('img');
    img.src = datasParse[i].picture.large;
    img.alt = `img ${i}`;

    const info = document.createElement('p');
    info.textContent = `info city:${datasParse[i].location.city} country:${datasParse[i].location.country} email:${datasParse[i].email} phone:${datasParse[i].phone }`;

    item.appendChild(name);
    item.appendChild(img);
    item.appendChild(info);
    content.appendChild(item);
}

