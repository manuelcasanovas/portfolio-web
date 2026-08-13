export interface Project {
  id: string;
  title: string;
  year: string;
  description: string;
  images: string[];
  pairs?: number[][];
}

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Casamiento P&N",
    year: "2026",
    description:
      "Animación para casamiento P&N",
    images: ["/casamientoPyN/casamiento1.webp", "/casamientoPyN/casamiento2.webp", "/casamientoPyN/casamiento3.webp", "/casamientoPyN/casamiento4.webp", "/casamientoPyN/casamiento5.webp", "/casamientoPyN/casamiento6.webp", "/casamientoPyN/casamiento7.webp", "/casamientoPyN/casamiento8.webp"],
    pairs: [[4, 5]],
  },
  {
    id: "2",
    title: "CHIMI DELI",
    year: "2026",
    description:
      "Animación para Chimi Deli",
    images: ["/chimiDeli/chimi1.webp", "/chimiDeli/chimi2.webp", "/chimiDeli/chimi3.webp", "/chimiDeli/chimi4.webp", "/chimiDeli/chimi5.webp", "/chimiDeli/chimi6.webp", "/chimiDeli/chimi7.webp", "/chimiDeli/chimi8.webp"],
    pairs: [[2, 3], [5, 6]],
  },
  {
    id: "3",
    title: "Proyecto 3",
    year: "2026",
    description:
      "Descripción del Proyecto 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    images: [],
  },
  {
    id: "proyecto-4",
    title: "Proyecto 4",
    year: "2026",
    description:
      "Descripción del Proyecto 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    images: [],
  },
  {
    id: "proyecto-5",
    title: "Proyecto 5",
    year: "2026",
    description:
      "Descripción del Proyecto 5. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    images: [],
  },
];
