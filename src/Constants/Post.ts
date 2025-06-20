export type Post = {
  user: {
    id: number;
    user: string;
    username: string;
    avatarUlr: string;
    isVerified?: boolean;
  };
  id: `${string}-${string}-${string}-${string}-${string}`;
  text: string;
  imgs?: string[];
  videoUrl?: string;
  createdAt: Date | string;
  likes: number;
  comments: number;
  shares: number;
  isLikedByCurrentUser: boolean;
  location?: string;
  tags?: string[];
  isFollowing?: boolean;
};

export const posts: Post[] = [
  {
    user: {
      id: 0,
      user: "Jean Carlos",
      username: "jean_CCF",
      avatarUlr: "/imgs/UsuarioNulo.webp",
      isVerified: false,
    },
    id: crypto.randomUUID(),
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    createdAt: new Date(),
    likes: 0,
    comments: 0,
    shares: 0,
    isLikedByCurrentUser: false,
    isFollowing: true,
  },
  {
    user: {
      id: 1,
      user: "Ana Pérez",
      username: "ana_pz",
      avatarUlr: "/imgs/UsuarioNulo.webp",
      isVerified: true,
    },
    id: crypto.randomUUID(),
    text: "¡Amo programar en React! ❤️ #frontend #dev",
    createdAt: new Date("2025-06-05T10:45:00"),
    likes: 120,
    comments: 15,
    shares: 8,
    isLikedByCurrentUser: true,
    location: "Santo Domingo",
    tags: ["React", "Developer"],
  },
  {
    user: {
      id: 2,
      user: "Carlos Rodríguez",
      username: "c_rodz",
      avatarUlr: "/imgs/UsuarioNulo.webp",
      isVerified: false,
    },
    id: crypto.randomUUID(),
    text: "Nuevo lanzamiento por parte de Nintendo, llega la nueva Nintendo Switch 2!",
    createdAt: new Date("2025-06-04T17:20:00"),
    likes: 300,
    comments: 42,
    imgs: ["/imgs/NintendoSwitch.webp"],
    shares: 21,
    isLikedByCurrentUser: false,
    videoUrl: "https://example.com/video.mp4",
  },
  {
    user: {
      id: 3,
      user: "Lucía Gómez",
      username: "lucy_dev",
      avatarUlr: "/imgs/UsuarioNulo.webp",
      isVerified: true,
    },
    id: crypto.randomUUID(),
    text: "¿Alguien más ama trabajar con TailwindCSS? 🧵",
    createdAt: new Date("2025-06-03T08:10:00"),
    likes: 89,
    comments: 12,
    shares: 5,
    isLikedByCurrentUser: true,
    tags: ["Tailwind", "CSS", "Frontend"],
  },
  {
    user: {
      id: 4,
      user: "David Ruiz",
      username: "david_rz",
      avatarUlr: "/imgs/UsuarioNulo.webp",
      isVerified: false,
    },
    id: crypto.randomUUID(),
    text: "Nuevo trailer de minecraft disponible ya en Youtube! 😎",
    imgs: ["/imgs/MinecraftImg.jpg"],
    createdAt: new Date("2025-06-02T13:00:00"),
    likes: 145,
    comments: 18,
    shares: 10,
    isLikedByCurrentUser: false,
    location: "Buenos Aires",
  },
];
