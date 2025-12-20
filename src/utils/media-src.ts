import { BASE_URL } from "@/src/constants/constants";

export function generateSrcImage(urlImg:string): string {

   return `${BASE_URL}/${urlImg}`;

}

const YT_REGEX = /^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtube\.com|youtu\.be|youtube-nocookie\.com)\/(?:watch\?v=|embed\/|v\/|shorts\/)?([A-Za-z0-9_-]{11})(?:[?&]\S*)?$/;

export function isYouTubeVideoUrl(url: string) {
  return YT_REGEX.test(String(url).trim());
}

export function getYouTubeId(url: string): string | null {
  const m = String(url).trim().match(YT_REGEX);
  return m ? m[1] : null;
} 
