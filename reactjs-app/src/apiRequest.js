//CRUD - Create,REad,Update,Delete
//In CRUD Operation It is C -Create Operation
const apiRequest = async (url = "", optionsObj = null, errMsg = null) => {
  try {
    const response = await fetch(url, optionsObj);
    if (!response.ok) {
      throw Error("Please reload the page");
    }
  } catch (err) {
    errMsg = err.Message;
  } finally {
    return errMsg;
  }
};
export default apiRequest;
