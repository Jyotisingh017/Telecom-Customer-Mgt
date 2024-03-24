import React from "react";
import axios from "axios";
import { render, screen, waitFor } from "@testing-library/react";
import CustomerDetails from "./CustomerDetails";

jest.mock("axios");

test("fetched customer data and displays in table", async() => {
    
    const userD = [
        {
            "id": 1,
            "name": "Clementina DuBuque",
            "email": "Rey.Padberg@karina.biz",
            "phone": "024-648-3804",
            "plan": "Gold180",
            "status": "Active"
        },
        {
            "id": 2,
            "name": "Leanne Graham",
            "email": "Sincere@april.biz",
            "phone": "024-648-3814",
            "plan": "Platinum365",
            "status": "Inactive"
        }]

    await axios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: userD })
    );
    render(<CustomerDetails />);
   await waitFor(() => {
    const alertElement = screen.getAllByRole("row_cust");
    expect(alertElement).toHaveLength(2);
  });
});
