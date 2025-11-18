import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

/** Payload includes user and session id */
export type AuthPayload = {
  __typename?: 'AuthPayload';
  /** Session ID */
  sessionId: Scalars['String']['output'];
  /** Authenticated user */
  user?: Maybe<UserItem>;
};

export type FileCreatedAtFilters = {
  OR?: InputMaybe<Array<FileCreatedAtfiltersOr>>;
  /** Date */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type FileCreatedAtfiltersOr = {
  /** Date */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type FileFilenameFilters = {
  OR?: InputMaybe<Array<FileFilenamefiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type FileFilenamefiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type FileFilters = {
  OR?: InputMaybe<Array<FileFiltersOr>>;
  createdAt?: InputMaybe<FileCreatedAtFilters>;
  filename?: InputMaybe<FileFilenameFilters>;
  id?: InputMaybe<FileIdFilters>;
  mimetype?: InputMaybe<FileMimetypeFilters>;
  sizeBytes?: InputMaybe<FileSizeBytesFilters>;
  storageKey?: InputMaybe<FileStorageKeyFilters>;
  storageType?: InputMaybe<FileStorageTypeFilters>;
  updatedAt?: InputMaybe<FileUpdatedAtFilters>;
  userId?: InputMaybe<FileUserIdFilters>;
};

export type FileFiltersOr = {
  createdAt?: InputMaybe<FileCreatedAtFilters>;
  filename?: InputMaybe<FileFilenameFilters>;
  id?: InputMaybe<FileIdFilters>;
  mimetype?: InputMaybe<FileMimetypeFilters>;
  sizeBytes?: InputMaybe<FileSizeBytesFilters>;
  storageKey?: InputMaybe<FileStorageKeyFilters>;
  storageType?: InputMaybe<FileStorageTypeFilters>;
  updatedAt?: InputMaybe<FileUpdatedAtFilters>;
  userId?: InputMaybe<FileUserIdFilters>;
};

export type FileIdFilters = {
  OR?: InputMaybe<Array<FileIdfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type FileIdfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type FileImageMetadataRelation = {
  __typename?: 'FileImageMetadataRelation';
  file?: Maybe<FileImageMetadataRelationFileRelation>;
  fileId: Scalars['String']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  id: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};


export type FileImageMetadataRelationFileArgs = {
  where?: InputMaybe<FileFilters>;
};

export type FileImageMetadataRelationFileRelation = {
  __typename?: 'FileImageMetadataRelationFileRelation';
  /** Date */
  createdAt?: Maybe<Scalars['String']['output']>;
  filename: Scalars['String']['output'];
  id: Scalars['String']['output'];
  mimetype?: Maybe<Scalars['String']['output']>;
  sizeBytes?: Maybe<Scalars['Int']['output']>;
  storageKey: Scalars['String']['output'];
  storageType: FileStorageTypeEnum;
  /** Date */
  updatedAt?: Maybe<Scalars['String']['output']>;
  userId: Scalars['String']['output'];
};

export type FileItem = {
  __typename?: 'FileItem';
  /** Date */
  createdAt?: Maybe<Scalars['String']['output']>;
  filename: Scalars['String']['output'];
  id: Scalars['String']['output'];
  mimetype?: Maybe<Scalars['String']['output']>;
  sizeBytes?: Maybe<Scalars['Int']['output']>;
  storageKey: Scalars['String']['output'];
  storageType: FileStorageTypeEnum;
  /** Date */
  updatedAt?: Maybe<Scalars['String']['output']>;
  userId: Scalars['String']['output'];
};

export type FileMimetypeFilters = {
  OR?: InputMaybe<Array<FileMimetypefiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type FileMimetypefiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type FileOrderBy = {
  createdAt?: InputMaybe<InnerOrder>;
  filename?: InputMaybe<InnerOrder>;
  id?: InputMaybe<InnerOrder>;
  mimetype?: InputMaybe<InnerOrder>;
  sizeBytes?: InputMaybe<InnerOrder>;
  storageKey?: InputMaybe<InnerOrder>;
  storageType?: InputMaybe<InnerOrder>;
  updatedAt?: InputMaybe<InnerOrder>;
  userId?: InputMaybe<InnerOrder>;
};

export type FileSelectItem = {
  __typename?: 'FileSelectItem';
  /** Date */
  createdAt?: Maybe<Scalars['String']['output']>;
  filename: Scalars['String']['output'];
  id: Scalars['String']['output'];
  imageMetadata?: Maybe<FileImageMetadataRelation>;
  mimetype?: Maybe<Scalars['String']['output']>;
  sizeBytes?: Maybe<Scalars['Int']['output']>;
  storageKey: Scalars['String']['output'];
  storageType: FileStorageTypeEnum;
  /** Date */
  updatedAt?: Maybe<Scalars['String']['output']>;
  user?: Maybe<FileUserRelation>;
  userId: Scalars['String']['output'];
  videoMetadata?: Maybe<FileVideoMetadataRelation>;
};


export type FileSelectItemImageMetadataArgs = {
  where?: InputMaybe<ImageMetadataFilters>;
};


export type FileSelectItemUserArgs = {
  where?: InputMaybe<UserFilters>;
};


export type FileSelectItemVideoMetadataArgs = {
  where?: InputMaybe<VideoMetadataFilters>;
};

export type FileSizeBytesFilters = {
  OR?: InputMaybe<Array<FileSizeBytesfiltersOr>>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type FileSizeBytesfiltersOr = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type FileStorageKeyFilters = {
  OR?: InputMaybe<Array<FileStorageKeyfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type FileStorageKeyfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export enum FileStorageTypeEnum {
  /** Value: GDRIVE */
  Gdrive = 'GDRIVE',
  /** Value: R2 */
  R2 = 'R2',
  /** Value: S3 */
  S3 = 'S3'
}

export type FileStorageTypeFilters = {
  OR?: InputMaybe<Array<FileStorageTypefiltersOr>>;
  eq?: InputMaybe<FileStorageTypeEnum>;
  gt?: InputMaybe<FileStorageTypeEnum>;
  gte?: InputMaybe<FileStorageTypeEnum>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<FileStorageTypeEnum>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<FileStorageTypeEnum>;
  lte?: InputMaybe<FileStorageTypeEnum>;
  ne?: InputMaybe<FileStorageTypeEnum>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<FileStorageTypeEnum>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type FileStorageTypefiltersOr = {
  eq?: InputMaybe<FileStorageTypeEnum>;
  gt?: InputMaybe<FileStorageTypeEnum>;
  gte?: InputMaybe<FileStorageTypeEnum>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<FileStorageTypeEnum>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<FileStorageTypeEnum>;
  lte?: InputMaybe<FileStorageTypeEnum>;
  ne?: InputMaybe<FileStorageTypeEnum>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<FileStorageTypeEnum>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type FileUpdatedAtFilters = {
  OR?: InputMaybe<Array<FileUpdatedAtfiltersOr>>;
  /** Date */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type FileUpdatedAtfiltersOr = {
  /** Date */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type FileUserIdFilters = {
  OR?: InputMaybe<Array<FileUserIdfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type FileUserIdfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type FileUserRelation = {
  __typename?: 'FileUserRelation';
  /** Date */
  createdAt?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  files: Array<FileUserRelationFilesRelation>;
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  password: Scalars['String']['output'];
  /** Date */
  updatedAt?: Maybe<Scalars['String']['output']>;
};


export type FileUserRelationFilesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FileOrderBy>;
  where?: InputMaybe<FileFilters>;
};

export type FileUserRelationFilesRelation = {
  __typename?: 'FileUserRelationFilesRelation';
  /** Date */
  createdAt?: Maybe<Scalars['String']['output']>;
  filename: Scalars['String']['output'];
  id: Scalars['String']['output'];
  mimetype?: Maybe<Scalars['String']['output']>;
  sizeBytes?: Maybe<Scalars['Int']['output']>;
  storageKey: Scalars['String']['output'];
  storageType: FileStorageTypeEnum;
  /** Date */
  updatedAt?: Maybe<Scalars['String']['output']>;
  userId: Scalars['String']['output'];
};

export type FileVideoMetadataRelation = {
  __typename?: 'FileVideoMetadataRelation';
  bitrateKbps?: Maybe<Scalars['Int']['output']>;
  durationSeconds?: Maybe<Scalars['Int']['output']>;
  file?: Maybe<FileVideoMetadataRelationFileRelation>;
  fileId: Scalars['String']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  id: Scalars['String']['output'];
  thumbnailKey?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};


export type FileVideoMetadataRelationFileArgs = {
  where?: InputMaybe<FileFilters>;
};

export type FileVideoMetadataRelationFileRelation = {
  __typename?: 'FileVideoMetadataRelationFileRelation';
  /** Date */
  createdAt?: Maybe<Scalars['String']['output']>;
  filename: Scalars['String']['output'];
  id: Scalars['String']['output'];
  mimetype?: Maybe<Scalars['String']['output']>;
  sizeBytes?: Maybe<Scalars['Int']['output']>;
  storageKey: Scalars['String']['output'];
  storageType: FileStorageTypeEnum;
  /** Date */
  updatedAt?: Maybe<Scalars['String']['output']>;
  userId: Scalars['String']['output'];
};

/** Input type for bulk ingesting file metadata from Google Drive. */
export type GoogleDriveFileInput = {
  /** ISO 8601 timestamp for creation. */
  createdTime: Scalars['String']['input'];
  /** Video duration in seconds. */
  durationSeconds?: InputMaybe<Scalars['Float']['input']>;
  /** Video height in pixels. */
  height?: InputMaybe<Scalars['Int']['input']>;
  /** The unique ID from Google Drive (used as storageKey). */
  id: Scalars['String']['input'];
  /** File MIME type (e.g., video/mp4). */
  mimetype: Scalars['String']['input'];
  /** ISO 8601 timestamp for last modification. */
  modifiedTime?: InputMaybe<Scalars['String']['input']>;
  /** Filename. */
  name: Scalars['String']['input'];
  /** File size in bytes. */
  sizeBytes: Scalars['Float']['input'];
  /** The internal ID of the user owning the file. */
  userId: Scalars['String']['input'];
  /** Video width in pixels. */
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type ImageMetadataFileIdFilters = {
  OR?: InputMaybe<Array<ImageMetadataFileIdfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type ImageMetadataFileIdfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type ImageMetadataFilters = {
  OR?: InputMaybe<Array<ImageMetadataFiltersOr>>;
  fileId?: InputMaybe<ImageMetadataFileIdFilters>;
  height?: InputMaybe<ImageMetadataHeightFilters>;
  id?: InputMaybe<ImageMetadataIdFilters>;
  width?: InputMaybe<ImageMetadataWidthFilters>;
};

export type ImageMetadataFiltersOr = {
  fileId?: InputMaybe<ImageMetadataFileIdFilters>;
  height?: InputMaybe<ImageMetadataHeightFilters>;
  id?: InputMaybe<ImageMetadataIdFilters>;
  width?: InputMaybe<ImageMetadataWidthFilters>;
};

export type ImageMetadataHeightFilters = {
  OR?: InputMaybe<Array<ImageMetadataHeightfiltersOr>>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type ImageMetadataHeightfiltersOr = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type ImageMetadataIdFilters = {
  OR?: InputMaybe<Array<ImageMetadataIdfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type ImageMetadataIdfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type ImageMetadataWidthFilters = {
  OR?: InputMaybe<Array<ImageMetadataWidthfiltersOr>>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type ImageMetadataWidthfiltersOr = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type InnerOrder = {
  direction: OrderDirection;
  /** Priority of current field */
  priority: Scalars['Int']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Sign up a new user */
  signIn: AuthPayload;
  /** Sign up a new user */
  signUp?: Maybe<UserItem>;
  /** Sync a batch of file metadata into the database. */
  syncDriveFiles: Array<FileItem>;
};


export type MutationSignInArgs = {
  data: SignInInput;
};


export type MutationSignUpArgs = {
  data: SignUpInput;
};


export type MutationSyncDriveFilesArgs = {
  files: Array<GoogleDriveFileInput>;
};

/** Order by direction */
export enum OrderDirection {
  /** Ascending order */
  Asc = 'asc',
  /** Descending order */
  Desc = 'desc'
}

export type Query = {
  __typename?: 'Query';
  files: Array<FileSelectItem>;
  users: Array<UserSelectItem>;
  videoMetadata: Array<VideoMetadataSelectItem>;
};


export type QueryFilesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FileOrderBy>;
  where?: InputMaybe<FileFilters>;
};


export type QueryUsersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UserOrderBy>;
  where?: InputMaybe<UserFilters>;
};


export type QueryVideoMetadataArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VideoMetadataOrderBy>;
  where?: InputMaybe<VideoMetadataFilters>;
};

/** Input type for sign in */
export type SignInInput = {
  /** The user's email address. */
  email: Scalars['String']['input'];
  /** The user's password. */
  password: Scalars['String']['input'];
};

/** Input type for register new user */
export type SignUpInput = {
  /** The user's email address (must be unique). */
  email: Scalars['String']['input'];
  /** The user's first name. */
  firstName: Scalars['String']['input'];
  /** The user's last name. */
  lastName: Scalars['String']['input'];
  /** The user's password (at least 8 characters recommended). */
  password: Scalars['String']['input'];
};

export type UserCreatedAtFilters = {
  OR?: InputMaybe<Array<UserCreatedAtfiltersOr>>;
  /** Date */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreatedAtfiltersOr = {
  /** Date */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type UserEmailFilters = {
  OR?: InputMaybe<Array<UserEmailfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type UserEmailfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type UserFilesRelation = {
  __typename?: 'UserFilesRelation';
  /** Date */
  createdAt?: Maybe<Scalars['String']['output']>;
  filename: Scalars['String']['output'];
  id: Scalars['String']['output'];
  imageMetadata?: Maybe<UserFilesRelationImageMetadataRelation>;
  mimetype?: Maybe<Scalars['String']['output']>;
  sizeBytes?: Maybe<Scalars['Int']['output']>;
  storageKey: Scalars['String']['output'];
  storageType: FileStorageTypeEnum;
  /** Date */
  updatedAt?: Maybe<Scalars['String']['output']>;
  user?: Maybe<UserFilesRelationUserRelation>;
  userId: Scalars['String']['output'];
  videoMetadata?: Maybe<UserFilesRelationVideoMetadataRelation>;
};


export type UserFilesRelationImageMetadataArgs = {
  where?: InputMaybe<ImageMetadataFilters>;
};


export type UserFilesRelationUserArgs = {
  where?: InputMaybe<UserFilters>;
};


export type UserFilesRelationVideoMetadataArgs = {
  where?: InputMaybe<VideoMetadataFilters>;
};

export type UserFilesRelationImageMetadataRelation = {
  __typename?: 'UserFilesRelationImageMetadataRelation';
  file?: Maybe<UserFilesRelationImageMetadataRelationFileRelation>;
  fileId: Scalars['String']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  id: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};


export type UserFilesRelationImageMetadataRelationFileArgs = {
  where?: InputMaybe<FileFilters>;
};

export type UserFilesRelationImageMetadataRelationFileRelation = {
  __typename?: 'UserFilesRelationImageMetadataRelationFileRelation';
  /** Date */
  createdAt?: Maybe<Scalars['String']['output']>;
  filename: Scalars['String']['output'];
  id: Scalars['String']['output'];
  mimetype?: Maybe<Scalars['String']['output']>;
  sizeBytes?: Maybe<Scalars['Int']['output']>;
  storageKey: Scalars['String']['output'];
  storageType: FileStorageTypeEnum;
  /** Date */
  updatedAt?: Maybe<Scalars['String']['output']>;
  userId: Scalars['String']['output'];
};

export type UserFilesRelationUserRelation = {
  __typename?: 'UserFilesRelationUserRelation';
  /** Date */
  createdAt?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  password: Scalars['String']['output'];
  /** Date */
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type UserFilesRelationVideoMetadataRelation = {
  __typename?: 'UserFilesRelationVideoMetadataRelation';
  bitrateKbps?: Maybe<Scalars['Int']['output']>;
  durationSeconds?: Maybe<Scalars['Int']['output']>;
  file?: Maybe<UserFilesRelationVideoMetadataRelationFileRelation>;
  fileId: Scalars['String']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  id: Scalars['String']['output'];
  thumbnailKey?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};


export type UserFilesRelationVideoMetadataRelationFileArgs = {
  where?: InputMaybe<FileFilters>;
};

export type UserFilesRelationVideoMetadataRelationFileRelation = {
  __typename?: 'UserFilesRelationVideoMetadataRelationFileRelation';
  /** Date */
  createdAt?: Maybe<Scalars['String']['output']>;
  filename: Scalars['String']['output'];
  id: Scalars['String']['output'];
  mimetype?: Maybe<Scalars['String']['output']>;
  sizeBytes?: Maybe<Scalars['Int']['output']>;
  storageKey: Scalars['String']['output'];
  storageType: FileStorageTypeEnum;
  /** Date */
  updatedAt?: Maybe<Scalars['String']['output']>;
  userId: Scalars['String']['output'];
};

export type UserFilters = {
  OR?: InputMaybe<Array<UserFiltersOr>>;
  createdAt?: InputMaybe<UserCreatedAtFilters>;
  email?: InputMaybe<UserEmailFilters>;
  firstName?: InputMaybe<UserFirstNameFilters>;
  id?: InputMaybe<UserIdFilters>;
  lastName?: InputMaybe<UserLastNameFilters>;
  password?: InputMaybe<UserPasswordFilters>;
  updatedAt?: InputMaybe<UserUpdatedAtFilters>;
};

export type UserFiltersOr = {
  createdAt?: InputMaybe<UserCreatedAtFilters>;
  email?: InputMaybe<UserEmailFilters>;
  firstName?: InputMaybe<UserFirstNameFilters>;
  id?: InputMaybe<UserIdFilters>;
  lastName?: InputMaybe<UserLastNameFilters>;
  password?: InputMaybe<UserPasswordFilters>;
  updatedAt?: InputMaybe<UserUpdatedAtFilters>;
};

export type UserFirstNameFilters = {
  OR?: InputMaybe<Array<UserFirstNamefiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type UserFirstNamefiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type UserIdFilters = {
  OR?: InputMaybe<Array<UserIdfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type UserIdfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type UserItem = {
  __typename?: 'UserItem';
  /** Date */
  createdAt?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  password: Scalars['String']['output'];
  /** Date */
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type UserLastNameFilters = {
  OR?: InputMaybe<Array<UserLastNamefiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type UserLastNamefiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type UserOrderBy = {
  createdAt?: InputMaybe<InnerOrder>;
  email?: InputMaybe<InnerOrder>;
  firstName?: InputMaybe<InnerOrder>;
  id?: InputMaybe<InnerOrder>;
  lastName?: InputMaybe<InnerOrder>;
  password?: InputMaybe<InnerOrder>;
  updatedAt?: InputMaybe<InnerOrder>;
};

export type UserPasswordFilters = {
  OR?: InputMaybe<Array<UserPasswordfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type UserPasswordfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type UserSelectItem = {
  __typename?: 'UserSelectItem';
  /** Date */
  createdAt?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  files: Array<UserFilesRelation>;
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  password: Scalars['String']['output'];
  /** Date */
  updatedAt?: Maybe<Scalars['String']['output']>;
};


export type UserSelectItemFilesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FileOrderBy>;
  where?: InputMaybe<FileFilters>;
};

export type UserUpdatedAtFilters = {
  OR?: InputMaybe<Array<UserUpdatedAtfiltersOr>>;
  /** Date */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type UserUpdatedAtfiltersOr = {
  /** Date */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type VideoMetadataBitrateKbpsFilters = {
  OR?: InputMaybe<Array<VideoMetadataBitrateKbpsfiltersOr>>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type VideoMetadataBitrateKbpsfiltersOr = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type VideoMetadataDurationSecondsFilters = {
  OR?: InputMaybe<Array<VideoMetadataDurationSecondsfiltersOr>>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type VideoMetadataDurationSecondsfiltersOr = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type VideoMetadataFileIdFilters = {
  OR?: InputMaybe<Array<VideoMetadataFileIdfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type VideoMetadataFileIdfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type VideoMetadataFileRelation = {
  __typename?: 'VideoMetadataFileRelation';
  /** Date */
  createdAt?: Maybe<Scalars['String']['output']>;
  filename: Scalars['String']['output'];
  id: Scalars['String']['output'];
  imageMetadata?: Maybe<VideoMetadataFileRelationImageMetadataRelation>;
  mimetype?: Maybe<Scalars['String']['output']>;
  sizeBytes?: Maybe<Scalars['Int']['output']>;
  storageKey: Scalars['String']['output'];
  storageType: FileStorageTypeEnum;
  /** Date */
  updatedAt?: Maybe<Scalars['String']['output']>;
  user?: Maybe<VideoMetadataFileRelationUserRelation>;
  userId: Scalars['String']['output'];
  videoMetadata?: Maybe<VideoMetadataFileRelationVideoMetadataRelation>;
};


export type VideoMetadataFileRelationImageMetadataArgs = {
  where?: InputMaybe<ImageMetadataFilters>;
};


export type VideoMetadataFileRelationUserArgs = {
  where?: InputMaybe<UserFilters>;
};


export type VideoMetadataFileRelationVideoMetadataArgs = {
  where?: InputMaybe<VideoMetadataFilters>;
};

export type VideoMetadataFileRelationImageMetadataRelation = {
  __typename?: 'VideoMetadataFileRelationImageMetadataRelation';
  file?: Maybe<VideoMetadataFileRelationImageMetadataRelationFileRelation>;
  fileId: Scalars['String']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  id: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};


export type VideoMetadataFileRelationImageMetadataRelationFileArgs = {
  where?: InputMaybe<FileFilters>;
};

export type VideoMetadataFileRelationImageMetadataRelationFileRelation = {
  __typename?: 'VideoMetadataFileRelationImageMetadataRelationFileRelation';
  /** Date */
  createdAt?: Maybe<Scalars['String']['output']>;
  filename: Scalars['String']['output'];
  id: Scalars['String']['output'];
  mimetype?: Maybe<Scalars['String']['output']>;
  sizeBytes?: Maybe<Scalars['Int']['output']>;
  storageKey: Scalars['String']['output'];
  storageType: FileStorageTypeEnum;
  /** Date */
  updatedAt?: Maybe<Scalars['String']['output']>;
  userId: Scalars['String']['output'];
};

export type VideoMetadataFileRelationUserRelation = {
  __typename?: 'VideoMetadataFileRelationUserRelation';
  /** Date */
  createdAt?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  files: Array<VideoMetadataFileRelationUserRelationFilesRelation>;
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  password: Scalars['String']['output'];
  /** Date */
  updatedAt?: Maybe<Scalars['String']['output']>;
};


export type VideoMetadataFileRelationUserRelationFilesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FileOrderBy>;
  where?: InputMaybe<FileFilters>;
};

export type VideoMetadataFileRelationUserRelationFilesRelation = {
  __typename?: 'VideoMetadataFileRelationUserRelationFilesRelation';
  /** Date */
  createdAt?: Maybe<Scalars['String']['output']>;
  filename: Scalars['String']['output'];
  id: Scalars['String']['output'];
  mimetype?: Maybe<Scalars['String']['output']>;
  sizeBytes?: Maybe<Scalars['Int']['output']>;
  storageKey: Scalars['String']['output'];
  storageType: FileStorageTypeEnum;
  /** Date */
  updatedAt?: Maybe<Scalars['String']['output']>;
  userId: Scalars['String']['output'];
};

export type VideoMetadataFileRelationVideoMetadataRelation = {
  __typename?: 'VideoMetadataFileRelationVideoMetadataRelation';
  bitrateKbps?: Maybe<Scalars['Int']['output']>;
  durationSeconds?: Maybe<Scalars['Int']['output']>;
  fileId: Scalars['String']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  id: Scalars['String']['output'];
  thumbnailKey?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

export type VideoMetadataFilters = {
  OR?: InputMaybe<Array<VideoMetadataFiltersOr>>;
  bitrateKbps?: InputMaybe<VideoMetadataBitrateKbpsFilters>;
  durationSeconds?: InputMaybe<VideoMetadataDurationSecondsFilters>;
  fileId?: InputMaybe<VideoMetadataFileIdFilters>;
  height?: InputMaybe<VideoMetadataHeightFilters>;
  id?: InputMaybe<VideoMetadataIdFilters>;
  thumbnailKey?: InputMaybe<VideoMetadataThumbnailKeyFilters>;
  width?: InputMaybe<VideoMetadataWidthFilters>;
};

export type VideoMetadataFiltersOr = {
  bitrateKbps?: InputMaybe<VideoMetadataBitrateKbpsFilters>;
  durationSeconds?: InputMaybe<VideoMetadataDurationSecondsFilters>;
  fileId?: InputMaybe<VideoMetadataFileIdFilters>;
  height?: InputMaybe<VideoMetadataHeightFilters>;
  id?: InputMaybe<VideoMetadataIdFilters>;
  thumbnailKey?: InputMaybe<VideoMetadataThumbnailKeyFilters>;
  width?: InputMaybe<VideoMetadataWidthFilters>;
};

export type VideoMetadataHeightFilters = {
  OR?: InputMaybe<Array<VideoMetadataHeightfiltersOr>>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type VideoMetadataHeightfiltersOr = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type VideoMetadataIdFilters = {
  OR?: InputMaybe<Array<VideoMetadataIdfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type VideoMetadataIdfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type VideoMetadataOrderBy = {
  bitrateKbps?: InputMaybe<InnerOrder>;
  durationSeconds?: InputMaybe<InnerOrder>;
  fileId?: InputMaybe<InnerOrder>;
  height?: InputMaybe<InnerOrder>;
  id?: InputMaybe<InnerOrder>;
  thumbnailKey?: InputMaybe<InnerOrder>;
  width?: InputMaybe<InnerOrder>;
};

export type VideoMetadataSelectItem = {
  __typename?: 'VideoMetadataSelectItem';
  bitrateKbps?: Maybe<Scalars['Int']['output']>;
  durationSeconds?: Maybe<Scalars['Int']['output']>;
  file?: Maybe<VideoMetadataFileRelation>;
  fileId: Scalars['String']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  id: Scalars['String']['output'];
  thumbnailKey?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};


export type VideoMetadataSelectItemFileArgs = {
  where?: InputMaybe<FileFilters>;
};

export type VideoMetadataThumbnailKeyFilters = {
  OR?: InputMaybe<Array<VideoMetadataThumbnailKeyfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type VideoMetadataThumbnailKeyfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type VideoMetadataWidthFilters = {
  OR?: InputMaybe<Array<VideoMetadataWidthfiltersOr>>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type VideoMetadataWidthfiltersOr = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type UserSelectItemFragment = { __typename?: 'UserSelectItem', id: string, email: string, lastName: string, firstName: string };

export type UserItemFragment = { __typename?: 'UserItem', id: string, email: string, lastName: string, firstName: string };

export type AuthPayloadFragment = { __typename?: 'AuthPayload', sessionId: string, user?: { __typename?: 'UserItem', id: string, email: string, lastName: string, firstName: string } | null };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'UserSelectItem', id: string, email: string, lastName: string, firstName: string }> };

export type SignUpMutationVariables = Exact<{
  data: SignUpInput;
}>;


export type SignUpMutation = { __typename?: 'Mutation', signUp?: { __typename?: 'UserItem', id: string, email: string, lastName: string, firstName: string } | null };

export type SignInMutationVariables = Exact<{
  data: SignInInput;
}>;


export type SignInMutation = { __typename?: 'Mutation', signIn: { __typename?: 'AuthPayload', sessionId: string, user?: { __typename?: 'UserItem', id: string, email: string, lastName: string, firstName: string } | null } };

export const UserSelectItemFragmentDoc = gql`
    fragment UserSelectItem on UserSelectItem {
  id
  email
  lastName
  firstName
}
    `;
export const UserItemFragmentDoc = gql`
    fragment UserItem on UserItem {
  id
  email
  lastName
  firstName
}
    `;
export const AuthPayloadFragmentDoc = gql`
    fragment AuthPayload on AuthPayload {
  user {
    ...UserItem
  }
  sessionId
}
    ${UserItemFragmentDoc}`;
export const UsersDocument = gql`
    query Users {
  users {
    ...UserSelectItem
  }
}
    ${UserSelectItemFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class UsersGQL extends Apollo.Query<UsersQuery, UsersQueryVariables> {
    document = UsersDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SignUpDocument = gql`
    mutation SignUp($data: SignUpInput!) {
  signUp(data: $data) {
    ...UserItem
  }
}
    ${UserItemFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class SignUpGQL extends Apollo.Mutation<SignUpMutation, SignUpMutationVariables> {
    document = SignUpDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SignInDocument = gql`
    mutation SignIn($data: SignInInput!) {
  signIn(data: $data) {
    ...AuthPayload
  }
}
    ${AuthPayloadFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class SignInGQL extends Apollo.Mutation<SignInMutation, SignInMutationVariables> {
    document = SignInDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }