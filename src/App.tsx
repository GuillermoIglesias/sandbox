import { ThemeProvider } from './components/ThemeProvider';
import Router from './components/Router';
import { HeaderTabs } from './components/HeaderTabs';

export default function App() {
  return (
    <ThemeProvider>
      <HeaderTabs
        user={{
          name: 'Lagarto Juancho',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb3k7i0wxshi9IJJ-WtvUxhXfx-4RMVj3qKTAaW_MP2A&s',
        }}
        tabs={['Trades']}
      />
      <Router />
    </ThemeProvider>
  );
}
