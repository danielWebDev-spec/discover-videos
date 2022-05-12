import videoData from "../data/videos.json";

export const getVideos = () => {
  return videoData.items.map((item) => {
    const id = item.id?.videoId || item.id;
    return {
      title: item.snippet.title,
      imgUrl: item.snippet.thumbnails.high.url,
      id,
    };
  });
};
