import { Client, Databases, ID, Query } from "react-native-appwrite";

const DATABASE_ID = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!;
const COLLECTION_ID = process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID!;

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!);

const database = new Databases(client);

export const updateSearchCount = async ({
  query,
  movie,
}: {
  query: string;
  movie: Movie;
}) => {
  try {
    const result = await database.listDocuments(DATABASE_ID!, COLLECTION_ID!, [
      Query.equal("SEARCH_TERM", query),
    ]);

    console.log(query);

    console.log(result);

    if (result.documents.length > 0) {
      const existingMovie = result.documents[0];

      await database.updateDocument(
        DATABASE_ID,
        COLLECTION_ID,
        existingMovie.$id,
        {
          COUNT: existingMovie.COUNT + 1,
        }
      );
    } else {
      await database.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {
        SEARCH_TERM: query,
        MOVIE_ID: movie.id,
        COUNT: 1,
        POSTER_URL: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        TITLE: movie.title,
      });
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getTrendingMovies = async () => {
  try {
    const result = await database.listDocuments(DATABASE_ID!, COLLECTION_ID!, [
      Query.limit(5),
      Query.orderDesc("COUNT"),
    ]);

    return result.documents;
  } catch (error) {
    console.log(error);
  }
};
