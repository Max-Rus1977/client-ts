export interface IPost {
  _id: string;
  title: string;
  text: string;
  tags: string[];
  viewsCount: number;
  user: {
    _id: string;
    fullName: string;
    avatarUrl: string;
  };
}

export interface IObjPost {
  success: boolean;
  posts: IPost[];
}

export interface IPostsResponse {
  isLoading: boolean;
  posts: IPost[];
  error: string | null | undefined;
}