import { render, screen } from "@testing-library/react"
import Profile from "../Profile"
import "@testing-library/jest-dom";

 test('should load Profile component', () => { 
    render(<Profile />);

    //Querying
    const heading = screen.getByRole("heading")

    //Assertion
    expect(heading).toBeInTheDocument();
 })


test('should load input box', () => { 
    render(<Profile />);

    const input = screen.getByRole("textbox")

    //Assertion
    expect(input).toBeInTheDocument();
 })

