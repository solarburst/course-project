import { getDatabase, ref, child, get } from "firebase/database";

export const fetchBmi = () => {
  const dbRef = ref(getDatabase());
  return get(child(dbRef, `/`));
};
