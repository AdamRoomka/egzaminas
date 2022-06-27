import axiosUser from "../apiBooks";
import swal from "sweetalert";


  export async function getAllBooks() {
    const res = await axiosUser.get(`/`);
    return res;
  }

  export async function getBookById(id) {
    const res = await axiosUser.get(`/${id}`);
    return res;
  }

  export async function createBook(id) {
    const res = await axiosUser.get(`/create`);
    return res;
  }
  
  export async function findBooksAndUpdate(id, subID) {
    const res = await axiosUser.get(`/${id}/book/update/${subID}`);
    return res;
  }