import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./Cards.css";
import ImageLinks from "../../ImagesLinks";
import CircularStatic from "../Progress/Progress";

export default function Cards() {
  let data = [
    {
      title: "Number of customers",
      count: "2829",
      imgSrc: ImageLinks.customers,
      icon: ImageLinks.upArrow,
      color: "rgba(211, 130, 130, 0.08)",
    },
    {
      title: "Active Properties",
      count: "2783",
      imgSrc: ImageLinks.customers,
      icon: ImageLinks.downArrow,
      color: "rgba(84, 212, 240, 0.1)",
    },
    {
      title: "Actionable Requests",
      count: "10",
      imgSrc: ImageLinks.customers,
      icon: ImageLinks.upArrow,
      color: "#FFF2FE",
    },
    {
      title: "New Listings",
      count: "10++",
      imgSrc: ImageLinks.customers,
      icon: ImageLinks.downArrow,
      color: "rgba(119, 145, 186, 0.1)",
    },
  ];
  return (
    <Box
      sx={ {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        my: 4,
      } }
    >
      { data.map((item, index) => (
        <Card
          key={ index }
          sx={ {
            width: "20%",
            backgroundColor: item.color,
            borderRadius: "35px",
            p: 2,
          } }
          className="card"
        >
          <CardContent sx={ { position: "relative" } }>
            <Box sx={ { display: "flex", justifyContent: "space-between" } }>
              <Box>
                <img src={ item.imgSrc } alt={ item.title } width="78.8px" />
              </Box>
              <Box>
                <img
                  src={ item.icon }
                  alt="arrow icon"
                  width="18.8px"
                  style={ { cursor: "pointer" } }
                />
              </Box>
            </Box>
            <Typography
              sx={ {
                fontSize: "16px",
                fontWeight: 500,
                lineHeight: "24px",
                py: 1,
              } }
              color="#818181"
              gutterBottom
            >
              { item.title }
            </Typography>
            <Typography
              color="#0A3A6"
              sx={ {
                fontSize: "32px",
                fontWeight: 600,
                lineHeight: "34px",
                letterSpacing: "-1%",
              } }
            >
              { item.count }
            </Typography>
            { index === 3 && (
              <Box sx={ { position: "absolute", right: 36, bottom: 28 } }>
                <CircularStatic />
              </Box>
            ) }
          </CardContent>
        </Card>
      )) }
    </Box>
  );
}

