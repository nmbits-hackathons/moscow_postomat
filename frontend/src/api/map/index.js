import instance from "../axios";

export const getPostamats = () => {
   return instance.get('/get_postamats/')
}
