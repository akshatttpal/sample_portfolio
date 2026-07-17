// Change this password to protect the Patents page
export const PATENTS_PASSWORD = "AkshatPal2026";

export const PATENTS_SESSION_KEY = "patents_unlocked";

type PatentMedia =
  | { type: "image"; src: string; alt?: string }
  | { type: "video"; src: string; poster?: string; controls?: boolean };

export interface Patent {
  title: string;
  number: string;
  year: string;
  description: string;
  media?: PatentMedia;
}

export const patents: Patent[] = [
  {
    title: "System and Method for Proximity based Audio Generation",
    number: "IN- 202641054231",
    year: "2026",
    description:
      "Developed an innovative contactless audio generation framework that transforms spatial interactions into real-time musical output through intelligent sensing and adaptive signal processing. The system enhances human–machine interaction by enabling intuitive, touch-free engagement while delivering responsive and immersive audio experiences.",
    media: {
      type: "image",
      src: "/images/Patent_project.jpg",
      alt: "Visual preview of the proximity-based audio generation system",
    },
  },
  /*{
    title: "Patent Project 2",
    number: "IN-XXXXXX",
    year: "2024",
    description:
      "Brief description of your second patented innovation. Replace with actual patent details.",
    media: {
      type: "video",
      src: "/videos/demo.mp4",
      poster: "/images/preview.png",
    },
  },*/
];
