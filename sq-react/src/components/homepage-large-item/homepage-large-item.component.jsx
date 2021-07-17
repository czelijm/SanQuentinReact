import { Paper, styled } from "@material-ui/core";

export const HomePageLargeItem = styled(Paper)(({ theme }) => { return {
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '100%'
}});