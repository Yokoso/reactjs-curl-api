import { render } from '@testing-library/react';

import Header from './Header';

it("checkHeaderRender", () => {
    const {queryByTitle} = render(<Header />);
    const header = queryByTitle("testHeader");

    expect(header).toBeTruthy()
});
