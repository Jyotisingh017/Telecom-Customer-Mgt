import { HOME, REGISTER, PLAN_DETAILS, CUSTOMER_DETAILS } from "./constants";
import Home from "./home/Home";
import Register from "./register/Register";
import PlanDetails from "./plan-details/PlanDetails";
import CustomerDetails from "./customer-details/CustomerDetails";

export const routeList = [
  {
    path: HOME,
    Component: Home,
  },
  {
    path: REGISTER,
    Component: Register,
  },
  {
    path: PLAN_DETAILS,
    Component: PlanDetails,
  },
  {
    path: CUSTOMER_DETAILS,
    Component: CustomerDetails,
  }
];
