let fs = require('fs');
let axios = require('axios');

let songs = ['crack', 'humu', ];
let durations = ["00:15", "0:18"];
let ipfsArray = [];

for (let i = 0; i < songs.length; i++) {
  ipfsArray.push({
    path: `metadata/${i}.json`,
    content: {
      image: `ipfs://QmUmUV8aA72huaMRPaGigjUCbe3Lf2gQbxYQJB2kvqoCRA/media/2`, //xxx = hash
      name: songs[i],
      animation_url: `ipfs://QmUmUV8aA72huaMRPaGigjUCbe3Lf2gQbxYQJB2kvqoCRA/media/${i}`, //xxx = hash
      duration: durations[i],
      artist: 'Anthony Erik',
      year: '2020',
    },
  });
}

axios
  .post('https://deep-index.moralis.io/api/v2/ipfs/uploadFolder', ipfsArray, {
    headers: {
      'X-API-KEY':
        'SznMqc2fNnNwtECvQEBrRqRClMLtJkvZwKVE45glsXNeVyc18BqsdCJnY2wGDEMl',
      'Content-Type': 'application/json',
      accept: 'application/json',
    },
  })
  .then((res) => {
    console.log(res.data);
  })
  .catch((error) => {
    console.log(error);
  });
