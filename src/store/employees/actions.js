import getUsers from "../../services/getUsers";

export const setEmployeesAction = (payload) => {
  return {
    type: "employees/setEmployees",
    payload: payload,
  };
};

export const loadEmployees = () => async (dispatch) => {
  try {
    const { data } = await getUsers();
    dispatch(setEmployeesAction(data));
  } catch (e) {
    console.log(e, "произошла ошибка");
  }
};
