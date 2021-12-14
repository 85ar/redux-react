const initialState = {
  employees: [],
};

const employeesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "employees/setEmployees":
      return { ...state, employees: [...state.employees, ...action.payload] };
    default:
      return state;
  }
};

export default employeesReducer;
