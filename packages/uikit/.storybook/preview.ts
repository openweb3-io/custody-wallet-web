import type { Preview, Decorator } from '@storybook/react';
import { withThemeByClassName } from '@storybook/addon-themes';
import '../styles/globals.css';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        }
    }
};

export default preview;

export const decorators: Decorator[] = [
    withThemeByClassName({
        themes: {
            light: 'light',
            dark: 'dark'
        },
        defaultTheme: 'light'
    })
];
