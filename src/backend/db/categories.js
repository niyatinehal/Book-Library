import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Fiction",
    description:
      "Fiction books captivate readers with imaginative storytelling, exploring diverse characters and compelling narratives that offer a glimpse into the human experience.",
  },
  {
    _id: uuid(),
    categoryName: "Mystery",
    description:
      "Mystery books intrigue readers with suspenseful narratives, puzzling crimes, and thrilling investigations, keeping them on the edge of their seats as they try to unravel the secrets and uncover the truth",
  },
  {
    _id: uuid(),
    categoryName: "Fantasy",
    description:
      "Fantasy books transport readers to enchanting worlds filled with magic, mythical creatures, and epic quests, where imagination knows no bounds.",
  },
];
