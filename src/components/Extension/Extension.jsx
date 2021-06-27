import React from 'react';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, Button, CssBaseline, Grid, Toolbar, Container, Link } from '@material-ui/core';
import './styles.css';


const Extension = () => {

    return (
        <>
            <Typography variant="h2" align="center" className="font-weight-bolder" style={{ color: "#09DA66" }} gutterBottom>
                Chrome Extensions
            </Typography>
            {/* <Typography variant="h6" align="center" color="textSecondary" paragraph>
                hello everyone, this is a photo album and I m trying ti asdfghjkl zxcvbnm.
            </Typography> */}
            <div className="main">
                <div className="submain">
                    <img
                        src={require("../../images/lec.jpeg").default}

                        alt="headerImage"
                        className="images"
                    />

                    <Typography variant="h3" align="center" color="textSecondary" paragraph style={{ color: "#2F5D62" }}>
                        Krypto Lectures
                    </Typography>



                </div>
                <div className="submain">
                    <Typography variant="h5" align="center" color="textSecondary" paragraph style={{ color: "#558776" }}>
                        Store your most used Zoom, Meet and Teams links and join your online classes at your own ease
                    </Typography>
                    <img
                        src={require("../../images/reading.svg").default}
                        style={{ width: "450px" }}
                        alt="headerImage"
                    />
                </div>
                <div className="submain">
                    <img
                        src={require("../../images/block.png").default}
                        className="images"
                        alt="headerImage"
                    />
                    <Typography variant="h3" align="center" color="textSecondary" paragraph style={{ color: "#2F5D62" }}>

                        KryptoKnights block


                    </Typography>
                </div>
                <div className="submain">
                    <Typography variant="h5" align="center" color="textSecondary" paragraph style={{ color: "#558776" }}>

                        Block social media sites using this chrome extension and boost up your productivity!
                    </Typography>
                    <img
                        src={require("../../images/laptop.svg").default}
                        style={{ width: "450px" }}

                        alt="headerImage"
                    />


                </div>
            </div>







        </>

    );
}

export default Extension;