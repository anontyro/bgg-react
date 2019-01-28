interface StatusType {
  code: number;
  message: string;
}

interface CollectionMetaType {
  objectType: string;
  objectId: string;
  subType: string;
  collectionId: string;
}

interface GameStatusType {
  owned: boolean;
  preOwned: boolean;
  forTrade: boolean;
  want: boolean;
  wantToPlay: boolean;
  wantToBuy: boolean;
  wishlist: boolean;
  preOrdered: boolean;
  lastModified: boolean;
}

export interface CollectionObjectType {
  name: string;
  meta: CollectionMetaType;
  image: string;
  thumbnail: string;
  numberOfPlays: number;
  gameStatus: GameStatusType;
}

export default interface CollectionType {
  status: StatusType;
  error: StatusType;
  body: CollectionObjectType;
}
