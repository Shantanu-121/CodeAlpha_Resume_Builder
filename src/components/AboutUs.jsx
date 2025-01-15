import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

function AboutUs() {
    return <div className="aboutUs">
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 300 }}
                image="https://media.licdn.com/dms/image/v2/D5603AQFRQzbFeMOYAA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1730829070158?e=1742428800&v=beta&t=p4I7q70ePA0YfpLhQRIX8sZRYEDoyYUYHRAO0DyuCRg"
                title="User"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    <span style={{ fontFamily: "Montserrat", fontWeight: "bold" }}>Hello Everyone !</span>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    This project is created by Shantanu Singh , I am currently in my sophomore year of my B-tech degree in Information Technology. This project is a part of my internship program in CodeAlpha. Thankyou !.
                </Typography>
            </CardContent>
            <CardActions>
                <a href="https://github.com/Shantanu-121"><Button size="small"><Avatar src="data:image/png;base64,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" />
                </Button></a>
                <a href="https://www.linkedin.com/in/shantanu-singh-0166b6153/"><Button size="small"><Avatar src=" data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBCAMAAADQfiliAAAAY1BMVEUAd7f///8AcbUAbbOiw93m8fd0pc0Ac7bJ3ewZeLjR4u6Pt9gAdbZvoMu50eUAb7QAaLDa5/Gmwt41icAJe7lgnMn2+/18qtBKkcSZu9rK2erA0uUngLuyzOPv9flclsZLicD7tAumAAADp0lEQVR4nO2cbXeyMAyG24IrlkKLisDGi///Vz74bEzRlLJupH7ofY5+gUMvaEiT1Ejop4pDdjwRLJ2O2aH4Gpn8/xYlV1yiARAix/FKcSOIOUMcfRLj8USQaszbv0nq9JMg1l7Gv0rHVwKBagBzSS5GgtKHDUxiJSUF9whACC/IQXklUAeSeX4GGTn6s8Or5JHguWJYvsdf0ui5I3b9eJolyXjdvCci+aha5sNWGW96OkmU6OuGjKozvZc44vpNyTr6oD7D9FtSPQGMGhCfgooBAEqPaPbISxCAFhLJHCUvYAKaIpkCzwwAdIdkCToxEVCcVVRyIwDtIhSC2kxQoES0rDITnFGeAUvNBBTFFBcJUF7HxVlAsQP/lkgiM0GMYolE50YCpLh+wStjhQjKtDJVWBECN9higheiKPCFPLeI0SoYpdWoIbt+itP6GrnIoIe5OXYSPWnhvCqmlKH/qH1kblLJuuryJG/KVnmqMEjJIq01bqEz6C8l2Silxi/HSZQqmmvuDVj0ePhuGMm1JnXaxF2ed3Fatlr//FWKhjifKz3d3ocxt+8eD++nMbhuq3ye+tMkveifPQooVuxvywIHcprdF5waHof/XFRE+SOftodWpm6aCDiAiK+HWWsOb8RlfXgBD7GbHjSc3F/Xbl1B9/+tZnUtiL0tEkQmgghaUmfnkJUIjgTgmj6XWIngRqAbKwCl7+uibTcCY4A7U7zKHJ0IikUjvGlVQcyJYK2KNYXsTQlWVaO2JditKMltS7Am8dmYYEUGvjEBtac+WxM01mnYmsCegP6O4LwrkqLol86wvg2/IejTCxtD/KjNzKVZat1f/AVB8x0xcj3sTGeltmlwJ8iiu7vj0oSQ21ZIZ4Jq7nB5bVitxFbPIHl0NZGhOlqcLIbgSPBcZJF7eB56m09yJOieva1hx+p82Yagfr6sqSgGnPoHBNBGmNzDnmnYhACMAKH0alRpyZ/cCAboqoYI/s3yOroR7KFLKTiEtwUpTgQ7MDk27FbY3LITgQCn1lAm34QAXvRfl8ASsQeCQBAIAkEgCASBIBAEgkAQCAJBIAgEgWCZwHnn+88IZAsOMRVJ4MpMBxLII0hgq2QRBt3lbVOAQ7VaQ6EW/L3likY6VSVirvyuiUPyTjwdNlUIWfp4rojXNAEwxue63zggUvGlw5ZLcfV6P7Hy3VN1eoG+Nv+9ff77G/33ePrvc32BXl///c4v0PP9An3vL9D7T33+/8E/QB9JtskURDEAAAAASUVORK5CYII=" /></Button></a>
            </CardActions>
        </Card>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <span style={{ marginLeft: "40px", fontSize: "40px", fontWeight: "bolder", color: "black" }}>A full-stack Web Developer</span>
            <span style={{ marginLeft: "40px", fontSize: "25px", fontWeight: "bolder", color: "grey" , maxWidth: "800px"}}>Open for work experiences and opportunities that can help me learn more from the people who are way far than me in skills , thoughts and experiences.</span>
        </div>
    </div>


}

export default AboutUs;
