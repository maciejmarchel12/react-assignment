import React, { useContext  } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png'
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import { MoviesContext } from "../../contexts/moviesContext";
import { getMovie } from "../../api/movies-api";

export default function MovieCard({ movie, action }) {
    const { favorites, addToFavorites, mustWatch, addToMustWatch } = useContext(MoviesContext);

    if (favorites.find((id) => id === movie.id)) {
      movie.favorite = true;
    } else {
      movie.favorite = false
    }
  
    // eslint-disable-next-line no-unused-vars
    const handleAddToFavorite = (e) => {
      e.preventDefault();
      addToFavorites(movie);
    };

    if (mustWatch.find((id) => id === movie.id)) {
      movie.mustWatch = true;
    } else {
      movie.mustWatch = false
    }

    // eslint-disable-next-line no-unused-vars
    const handleAddToMustWatch = (e) => {
      e.preventDefault();
      addToMustWatch(movie);
    };

  return (
    <Card sx={{ maxWidth: 345, backgroundColor: "beige" }}>
            <CardHeader
        avatar={
          movie.favorite ? (
            <Avatar sx={{ backgroundColor: 'red' }}>
              <FavoriteIcon />
            </Avatar>
          ) : null
        }
        title={
          <Typography variant="h6" component="p">
            {movie.title}{" "}
          </Typography>
        }
      />
      <CardMedia
        sx={{ height: 500 }}
        image={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {movie.release_date}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {movie.vote_average}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        {action(movie)}
        <Link to={`/movies/${movie.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}