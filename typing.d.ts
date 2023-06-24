interface Message {
  text: string;
  createdAt: admin.firestore;
  user: {
    _id: string;
    name: string;
    avatar: string;
  };
}
