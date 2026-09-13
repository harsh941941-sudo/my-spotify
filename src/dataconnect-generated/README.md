# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*GetPlaylist*](#getplaylist)
  - [*ListMyPlaylists*](#listmyplaylists)
  - [*GetFavorite*](#getfavorite)
  - [*ListMyFavorites*](#listmyfavorites)
  - [*GetFollow*](#getfollow)
  - [*ListMyFollowing*](#listmyfollowing)
  - [*GetPlaylistEntry*](#getplaylistentry)
  - [*ListPlaylistEntries*](#listplaylistentries)
  - [*GetSong*](#getsong)
  - [*ListSongs*](#listsongs)
  - [*GetArtist*](#getartist)
  - [*ListArtists*](#listartists)
  - [*GetUser*](#getuser)
- [**Mutations**](#mutations)
  - [*CreatePlaylist*](#createplaylist)
  - [*DeletePlaylist*](#deleteplaylist)
  - [*UpdatePlaylist*](#updateplaylist)
  - [*AddFavorite*](#addfavorite)
  - [*RemoveFavorite*](#removefavorite)
  - [*UpdateFavorite*](#updatefavorite)
  - [*FollowUser*](#followuser)
  - [*UnfollowUser*](#unfollowuser)
  - [*UpdateFollow*](#updatefollow)
  - [*CreatePlaylistEntry*](#createplaylistentry)
  - [*DeletePlaylistEntry*](#deleteplaylistentry)
  - [*UpdatePlaylistEntry*](#updateplaylistentry)
  - [*CreateSong*](#createsong)
  - [*DeleteSong*](#deletesong)
  - [*UpdateSong*](#updatesong)
  - [*CreateArtist*](#createartist)
  - [*DeleteArtist*](#deleteartist)
  - [*UpdateArtist*](#updateartist)
  - [*UpdateUser*](#updateuser)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## GetPlaylist
You can execute the `GetPlaylist` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getPlaylist(vars: GetPlaylistVariables, options?: ExecuteQueryOptions): QueryPromise<GetPlaylistData, GetPlaylistVariables>;

interface GetPlaylistRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetPlaylistVariables): QueryRef<GetPlaylistData, GetPlaylistVariables>;
}
export const getPlaylistRef: GetPlaylistRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getPlaylist(dc: DataConnect, vars: GetPlaylistVariables, options?: ExecuteQueryOptions): QueryPromise<GetPlaylistData, GetPlaylistVariables>;

interface GetPlaylistRef {
  ...
  (dc: DataConnect, vars: GetPlaylistVariables): QueryRef<GetPlaylistData, GetPlaylistVariables>;
}
export const getPlaylistRef: GetPlaylistRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getPlaylistRef:
```typescript
const name = getPlaylistRef.operationName;
console.log(name);
```

### Variables
The `GetPlaylist` query requires an argument of type `GetPlaylistVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetPlaylistVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `GetPlaylist` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetPlaylistData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetPlaylistData {
  playlist?: {
    id: UUIDString;
    title: string;
    description?: string | null;
    isPublic?: boolean | null;
  } & Playlist_Key;
}
```
### Using `GetPlaylist`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getPlaylist, GetPlaylistVariables } from '@dataconnect/generated';

// The `GetPlaylist` query requires an argument of type `GetPlaylistVariables`:
const getPlaylistVars: GetPlaylistVariables = {
  id: ..., 
};

// Call the `getPlaylist()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getPlaylist(getPlaylistVars);
// Variables can be defined inline as well.
const { data } = await getPlaylist({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getPlaylist(dataConnect, getPlaylistVars);

console.log(data.playlist);

// Or, you can use the `Promise` API.
getPlaylist(getPlaylistVars).then((response) => {
  const data = response.data;
  console.log(data.playlist);
});
```

### Using `GetPlaylist`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getPlaylistRef, GetPlaylistVariables } from '@dataconnect/generated';

// The `GetPlaylist` query requires an argument of type `GetPlaylistVariables`:
const getPlaylistVars: GetPlaylistVariables = {
  id: ..., 
};

// Call the `getPlaylistRef()` function to get a reference to the query.
const ref = getPlaylistRef(getPlaylistVars);
// Variables can be defined inline as well.
const ref = getPlaylistRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getPlaylistRef(dataConnect, getPlaylistVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.playlist);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.playlist);
});
```

## ListMyPlaylists
You can execute the `ListMyPlaylists` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listMyPlaylists(options?: ExecuteQueryOptions): QueryPromise<ListMyPlaylistsData, undefined>;

interface ListMyPlaylistsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListMyPlaylistsData, undefined>;
}
export const listMyPlaylistsRef: ListMyPlaylistsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listMyPlaylists(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListMyPlaylistsData, undefined>;

interface ListMyPlaylistsRef {
  ...
  (dc: DataConnect): QueryRef<ListMyPlaylistsData, undefined>;
}
export const listMyPlaylistsRef: ListMyPlaylistsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listMyPlaylistsRef:
```typescript
const name = listMyPlaylistsRef.operationName;
console.log(name);
```

### Variables
The `ListMyPlaylists` query has no variables.
### Return Type
Recall that executing the `ListMyPlaylists` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListMyPlaylistsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListMyPlaylistsData {
  playlists: ({
    id: UUIDString;
    title: string;
    isPublic?: boolean | null;
  } & Playlist_Key)[];
}
```
### Using `ListMyPlaylists`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listMyPlaylists } from '@dataconnect/generated';


// Call the `listMyPlaylists()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listMyPlaylists();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listMyPlaylists(dataConnect);

console.log(data.playlists);

// Or, you can use the `Promise` API.
listMyPlaylists().then((response) => {
  const data = response.data;
  console.log(data.playlists);
});
```

### Using `ListMyPlaylists`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listMyPlaylistsRef } from '@dataconnect/generated';


// Call the `listMyPlaylistsRef()` function to get a reference to the query.
const ref = listMyPlaylistsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listMyPlaylistsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.playlists);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.playlists);
});
```

## GetFavorite
You can execute the `GetFavorite` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getFavorite(vars: GetFavoriteVariables, options?: ExecuteQueryOptions): QueryPromise<GetFavoriteData, GetFavoriteVariables>;

interface GetFavoriteRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetFavoriteVariables): QueryRef<GetFavoriteData, GetFavoriteVariables>;
}
export const getFavoriteRef: GetFavoriteRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getFavorite(dc: DataConnect, vars: GetFavoriteVariables, options?: ExecuteQueryOptions): QueryPromise<GetFavoriteData, GetFavoriteVariables>;

interface GetFavoriteRef {
  ...
  (dc: DataConnect, vars: GetFavoriteVariables): QueryRef<GetFavoriteData, GetFavoriteVariables>;
}
export const getFavoriteRef: GetFavoriteRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getFavoriteRef:
```typescript
const name = getFavoriteRef.operationName;
console.log(name);
```

### Variables
The `GetFavorite` query requires an argument of type `GetFavoriteVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetFavoriteVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `GetFavorite` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetFavoriteData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetFavoriteData {
  favorite?: {
    id: UUIDString;
    song: {
      title: string;
    };
    timestamp?: TimestampString | null;
  } & Favorite_Key;
}
```
### Using `GetFavorite`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getFavorite, GetFavoriteVariables } from '@dataconnect/generated';

// The `GetFavorite` query requires an argument of type `GetFavoriteVariables`:
const getFavoriteVars: GetFavoriteVariables = {
  id: ..., 
};

// Call the `getFavorite()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getFavorite(getFavoriteVars);
// Variables can be defined inline as well.
const { data } = await getFavorite({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getFavorite(dataConnect, getFavoriteVars);

console.log(data.favorite);

// Or, you can use the `Promise` API.
getFavorite(getFavoriteVars).then((response) => {
  const data = response.data;
  console.log(data.favorite);
});
```

### Using `GetFavorite`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getFavoriteRef, GetFavoriteVariables } from '@dataconnect/generated';

// The `GetFavorite` query requires an argument of type `GetFavoriteVariables`:
const getFavoriteVars: GetFavoriteVariables = {
  id: ..., 
};

// Call the `getFavoriteRef()` function to get a reference to the query.
const ref = getFavoriteRef(getFavoriteVars);
// Variables can be defined inline as well.
const ref = getFavoriteRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getFavoriteRef(dataConnect, getFavoriteVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.favorite);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.favorite);
});
```

## ListMyFavorites
You can execute the `ListMyFavorites` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listMyFavorites(options?: ExecuteQueryOptions): QueryPromise<ListMyFavoritesData, undefined>;

interface ListMyFavoritesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListMyFavoritesData, undefined>;
}
export const listMyFavoritesRef: ListMyFavoritesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listMyFavorites(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListMyFavoritesData, undefined>;

interface ListMyFavoritesRef {
  ...
  (dc: DataConnect): QueryRef<ListMyFavoritesData, undefined>;
}
export const listMyFavoritesRef: ListMyFavoritesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listMyFavoritesRef:
```typescript
const name = listMyFavoritesRef.operationName;
console.log(name);
```

### Variables
The `ListMyFavorites` query has no variables.
### Return Type
Recall that executing the `ListMyFavorites` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListMyFavoritesData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListMyFavoritesData {
  favorites: ({
    id: UUIDString;
    song: {
      title: string;
    };
  } & Favorite_Key)[];
}
```
### Using `ListMyFavorites`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listMyFavorites } from '@dataconnect/generated';


// Call the `listMyFavorites()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listMyFavorites();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listMyFavorites(dataConnect);

console.log(data.favorites);

// Or, you can use the `Promise` API.
listMyFavorites().then((response) => {
  const data = response.data;
  console.log(data.favorites);
});
```

### Using `ListMyFavorites`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listMyFavoritesRef } from '@dataconnect/generated';


// Call the `listMyFavoritesRef()` function to get a reference to the query.
const ref = listMyFavoritesRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listMyFavoritesRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.favorites);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.favorites);
});
```

## GetFollow
You can execute the `GetFollow` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getFollow(vars: GetFollowVariables, options?: ExecuteQueryOptions): QueryPromise<GetFollowData, GetFollowVariables>;

interface GetFollowRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetFollowVariables): QueryRef<GetFollowData, GetFollowVariables>;
}
export const getFollowRef: GetFollowRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getFollow(dc: DataConnect, vars: GetFollowVariables, options?: ExecuteQueryOptions): QueryPromise<GetFollowData, GetFollowVariables>;

interface GetFollowRef {
  ...
  (dc: DataConnect, vars: GetFollowVariables): QueryRef<GetFollowData, GetFollowVariables>;
}
export const getFollowRef: GetFollowRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getFollowRef:
```typescript
const name = getFollowRef.operationName;
console.log(name);
```

### Variables
The `GetFollow` query requires an argument of type `GetFollowVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetFollowVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `GetFollow` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetFollowData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetFollowData {
  follow?: {
    id: UUIDString;
    following: {
      username: string;
    };
  } & Follow_Key;
}
```
### Using `GetFollow`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getFollow, GetFollowVariables } from '@dataconnect/generated';

// The `GetFollow` query requires an argument of type `GetFollowVariables`:
const getFollowVars: GetFollowVariables = {
  id: ..., 
};

// Call the `getFollow()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getFollow(getFollowVars);
// Variables can be defined inline as well.
const { data } = await getFollow({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getFollow(dataConnect, getFollowVars);

console.log(data.follow);

// Or, you can use the `Promise` API.
getFollow(getFollowVars).then((response) => {
  const data = response.data;
  console.log(data.follow);
});
```

### Using `GetFollow`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getFollowRef, GetFollowVariables } from '@dataconnect/generated';

// The `GetFollow` query requires an argument of type `GetFollowVariables`:
const getFollowVars: GetFollowVariables = {
  id: ..., 
};

// Call the `getFollowRef()` function to get a reference to the query.
const ref = getFollowRef(getFollowVars);
// Variables can be defined inline as well.
const ref = getFollowRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getFollowRef(dataConnect, getFollowVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.follow);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.follow);
});
```

## ListMyFollowing
You can execute the `ListMyFollowing` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listMyFollowing(options?: ExecuteQueryOptions): QueryPromise<ListMyFollowingData, undefined>;

interface ListMyFollowingRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListMyFollowingData, undefined>;
}
export const listMyFollowingRef: ListMyFollowingRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listMyFollowing(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListMyFollowingData, undefined>;

interface ListMyFollowingRef {
  ...
  (dc: DataConnect): QueryRef<ListMyFollowingData, undefined>;
}
export const listMyFollowingRef: ListMyFollowingRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listMyFollowingRef:
```typescript
const name = listMyFollowingRef.operationName;
console.log(name);
```

### Variables
The `ListMyFollowing` query has no variables.
### Return Type
Recall that executing the `ListMyFollowing` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListMyFollowingData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListMyFollowingData {
  follows: ({
    id: UUIDString;
    following: {
      username: string;
    };
  } & Follow_Key)[];
}
```
### Using `ListMyFollowing`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listMyFollowing } from '@dataconnect/generated';


// Call the `listMyFollowing()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listMyFollowing();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listMyFollowing(dataConnect);

console.log(data.follows);

// Or, you can use the `Promise` API.
listMyFollowing().then((response) => {
  const data = response.data;
  console.log(data.follows);
});
```

### Using `ListMyFollowing`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listMyFollowingRef } from '@dataconnect/generated';


// Call the `listMyFollowingRef()` function to get a reference to the query.
const ref = listMyFollowingRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listMyFollowingRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.follows);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.follows);
});
```

## GetPlaylistEntry
You can execute the `GetPlaylistEntry` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getPlaylistEntry(vars: GetPlaylistEntryVariables, options?: ExecuteQueryOptions): QueryPromise<GetPlaylistEntryData, GetPlaylistEntryVariables>;

interface GetPlaylistEntryRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetPlaylistEntryVariables): QueryRef<GetPlaylistEntryData, GetPlaylistEntryVariables>;
}
export const getPlaylistEntryRef: GetPlaylistEntryRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getPlaylistEntry(dc: DataConnect, vars: GetPlaylistEntryVariables, options?: ExecuteQueryOptions): QueryPromise<GetPlaylistEntryData, GetPlaylistEntryVariables>;

interface GetPlaylistEntryRef {
  ...
  (dc: DataConnect, vars: GetPlaylistEntryVariables): QueryRef<GetPlaylistEntryData, GetPlaylistEntryVariables>;
}
export const getPlaylistEntryRef: GetPlaylistEntryRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getPlaylistEntryRef:
```typescript
const name = getPlaylistEntryRef.operationName;
console.log(name);
```

### Variables
The `GetPlaylistEntry` query requires an argument of type `GetPlaylistEntryVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetPlaylistEntryVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `GetPlaylistEntry` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetPlaylistEntryData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetPlaylistEntryData {
  playlistEntry?: {
    id: UUIDString;
    song: {
      title: string;
    };
    addedAt?: TimestampString | null;
  } & PlaylistEntry_Key;
}
```
### Using `GetPlaylistEntry`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getPlaylistEntry, GetPlaylistEntryVariables } from '@dataconnect/generated';

// The `GetPlaylistEntry` query requires an argument of type `GetPlaylistEntryVariables`:
const getPlaylistEntryVars: GetPlaylistEntryVariables = {
  id: ..., 
};

// Call the `getPlaylistEntry()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getPlaylistEntry(getPlaylistEntryVars);
// Variables can be defined inline as well.
const { data } = await getPlaylistEntry({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getPlaylistEntry(dataConnect, getPlaylistEntryVars);

console.log(data.playlistEntry);

// Or, you can use the `Promise` API.
getPlaylistEntry(getPlaylistEntryVars).then((response) => {
  const data = response.data;
  console.log(data.playlistEntry);
});
```

### Using `GetPlaylistEntry`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getPlaylistEntryRef, GetPlaylistEntryVariables } from '@dataconnect/generated';

// The `GetPlaylistEntry` query requires an argument of type `GetPlaylistEntryVariables`:
const getPlaylistEntryVars: GetPlaylistEntryVariables = {
  id: ..., 
};

// Call the `getPlaylistEntryRef()` function to get a reference to the query.
const ref = getPlaylistEntryRef(getPlaylistEntryVars);
// Variables can be defined inline as well.
const ref = getPlaylistEntryRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getPlaylistEntryRef(dataConnect, getPlaylistEntryVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.playlistEntry);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.playlistEntry);
});
```

## ListPlaylistEntries
You can execute the `ListPlaylistEntries` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listPlaylistEntries(vars: ListPlaylistEntriesVariables, options?: ExecuteQueryOptions): QueryPromise<ListPlaylistEntriesData, ListPlaylistEntriesVariables>;

interface ListPlaylistEntriesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListPlaylistEntriesVariables): QueryRef<ListPlaylistEntriesData, ListPlaylistEntriesVariables>;
}
export const listPlaylistEntriesRef: ListPlaylistEntriesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listPlaylistEntries(dc: DataConnect, vars: ListPlaylistEntriesVariables, options?: ExecuteQueryOptions): QueryPromise<ListPlaylistEntriesData, ListPlaylistEntriesVariables>;

interface ListPlaylistEntriesRef {
  ...
  (dc: DataConnect, vars: ListPlaylistEntriesVariables): QueryRef<ListPlaylistEntriesData, ListPlaylistEntriesVariables>;
}
export const listPlaylistEntriesRef: ListPlaylistEntriesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listPlaylistEntriesRef:
```typescript
const name = listPlaylistEntriesRef.operationName;
console.log(name);
```

### Variables
The `ListPlaylistEntries` query requires an argument of type `ListPlaylistEntriesVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ListPlaylistEntriesVariables {
  playlistId: UUIDString;
}
```
### Return Type
Recall that executing the `ListPlaylistEntries` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListPlaylistEntriesData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListPlaylistEntriesData {
  playlistEntries: ({
    id: UUIDString;
    song: {
      title: string;
    };
  } & PlaylistEntry_Key)[];
}
```
### Using `ListPlaylistEntries`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listPlaylistEntries, ListPlaylistEntriesVariables } from '@dataconnect/generated';

// The `ListPlaylistEntries` query requires an argument of type `ListPlaylistEntriesVariables`:
const listPlaylistEntriesVars: ListPlaylistEntriesVariables = {
  playlistId: ..., 
};

// Call the `listPlaylistEntries()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listPlaylistEntries(listPlaylistEntriesVars);
// Variables can be defined inline as well.
const { data } = await listPlaylistEntries({ playlistId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listPlaylistEntries(dataConnect, listPlaylistEntriesVars);

console.log(data.playlistEntries);

// Or, you can use the `Promise` API.
listPlaylistEntries(listPlaylistEntriesVars).then((response) => {
  const data = response.data;
  console.log(data.playlistEntries);
});
```

### Using `ListPlaylistEntries`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listPlaylistEntriesRef, ListPlaylistEntriesVariables } from '@dataconnect/generated';

// The `ListPlaylistEntries` query requires an argument of type `ListPlaylistEntriesVariables`:
const listPlaylistEntriesVars: ListPlaylistEntriesVariables = {
  playlistId: ..., 
};

// Call the `listPlaylistEntriesRef()` function to get a reference to the query.
const ref = listPlaylistEntriesRef(listPlaylistEntriesVars);
// Variables can be defined inline as well.
const ref = listPlaylistEntriesRef({ playlistId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listPlaylistEntriesRef(dataConnect, listPlaylistEntriesVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.playlistEntries);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.playlistEntries);
});
```

## GetSong
You can execute the `GetSong` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getSong(vars: GetSongVariables, options?: ExecuteQueryOptions): QueryPromise<GetSongData, GetSongVariables>;

interface GetSongRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetSongVariables): QueryRef<GetSongData, GetSongVariables>;
}
export const getSongRef: GetSongRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getSong(dc: DataConnect, vars: GetSongVariables, options?: ExecuteQueryOptions): QueryPromise<GetSongData, GetSongVariables>;

interface GetSongRef {
  ...
  (dc: DataConnect, vars: GetSongVariables): QueryRef<GetSongData, GetSongVariables>;
}
export const getSongRef: GetSongRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getSongRef:
```typescript
const name = getSongRef.operationName;
console.log(name);
```

### Variables
The `GetSong` query requires an argument of type `GetSongVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetSongVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `GetSong` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetSongData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetSongData {
  song?: {
    id: UUIDString;
    title: string;
    duration: number;
    artist: {
      name: string;
    };
  } & Song_Key;
}
```
### Using `GetSong`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getSong, GetSongVariables } from '@dataconnect/generated';

// The `GetSong` query requires an argument of type `GetSongVariables`:
const getSongVars: GetSongVariables = {
  id: ..., 
};

// Call the `getSong()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getSong(getSongVars);
// Variables can be defined inline as well.
const { data } = await getSong({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getSong(dataConnect, getSongVars);

console.log(data.song);

// Or, you can use the `Promise` API.
getSong(getSongVars).then((response) => {
  const data = response.data;
  console.log(data.song);
});
```

### Using `GetSong`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getSongRef, GetSongVariables } from '@dataconnect/generated';

// The `GetSong` query requires an argument of type `GetSongVariables`:
const getSongVars: GetSongVariables = {
  id: ..., 
};

// Call the `getSongRef()` function to get a reference to the query.
const ref = getSongRef(getSongVars);
// Variables can be defined inline as well.
const ref = getSongRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getSongRef(dataConnect, getSongVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.song);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.song);
});
```

## ListSongs
You can execute the `ListSongs` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listSongs(options?: ExecuteQueryOptions): QueryPromise<ListSongsData, undefined>;

interface ListSongsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListSongsData, undefined>;
}
export const listSongsRef: ListSongsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listSongs(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListSongsData, undefined>;

interface ListSongsRef {
  ...
  (dc: DataConnect): QueryRef<ListSongsData, undefined>;
}
export const listSongsRef: ListSongsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listSongsRef:
```typescript
const name = listSongsRef.operationName;
console.log(name);
```

### Variables
The `ListSongs` query has no variables.
### Return Type
Recall that executing the `ListSongs` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListSongsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListSongsData {
  songs: ({
    id: UUIDString;
    title: string;
  } & Song_Key)[];
}
```
### Using `ListSongs`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listSongs } from '@dataconnect/generated';


// Call the `listSongs()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listSongs();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listSongs(dataConnect);

console.log(data.songs);

// Or, you can use the `Promise` API.
listSongs().then((response) => {
  const data = response.data;
  console.log(data.songs);
});
```

### Using `ListSongs`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listSongsRef } from '@dataconnect/generated';


// Call the `listSongsRef()` function to get a reference to the query.
const ref = listSongsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listSongsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.songs);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.songs);
});
```

## GetArtist
You can execute the `GetArtist` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getArtist(vars: GetArtistVariables, options?: ExecuteQueryOptions): QueryPromise<GetArtistData, GetArtistVariables>;

interface GetArtistRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetArtistVariables): QueryRef<GetArtistData, GetArtistVariables>;
}
export const getArtistRef: GetArtistRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getArtist(dc: DataConnect, vars: GetArtistVariables, options?: ExecuteQueryOptions): QueryPromise<GetArtistData, GetArtistVariables>;

interface GetArtistRef {
  ...
  (dc: DataConnect, vars: GetArtistVariables): QueryRef<GetArtistData, GetArtistVariables>;
}
export const getArtistRef: GetArtistRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getArtistRef:
```typescript
const name = getArtistRef.operationName;
console.log(name);
```

### Variables
The `GetArtist` query requires an argument of type `GetArtistVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetArtistVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `GetArtist` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetArtistData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetArtistData {
  artist?: {
    id: UUIDString;
    name: string;
    genre?: string | null;
    verifiedStatus?: boolean | null;
  } & Artist_Key;
}
```
### Using `GetArtist`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getArtist, GetArtistVariables } from '@dataconnect/generated';

// The `GetArtist` query requires an argument of type `GetArtistVariables`:
const getArtistVars: GetArtistVariables = {
  id: ..., 
};

// Call the `getArtist()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getArtist(getArtistVars);
// Variables can be defined inline as well.
const { data } = await getArtist({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getArtist(dataConnect, getArtistVars);

console.log(data.artist);

// Or, you can use the `Promise` API.
getArtist(getArtistVars).then((response) => {
  const data = response.data;
  console.log(data.artist);
});
```

### Using `GetArtist`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getArtistRef, GetArtistVariables } from '@dataconnect/generated';

// The `GetArtist` query requires an argument of type `GetArtistVariables`:
const getArtistVars: GetArtistVariables = {
  id: ..., 
};

// Call the `getArtistRef()` function to get a reference to the query.
const ref = getArtistRef(getArtistVars);
// Variables can be defined inline as well.
const ref = getArtistRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getArtistRef(dataConnect, getArtistVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.artist);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.artist);
});
```

## ListArtists
You can execute the `ListArtists` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listArtists(options?: ExecuteQueryOptions): QueryPromise<ListArtistsData, undefined>;

interface ListArtistsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListArtistsData, undefined>;
}
export const listArtistsRef: ListArtistsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listArtists(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListArtistsData, undefined>;

interface ListArtistsRef {
  ...
  (dc: DataConnect): QueryRef<ListArtistsData, undefined>;
}
export const listArtistsRef: ListArtistsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listArtistsRef:
```typescript
const name = listArtistsRef.operationName;
console.log(name);
```

### Variables
The `ListArtists` query has no variables.
### Return Type
Recall that executing the `ListArtists` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListArtistsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListArtistsData {
  artists: ({
    id: UUIDString;
    name: string;
  } & Artist_Key)[];
}
```
### Using `ListArtists`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listArtists } from '@dataconnect/generated';


// Call the `listArtists()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listArtists();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listArtists(dataConnect);

console.log(data.artists);

// Or, you can use the `Promise` API.
listArtists().then((response) => {
  const data = response.data;
  console.log(data.artists);
});
```

### Using `ListArtists`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listArtistsRef } from '@dataconnect/generated';


// Call the `listArtistsRef()` function to get a reference to the query.
const ref = listArtistsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listArtistsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.artists);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.artists);
});
```

## GetUser
You can execute the `GetUser` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getUser(vars: GetUserVariables, options?: ExecuteQueryOptions): QueryPromise<GetUserData, GetUserVariables>;

interface GetUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetUserVariables): QueryRef<GetUserData, GetUserVariables>;
}
export const getUserRef: GetUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getUser(dc: DataConnect, vars: GetUserVariables, options?: ExecuteQueryOptions): QueryPromise<GetUserData, GetUserVariables>;

interface GetUserRef {
  ...
  (dc: DataConnect, vars: GetUserVariables): QueryRef<GetUserData, GetUserVariables>;
}
export const getUserRef: GetUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getUserRef:
```typescript
const name = getUserRef.operationName;
console.log(name);
```

### Variables
The `GetUser` query requires an argument of type `GetUserVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetUserVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `GetUser` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetUserData {
  user?: {
    id: UUIDString;
    username: string;
    bio?: string | null;
    profileImageUrl?: string | null;
  } & User_Key;
}
```
### Using `GetUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getUser, GetUserVariables } from '@dataconnect/generated';

// The `GetUser` query requires an argument of type `GetUserVariables`:
const getUserVars: GetUserVariables = {
  id: ..., 
};

// Call the `getUser()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getUser(getUserVars);
// Variables can be defined inline as well.
const { data } = await getUser({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getUser(dataConnect, getUserVars);

console.log(data.user);

// Or, you can use the `Promise` API.
getUser(getUserVars).then((response) => {
  const data = response.data;
  console.log(data.user);
});
```

### Using `GetUser`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getUserRef, GetUserVariables } from '@dataconnect/generated';

// The `GetUser` query requires an argument of type `GetUserVariables`:
const getUserVars: GetUserVariables = {
  id: ..., 
};

// Call the `getUserRef()` function to get a reference to the query.
const ref = getUserRef(getUserVars);
// Variables can be defined inline as well.
const ref = getUserRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getUserRef(dataConnect, getUserVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.user);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.user);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreatePlaylist
You can execute the `CreatePlaylist` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createPlaylist(vars: CreatePlaylistVariables): MutationPromise<CreatePlaylistData, CreatePlaylistVariables>;

interface CreatePlaylistRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreatePlaylistVariables): MutationRef<CreatePlaylistData, CreatePlaylistVariables>;
}
export const createPlaylistRef: CreatePlaylistRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createPlaylist(dc: DataConnect, vars: CreatePlaylistVariables): MutationPromise<CreatePlaylistData, CreatePlaylistVariables>;

interface CreatePlaylistRef {
  ...
  (dc: DataConnect, vars: CreatePlaylistVariables): MutationRef<CreatePlaylistData, CreatePlaylistVariables>;
}
export const createPlaylistRef: CreatePlaylistRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createPlaylistRef:
```typescript
const name = createPlaylistRef.operationName;
console.log(name);
```

### Variables
The `CreatePlaylist` mutation requires an argument of type `CreatePlaylistVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreatePlaylistVariables {
  title: string;
  description?: string | null;
  isPublic?: boolean | null;
}
```
### Return Type
Recall that executing the `CreatePlaylist` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreatePlaylistData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreatePlaylistData {
  playlist_insert: Playlist_Key;
}
```
### Using `CreatePlaylist`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createPlaylist, CreatePlaylistVariables } from '@dataconnect/generated';

// The `CreatePlaylist` mutation requires an argument of type `CreatePlaylistVariables`:
const createPlaylistVars: CreatePlaylistVariables = {
  title: ..., 
  description: ..., // optional
  isPublic: ..., // optional
};

// Call the `createPlaylist()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createPlaylist(createPlaylistVars);
// Variables can be defined inline as well.
const { data } = await createPlaylist({ title: ..., description: ..., isPublic: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createPlaylist(dataConnect, createPlaylistVars);

console.log(data.playlist_insert);

// Or, you can use the `Promise` API.
createPlaylist(createPlaylistVars).then((response) => {
  const data = response.data;
  console.log(data.playlist_insert);
});
```

### Using `CreatePlaylist`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createPlaylistRef, CreatePlaylistVariables } from '@dataconnect/generated';

// The `CreatePlaylist` mutation requires an argument of type `CreatePlaylistVariables`:
const createPlaylistVars: CreatePlaylistVariables = {
  title: ..., 
  description: ..., // optional
  isPublic: ..., // optional
};

// Call the `createPlaylistRef()` function to get a reference to the mutation.
const ref = createPlaylistRef(createPlaylistVars);
// Variables can be defined inline as well.
const ref = createPlaylistRef({ title: ..., description: ..., isPublic: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createPlaylistRef(dataConnect, createPlaylistVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.playlist_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.playlist_insert);
});
```

## DeletePlaylist
You can execute the `DeletePlaylist` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deletePlaylist(vars: DeletePlaylistVariables): MutationPromise<DeletePlaylistData, DeletePlaylistVariables>;

interface DeletePlaylistRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeletePlaylistVariables): MutationRef<DeletePlaylistData, DeletePlaylistVariables>;
}
export const deletePlaylistRef: DeletePlaylistRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deletePlaylist(dc: DataConnect, vars: DeletePlaylistVariables): MutationPromise<DeletePlaylistData, DeletePlaylistVariables>;

interface DeletePlaylistRef {
  ...
  (dc: DataConnect, vars: DeletePlaylistVariables): MutationRef<DeletePlaylistData, DeletePlaylistVariables>;
}
export const deletePlaylistRef: DeletePlaylistRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deletePlaylistRef:
```typescript
const name = deletePlaylistRef.operationName;
console.log(name);
```

### Variables
The `DeletePlaylist` mutation requires an argument of type `DeletePlaylistVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeletePlaylistVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `DeletePlaylist` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeletePlaylistData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeletePlaylistData {
  playlist_delete?: Playlist_Key | null;
}
```
### Using `DeletePlaylist`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deletePlaylist, DeletePlaylistVariables } from '@dataconnect/generated';

// The `DeletePlaylist` mutation requires an argument of type `DeletePlaylistVariables`:
const deletePlaylistVars: DeletePlaylistVariables = {
  id: ..., 
};

// Call the `deletePlaylist()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deletePlaylist(deletePlaylistVars);
// Variables can be defined inline as well.
const { data } = await deletePlaylist({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deletePlaylist(dataConnect, deletePlaylistVars);

console.log(data.playlist_delete);

// Or, you can use the `Promise` API.
deletePlaylist(deletePlaylistVars).then((response) => {
  const data = response.data;
  console.log(data.playlist_delete);
});
```

### Using `DeletePlaylist`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deletePlaylistRef, DeletePlaylistVariables } from '@dataconnect/generated';

// The `DeletePlaylist` mutation requires an argument of type `DeletePlaylistVariables`:
const deletePlaylistVars: DeletePlaylistVariables = {
  id: ..., 
};

// Call the `deletePlaylistRef()` function to get a reference to the mutation.
const ref = deletePlaylistRef(deletePlaylistVars);
// Variables can be defined inline as well.
const ref = deletePlaylistRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deletePlaylistRef(dataConnect, deletePlaylistVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.playlist_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.playlist_delete);
});
```

## UpdatePlaylist
You can execute the `UpdatePlaylist` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updatePlaylist(vars: UpdatePlaylistVariables): MutationPromise<UpdatePlaylistData, UpdatePlaylistVariables>;

interface UpdatePlaylistRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdatePlaylistVariables): MutationRef<UpdatePlaylistData, UpdatePlaylistVariables>;
}
export const updatePlaylistRef: UpdatePlaylistRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updatePlaylist(dc: DataConnect, vars: UpdatePlaylistVariables): MutationPromise<UpdatePlaylistData, UpdatePlaylistVariables>;

interface UpdatePlaylistRef {
  ...
  (dc: DataConnect, vars: UpdatePlaylistVariables): MutationRef<UpdatePlaylistData, UpdatePlaylistVariables>;
}
export const updatePlaylistRef: UpdatePlaylistRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updatePlaylistRef:
```typescript
const name = updatePlaylistRef.operationName;
console.log(name);
```

### Variables
The `UpdatePlaylist` mutation requires an argument of type `UpdatePlaylistVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdatePlaylistVariables {
  id: UUIDString;
  title?: string | null;
  description?: string | null;
  isPublic?: boolean | null;
}
```
### Return Type
Recall that executing the `UpdatePlaylist` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdatePlaylistData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdatePlaylistData {
  playlist_update?: Playlist_Key | null;
}
```
### Using `UpdatePlaylist`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updatePlaylist, UpdatePlaylistVariables } from '@dataconnect/generated';

// The `UpdatePlaylist` mutation requires an argument of type `UpdatePlaylistVariables`:
const updatePlaylistVars: UpdatePlaylistVariables = {
  id: ..., 
  title: ..., // optional
  description: ..., // optional
  isPublic: ..., // optional
};

// Call the `updatePlaylist()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updatePlaylist(updatePlaylistVars);
// Variables can be defined inline as well.
const { data } = await updatePlaylist({ id: ..., title: ..., description: ..., isPublic: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updatePlaylist(dataConnect, updatePlaylistVars);

console.log(data.playlist_update);

// Or, you can use the `Promise` API.
updatePlaylist(updatePlaylistVars).then((response) => {
  const data = response.data;
  console.log(data.playlist_update);
});
```

### Using `UpdatePlaylist`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updatePlaylistRef, UpdatePlaylistVariables } from '@dataconnect/generated';

// The `UpdatePlaylist` mutation requires an argument of type `UpdatePlaylistVariables`:
const updatePlaylistVars: UpdatePlaylistVariables = {
  id: ..., 
  title: ..., // optional
  description: ..., // optional
  isPublic: ..., // optional
};

// Call the `updatePlaylistRef()` function to get a reference to the mutation.
const ref = updatePlaylistRef(updatePlaylistVars);
// Variables can be defined inline as well.
const ref = updatePlaylistRef({ id: ..., title: ..., description: ..., isPublic: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updatePlaylistRef(dataConnect, updatePlaylistVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.playlist_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.playlist_update);
});
```

## AddFavorite
You can execute the `AddFavorite` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
addFavorite(vars: AddFavoriteVariables): MutationPromise<AddFavoriteData, AddFavoriteVariables>;

interface AddFavoriteRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: AddFavoriteVariables): MutationRef<AddFavoriteData, AddFavoriteVariables>;
}
export const addFavoriteRef: AddFavoriteRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
addFavorite(dc: DataConnect, vars: AddFavoriteVariables): MutationPromise<AddFavoriteData, AddFavoriteVariables>;

interface AddFavoriteRef {
  ...
  (dc: DataConnect, vars: AddFavoriteVariables): MutationRef<AddFavoriteData, AddFavoriteVariables>;
}
export const addFavoriteRef: AddFavoriteRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the addFavoriteRef:
```typescript
const name = addFavoriteRef.operationName;
console.log(name);
```

### Variables
The `AddFavorite` mutation requires an argument of type `AddFavoriteVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface AddFavoriteVariables {
  songId: UUIDString;
}
```
### Return Type
Recall that executing the `AddFavorite` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `AddFavoriteData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface AddFavoriteData {
  favorite_insert: Favorite_Key;
}
```
### Using `AddFavorite`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, addFavorite, AddFavoriteVariables } from '@dataconnect/generated';

// The `AddFavorite` mutation requires an argument of type `AddFavoriteVariables`:
const addFavoriteVars: AddFavoriteVariables = {
  songId: ..., 
};

// Call the `addFavorite()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await addFavorite(addFavoriteVars);
// Variables can be defined inline as well.
const { data } = await addFavorite({ songId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await addFavorite(dataConnect, addFavoriteVars);

console.log(data.favorite_insert);

// Or, you can use the `Promise` API.
addFavorite(addFavoriteVars).then((response) => {
  const data = response.data;
  console.log(data.favorite_insert);
});
```

### Using `AddFavorite`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, addFavoriteRef, AddFavoriteVariables } from '@dataconnect/generated';

// The `AddFavorite` mutation requires an argument of type `AddFavoriteVariables`:
const addFavoriteVars: AddFavoriteVariables = {
  songId: ..., 
};

// Call the `addFavoriteRef()` function to get a reference to the mutation.
const ref = addFavoriteRef(addFavoriteVars);
// Variables can be defined inline as well.
const ref = addFavoriteRef({ songId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = addFavoriteRef(dataConnect, addFavoriteVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.favorite_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.favorite_insert);
});
```

## RemoveFavorite
You can execute the `RemoveFavorite` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
removeFavorite(vars: RemoveFavoriteVariables): MutationPromise<RemoveFavoriteData, RemoveFavoriteVariables>;

interface RemoveFavoriteRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: RemoveFavoriteVariables): MutationRef<RemoveFavoriteData, RemoveFavoriteVariables>;
}
export const removeFavoriteRef: RemoveFavoriteRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
removeFavorite(dc: DataConnect, vars: RemoveFavoriteVariables): MutationPromise<RemoveFavoriteData, RemoveFavoriteVariables>;

interface RemoveFavoriteRef {
  ...
  (dc: DataConnect, vars: RemoveFavoriteVariables): MutationRef<RemoveFavoriteData, RemoveFavoriteVariables>;
}
export const removeFavoriteRef: RemoveFavoriteRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the removeFavoriteRef:
```typescript
const name = removeFavoriteRef.operationName;
console.log(name);
```

### Variables
The `RemoveFavorite` mutation requires an argument of type `RemoveFavoriteVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface RemoveFavoriteVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `RemoveFavorite` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `RemoveFavoriteData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface RemoveFavoriteData {
  favorite_delete?: Favorite_Key | null;
}
```
### Using `RemoveFavorite`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, removeFavorite, RemoveFavoriteVariables } from '@dataconnect/generated';

// The `RemoveFavorite` mutation requires an argument of type `RemoveFavoriteVariables`:
const removeFavoriteVars: RemoveFavoriteVariables = {
  id: ..., 
};

// Call the `removeFavorite()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await removeFavorite(removeFavoriteVars);
// Variables can be defined inline as well.
const { data } = await removeFavorite({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await removeFavorite(dataConnect, removeFavoriteVars);

console.log(data.favorite_delete);

// Or, you can use the `Promise` API.
removeFavorite(removeFavoriteVars).then((response) => {
  const data = response.data;
  console.log(data.favorite_delete);
});
```

### Using `RemoveFavorite`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, removeFavoriteRef, RemoveFavoriteVariables } from '@dataconnect/generated';

// The `RemoveFavorite` mutation requires an argument of type `RemoveFavoriteVariables`:
const removeFavoriteVars: RemoveFavoriteVariables = {
  id: ..., 
};

// Call the `removeFavoriteRef()` function to get a reference to the mutation.
const ref = removeFavoriteRef(removeFavoriteVars);
// Variables can be defined inline as well.
const ref = removeFavoriteRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = removeFavoriteRef(dataConnect, removeFavoriteVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.favorite_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.favorite_delete);
});
```

## UpdateFavorite
You can execute the `UpdateFavorite` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateFavorite(vars: UpdateFavoriteVariables): MutationPromise<UpdateFavoriteData, UpdateFavoriteVariables>;

interface UpdateFavoriteRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateFavoriteVariables): MutationRef<UpdateFavoriteData, UpdateFavoriteVariables>;
}
export const updateFavoriteRef: UpdateFavoriteRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateFavorite(dc: DataConnect, vars: UpdateFavoriteVariables): MutationPromise<UpdateFavoriteData, UpdateFavoriteVariables>;

interface UpdateFavoriteRef {
  ...
  (dc: DataConnect, vars: UpdateFavoriteVariables): MutationRef<UpdateFavoriteData, UpdateFavoriteVariables>;
}
export const updateFavoriteRef: UpdateFavoriteRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateFavoriteRef:
```typescript
const name = updateFavoriteRef.operationName;
console.log(name);
```

### Variables
The `UpdateFavorite` mutation requires an argument of type `UpdateFavoriteVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateFavoriteVariables {
  id: UUIDString;
  timestamp?: TimestampString | null;
}
```
### Return Type
Recall that executing the `UpdateFavorite` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateFavoriteData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateFavoriteData {
  favorite_update?: Favorite_Key | null;
}
```
### Using `UpdateFavorite`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateFavorite, UpdateFavoriteVariables } from '@dataconnect/generated';

// The `UpdateFavorite` mutation requires an argument of type `UpdateFavoriteVariables`:
const updateFavoriteVars: UpdateFavoriteVariables = {
  id: ..., 
  timestamp: ..., // optional
};

// Call the `updateFavorite()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateFavorite(updateFavoriteVars);
// Variables can be defined inline as well.
const { data } = await updateFavorite({ id: ..., timestamp: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateFavorite(dataConnect, updateFavoriteVars);

console.log(data.favorite_update);

// Or, you can use the `Promise` API.
updateFavorite(updateFavoriteVars).then((response) => {
  const data = response.data;
  console.log(data.favorite_update);
});
```

### Using `UpdateFavorite`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateFavoriteRef, UpdateFavoriteVariables } from '@dataconnect/generated';

// The `UpdateFavorite` mutation requires an argument of type `UpdateFavoriteVariables`:
const updateFavoriteVars: UpdateFavoriteVariables = {
  id: ..., 
  timestamp: ..., // optional
};

// Call the `updateFavoriteRef()` function to get a reference to the mutation.
const ref = updateFavoriteRef(updateFavoriteVars);
// Variables can be defined inline as well.
const ref = updateFavoriteRef({ id: ..., timestamp: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateFavoriteRef(dataConnect, updateFavoriteVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.favorite_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.favorite_update);
});
```

## FollowUser
You can execute the `FollowUser` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
followUser(vars: FollowUserVariables): MutationPromise<FollowUserData, FollowUserVariables>;

interface FollowUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: FollowUserVariables): MutationRef<FollowUserData, FollowUserVariables>;
}
export const followUserRef: FollowUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
followUser(dc: DataConnect, vars: FollowUserVariables): MutationPromise<FollowUserData, FollowUserVariables>;

interface FollowUserRef {
  ...
  (dc: DataConnect, vars: FollowUserVariables): MutationRef<FollowUserData, FollowUserVariables>;
}
export const followUserRef: FollowUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the followUserRef:
```typescript
const name = followUserRef.operationName;
console.log(name);
```

### Variables
The `FollowUser` mutation requires an argument of type `FollowUserVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface FollowUserVariables {
  followingId: UUIDString;
}
```
### Return Type
Recall that executing the `FollowUser` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `FollowUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface FollowUserData {
  follow_insert: Follow_Key;
}
```
### Using `FollowUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, followUser, FollowUserVariables } from '@dataconnect/generated';

// The `FollowUser` mutation requires an argument of type `FollowUserVariables`:
const followUserVars: FollowUserVariables = {
  followingId: ..., 
};

// Call the `followUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await followUser(followUserVars);
// Variables can be defined inline as well.
const { data } = await followUser({ followingId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await followUser(dataConnect, followUserVars);

console.log(data.follow_insert);

// Or, you can use the `Promise` API.
followUser(followUserVars).then((response) => {
  const data = response.data;
  console.log(data.follow_insert);
});
```

### Using `FollowUser`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, followUserRef, FollowUserVariables } from '@dataconnect/generated';

// The `FollowUser` mutation requires an argument of type `FollowUserVariables`:
const followUserVars: FollowUserVariables = {
  followingId: ..., 
};

// Call the `followUserRef()` function to get a reference to the mutation.
const ref = followUserRef(followUserVars);
// Variables can be defined inline as well.
const ref = followUserRef({ followingId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = followUserRef(dataConnect, followUserVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.follow_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.follow_insert);
});
```

## UnfollowUser
You can execute the `UnfollowUser` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
unfollowUser(vars: UnfollowUserVariables): MutationPromise<UnfollowUserData, UnfollowUserVariables>;

interface UnfollowUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UnfollowUserVariables): MutationRef<UnfollowUserData, UnfollowUserVariables>;
}
export const unfollowUserRef: UnfollowUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
unfollowUser(dc: DataConnect, vars: UnfollowUserVariables): MutationPromise<UnfollowUserData, UnfollowUserVariables>;

interface UnfollowUserRef {
  ...
  (dc: DataConnect, vars: UnfollowUserVariables): MutationRef<UnfollowUserData, UnfollowUserVariables>;
}
export const unfollowUserRef: UnfollowUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the unfollowUserRef:
```typescript
const name = unfollowUserRef.operationName;
console.log(name);
```

### Variables
The `UnfollowUser` mutation requires an argument of type `UnfollowUserVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UnfollowUserVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `UnfollowUser` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UnfollowUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UnfollowUserData {
  follow_delete?: Follow_Key | null;
}
```
### Using `UnfollowUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, unfollowUser, UnfollowUserVariables } from '@dataconnect/generated';

// The `UnfollowUser` mutation requires an argument of type `UnfollowUserVariables`:
const unfollowUserVars: UnfollowUserVariables = {
  id: ..., 
};

// Call the `unfollowUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await unfollowUser(unfollowUserVars);
// Variables can be defined inline as well.
const { data } = await unfollowUser({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await unfollowUser(dataConnect, unfollowUserVars);

console.log(data.follow_delete);

// Or, you can use the `Promise` API.
unfollowUser(unfollowUserVars).then((response) => {
  const data = response.data;
  console.log(data.follow_delete);
});
```

### Using `UnfollowUser`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, unfollowUserRef, UnfollowUserVariables } from '@dataconnect/generated';

// The `UnfollowUser` mutation requires an argument of type `UnfollowUserVariables`:
const unfollowUserVars: UnfollowUserVariables = {
  id: ..., 
};

// Call the `unfollowUserRef()` function to get a reference to the mutation.
const ref = unfollowUserRef(unfollowUserVars);
// Variables can be defined inline as well.
const ref = unfollowUserRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = unfollowUserRef(dataConnect, unfollowUserVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.follow_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.follow_delete);
});
```

## UpdateFollow
You can execute the `UpdateFollow` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateFollow(vars: UpdateFollowVariables): MutationPromise<UpdateFollowData, UpdateFollowVariables>;

interface UpdateFollowRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateFollowVariables): MutationRef<UpdateFollowData, UpdateFollowVariables>;
}
export const updateFollowRef: UpdateFollowRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateFollow(dc: DataConnect, vars: UpdateFollowVariables): MutationPromise<UpdateFollowData, UpdateFollowVariables>;

interface UpdateFollowRef {
  ...
  (dc: DataConnect, vars: UpdateFollowVariables): MutationRef<UpdateFollowData, UpdateFollowVariables>;
}
export const updateFollowRef: UpdateFollowRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateFollowRef:
```typescript
const name = updateFollowRef.operationName;
console.log(name);
```

### Variables
The `UpdateFollow` mutation requires an argument of type `UpdateFollowVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateFollowVariables {
  id: UUIDString;
  followingId: UUIDString;
}
```
### Return Type
Recall that executing the `UpdateFollow` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateFollowData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateFollowData {
  follow_update?: Follow_Key | null;
}
```
### Using `UpdateFollow`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateFollow, UpdateFollowVariables } from '@dataconnect/generated';

// The `UpdateFollow` mutation requires an argument of type `UpdateFollowVariables`:
const updateFollowVars: UpdateFollowVariables = {
  id: ..., 
  followingId: ..., 
};

// Call the `updateFollow()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateFollow(updateFollowVars);
// Variables can be defined inline as well.
const { data } = await updateFollow({ id: ..., followingId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateFollow(dataConnect, updateFollowVars);

console.log(data.follow_update);

// Or, you can use the `Promise` API.
updateFollow(updateFollowVars).then((response) => {
  const data = response.data;
  console.log(data.follow_update);
});
```

### Using `UpdateFollow`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateFollowRef, UpdateFollowVariables } from '@dataconnect/generated';

// The `UpdateFollow` mutation requires an argument of type `UpdateFollowVariables`:
const updateFollowVars: UpdateFollowVariables = {
  id: ..., 
  followingId: ..., 
};

// Call the `updateFollowRef()` function to get a reference to the mutation.
const ref = updateFollowRef(updateFollowVars);
// Variables can be defined inline as well.
const ref = updateFollowRef({ id: ..., followingId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateFollowRef(dataConnect, updateFollowVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.follow_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.follow_update);
});
```

## CreatePlaylistEntry
You can execute the `CreatePlaylistEntry` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createPlaylistEntry(vars: CreatePlaylistEntryVariables): MutationPromise<CreatePlaylistEntryData, CreatePlaylistEntryVariables>;

interface CreatePlaylistEntryRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreatePlaylistEntryVariables): MutationRef<CreatePlaylistEntryData, CreatePlaylistEntryVariables>;
}
export const createPlaylistEntryRef: CreatePlaylistEntryRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createPlaylistEntry(dc: DataConnect, vars: CreatePlaylistEntryVariables): MutationPromise<CreatePlaylistEntryData, CreatePlaylistEntryVariables>;

interface CreatePlaylistEntryRef {
  ...
  (dc: DataConnect, vars: CreatePlaylistEntryVariables): MutationRef<CreatePlaylistEntryData, CreatePlaylistEntryVariables>;
}
export const createPlaylistEntryRef: CreatePlaylistEntryRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createPlaylistEntryRef:
```typescript
const name = createPlaylistEntryRef.operationName;
console.log(name);
```

### Variables
The `CreatePlaylistEntry` mutation requires an argument of type `CreatePlaylistEntryVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreatePlaylistEntryVariables {
  playlistId: UUIDString;
  songId: UUIDString;
}
```
### Return Type
Recall that executing the `CreatePlaylistEntry` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreatePlaylistEntryData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreatePlaylistEntryData {
  playlistEntry_insert: PlaylistEntry_Key;
}
```
### Using `CreatePlaylistEntry`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createPlaylistEntry, CreatePlaylistEntryVariables } from '@dataconnect/generated';

// The `CreatePlaylistEntry` mutation requires an argument of type `CreatePlaylistEntryVariables`:
const createPlaylistEntryVars: CreatePlaylistEntryVariables = {
  playlistId: ..., 
  songId: ..., 
};

// Call the `createPlaylistEntry()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createPlaylistEntry(createPlaylistEntryVars);
// Variables can be defined inline as well.
const { data } = await createPlaylistEntry({ playlistId: ..., songId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createPlaylistEntry(dataConnect, createPlaylistEntryVars);

console.log(data.playlistEntry_insert);

// Or, you can use the `Promise` API.
createPlaylistEntry(createPlaylistEntryVars).then((response) => {
  const data = response.data;
  console.log(data.playlistEntry_insert);
});
```

### Using `CreatePlaylistEntry`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createPlaylistEntryRef, CreatePlaylistEntryVariables } from '@dataconnect/generated';

// The `CreatePlaylistEntry` mutation requires an argument of type `CreatePlaylistEntryVariables`:
const createPlaylistEntryVars: CreatePlaylistEntryVariables = {
  playlistId: ..., 
  songId: ..., 
};

// Call the `createPlaylistEntryRef()` function to get a reference to the mutation.
const ref = createPlaylistEntryRef(createPlaylistEntryVars);
// Variables can be defined inline as well.
const ref = createPlaylistEntryRef({ playlistId: ..., songId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createPlaylistEntryRef(dataConnect, createPlaylistEntryVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.playlistEntry_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.playlistEntry_insert);
});
```

## DeletePlaylistEntry
You can execute the `DeletePlaylistEntry` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deletePlaylistEntry(vars: DeletePlaylistEntryVariables): MutationPromise<DeletePlaylistEntryData, DeletePlaylistEntryVariables>;

interface DeletePlaylistEntryRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeletePlaylistEntryVariables): MutationRef<DeletePlaylistEntryData, DeletePlaylistEntryVariables>;
}
export const deletePlaylistEntryRef: DeletePlaylistEntryRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deletePlaylistEntry(dc: DataConnect, vars: DeletePlaylistEntryVariables): MutationPromise<DeletePlaylistEntryData, DeletePlaylistEntryVariables>;

interface DeletePlaylistEntryRef {
  ...
  (dc: DataConnect, vars: DeletePlaylistEntryVariables): MutationRef<DeletePlaylistEntryData, DeletePlaylistEntryVariables>;
}
export const deletePlaylistEntryRef: DeletePlaylistEntryRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deletePlaylistEntryRef:
```typescript
const name = deletePlaylistEntryRef.operationName;
console.log(name);
```

### Variables
The `DeletePlaylistEntry` mutation requires an argument of type `DeletePlaylistEntryVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeletePlaylistEntryVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `DeletePlaylistEntry` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeletePlaylistEntryData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeletePlaylistEntryData {
  playlistEntry_delete?: PlaylistEntry_Key | null;
}
```
### Using `DeletePlaylistEntry`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deletePlaylistEntry, DeletePlaylistEntryVariables } from '@dataconnect/generated';

// The `DeletePlaylistEntry` mutation requires an argument of type `DeletePlaylistEntryVariables`:
const deletePlaylistEntryVars: DeletePlaylistEntryVariables = {
  id: ..., 
};

// Call the `deletePlaylistEntry()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deletePlaylistEntry(deletePlaylistEntryVars);
// Variables can be defined inline as well.
const { data } = await deletePlaylistEntry({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deletePlaylistEntry(dataConnect, deletePlaylistEntryVars);

console.log(data.playlistEntry_delete);

// Or, you can use the `Promise` API.
deletePlaylistEntry(deletePlaylistEntryVars).then((response) => {
  const data = response.data;
  console.log(data.playlistEntry_delete);
});
```

### Using `DeletePlaylistEntry`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deletePlaylistEntryRef, DeletePlaylistEntryVariables } from '@dataconnect/generated';

// The `DeletePlaylistEntry` mutation requires an argument of type `DeletePlaylistEntryVariables`:
const deletePlaylistEntryVars: DeletePlaylistEntryVariables = {
  id: ..., 
};

// Call the `deletePlaylistEntryRef()` function to get a reference to the mutation.
const ref = deletePlaylistEntryRef(deletePlaylistEntryVars);
// Variables can be defined inline as well.
const ref = deletePlaylistEntryRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deletePlaylistEntryRef(dataConnect, deletePlaylistEntryVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.playlistEntry_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.playlistEntry_delete);
});
```

## UpdatePlaylistEntry
You can execute the `UpdatePlaylistEntry` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updatePlaylistEntry(vars: UpdatePlaylistEntryVariables): MutationPromise<UpdatePlaylistEntryData, UpdatePlaylistEntryVariables>;

interface UpdatePlaylistEntryRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdatePlaylistEntryVariables): MutationRef<UpdatePlaylistEntryData, UpdatePlaylistEntryVariables>;
}
export const updatePlaylistEntryRef: UpdatePlaylistEntryRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updatePlaylistEntry(dc: DataConnect, vars: UpdatePlaylistEntryVariables): MutationPromise<UpdatePlaylistEntryData, UpdatePlaylistEntryVariables>;

interface UpdatePlaylistEntryRef {
  ...
  (dc: DataConnect, vars: UpdatePlaylistEntryVariables): MutationRef<UpdatePlaylistEntryData, UpdatePlaylistEntryVariables>;
}
export const updatePlaylistEntryRef: UpdatePlaylistEntryRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updatePlaylistEntryRef:
```typescript
const name = updatePlaylistEntryRef.operationName;
console.log(name);
```

### Variables
The `UpdatePlaylistEntry` mutation requires an argument of type `UpdatePlaylistEntryVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdatePlaylistEntryVariables {
  id: UUIDString;
  addedAt?: TimestampString | null;
}
```
### Return Type
Recall that executing the `UpdatePlaylistEntry` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdatePlaylistEntryData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdatePlaylistEntryData {
  playlistEntry_update?: PlaylistEntry_Key | null;
}
```
### Using `UpdatePlaylistEntry`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updatePlaylistEntry, UpdatePlaylistEntryVariables } from '@dataconnect/generated';

// The `UpdatePlaylistEntry` mutation requires an argument of type `UpdatePlaylistEntryVariables`:
const updatePlaylistEntryVars: UpdatePlaylistEntryVariables = {
  id: ..., 
  addedAt: ..., // optional
};

// Call the `updatePlaylistEntry()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updatePlaylistEntry(updatePlaylistEntryVars);
// Variables can be defined inline as well.
const { data } = await updatePlaylistEntry({ id: ..., addedAt: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updatePlaylistEntry(dataConnect, updatePlaylistEntryVars);

console.log(data.playlistEntry_update);

// Or, you can use the `Promise` API.
updatePlaylistEntry(updatePlaylistEntryVars).then((response) => {
  const data = response.data;
  console.log(data.playlistEntry_update);
});
```

### Using `UpdatePlaylistEntry`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updatePlaylistEntryRef, UpdatePlaylistEntryVariables } from '@dataconnect/generated';

// The `UpdatePlaylistEntry` mutation requires an argument of type `UpdatePlaylistEntryVariables`:
const updatePlaylistEntryVars: UpdatePlaylistEntryVariables = {
  id: ..., 
  addedAt: ..., // optional
};

// Call the `updatePlaylistEntryRef()` function to get a reference to the mutation.
const ref = updatePlaylistEntryRef(updatePlaylistEntryVars);
// Variables can be defined inline as well.
const ref = updatePlaylistEntryRef({ id: ..., addedAt: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updatePlaylistEntryRef(dataConnect, updatePlaylistEntryVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.playlistEntry_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.playlistEntry_update);
});
```

## CreateSong
You can execute the `CreateSong` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createSong(vars: CreateSongVariables): MutationPromise<CreateSongData, CreateSongVariables>;

interface CreateSongRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateSongVariables): MutationRef<CreateSongData, CreateSongVariables>;
}
export const createSongRef: CreateSongRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createSong(dc: DataConnect, vars: CreateSongVariables): MutationPromise<CreateSongData, CreateSongVariables>;

interface CreateSongRef {
  ...
  (dc: DataConnect, vars: CreateSongVariables): MutationRef<CreateSongData, CreateSongVariables>;
}
export const createSongRef: CreateSongRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createSongRef:
```typescript
const name = createSongRef.operationName;
console.log(name);
```

### Variables
The `CreateSong` mutation requires an argument of type `CreateSongVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateSongVariables {
  title: string;
  duration: number;
  artistId: UUIDString;
  albumName?: string | null;
  audioUrl?: string | null;
}
```
### Return Type
Recall that executing the `CreateSong` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateSongData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateSongData {
  song_insert: Song_Key;
}
```
### Using `CreateSong`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createSong, CreateSongVariables } from '@dataconnect/generated';

// The `CreateSong` mutation requires an argument of type `CreateSongVariables`:
const createSongVars: CreateSongVariables = {
  title: ..., 
  duration: ..., 
  artistId: ..., 
  albumName: ..., // optional
  audioUrl: ..., // optional
};

// Call the `createSong()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createSong(createSongVars);
// Variables can be defined inline as well.
const { data } = await createSong({ title: ..., duration: ..., artistId: ..., albumName: ..., audioUrl: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createSong(dataConnect, createSongVars);

console.log(data.song_insert);

// Or, you can use the `Promise` API.
createSong(createSongVars).then((response) => {
  const data = response.data;
  console.log(data.song_insert);
});
```

### Using `CreateSong`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createSongRef, CreateSongVariables } from '@dataconnect/generated';

// The `CreateSong` mutation requires an argument of type `CreateSongVariables`:
const createSongVars: CreateSongVariables = {
  title: ..., 
  duration: ..., 
  artistId: ..., 
  albumName: ..., // optional
  audioUrl: ..., // optional
};

// Call the `createSongRef()` function to get a reference to the mutation.
const ref = createSongRef(createSongVars);
// Variables can be defined inline as well.
const ref = createSongRef({ title: ..., duration: ..., artistId: ..., albumName: ..., audioUrl: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createSongRef(dataConnect, createSongVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.song_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.song_insert);
});
```

## DeleteSong
You can execute the `DeleteSong` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteSong(vars: DeleteSongVariables): MutationPromise<DeleteSongData, DeleteSongVariables>;

interface DeleteSongRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteSongVariables): MutationRef<DeleteSongData, DeleteSongVariables>;
}
export const deleteSongRef: DeleteSongRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteSong(dc: DataConnect, vars: DeleteSongVariables): MutationPromise<DeleteSongData, DeleteSongVariables>;

interface DeleteSongRef {
  ...
  (dc: DataConnect, vars: DeleteSongVariables): MutationRef<DeleteSongData, DeleteSongVariables>;
}
export const deleteSongRef: DeleteSongRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteSongRef:
```typescript
const name = deleteSongRef.operationName;
console.log(name);
```

### Variables
The `DeleteSong` mutation requires an argument of type `DeleteSongVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteSongVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteSong` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteSongData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteSongData {
  song_delete?: Song_Key | null;
}
```
### Using `DeleteSong`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteSong, DeleteSongVariables } from '@dataconnect/generated';

// The `DeleteSong` mutation requires an argument of type `DeleteSongVariables`:
const deleteSongVars: DeleteSongVariables = {
  id: ..., 
};

// Call the `deleteSong()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteSong(deleteSongVars);
// Variables can be defined inline as well.
const { data } = await deleteSong({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteSong(dataConnect, deleteSongVars);

console.log(data.song_delete);

// Or, you can use the `Promise` API.
deleteSong(deleteSongVars).then((response) => {
  const data = response.data;
  console.log(data.song_delete);
});
```

### Using `DeleteSong`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteSongRef, DeleteSongVariables } from '@dataconnect/generated';

// The `DeleteSong` mutation requires an argument of type `DeleteSongVariables`:
const deleteSongVars: DeleteSongVariables = {
  id: ..., 
};

// Call the `deleteSongRef()` function to get a reference to the mutation.
const ref = deleteSongRef(deleteSongVars);
// Variables can be defined inline as well.
const ref = deleteSongRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteSongRef(dataConnect, deleteSongVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.song_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.song_delete);
});
```

## UpdateSong
You can execute the `UpdateSong` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateSong(vars: UpdateSongVariables): MutationPromise<UpdateSongData, UpdateSongVariables>;

interface UpdateSongRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateSongVariables): MutationRef<UpdateSongData, UpdateSongVariables>;
}
export const updateSongRef: UpdateSongRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateSong(dc: DataConnect, vars: UpdateSongVariables): MutationPromise<UpdateSongData, UpdateSongVariables>;

interface UpdateSongRef {
  ...
  (dc: DataConnect, vars: UpdateSongVariables): MutationRef<UpdateSongData, UpdateSongVariables>;
}
export const updateSongRef: UpdateSongRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateSongRef:
```typescript
const name = updateSongRef.operationName;
console.log(name);
```

### Variables
The `UpdateSong` mutation requires an argument of type `UpdateSongVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateSongVariables {
  id: UUIDString;
  title?: string | null;
  duration?: number | null;
}
```
### Return Type
Recall that executing the `UpdateSong` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateSongData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateSongData {
  song_update?: Song_Key | null;
}
```
### Using `UpdateSong`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateSong, UpdateSongVariables } from '@dataconnect/generated';

// The `UpdateSong` mutation requires an argument of type `UpdateSongVariables`:
const updateSongVars: UpdateSongVariables = {
  id: ..., 
  title: ..., // optional
  duration: ..., // optional
};

// Call the `updateSong()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateSong(updateSongVars);
// Variables can be defined inline as well.
const { data } = await updateSong({ id: ..., title: ..., duration: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateSong(dataConnect, updateSongVars);

console.log(data.song_update);

// Or, you can use the `Promise` API.
updateSong(updateSongVars).then((response) => {
  const data = response.data;
  console.log(data.song_update);
});
```

### Using `UpdateSong`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateSongRef, UpdateSongVariables } from '@dataconnect/generated';

// The `UpdateSong` mutation requires an argument of type `UpdateSongVariables`:
const updateSongVars: UpdateSongVariables = {
  id: ..., 
  title: ..., // optional
  duration: ..., // optional
};

// Call the `updateSongRef()` function to get a reference to the mutation.
const ref = updateSongRef(updateSongVars);
// Variables can be defined inline as well.
const ref = updateSongRef({ id: ..., title: ..., duration: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateSongRef(dataConnect, updateSongVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.song_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.song_update);
});
```

## CreateArtist
You can execute the `CreateArtist` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createArtist(vars: CreateArtistVariables): MutationPromise<CreateArtistData, CreateArtistVariables>;

interface CreateArtistRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateArtistVariables): MutationRef<CreateArtistData, CreateArtistVariables>;
}
export const createArtistRef: CreateArtistRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createArtist(dc: DataConnect, vars: CreateArtistVariables): MutationPromise<CreateArtistData, CreateArtistVariables>;

interface CreateArtistRef {
  ...
  (dc: DataConnect, vars: CreateArtistVariables): MutationRef<CreateArtistData, CreateArtistVariables>;
}
export const createArtistRef: CreateArtistRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createArtistRef:
```typescript
const name = createArtistRef.operationName;
console.log(name);
```

### Variables
The `CreateArtist` mutation requires an argument of type `CreateArtistVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateArtistVariables {
  name: string;
  genre?: string | null;
  bio?: string | null;
}
```
### Return Type
Recall that executing the `CreateArtist` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateArtistData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateArtistData {
  artist_insert: Artist_Key;
}
```
### Using `CreateArtist`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createArtist, CreateArtistVariables } from '@dataconnect/generated';

// The `CreateArtist` mutation requires an argument of type `CreateArtistVariables`:
const createArtistVars: CreateArtistVariables = {
  name: ..., 
  genre: ..., // optional
  bio: ..., // optional
};

// Call the `createArtist()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createArtist(createArtistVars);
// Variables can be defined inline as well.
const { data } = await createArtist({ name: ..., genre: ..., bio: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createArtist(dataConnect, createArtistVars);

console.log(data.artist_insert);

// Or, you can use the `Promise` API.
createArtist(createArtistVars).then((response) => {
  const data = response.data;
  console.log(data.artist_insert);
});
```

### Using `CreateArtist`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createArtistRef, CreateArtistVariables } from '@dataconnect/generated';

// The `CreateArtist` mutation requires an argument of type `CreateArtistVariables`:
const createArtistVars: CreateArtistVariables = {
  name: ..., 
  genre: ..., // optional
  bio: ..., // optional
};

// Call the `createArtistRef()` function to get a reference to the mutation.
const ref = createArtistRef(createArtistVars);
// Variables can be defined inline as well.
const ref = createArtistRef({ name: ..., genre: ..., bio: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createArtistRef(dataConnect, createArtistVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.artist_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.artist_insert);
});
```

## DeleteArtist
You can execute the `DeleteArtist` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteArtist(vars: DeleteArtistVariables): MutationPromise<DeleteArtistData, DeleteArtistVariables>;

interface DeleteArtistRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteArtistVariables): MutationRef<DeleteArtistData, DeleteArtistVariables>;
}
export const deleteArtistRef: DeleteArtistRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteArtist(dc: DataConnect, vars: DeleteArtistVariables): MutationPromise<DeleteArtistData, DeleteArtistVariables>;

interface DeleteArtistRef {
  ...
  (dc: DataConnect, vars: DeleteArtistVariables): MutationRef<DeleteArtistData, DeleteArtistVariables>;
}
export const deleteArtistRef: DeleteArtistRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteArtistRef:
```typescript
const name = deleteArtistRef.operationName;
console.log(name);
```

### Variables
The `DeleteArtist` mutation requires an argument of type `DeleteArtistVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteArtistVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteArtist` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteArtistData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteArtistData {
  artist_delete?: Artist_Key | null;
}
```
### Using `DeleteArtist`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteArtist, DeleteArtistVariables } from '@dataconnect/generated';

// The `DeleteArtist` mutation requires an argument of type `DeleteArtistVariables`:
const deleteArtistVars: DeleteArtistVariables = {
  id: ..., 
};

// Call the `deleteArtist()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteArtist(deleteArtistVars);
// Variables can be defined inline as well.
const { data } = await deleteArtist({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteArtist(dataConnect, deleteArtistVars);

console.log(data.artist_delete);

// Or, you can use the `Promise` API.
deleteArtist(deleteArtistVars).then((response) => {
  const data = response.data;
  console.log(data.artist_delete);
});
```

### Using `DeleteArtist`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteArtistRef, DeleteArtistVariables } from '@dataconnect/generated';

// The `DeleteArtist` mutation requires an argument of type `DeleteArtistVariables`:
const deleteArtistVars: DeleteArtistVariables = {
  id: ..., 
};

// Call the `deleteArtistRef()` function to get a reference to the mutation.
const ref = deleteArtistRef(deleteArtistVars);
// Variables can be defined inline as well.
const ref = deleteArtistRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteArtistRef(dataConnect, deleteArtistVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.artist_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.artist_delete);
});
```

## UpdateArtist
You can execute the `UpdateArtist` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateArtist(vars: UpdateArtistVariables): MutationPromise<UpdateArtistData, UpdateArtistVariables>;

interface UpdateArtistRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateArtistVariables): MutationRef<UpdateArtistData, UpdateArtistVariables>;
}
export const updateArtistRef: UpdateArtistRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateArtist(dc: DataConnect, vars: UpdateArtistVariables): MutationPromise<UpdateArtistData, UpdateArtistVariables>;

interface UpdateArtistRef {
  ...
  (dc: DataConnect, vars: UpdateArtistVariables): MutationRef<UpdateArtistData, UpdateArtistVariables>;
}
export const updateArtistRef: UpdateArtistRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateArtistRef:
```typescript
const name = updateArtistRef.operationName;
console.log(name);
```

### Variables
The `UpdateArtist` mutation requires an argument of type `UpdateArtistVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateArtistVariables {
  id: UUIDString;
  name?: string | null;
  verifiedStatus?: boolean | null;
}
```
### Return Type
Recall that executing the `UpdateArtist` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateArtistData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateArtistData {
  artist_update?: Artist_Key | null;
}
```
### Using `UpdateArtist`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateArtist, UpdateArtistVariables } from '@dataconnect/generated';

// The `UpdateArtist` mutation requires an argument of type `UpdateArtistVariables`:
const updateArtistVars: UpdateArtistVariables = {
  id: ..., 
  name: ..., // optional
  verifiedStatus: ..., // optional
};

// Call the `updateArtist()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateArtist(updateArtistVars);
// Variables can be defined inline as well.
const { data } = await updateArtist({ id: ..., name: ..., verifiedStatus: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateArtist(dataConnect, updateArtistVars);

console.log(data.artist_update);

// Or, you can use the `Promise` API.
updateArtist(updateArtistVars).then((response) => {
  const data = response.data;
  console.log(data.artist_update);
});
```

### Using `UpdateArtist`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateArtistRef, UpdateArtistVariables } from '@dataconnect/generated';

// The `UpdateArtist` mutation requires an argument of type `UpdateArtistVariables`:
const updateArtistVars: UpdateArtistVariables = {
  id: ..., 
  name: ..., // optional
  verifiedStatus: ..., // optional
};

// Call the `updateArtistRef()` function to get a reference to the mutation.
const ref = updateArtistRef(updateArtistVars);
// Variables can be defined inline as well.
const ref = updateArtistRef({ id: ..., name: ..., verifiedStatus: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateArtistRef(dataConnect, updateArtistVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.artist_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.artist_update);
});
```

## UpdateUser
You can execute the `UpdateUser` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateUser(vars: UpdateUserVariables): MutationPromise<UpdateUserData, UpdateUserVariables>;

interface UpdateUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateUserVariables): MutationRef<UpdateUserData, UpdateUserVariables>;
}
export const updateUserRef: UpdateUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateUser(dc: DataConnect, vars: UpdateUserVariables): MutationPromise<UpdateUserData, UpdateUserVariables>;

interface UpdateUserRef {
  ...
  (dc: DataConnect, vars: UpdateUserVariables): MutationRef<UpdateUserData, UpdateUserVariables>;
}
export const updateUserRef: UpdateUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateUserRef:
```typescript
const name = updateUserRef.operationName;
console.log(name);
```

### Variables
The `UpdateUser` mutation requires an argument of type `UpdateUserVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateUserVariables {
  id: UUIDString;
  bio?: string | null;
  profileImageUrl?: string | null;
}
```
### Return Type
Recall that executing the `UpdateUser` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateUserData {
  user_update?: User_Key | null;
}
```
### Using `UpdateUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateUser, UpdateUserVariables } from '@dataconnect/generated';

// The `UpdateUser` mutation requires an argument of type `UpdateUserVariables`:
const updateUserVars: UpdateUserVariables = {
  id: ..., 
  bio: ..., // optional
  profileImageUrl: ..., // optional
};

// Call the `updateUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateUser(updateUserVars);
// Variables can be defined inline as well.
const { data } = await updateUser({ id: ..., bio: ..., profileImageUrl: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateUser(dataConnect, updateUserVars);

console.log(data.user_update);

// Or, you can use the `Promise` API.
updateUser(updateUserVars).then((response) => {
  const data = response.data;
  console.log(data.user_update);
});
```

### Using `UpdateUser`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateUserRef, UpdateUserVariables } from '@dataconnect/generated';

// The `UpdateUser` mutation requires an argument of type `UpdateUserVariables`:
const updateUserVars: UpdateUserVariables = {
  id: ..., 
  bio: ..., // optional
  profileImageUrl: ..., // optional
};

// Call the `updateUserRef()` function to get a reference to the mutation.
const ref = updateUserRef(updateUserVars);
// Variables can be defined inline as well.
const ref = updateUserRef({ id: ..., bio: ..., profileImageUrl: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateUserRef(dataConnect, updateUserVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_update);
});
```

