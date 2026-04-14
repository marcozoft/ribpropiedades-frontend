import { BASE_URL, RECURSOS_URL } from "@/src/constants/constants";

export function generateSrcImage(urlImg:string): string {

   return `${RECURSOS_URL}/${urlImg}`;

}

const YT_REGEX = /^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtube\.com|youtu\.be|youtube-nocookie\.com)\/(?:watch\?v=|embed\/|v\/|shorts\/)?([A-Za-z0-9_-]{11})(?:[?&]\S*)?$/;

export const isYouTubeVideoUrl = (url: string): boolean => {
  return YT_REGEX.test(String(url).trim());
}

const getYouTubeIdFromUrl = (url: string): string => {
  const m = String(url).trim().match(YT_REGEX);
  return m ? m[1] : '';
} 

export const getYouTubeId = (urlOrYoutubeId: string): string => {
  return isYouTubeVideoUrl(urlOrYoutubeId)
    ? getYouTubeIdFromUrl(urlOrYoutubeId)
    : urlOrYoutubeId;
}