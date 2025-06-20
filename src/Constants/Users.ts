export type Users = {
  id: number;
  user: string;
  username: string;
  avatarUlr: string;
  isVerified?: boolean;
  bio?: string;
  location?: string;
  bannerUrl?: string;
  followersCount?: number;
  followingCount?: number;
  postsCount?: number;
  createdAt?: Date | string;
  email?: string;
  phone?: string;
  links?: string;
  isPrivate?: boolean;
  isFollowing?: boolean;
};

export const users: Users[] = [
  {
    id: 1,
    user: "Jean Carlos",
    username: "jean_ccf",
    avatarUlr: "/imgs/UsuarioNulo.webp",
    isVerified: true,
    bio: "Desarrollador frontend amante de React y TypeScript.",
    location: "Santo Domingo Este, RD",
    bannerUrl: "/imgs/banner1.jpg",
    followersCount: 1520,
    followingCount: 312,
    postsCount: 58,
    createdAt: "2022-08-15",
    email: "jean@example.com",
    links: "youtube.com/jeanCarlos04",
    phone: "+1 809-555-1234",
    isPrivate: false,
    isFollowing: false,
  },
  {
    id: 2,
    user: "María González",
    username: "mari_g",
    avatarUlr: "/imgs/UsuarioNulo.webp",
    isVerified: false,
    bio: "Diseñadora UX/UI, café y arte digital 🎨",
    location: "Santiago, RD",
    bannerUrl: "/imgs/banner2.jpg",
    followersCount: 950,
    followingCount: 421,
    postsCount: 76,
    createdAt: "2021-11-02",
    isPrivate: true,
    isFollowing: true,
  },
  {
    id: 3,
    user: "Carlos Méndez",
    username: "charlycode",
    avatarUlr: "/imgs/UsuarioNulo.webp",
    isVerified: true,
    bio: "Backender obsesionado con bases de datos y APIs 🧠",
    location: "La Romana, RD",
    bannerUrl: "/imgs/banner3.jpg",
    followersCount: 1200,
    followingCount: 134,
    postsCount: 33,
    createdAt: "2023-01-25",
    email: "charly@example.com",
    isPrivate: false,
    isFollowing: true,
  },
];
