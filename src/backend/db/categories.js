import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Fiction",
    img:"https://149795890.v2.pressablecdn.com/wp-content/uploads/2022/10/BatteryParkBE_14.png",
    description:
      "Fiction books captivate readers with imaginative storytelling, exploring diverse characters and compelling narratives that offer a glimpse into the human experience.",
  },
  {
    _id: uuid(),
    categoryName: "Mystery",
    img:"https://daily.jstor.org/wp-content/uploads/2014/11/oldbooks.jpg",
    description:
      "Mystery books intrigue readers with suspenseful narratives, puzzling crimes, and thrilling investigations, keeping them on the edge of their seats as they try to unravel the secrets and uncover the truth",
  },
  {
    _id: uuid(),
    categoryName: "Fantasy",
    img:"https://englishlive.ef.com/blog/wp-content/uploads/sites/2/2014/08/english-books.jpeg",
    description:
      "Fantasy books transport readers to enchanting worlds filled with magic, mythical creatures, and epic quests, where imagination knows no bounds.",
  },
];
