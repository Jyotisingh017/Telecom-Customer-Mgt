import React from "react";
import { render, screen,waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PlanDetails from "./PlanDetails";
import { UserDetailContext } from "../contexts/UserDetailContext";

const userDet = {
  name: "Mac",
  plan: "Platinum365",
  renewDte: "24/04/2024",
  status: "Active",
};
test("renders plan details page", () => {
  render(
    <UserDetailContext.Provider value={userDet}>
      <PlanDetails />
    </UserDetailContext.Provider>
  );
  const element = screen.getByRole("button");
  expect(element).toBeInTheDocument();
});

test("should display plan details", () => {
    render(
        <UserDetailContext.Provider value={userDet}>
          <PlanDetails />
        </UserDetailContext.Provider>
      );
    const alertElement = screen.getAllByRole("plan");
    expect(alertElement).toHaveLength(3);
});

test("should display renew plan button", () => {
    render(
        <UserDetailContext.Provider value={userDet}>
          <PlanDetails />
        </UserDetailContext.Provider>
      );
    const alertElement = screen.getAllByRole("plan");
    userEvent.click(alertElement[2]);
  waitFor(() => {
    const alertElement = screen.findByRole("renewBtn");
    expect(alertElement).toBeInTheDocument();
  });
});
