import { atom, selector } from "recoil";

export enum Categories {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

export interface IToDo {
  text: string;
  id: number;
  category: Categories;
}

export const categoryState = atom<Categories>({
  // 사용자가 현재 지정한 category
  key: "category",
  default: Categories.TO_DO,
});

let localValue = String(localStorage.getItem("toDo"));
let localData = JSON.parse(localValue);

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: localData === null ? [] : localData,
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    // 현재 지정한 category와 같은 항목만 보이도록
    return toDos.filter((toDo) => toDo.category === category);
  },
});
