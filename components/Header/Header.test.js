import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import styles from './Header.module.css';
import Header from '.';

describe('<Header />', ()=> {

    const title = 'mockTitle';
    const active = 1;
    const names = [
        {
            name: 'mockList1',
            index: 0,
        },
        {
            name: 'mockList2',
            index: 1,
        }
    ];
    test('Title render', ()=> {

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

        render(
            <Header
                title={title}
                names={names}
            />
        );
        const listElement = await screen.findAllByRole('listitem');
        expect(listElement.length).toBe(names.length);
    });

    test('handleClick behavior', ()=> {

        const handleClick = jest.fn(()=>{});

        render(
            <Header
                title={title}
                names={names}
                handleClick={handleClick}
            />
        );

        const button = screen.getByText('mockList1');
        userEvent.click(button);
        expect(handleClick).toHaveBeenCalled();
    });

    test('active behavior', ()=> {

        render(
            <Header
                title={title}
                names={names}
                active={active}
            />
        );

        const buttons = screen.getAllByRole('button');
        expect(buttons[active].className).toMatch(styles.active);
    });
})
