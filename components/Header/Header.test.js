import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import styles from './Header.module.css';
import Header from '.';

describe('<Header />', ()=> {
    const names = [
        {
            name: 'mockList1',
            key: 1,
        },
        {
            name: 'mockList2',
            key: 2,
        }
    ];
    test('Title render', ()=> {
        const title = 'mockTitle';
        render(
            <Header
                title={title}
                names={names}
            />
        );
        const textTitle = screen.getByText(title);
        expect(textTitle).toBeInTheDocument();

    });

    test('List is filled', async ()=> {
        const title = 'mockTitle';
        render(
            <Header
                title={title}
                names={names}
            />
        );
        const listElement = await screen.findAllByRole('listitem');
        expect(listElement.length).toBe(names.length);
    });

    test('handleClick behavior', async ()=> {
        const title = 'mockTitle';

        const handleClick = jest.fn(()=>{});

        render(
            <Header
                title={title}
                names={names}
                handleClick={handleClick}
            />
        );

        const button = await screen.getByText('mockList1');
        userEvent.click(button);
        expect(handleClick).toHaveBeenCalled();
    });
})
