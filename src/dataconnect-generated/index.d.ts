import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, ExecuteQueryOptions, MutationRef, MutationPromise, DataConnectSettings } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;
export const dataConnectSettings: DataConnectSettings;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface AddFavoriteData {
  favorite_insert: Favorite_Key;
}

export interface AddFavoriteVariables {
  songId: UUIDString;
}

export interface Artist_Key {
  id: UUIDString;
  __typename?: 'Artist_Key';
}

export interface CreateArtistData {
  artist_insert: Artist_Key;
}

export interface CreateArtistVariables {
  name: string;
  genre?: string | null;
  bio?: string | null;
}

export interface CreatePlaylistData {
  playlist_insert: Playlist_Key;
}

export interface CreatePlaylistEntryData {
  playlistEntry_insert: PlaylistEntry_Key;
}

export interface CreatePlaylistEntryVariables {
  playlistId: UUIDString;
  songId: UUIDString;
}

export interface CreatePlaylistVariables {
  title: string;
  description?: string | null;
  isPublic?: boolean | null;
}

export interface CreateSongData {
  song_insert: Song_Key;
}

export interface CreateSongVariables {
  title: string;
  duration: number;
  artistId: UUIDString;
  albumName?: string | null;
  audioUrl?: string | null;
}

export interface DeleteArtistData {
  artist_delete?: Artist_Key | null;
}

export interface DeleteArtistVariables {
  id: UUIDString;
}

export interface DeletePlaylistData {
  playlist_delete?: Playlist_Key | null;
}

export interface DeletePlaylistEntryData {
  playlistEntry_delete?: PlaylistEntry_Key | null;
}

export interface DeletePlaylistEntryVariables {
  id: UUIDString;
}

export interface DeletePlaylistVariables {
  id: UUIDString;
}

export interface DeleteSongData {
  song_delete?: Song_Key | null;
}

export interface DeleteSongVariables {
  id: UUIDString;
}

export interface Favorite_Key {
  id: UUIDString;
  __typename?: 'Favorite_Key';
}

export interface FollowUserData {
  follow_insert: Follow_Key;
}

export interface FollowUserVariables {
  followingId: UUIDString;
}

export interface Follow_Key {
  id: UUIDString;
  __typename?: 'Follow_Key';
}

export interface GetArtistData {
  artist?: {
    id: UUIDString;
    name: string;
    genre?: string | null;
    verifiedStatus?: boolean | null;
  } & Artist_Key;
}

export interface GetArtistVariables {
  id: UUIDString;
}

export interface GetFavoriteData {
  favorite?: {
    id: UUIDString;
    song: {
      title: string;
    };
    timestamp?: TimestampString | null;
  } & Favorite_Key;
}

export interface GetFavoriteVariables {
  id: UUIDString;
}

export interface GetFollowData {
  follow?: {
    id: UUIDString;
    following: {
      username: string;
    };
  } & Follow_Key;
}

export interface GetFollowVariables {
  id: UUIDString;
}

export interface GetPlaylistData {
  playlist?: {
    id: UUIDString;
    title: string;
    description?: string | null;
    isPublic?: boolean | null;
  } & Playlist_Key;
}

export interface GetPlaylistEntryData {
  playlistEntry?: {
    id: UUIDString;
    song: {
      title: string;
    };
    addedAt?: TimestampString | null;
  } & PlaylistEntry_Key;
}

export interface GetPlaylistEntryVariables {
  id: UUIDString;
}

export interface GetPlaylistVariables {
  id: UUIDString;
}

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

export interface GetSongVariables {
  id: UUIDString;
}

export interface GetUserData {
  user?: {
    id: UUIDString;
    username: string;
    bio?: string | null;
    profileImageUrl?: string | null;
  } & User_Key;
}

export interface GetUserVariables {
  id: UUIDString;
}

export interface ListArtistsData {
  artists: ({
    id: UUIDString;
    name: string;
  } & Artist_Key)[];
}

export interface ListMyFavoritesData {
  favorites: ({
    id: UUIDString;
    song: {
      title: string;
    };
  } & Favorite_Key)[];
}

