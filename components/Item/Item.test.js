import { render, screen } from '@testing-library/react';
import Item from '.';

describe('<Item />', ()=> {
    test('Render valid image', ()=> {
        const name = 'mockName';
        const src = '/css.png';
        render(
            <Item
                name={name}
                src={src}
                width={80}
                height={80}
            />
        );

        const image = screen.getByText(name);
        expect(image).toBeInTheDocument();
    });

    test('Click on handleClick()', ()=> {
        const name = 'mockName';
        const src = '/css.png';
        const { container } = render(
            <Item
                name={name}
                src={src}
                width={80}
                height={80}
            />
        );
        const clickeable = container.querySelector('.item');
        expect(clickeable).toBeInTheDocument();
    })
});