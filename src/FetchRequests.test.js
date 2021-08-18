import { render, fireEvent } from '@testing-library/react';

import FetchRequests from './FetchRequests';

it("checkButtonRender", () => {
    const {queryByTitle} = render(<FetchRequests />);
    const btn = queryByTitle("testButton");

    expect(btn).toBeTruthy()
});

describe("clickButton", () => {
    it("onClick", () => {
        const {queryByTitle} = render(<FetchRequests />);
        const btn = queryByTitle("testButton");
        expect(btn.innerHTML).toBe("Get Data");
        fireEvent.click(btn);
    });
});