export interface ListMyFollowingData {
  follows: ({
    id: UUIDString;
    following: {
      username: string;
    };
  } & Follow_Key)[];
}

export interface ListMyPlaylistsData {
  playlists: ({
    id: UUIDString;
    title: string;
    isPublic?: boolean | null;
  } & Playlist_Key)[];
}

export interface ListPlaylistEntriesData {
  playlistEntries: ({
    id: UUIDString;
    song: {
      title: string;
    };
  } & PlaylistEntry_Key)[];
}

export interface ListPlaylistEntriesVariables {
  playlistId: UUIDString;
}

export interface ListSongsData {
  songs: ({
    id: UUIDString;
    title: string;
  } & Song_Key)[];
}

export interface PlaylistEntry_Key {
  id: UUIDString;
  __typename?: 'PlaylistEntry_Key';
}

export interface Playlist_Key {
  id: UUIDString;
  __typename?: 'Playlist_Key';
}

export interface RemoveFavoriteData {
  favorite_delete?: Favorite_Key | null;
}

export interface RemoveFavoriteVariables {
  id: UUIDString;
}

export interface Song_Key {
  id: UUIDString;
  __typename?: 'Song_Key';
}

export interface UnfollowUserData {
  follow_delete?: Follow_Key | null;
}

export interface UnfollowUserVariables {
  id: UUIDString;
}

export interface UpdateArtistData {
  artist_update?: Artist_Key | null;
}

export interface UpdateArtistVariables {
  id: UUIDString;
  name?: string | null;
  verifiedStatus?: boolean | null;
}

export interface UpdateFavoriteData {
  favorite_update?: Favorite_Key | null;
}

export interface UpdateFavoriteVariables {
  id: UUIDString;
  timestamp?: TimestampString | null;
}

export interface UpdateFollowData {
  follow_update?: Follow_Key | null;
}

export interface UpdateFollowVariables {
  id: UUIDString;
  followingId: UUIDString;
}

export interface UpdatePlaylistData {
  playlist_update?: Playlist_Key | null;
}

export interface UpdatePlaylistEntryData {
  playlistEntry_update?: PlaylistEntry_Key | null;
}

export interface UpdatePlaylistEntryVariables {
  id: UUIDString;
  addedAt?: TimestampString | null;
}

export interface UpdatePlaylistVariables {
  id: UUIDString;
  title?: string | null;
  description?: string | null;
  isPublic?: boolean | null;
}

export interface UpdateSongData {
  song_update?: Song_Key | null;
}

export interface UpdateSongVariables {
  id: UUIDString;
  title?: string | null;
  duration?: number | null;
}

export interface UpdateUserData {
  user_update?: User_Key | null;
}

export interface UpdateUserVariables {
  id: UUIDString;
  bio?: string | null;
  profileImageUrl?: string | null;
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface CreatePlaylistRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreatePlaylistVariables): MutationRef<CreatePlaylistData, CreatePlaylistVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreatePlaylistVariables): MutationRef<CreatePlaylistData, CreatePlaylistVariables>;
  operationName: string;
}
export const createPlaylistRef: CreatePlaylistRef;

export function createPlaylist(vars: CreatePlaylistVariables): MutationPromise<CreatePlaylistData, CreatePlaylistVariables>;
export function createPlaylist(dc: DataConnect, vars: CreatePlaylistVariables): MutationPromise<CreatePlaylistData, CreatePlaylistVariables>;

interface DeletePlaylistRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeletePlaylistVariables): MutationRef<DeletePlaylistData, DeletePlaylistVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeletePlaylistVariables): MutationRef<DeletePlaylistData, DeletePlaylistVariables>;
  operationName: string;
}
export const deletePlaylistRef: DeletePlaylistRef;

export function deletePlaylist(vars: DeletePlaylistVariables): MutationPromise<DeletePlaylistData, DeletePlaylistVariables>;
export function deletePlaylist(dc: DataConnect, vars: DeletePlaylistVariables): MutationPromise<DeletePlaylistData, DeletePlaylistVariables>;

interface UpdatePlaylistRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdatePlaylistVariables): MutationRef<UpdatePlaylistData, UpdatePlaylistVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdatePlaylistVariables): MutationRef<UpdatePlaylistData, UpdatePlaylistVariables>;
  operationName: string;
}
export const updatePlaylistRef: UpdatePlaylistRef;

