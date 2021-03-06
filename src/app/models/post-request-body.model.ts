export interface PostRequestBody {
  title: string;
  content: string;
  postId?: string;
}

export interface DeleteRequestBody {
  blogId: string;
  postId: string;
}
