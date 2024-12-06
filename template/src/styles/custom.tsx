import {DARK, LIGHT,COLORS} from "@/styles/colors";


export const installTheme = (style?:'light'|'dark'|'auto') => {
    // console.log('installTheme',style)
    if (style==null){
        // @ts-ignore
        style = localStorage.getItem('_theme');
    }else{
        localStorage.setItem('_theme',`${style}`);
    }
    if (style=='light'){
        style='light';
    }else{
        style='dark';
    }
    let body = document.getElementsByTagName('body')[0];
    let colors:any=JSON.parse(JSON.stringify(DARK));
    if (style=='light'){
        for (const lightColorsKey in LIGHT) {
            colors[lightColorsKey]=LIGHT[lightColorsKey]
        }
    }
    for (const colorsKey in colors) {
        // @ts-ignore
        body.style.setProperty(`--${colorsKey}`, colors[colorsKey]);
    }
    for (const key in COLORS) {
        let colors = COLORS[key];
        for (let i = 0; i < colors.length; i++) {
            // @ts-ignore
            body.style.setProperty(`--${key}-${i}`, colors[i]);
        }
    }
    return style;
}
export const changeTheme = (style:'light'|'dark'|'auto',setTheme:((style:'light'|'dark')=>void)|null) => {
    style = installTheme(style);
    if (setTheme){
        setTheme(style)
    }
}