export function updatePlaylist(vars: UpdatePlaylistVariables): MutationPromise<UpdatePlaylistData, UpdatePlaylistVariables>;
export function updatePlaylist(dc: DataConnect, vars: UpdatePlaylistVariables): MutationPromise<UpdatePlaylistData, UpdatePlaylistVariables>;

interface GetPlaylistRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetPlaylistVariables): QueryRef<GetPlaylistData, GetPlaylistVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetPlaylistVariables): QueryRef<GetPlaylistData, GetPlaylistVariables>;
  operationName: string;
}
export const getPlaylistRef: GetPlaylistRef;

export function getPlaylist(vars: GetPlaylistVariables, options?: ExecuteQueryOptions): QueryPromise<GetPlaylistData, GetPlaylistVariables>;
export function getPlaylist(dc: DataConnect, vars: GetPlaylistVariables, options?: ExecuteQueryOptions): QueryPromise<GetPlaylistData, GetPlaylistVariables>;

interface ListMyPlaylistsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListMyPlaylistsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListMyPlaylistsData, undefined>;
  operationName: string;
}
export const listMyPlaylistsRef: ListMyPlaylistsRef;

export function listMyPlaylists(options?: ExecuteQueryOptions): QueryPromise<ListMyPlaylistsData, undefined>;
export function listMyPlaylists(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListMyPlaylistsData, undefined>;

interface AddFavoriteRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: AddFavoriteVariables): MutationRef<AddFavoriteData, AddFavoriteVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: AddFavoriteVariables): MutationRef<AddFavoriteData, AddFavoriteVariables>;
  operationName: string;
}
export const addFavoriteRef: AddFavoriteRef;

export function addFavorite(vars: AddFavoriteVariables): MutationPromise<AddFavoriteData, AddFavoriteVariables>;
export function addFavorite(dc: DataConnect, vars: AddFavoriteVariables): MutationPromise<AddFavoriteData, AddFavoriteVariables>;

interface RemoveFavoriteRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: RemoveFavoriteVariables): MutationRef<RemoveFavoriteData, RemoveFavoriteVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: RemoveFavoriteVariables): MutationRef<RemoveFavoriteData, RemoveFavoriteVariables>;
  operationName: string;
}
export const removeFavoriteRef: RemoveFavoriteRef;

export function removeFavorite(vars: RemoveFavoriteVariables): MutationPromise<RemoveFavoriteData, RemoveFavoriteVariables>;
export function removeFavorite(dc: DataConnect, vars: RemoveFavoriteVariables): MutationPromise<RemoveFavoriteData, RemoveFavoriteVariables>;

interface UpdateFavoriteRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateFavoriteVariables): MutationRef<UpdateFavoriteData, UpdateFavoriteVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateFavoriteVariables): MutationRef<UpdateFavoriteData, UpdateFavoriteVariables>;
  operationName: string;
}
export const updateFavoriteRef: UpdateFavoriteRef;

export function updateFavorite(vars: UpdateFavoriteVariables): MutationPromise<UpdateFavoriteData, UpdateFavoriteVariables>;
export function updateFavorite(dc: DataConnect, vars: UpdateFavoriteVariables): MutationPromise<UpdateFavoriteData, UpdateFavoriteVariables>;

interface GetFavoriteRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetFavoriteVariables): QueryRef<GetFavoriteData, GetFavoriteVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetFavoriteVariables): QueryRef<GetFavoriteData, GetFavoriteVariables>;
  operationName: string;
}
export const getFavoriteRef: GetFavoriteRef;

export function getFavorite(vars: GetFavoriteVariables, options?: ExecuteQueryOptions): QueryPromise<GetFavoriteData, GetFavoriteVariables>;
export function getFavorite(dc: DataConnect, vars: GetFavoriteVariables, options?: ExecuteQueryOptions): QueryPromise<GetFavoriteData, GetFavoriteVariables>;

interface ListMyFavoritesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListMyFavoritesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListMyFavoritesData, undefined>;
  operationName: string;
}
export const listMyFavoritesRef: ListMyFavoritesRef;

