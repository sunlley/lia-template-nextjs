import {MantineThemeOverride, NumberInput, Pagination} from "@mantine/core";
import {COLORS} from "@/styles/colors";

export const MantineTheme: MantineThemeOverride = {
    colors:COLORS,
    white: "#FFFFFF",
    black: "#000000",
    primaryColor: "blue",
    // defaultGradient: {
    //     from: "#684dff",
    //     to: "#9885ff",
    //     deg: 45,
    // },
    // primaryShade: 6,
    // defaultRadius: "md",
    // cursorType: 'pointer',
    // breakpoints: {
    //     xs: '16em',
    //     sm: '30em',
    //     md: '48em',
    //     lg: '64em',
    //     xl: '74em',
    // },
    components: {
        NumberInput: NumberInput.extend({
            // @ts-ignore
            vars: (_, _props: any) => {
                return {
                    wrapper: {
                        '--mantine-color-error': "var(--mantine-color-red-6)"
                    },
                    error: {
                        '--mantine-color-error': "var(--mantine-color-red-6)"
                    }
                }
            }
        }),
        Pagination: Pagination.extend({
            vars: (_, _props: any) => {
                let active = _props['data-active'];
                return {
                    root: {
                        // '--pagination-active-bg':"var(--mantine-color-green-5)"
                    },

                }
            },
        }),

    }
}

