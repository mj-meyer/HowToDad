export interface Joke {
  id: string;
  joke: string;
  status: number;
  jokeState: jokeState;
}

type jokeState = 'Loading' | 'Success' | 'Error';