export function listMyFavorites(options?: ExecuteQueryOptions): QueryPromise<ListMyFavoritesData, undefined>;
export function listMyFavorites(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListMyFavoritesData, undefined>;

interface FollowUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: FollowUserVariables): MutationRef<FollowUserData, FollowUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: FollowUserVariables): MutationRef<FollowUserData, FollowUserVariables>;
  operationName: string;
}
export const followUserRef: FollowUserRef;

export function followUser(vars: FollowUserVariables): MutationPromise<FollowUserData, FollowUserVariables>;
export function followUser(dc: DataConnect, vars: FollowUserVariables): MutationPromise<FollowUserData, FollowUserVariables>;

interface UnfollowUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UnfollowUserVariables): MutationRef<UnfollowUserData, UnfollowUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UnfollowUserVariables): MutationRef<UnfollowUserData, UnfollowUserVariables>;
  operationName: string;
}
export const unfollowUserRef: UnfollowUserRef;

export function unfollowUser(vars: UnfollowUserVariables): MutationPromise<UnfollowUserData, UnfollowUserVariables>;
export function unfollowUser(dc: DataConnect, vars: UnfollowUserVariables): MutationPromise<UnfollowUserData, UnfollowUserVariables>;

interface UpdateFollowRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateFollowVariables): MutationRef<UpdateFollowData, UpdateFollowVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateFollowVariables): MutationRef<UpdateFollowData, UpdateFollowVariables>;
  operationName: string;
}
export const updateFollowRef: UpdateFollowRef;

export function updateFollow(vars: UpdateFollowVariables): MutationPromise<UpdateFollowData, UpdateFollowVariables>;
export function updateFollow(dc: DataConnect, vars: UpdateFollowVariables): MutationPromise<UpdateFollowData, UpdateFollowVariables>;

interface GetFollowRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetFollowVariables): QueryRef<GetFollowData, GetFollowVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetFollowVariables): QueryRef<GetFollowData, GetFollowVariables>;
  operationName: string;
}
export const getFollowRef: GetFollowRef;

export function getFollow(vars: GetFollowVariables, options?: ExecuteQueryOptions): QueryPromise<GetFollowData, GetFollowVariables>;
export function getFollow(dc: DataConnect, vars: GetFollowVariables, options?: ExecuteQueryOptions): QueryPromise<GetFollowData, GetFollowVariables>;

interface ListMyFollowingRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListMyFollowingData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListMyFollowingData, undefined>;
  operationName: string;
}
export const listMyFollowingRef: ListMyFollowingRef;

export function listMyFollowing(options?: ExecuteQueryOptions): QueryPromise<ListMyFollowingData, undefined>;
export function listMyFollowing(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListMyFollowingData, undefined>;

interface CreatePlaylistEntryRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreatePlaylistEntryVariables): MutationRef<CreatePlaylistEntryData, CreatePlaylistEntryVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreatePlaylistEntryVariables): MutationRef<CreatePlaylistEntryData, CreatePlaylistEntryVariables>;
  operationName: string;
}
export const createPlaylistEntryRef: CreatePlaylistEntryRef;

export function createPlaylistEntry(vars: CreatePlaylistEntryVariables): MutationPromise<CreatePlaylistEntryData, CreatePlaylistEntryVariables>;
export function createPlaylistEntry(dc: DataConnect, vars: CreatePlaylistEntryVariables): MutationPromise<CreatePlaylistEntryData, CreatePlaylistEntryVariables>;

interface DeletePlaylistEntryRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeletePlaylistEntryVariables): MutationRef<DeletePlaylistEntryData, DeletePlaylistEntryVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeletePlaylistEntryVariables): MutationRef<DeletePlaylistEntryData, DeletePlaylistEntryVariables>;
  operationName: string;
}
export const deletePlaylistEntryRef: DeletePlaylistEntryRef;

export function deletePlaylistEntry(vars: DeletePlaylistEntryVariables): MutationPromise<DeletePlaylistEntryData, DeletePlaylistEntryVariables>;
export function deletePlaylistEntry(dc: DataConnect, vars: DeletePlaylistEntryVariables): MutationPromise<DeletePlaylistEntryData, DeletePlaylistEntryVariables>;

interface UpdatePlaylistEntryRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdatePlaylistEntryVariables): MutationRef<UpdatePlaylistEntryData, UpdatePlaylistEntryVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdatePlaylistEntryVariables): MutationRef<UpdatePlaylistEntryData, UpdatePlaylistEntryVariables>;
  operationName: string;
}
export const updatePlaylistEntryRef: UpdatePlaylistEntryRef;

export function updatePlaylistEntry(vars: UpdatePlaylistEntryVariables): MutationPromise<UpdatePlaylistEntryData, UpdatePlaylistEntryVariables>;
export function updatePlaylistEntry(dc: DataConnect, vars: UpdatePlaylistEntryVariables): MutationPromise<UpdatePlaylistEntryData, UpdatePlaylistEntryVariables>;

interface GetPlaylistEntryRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetPlaylistEntryVariables): QueryRef<GetPlaylistEntryData, GetPlaylistEntryVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetPlaylistEntryVariables): QueryRef<GetPlaylistEntryData, GetPlaylistEntryVariables>;
  operationName: string;
}
export const getPlaylistEntryRef: GetPlaylistEntryRef;

export function getPlaylistEntry(vars: GetPlaylistEntryVariables, options?: ExecuteQueryOptions): QueryPromise<GetPlaylistEntryData, GetPlaylistEntryVariables>;
export function getPlaylistEntry(dc: DataConnect, vars: GetPlaylistEntryVariables, options?: ExecuteQueryOptions): QueryPromise<GetPlaylistEntryData, GetPlaylistEntryVariables>;

interface ListPlaylistEntriesRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListPlaylistEntriesVariables): QueryRef<ListPlaylistEntriesData, ListPlaylistEntriesVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: ListPlaylistEntriesVariables): QueryRef<ListPlaylistEntriesData, ListPlaylistEntriesVariables>;
  operationName: string;
}
export const listPlaylistEntriesRef: ListPlaylistEntriesRef;

export function listPlaylistEntries(vars: ListPlaylistEntriesVariables, options?: ExecuteQueryOptions): QueryPromise<ListPlaylistEntriesData, ListPlaylistEntriesVariables>;
export function listPlaylistEntries(dc: DataConnect, vars: ListPlaylistEntriesVariables, options?: ExecuteQueryOptions): QueryPromise<ListPlaylistEntriesData, ListPlaylistEntriesVariables>;

interface CreateSongRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateSongVariables): MutationRef<CreateSongData, CreateSongVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateSongVariables): MutationRef<CreateSongData, CreateSongVariables>;
  operationName: string;
}
export const createSongRef: CreateSongRef;

export function createSong(vars: CreateSongVariables): MutationPromise<CreateSongData, CreateSongVariables>;
export function createSong(dc: DataConnect, vars: CreateSongVariables): MutationPromise<CreateSongData, CreateSongVariables>;

interface DeleteSongRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteSongVariables): MutationRef<DeleteSongData, DeleteSongVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteSongVariables): MutationRef<DeleteSongData, DeleteSongVariables>;
  operationName: string;
}
export const deleteSongRef: DeleteSongRef;

export function deleteSong(vars: DeleteSongVariables): MutationPromise<DeleteSongData, DeleteSongVariables>;
export function deleteSong(dc: DataConnect, vars: DeleteSongVariables): MutationPromise<DeleteSongData, DeleteSongVariables>;

interface UpdateSongRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateSongVariables): MutationRef<UpdateSongData, UpdateSongVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateSongVariables): MutationRef<UpdateSongData, UpdateSongVariables>;
  operationName: string;
}
export const updateSongRef: UpdateSongRef;

export function updateSong(vars: UpdateSongVariables): MutationPromise<UpdateSongData, UpdateSongVariables>;
export function updateSong(dc: DataConnect, vars: UpdateSongVariables): MutationPromise<UpdateSongData, UpdateSongVariables>;

interface GetSongRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetSongVariables): QueryRef<GetSongData, GetSongVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetSongVariables): QueryRef<GetSongData, GetSongVariables>;
  operationName: string;
}
export const getSongRef: GetSongRef;

