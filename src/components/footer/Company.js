import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Link } from "@mui/material";

const useStyles = makeStyles({
    row: {
        width: "100%",
        float: "left",
        marginTop: "20px",
    },
    item: {
        margin: "0 3px !important",
        padding: "11px !important",
        fontSize: " 16px !important",
        fontFamily: "montserrat, Sans-serif !important",
        fontWeight: "500 !important",
        color: "#fff !important",
        display: "block",
    },
    col: {
        width: "100%",
        display: "block",
        margin: "auto",
        textAlign: "initial",
    },
});

const pages = ["Services","Features","Team","Contact us","Get tokens",
];

const Company = () => {
    const classes = useStyles();
    return (
        <Box className={classes.row}>
            <Box className={classes.col}>
                {pages.map((page) => (
                    <Link
                        href="/"
                        underline="none"
                        focusVisible
                        key={page}
                        className={classes.item}
                    >
                        {page}
                    </Link>
                ))}
            </Box>
        </Box>
    );
};

export default Company;
