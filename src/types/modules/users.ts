export type UserProfileType = 'list' | 'profile' | 'comment' | 'detail' | 'preview';
export interface ProfileCharacter {
  id: string;
  name: string;
  animal: string;
  description: string;
  imageUrl: string;
  quote: string;
  item: string[];
}
