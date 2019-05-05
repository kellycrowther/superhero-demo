export interface ICharacterDataWrapper {
  code?: number;
  status?: string;
  copyright?: string;
  attributionText?: string;
  attributionHTML?: string;
  data?: ICharacterDataContainer;
  etag?: string;
}

export class ICharacterDataContainer {
  offset?: number;
  limit?: number;
  total?: number;
  count?: number;
  results?: ICharacter[];
}

export class ICharacter {
  id?: number;
  name?: string;
  description?: string;
  modified?: Date;
  resourceURI?: string;
  urls?: IUrl[];
  thumbnail?: IImage;
  comics?: IComicList;
  stories?: IStoryList;
  events?: IEventList;
  series?: ISeriesList;
}
export class IUrl {
  type?: string;
  url?: string;
}
export class IImage {
  path?: string;
  extension?: string;
}
export class IComicList {
  available?: number;
  returned?: number;
  collectionURI?: string;
  items?: IComicSummary[];
}
export class IComicSummary {
  resourceURI?: string;
  name?: string;
}
export class IStoryList {
  available?: number;
  returned?: number;
  collectionURI?: string;
  items?: IStorySummary[];
}
export class IStorySummary {
  resourceURI?: string;
  name?: string;
  type?: string;
}
export class IEventList {
  available?: number;
  returned?: number;
  collectionURI?: string;
  items: IEventSummary[];
}
export class IEventSummary {
  resourceURI?: string;
  name?: string;
}
export class ISeriesList {
  available?: number;
  returned?: number;
  collectionURI?: string;
  items?: ISeriesSummary[];
}
export class ISeriesSummary {
  resourceURI?: string;
  name?: string;
}
