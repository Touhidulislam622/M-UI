import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Typography, TextField } from "@mui/material";



export default function SimplePaper() {
    return (
        <>
            <Box display="flex" justifyContent="center">
                <Box margin="auto">
                    <Typography variant="h4">Centered Text</Typography>
                </Box>
                <TextField>
                    <input type="search" name="" id="" placeholder="Search Item"/>
                </TextField>
            </Box>
            <div>
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        "& > :not(style)": {
                            m: 1,
                            width: 160,
                            height: 160,
                        },
                    }}
                >
                    <Paper>
                        <Typography variant="body1" maxWidth="sm" margin="20px" spacing={2}>
                            <h4>0</h4>
                            <h4>OUT OF SERVICE</h4>
                            <hr />
                            <p>PERCENTAGE:0%</p>
                        </Typography>
                    </Paper>
                    <Paper>
                        <Typography variant="body2" maxWidth="sm" margin="20px" spacing={2}>
                            <h4>0</h4>
                            <h4>OUT OF SERVICE</h4>
                            <hr />
                            <p>PERCENTAGE:0%</p>
                        </Typography>
                    </Paper>
                    <Paper>
                        <Typography variant="body3" maxWidth="sm" margin="20px" spacing={2}>
                            <h4>0</h4>
                            <h4>OUT OF SERVICE</h4>
                            <hr />
                            <p>PERCENTAGE:0%</p>
                        </Typography>
                    </Paper>
                    <Paper>
                        <Typography variant="body4" maxWidth="sm" margin="20px" spacing={2}>
                            <h4>0</h4>
                            <h4>OUT OF SERVICE</h4>
                            <hr />
                            <p>PERCENTAGE:0%</p>
                        </Typography>
                    </Paper>
                    <Paper>
                        <Typography variant="body5" maxWidth="sm" margin="20px" spacing={2}>
                            <h4>0</h4>
                            <h4>OUT OF SERVICE</h4>
                            <hr />
                            <p>PERCENTAGE:0%</p>
                        </Typography>
                    </Paper>
                    <Paper>
                        <Typography variant="body6" maxWidth="sm" margin="20px" spacing={2}>
                            <h4>0</h4>
                            <h4>OUT OF SERVICE</h4>
                            <hr />
                            <p>PERCENTAGE:0%</p>
                        </Typography>
                    </Paper>
                    <Paper>
                        <Typography variant="body7" maxWidth="sm" margin="20px" spacing={2}>
                            <h4>0</h4>
                            <h4>OUT OF SERVICE</h4>
                            <hr />
                            <p>PERCENTAGE:0%</p>
                        </Typography>
                    </Paper>
                    <Paper>
                        <Typography variant="body8" maxWidth="sm" margin="20px" spacing={2}>
                            <h4>0</h4>
                            <h4>OUT OF SERVICE</h4>
                            <hr />
                            <p>PERCENTAGE:0%</p>
                        </Typography>
                    </Paper>
                </Box>
            </div>
        </>
    );
}
