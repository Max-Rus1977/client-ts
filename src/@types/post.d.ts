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

export interface IPostOneResponse {
  success: boolean;
  doc: IPost;
}

export interface IPostsResponse {
  isLoading: boolean;
  posts: IPost[];
  selectedPost: IPost | null;
  error: string | null | undefined;
}