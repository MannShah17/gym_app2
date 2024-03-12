export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '4020e71494mshb38346bf606a1fbp1c8c1djsn72c9d304a0f6',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'e117a27959msh3c8f7c22891a93ap158930jsnfadc90ab0d62',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
