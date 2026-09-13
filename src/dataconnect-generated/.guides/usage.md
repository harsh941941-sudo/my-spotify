# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.





## Advanced Usage
If a user is not using a supported framework, they can use the generated SDK directly.

Here's an example of how to use it with the first 5 operations:

```js
import { createPlaylist, deletePlaylist, updatePlaylist, getPlaylist, listMyPlaylists, addFavorite, removeFavorite, updateFavorite, getFavorite, listMyFavorites } from '@dataconnect/generated';


// Operation CreatePlaylist:  For variables, look at type CreatePlaylistVars in ../index.d.ts
const { data } = await CreatePlaylist(dataConnect, createPlaylistVars);

// Operation DeletePlaylist:  For variables, look at type DeletePlaylistVars in ../index.d.ts
const { data } = await DeletePlaylist(dataConnect, deletePlaylistVars);

// Operation UpdatePlaylist:  For variables, look at type UpdatePlaylistVars in ../index.d.ts
const { data } = await UpdatePlaylist(dataConnect, updatePlaylistVars);

// Operation GetPlaylist:  For variables, look at type GetPlaylistVars in ../index.d.ts
const { data } = await GetPlaylist(dataConnect, getPlaylistVars);

// Operation ListMyPlaylists: 
const { data } = await ListMyPlaylists(dataConnect);

// Operation AddFavorite:  For variables, look at type AddFavoriteVars in ../index.d.ts
const { data } = await AddFavorite(dataConnect, addFavoriteVars);

// Operation RemoveFavorite:  For variables, look at type RemoveFavoriteVars in ../index.d.ts
const { data } = await RemoveFavorite(dataConnect, removeFavoriteVars);

// Operation UpdateFavorite:  For variables, look at type UpdateFavoriteVars in ../index.d.ts
const { data } = await UpdateFavorite(dataConnect, updateFavoriteVars);

// Operation GetFavorite:  For variables, look at type GetFavoriteVars in ../index.d.ts
const { data } = await GetFavorite(dataConnect, getFavoriteVars);

// Operation ListMyFavorites: 
const { data } = await ListMyFavorites(dataConnect);


```