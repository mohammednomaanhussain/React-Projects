import React from "react";

const Home = () => {
  return (
    <>
      <div className="w-[60%] m-auto mt-12 flex flex-col gap-8">
        <div className="text-yellow-500 text-xl font-bold">
          Discover the magic of cinema with our comprehensive Movie
          Hub. Whether you're a dedicated cinephile or a casual moviegoer, we've
          got everything you need to enhance your film experience. From the
          latest blockbusters to timeless classics, our platform is your go-to
          destination for all things movies.
        </div>
        <div className="flex flex-col gap-3">
          <div className="text-yellow-500 text-xl font-semibold">Explore Our Extensive Database:</div>
          <div className="text-lg font-medium ">
            Dive into our vast collection of movies spanning across genres,
            eras, and cultures. Our meticulously curated database ensures that
            you can easily find information on your favorite films or unearth
            hidden gems. Get detailed insights into cast and crew, release
            dates, plot summaries, and much more
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="text-yellow-500 text-xl font-semibold">Stay Updated with the Latest Releases:</div>
          <div className="flex flex-col gap-3">
            Be the first to know about upcoming releases and stay in the loop
            with the hottest trends in the film industry. Whether you're into
            action-packed adventures, heartwarming dramas, or mind-bending
            thrillers, we've got the inside scoop on the most anticipated movies
            hitting the silver screen.
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="text-yellow-500 text-xl font-semibold">Immerse Yourself in Reviews and Ratings:</div>
          <div>Uncover the opinions of fellow movie enthusiasts. Read reviews, check ratings, and contribute your own insights to the community. Whether you're looking for critical acclaim or audience favorites, our platform offers a space for lively discussions and shared experiences.</div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="text-yellow-500 text-xl font-semibold">Create Your Watchlist:</div>
          <div>Build and manage your movie watchlist effortlessly. Keep track of films you've seen, those you're planning to watch, and share your curated lists with friends. Never miss a movie again, and make sure you catch up on the must-see titles everyone is talking about.</div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="text-yellow-500 text-xl font-semibold">Behind the Scenes Extras:</div>
          <div>Delve deeper into the world of cinema with exclusive behind-the-scenes content, interviews with filmmakers, and trivia about your favorite movies. Our platform goes beyond the screen, offering a backstage pass to the magic that brings stories to life.</div>
        </div>
        <div className="text-yellow-500 text-xl font-semibold">
        Join us in celebrating the art of filmmaking. Whether you're seeking information, recommendations, or a community to share your passion, Movie Info Hub is your one-stop destination for all things movies. Lights, camera, action!
        </div>
      </div>
    </>
  );
};

export default Home;
