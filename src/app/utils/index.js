import { switchClasses } from "@mui/joy";
import { themeColors } from "../../../constants";

export const switchStyles = (theme) => ({
    '--Switch-thumbShadow': '0 3px 7px 0 rgba(0 0 0 / 0.12)',
    '--Switch-thumbSize': '20px',
    '--Switch-trackWidth': '40px',
    '--Switch-trackHeight': '25px',
    '--Switch-trackBackground': theme.vars.palette.background.level3,
    [`& .${switchClasses.thumb}`]: {
        transition: 'width 0.2s, left 0.2s',
    },
    '&:hover': {
        '--Switch-trackBackground': theme.vars.palette.background.level3,
    },
    '&:active': {
        '--Switch-thumbWidth': '32px',
    },
    [`&.${switchClasses.checked}`]: {
        '--Switch-trackBackground': themeColors?.primary,
        '&:hover': {
            '--Switch-trackBackground': themeColors['primary-dark'],
        },
    },
})