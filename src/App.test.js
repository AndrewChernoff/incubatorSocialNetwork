import SamuraiApp from './App';
import ReactDOM from 'react-dom';
/* test('renders learn react link', () => {
  render(<SamuraiApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
}); */

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SamuraiApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
