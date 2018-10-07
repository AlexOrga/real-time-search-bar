import axios from 'axios';

const getReggaeBands = () => {
  return new Promise((resolve, reject) => {
    axios.get("https://gist.githubusercontent.com/anonymous/1295788c7bff052a1e8a/raw/6e109604c7a7f3efe77c8048bb2fe2f3e1cdcb7b/gistfile1.json")
      .then((res) => {
        resolve(res.data.Reggae);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export default getReggaeBands;