export function getSong(vars: GetSongVariables, options?: ExecuteQueryOptions): QueryPromise<GetSongData, GetSongVariables>;
export function getSong(dc: DataConnect, vars: GetSongVariables, options?: ExecuteQueryOptions): QueryPromise<GetSongData, GetSongVariables>;

interface ListSongsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListSongsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListSongsData, undefined>;
  operationName: string;
}
export const listSongsRef: ListSongsRef;

export function listSongs(options?: ExecuteQueryOptions): QueryPromise<ListSongsData, undefined>;
export function listSongs(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListSongsData, undefined>;

interface CreateArtistRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateArtistVariables): MutationRef<CreateArtistData, CreateArtistVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateArtistVariables): MutationRef<CreateArtistData, CreateArtistVariables>;
  operationName: string;
}
export const createArtistRef: CreateArtistRef;

export function createArtist(vars: CreateArtistVariables): MutationPromise<CreateArtistData, CreateArtistVariables>;
export function createArtist(dc: DataConnect, vars: CreateArtistVariables): MutationPromise<CreateArtistData, CreateArtistVariables>;

interface DeleteArtistRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteArtistVariables): MutationRef<DeleteArtistData, DeleteArtistVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteArtistVariables): MutationRef<DeleteArtistData, DeleteArtistVariables>;
  operationName: string;
}
export const deleteArtistRef: DeleteArtistRef;

export function deleteArtist(vars: DeleteArtistVariables): MutationPromise<DeleteArtistData, DeleteArtistVariables>;
export function deleteArtist(dc: DataConnect, vars: DeleteArtistVariables): MutationPromise<DeleteArtistData, DeleteArtistVariables>;

interface UpdateArtistRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateArtistVariables): MutationRef<UpdateArtistData, UpdateArtistVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateArtistVariables): MutationRef<UpdateArtistData, UpdateArtistVariables>;
  operationName: string;
}
export const updateArtistRef: UpdateArtistRef;

export function updateArtist(vars: UpdateArtistVariables): MutationPromise<UpdateArtistData, UpdateArtistVariables>;
export function updateArtist(dc: DataConnect, vars: UpdateArtistVariables): MutationPromise<UpdateArtistData, UpdateArtistVariables>;

interface GetArtistRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetArtistVariables): QueryRef<GetArtistData, GetArtistVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetArtistVariables): QueryRef<GetArtistData, GetArtistVariables>;
  operationName: string;
}
export const getArtistRef: GetArtistRef;

export function getArtist(vars: GetArtistVariables, options?: ExecuteQueryOptions): QueryPromise<GetArtistData, GetArtistVariables>;
export function getArtist(dc: DataConnect, vars: GetArtistVariables, options?: ExecuteQueryOptions): QueryPromise<GetArtistData, GetArtistVariables>;

interface ListArtistsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListArtistsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListArtistsData, undefined>;
  operationName: string;
}
export const listArtistsRef: ListArtistsRef;

export function listArtists(options?: ExecuteQueryOptions): QueryPromise<ListArtistsData, undefined>;
export function listArtists(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListArtistsData, undefined>;

interface UpdateUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateUserVariables): MutationRef<UpdateUserData, UpdateUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateUserVariables): MutationRef<UpdateUserData, UpdateUserVariables>;
  operationName: string;
}
export const updateUserRef: UpdateUserRef;

export function updateUser(vars: UpdateUserVariables): MutationPromise<UpdateUserData, UpdateUserVariables>;
export function updateUser(dc: DataConnect, vars: UpdateUserVariables): MutationPromise<UpdateUserData, UpdateUserVariables>;

interface GetUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetUserVariables): QueryRef<GetUserData, GetUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetUserVariables): QueryRef<GetUserData, GetUserVariables>;
  operationName: string;
}
export const getUserRef: GetUserRef;

export function getUser(vars: GetUserVariables, options?: ExecuteQueryOptions): QueryPromise<GetUserData, GetUserVariables>;
export function getUser(dc: DataConnect, vars: GetUserVariables, options?: ExecuteQueryOptions): QueryPromise<GetUserData, GetUserVariables>;

