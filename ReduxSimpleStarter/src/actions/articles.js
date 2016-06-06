// import axios from 'axios';

import actions from '../constants';

export const fetchArticles= () => {
  const articles = [
    {
      id: "uuid1",
      title: "Article 1",
      content: "Lorem Ipsum",
      author: "maria"
    },
    {
      id: "uuid2",
      title: "Article 2",
      content: "Lorem Ipsum",
      author: "maria"
    },
    {
      id: "uuid3",
      title: "Article 3",
      content: "Lorem Ipsum",
      author: "maria"
    }
  ]

  return {
    type: actions.FETCHED_ARTICLES,
    payload: articles
  }
  // const fetchPeople = (leaderboardData, dispatch) => {
  //   const ids = parseIds(leaderboardData);
  //   return axios.get('/api/people.json', {
  //     params: {
  //       id: ids
  //     }
  //   })
  //   .then((response) => {
  //     dispatch(
  //       fetchedLeaderboard(buildLeaderboardData(leaderboardData, response.data.data))
  //     );
  //   })
  //   .catch(() => {
  //     dispatch(
  //       fetchLeaderboardError('Could not load your leader board contacts information.')
  //     );
  //   });
  // };
};


// const fetchedArticles = (articles) => {
//   return {
//     type: actions.FETCHED_ARTICLES,
//     payload: {
//       articles
//     }
//   };
// };
