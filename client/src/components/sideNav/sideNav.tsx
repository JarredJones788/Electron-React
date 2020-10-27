import React, { useEffect } from 'react';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import ReactTooltip from 'react-tooltip';

const useStyles = makeStyles(() =>
    createStyles({
        drawer: {
            flexShrink: 0
        },
        drawerPaper: {
            width: 60,
            backgroundColor: "#003049",
            zIndex: 998
        },
        header: {
            marginTop: "44px"
        },
        smallListItem: {
            justifyContent: "center",
            padding: "0.9em",
            '&:hover': {
                background: "rgba(0,0,0,0.5)",
            },
        },
        list: {
            paddingTop: "0"
        },
        divider: {
            background: "black !important"
        },
        selected: {
            background: "rgba(0,0,0,0.5)"
        }
    }),
);

export interface Widget {
    icon: any;
    toolTip: string;
    location: string;
}

interface IProps {
    history: any;
    widgets: Widget[];
}

export default function Sidenav(props: IProps) {
    const classes = useStyles();

    useEffect(() => {
        ReactTooltip.rebuild()
    })

    const listItems = props.widgets.map((widget: Widget) => {
        const selected = window.location.href.indexOf(widget.location) > -1 ? classes.selected : null;

        return (
            <div key={widget.location}>
                <ListItem data-for='tooltip-broker-side-nav' data-tip={widget.toolTip} className={`${selected} ${classes.smallListItem}`} onClick={() => { props.history.push(widget.location); }} button>
                    {widget.icon}
                </ListItem>
                <Divider className={classes.divider} />
            </div>
        )
    })

    const drawer = (
        <div>
            <Divider className={classes.divider} />
            <List className={classes.list}>
                {listItems}
            </List>
        </div>
    );

    return (
        <nav className={classes.drawer}>
            <ReactTooltip id="tooltip-broker-side-nav" place="right" className="tooltip-zindex" />
            <Drawer
                classes={{
                    paper: classes.drawerPaper,
                }}
                PaperProps={{ elevation: 0 }}
                variant="permanent"
            >
                <div className={classes.header}></div>
                {drawer}
            </Drawer>
        </nav>
    );
}