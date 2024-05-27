import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { appTheme } from './appTheme';
import Reports from './views/Reports/Reports';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import i18n from './i18n';
import store from './store';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <I18nextProvider i18n={i18n}>
            <ThemeProvider theme={appTheme}>
              <CssBaseline />
              <Reports></Reports>
            </ThemeProvider>
          </I18nextProvider>
        </Provider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
