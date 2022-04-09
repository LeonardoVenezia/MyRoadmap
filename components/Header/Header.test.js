import { render, screen } from '@testing-library/react';
import Header from '.';

describe('<Header />', ()=> {
    test('Title render', ()=> {
        const title = 'mockTitle';
        const names = ['mockList'];
        render(
            <Header
                title={title}
                names={names}
                // handleClick={handleClick}
                // active={active}
                // description={description}
            />
        );
        const textTitle = screen.getByText(title);
        expect(textTitle).toBeInTheDocument();

    });

    test('List is filled', async ()=> {
        const title = 'mockTitle';
        const names = ['mockList1', 'mockList2'];
        render(
            <Header
                title={title}
                names={names}
                // handleClick={handleClick}
                // active={active}
                // description={description}
            />
        );
        const listElement = await screen.findAllByRole('listitem');
        expect(listElement.length).toBe(names.length);
    });
})
