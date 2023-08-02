const api_key = "ebfc5e1160062bffcee6f6540204f260";


const requests = 
{
    nowPlaying:`https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}`,
    upComing:`https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}`,
    topRated:`
    https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}`,
    popular:`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`,
    trending:`
    https://api.themoviedb.org/3/trending/movie/day?api_key=${api_key}`,
    tv:`https://api.themoviedb.org/3/trending/tv/week?api_key=${api_key}`,
    
}


export default requests


    


