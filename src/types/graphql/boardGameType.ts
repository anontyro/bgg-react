import GenericObjectType from './genericObjectType';

interface GameNameType {
  name: string;
  primary: boolean;
  sortIndex: number;
}

export interface FullBoardGameType {
  name: GameNameType;
  thumbnails: string[];
  images: string[];
  description: string[];
  minPlayers: number;
  maxPlayers: number;
  playTime: number;
  id: number;
  yearPublished: number;
  mechanics: GenericObjectType[];
  category: GenericObjectType[];
  designer: GenericObjectType[];
  artist: GenericObjectType[];
  publisher: GenericObjectType[];
}

export interface SearchBoardGameType {
  name: GameNameType;
  id: number;
  itemType: string;
  yearPublished: string;
}
