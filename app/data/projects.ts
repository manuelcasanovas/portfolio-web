export interface Project {
  id: string;
  title: string;
  year: string;
  description: string;
  images: string[];
  pairs?: number[][];
  coverImage?: string;
  coverPosition?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Casamiento P&N",
    year: "2026",
    description:
      "Animación para casamiento P&N",
    images: ["/projects/casamientoPyN/casamiento1.webp", "/projects/casamientoPyN/casamiento2.webp", "/projects/casamientoPyN/casamiento3.webp", "/projects/casamientoPyN/casamiento4.webp", "/projects/casamientoPyN/casamiento5.webp", "/projects/casamientoPyN/casamiento6.webp", "/projects/casamientoPyN/casamiento7.webp", "/projects/casamientoPyN/casamiento8.webp"],
    pairs: [[4, 5]],
  },
  {
    id: "2",
    title: "CHIMI DELI",
    year: "2026",
    description:
      "Animación para Chimi Deli",
    images: ["/projects/chimiDeli/chimi1.webp", "/projects/chimiDeli/chimi2.webp", "/projects/chimiDeli/chimi3.webp", "/projects/chimiDeli/chimi4.webp", "/projects/chimiDeli/chimi5.webp", "/projects/chimiDeli/chimi6.webp", "/projects/chimiDeli/chimi7.webp", "/projects/chimiDeli/chimi8.webp"],
    pairs: [[2, 3], [5, 6]],
  },
  {
    id: "3",
    title: "Tero Tero Lake Hostel",
    year: "2026",
    description:
      "Animación para Tero Tero Lake Hostel",
    images: ["/projects/TeroLakeHostel/tero1.webp", "/projects/TeroLakeHostel/tero2.webp", "/projects/TeroLakeHostel/tero3.webp", "/projects/TeroLakeHostel/tero4.webp", "/projects/TeroLakeHostel/tero5.webp", "/projects/TeroLakeHostel/tero6.webp", "/projects/TeroLakeHostel/tero7.webp", "/projects/TeroLakeHostel/tero8.webp", "/projects/TeroLakeHostel/tero9.webp", "/projects/TeroLakeHostel/tero10.webp", "/projects/TeroLakeHostel/tero11.webp", "/projects/TeroLakeHostel/tero12.webp", "/projects/TeroLakeHostel/tero13.webp"],
    pairs: [[0, 1], [7, 8]],
  },
  {
    id: "4",
    title: "Centinela Gin",
    year: "2026",
    description:
      "Animación para Centinela Gin",
    images: ["/projects/CentinelaGin/gin1.webp", "/projects/CentinelaGin/gin2.webp", "/projects/CentinelaGin/gin3.webp", "/projects/CentinelaGin/gin4.webp", "/projects/CentinelaGin/gin5.webp", "/projects/CentinelaGin/gin6.webp", "/projects/CentinelaGin/gin7.webp", "/projects/CentinelaGin/gin8.webp", "/projects/CentinelaGin/gin9.webp", "/projects/CentinelaGin/gin10.webp", "/projects/CentinelaGin/gin11.webp", "/projects/CentinelaGin/gin12.webp", "/projects/CentinelaGin/gin13.webp", "/projects/CentinelaGin/gin14.webp", "/projects/CentinelaGin/gin15.webp", "/projects/CentinelaGin/gin16.webp", "/projects/CentinelaGin/gin17.webp", "/projects/CentinelaGin/gin18.webp", "/projects/CentinelaGin/gin19.webp", "/projects/CentinelaGin/gin20.webp", "/projects/CentinelaGin/gin21.webp"],
    pairs: [[0, 1], [2, 3], [7, 8], [9, 10], [14, 15], [16, 17]],
    coverPosition: "50% 75%",
  },
  {
    id: "5",
    title: "Bois Burguer",
    year: "2025",
    description:
      "Animación para Bois Burguer",
    images: ["/projects/BoisBurguer/burguer1.webp", "/projects/BoisBurguer/burguer2.webp", "/projects/BoisBurguer/burguer3.webp", "/projects/BoisBurguer/burguer4.webp", "/projects/BoisBurguer/burguer5.webp", "/projects/BoisBurguer/burguer6.webp", "/projects/BoisBurguer/burguer7.webp", "/projects/BoisBurguer/burguer8.webp", "/projects/BoisBurguer/burguer9.webp", "/projects/BoisBurguer/burguer10.webp", "/projects/BoisBurguer/burguer11.webp"],
    pairs: [[3, 4], [5, 6], [7, 8]],
    coverPosition: "50% 75%",
  },
  {
    id: "6",
    title: "Redbull - La Finca Skate Bar",
    year: "2025",
    description: "Animación para Redbull - La Finca Skate Bar",
    images: ["/projects/RedBull/redbull1.webp", "/projects/RedBull/redbull2.webp", "/projects/RedBull/redbull3.webp", "/projects/RedBull/redbull4.webp", "/projects/RedBull/redbull5.webp", "/projects/RedBull/redbull6.webp", "/projects/RedBull/redbull7.webp", "/projects/RedBull/redbull8.webp", "/projects/RedBull/redbull9.webp", "/projects/RedBull/redbull10.webp", "/projects/RedBull/redbull11.webp"],
    pairs: [[2, 3], [4, 5]],
    coverPosition: "50% 75%",
  },
  {
    id: "7",
    title: "Les Reyes",
    year: "2025",
    description: "Animación para Les Reyes",
    images: ["/projects/lesReyes/reyes1.webp", "/projects/lesReyes/reyes2.webp", "/projects/lesReyes/reyes3.webp", "/projects/lesReyes/reyes4.webp", "/projects/lesReyes/reyes5.webp"],
    pairs: [],
    coverPosition: "50% 75%",
  },
  {
    id: "8",
    title: "Compay Hostel (UY)",
    year: "2025",
    description: "Animación para Compay Hostel",
    images: ["/projects/compayHostel/compay1.webp", "/projects/compayHostel/compay2.webp", "/projects/compayHostel/compay3.webp", "/projects/compayHostel/compay4.webp", "/projects/compayHostel/compay5.webp", "/projects/compayHostel/compay6.webp", "/projects/compayHostel/compay7.webp", "/projects/compayHostel/compay8.webp", "/projects/compayHostel/compay9.webp", "/projects/compayHostel/compay10.webp"],
    pairs: [[0, 1]],
    coverPosition: "50% 75%",
  }
];
