import { YouTubeVideoCard } from "./YouTubeVideoCard";

type Props = {
  videos: string[];
};

export const SeccionVideos = ({ videos }: Props) => {
    
  const validVideos = videos.filter((video) => video !== null && video !== "")
  
  return (
    <>
      {validVideos.length > 0 && (
        <>
          <h2 className="my-8 text-xl font-bold text-black">
            <span className="text-foreground">|&nbsp;</span>
            {`Video${validVideos.length > 1 ? 's' : ''}`}
          </h2>
          {validVideos.map((video) => (
            <YouTubeVideoCard key={video} youTubeId={video} className="my-4" />
          ))}
        </>
      )}
    </>
  );
};
