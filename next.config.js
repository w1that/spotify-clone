/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    // MONGO_URI: 'mongodb+srv://w1that:dCQtaHgejG9gP5vi@cluster0.n0lh7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',

  },
  images:{
    domains:['i.scdn.co', 'dissectpodcast.com','seed-mix-image.spotifycdn.com','charts-images.scdn.co']
  },
}



module.exports = nextConfig
