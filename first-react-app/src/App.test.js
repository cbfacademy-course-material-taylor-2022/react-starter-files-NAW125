import { render, screen } from '@testing-library/react';
import App from './App';
import { act } from 'react-dom/test-utils';
import ReactDOM from 'react-dom/client';

test('renders learn react link', () => {
  render(<App />);
  const h2 = screen.getByText(/This is my first React page.+/i);
  expect(linkElement).toBeInTheDocument();
  test('renders without crashing', ()
  => {
act(() => {
      const root =
  ReactDOM.createRoot(document.createEl
  ement('div'));
      root.render(<App />);
    });
});
