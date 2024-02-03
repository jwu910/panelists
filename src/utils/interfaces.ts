import type { AstroInstance } from "astro";

export interface ISpeaker extends AstroInstance {
  events: string[];
  details: {
    name: string;
    currentTitle: string;
    currentEmployer: string;
    pronouns: string;
    profileImage: ImageMetadata;
  };
}

export interface IEvent extends AstroInstance {
  eventName?: string;
  eventNickname?: string;
}
