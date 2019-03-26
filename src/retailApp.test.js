import React from 'react';
import {renderIntoDocument, cleanup} from 'react-testing-library';
import SelectedItemImage from './components/selectedItemImage';

afterEach(cleanup)

test('<selectedItemImage>', () => {
    expect(true).toBeTruthy();
});

it('renders welcome message', () => {
    const { getByText } = render(<App />);
    expect(getByText('Welcome to React')).toBeInTheDocument();
  });

test('Fake Test', () => {
    expect(true).toBeTruthy();
});