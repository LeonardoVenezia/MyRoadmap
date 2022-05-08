import { render, screen } from '@testing-library/react';
import ItemsSections from '.';
import mock from './mock.json';

describe('<ItemsSections />', ()=> {
    const sections = mock;
    test('Amount of sections', ()=> {
        const { container } = render(
            <ItemsSections
                sections={sections}
            />
        );

        const sectionsElements = container.querySelectorAll('.section');
        expect(sectionsElements).toHaveLength(sections.length);
    })
})