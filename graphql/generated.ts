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
  /** Whether Email 2FA is enabled */
  emailEnabled?: Maybe<Scalars['Boolean']['output']>;
  /** Whether two-factor authentication is required */
  requiresTwoFactor?: Maybe<Scalars['Boolean']['output']>;
  /** Session ID */
  sessionId?: Maybe<Scalars['String']['output']>;
  /** Whether TOTP is enabled */
  totpEnabled?: Maybe<Scalars['Boolean']['output']>;
  /** The two-factor authentication method */
  twoFactorMethod?: Maybe<Scalars['String']['output']>;
  /** Authenticated user */
  user?: Maybe<UserItem>;
};

/** Payload for backup codes */
export type BackupCodesPayload = {
  __typename?: 'BackupCodesPayload';
  /** New backup recovery codes */
  backupCodes: Array<Maybe<Scalars['String']['output']>>;
};

/** File object */
export type File = {
  __typename?: 'File';
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
  /** Owner of the file */
  user?: Maybe<UserItem>;
  userId: Scalars['String']['output'];
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
  emailVerifiedAt?: Maybe<Scalars['String']['output']>;
  files: Array<FileUserRelationFilesRelation>;
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  password: Scalars['String']['output'];
  phoneNumber?: Maybe<Scalars['String']['output']>;
  /** JSON */
  twoFactorBackupCodes?: Maybe<Scalars['String']['output']>;
  twoFactorEmailEnabled: Scalars['Boolean']['output'];
  twoFactorEnabled: Scalars['Boolean']['output'];
  twoFactorMethod?: Maybe<UserTwoFactorMethodEnum>;
  twoFactorSecret?: Maybe<Scalars['String']['output']>;
  twoFactorTotpEnabled: Scalars['Boolean']['output'];
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

/** Input type for forgot password */
export type ForgotPasswordInput = {
  /** The user's email address. */
  email: Scalars['String']['input'];
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
  /** Delete a webhook */
  deleteWebhook: Scalars['String']['output'];
  /** Disable email two-factor authentication */
  disableEmail2FA: Scalars['String']['output'];
  /** Disable TOTP (authenticator app) two-factor authentication */
  disableTOTP: Scalars['String']['output'];
  /** Disable all two-factor authentication methods */
  disableTwoFactor: Scalars['String']['output'];
  /** Enable email 2FA by sending a verification code */
  enableEmail2FA: Scalars['String']['output'];
  /** Enable TOTP two-factor authentication */
  enableTOTP: TotpSetupPayload;
  /** Request a password reset link */
  forgotPassword: Scalars['String']['output'];
  /** Generate new backup codes */
  generateBackupCodes: BackupCodesPayload;
  /** Sign out a user */
  logout: Scalars['String']['output'];
  /** Mark all notifications as read */
  markAllNotificationsAsRead: Scalars['String']['output'];
  /** Mark a notification as read */
  markNotificationAsRead: Scalars['String']['output'];
  /** Register a new webhook */
  registerWebhook: Webhook;
  /** Resend email 2FA verification code */
  resendEmail2FACode: Scalars['String']['output'];
  /** Resend verification email */
  resendVerificationEmail: Scalars['String']['output'];
  /** Reset password with token */
  resetPassword: Scalars['String']['output'];
  /** Revoke a specific active session */
  revokeSession: Scalars['String']['output'];
  /** Sign in a user */
  signIn: AuthPayload;
  /** Sign up... */
  signUp?: Maybe<UserItem>;
  /** Sync a batch of file metadata into the database. */
  syncDriveFiles: Array<FileItem>;
  /** Verify email with token */
  verifyEmail: Scalars['String']['output'];
  /** Verify email 2FA code to enable email 2FA */
  verifyEmail2FACode: BackupCodesPayload;
  /** Verify TOTP setup and enable two-factor authentication */
  verifyTOTPSetup: BackupCodesPayload;
  /** Verify two-factor authentication code */
  verifyTwoFactorCode: Scalars['String']['output'];
};


export type MutationDeleteWebhookArgs = {
  id: Scalars['ID']['input'];
};


export type MutationForgotPasswordArgs = {
  data: ForgotPasswordInput;
};


export type MutationMarkNotificationAsReadArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRegisterWebhookArgs = {
  events: Array<Scalars['String']['input']>;
  url: Scalars['String']['input'];
};


export type MutationResendVerificationEmailArgs = {
  email: Scalars['String']['input'];
};


export type MutationResetPasswordArgs = {
  data: ResetPasswordInput;
};


export type MutationRevokeSessionArgs = {
  id: Scalars['ID']['input'];
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


export type MutationVerifyEmailArgs = {
  token: Scalars['String']['input'];
};


export type MutationVerifyEmail2FaCodeArgs = {
  data: Scalars['String']['input'];
};


export type MutationVerifyTotpSetupArgs = {
  data: TotpSetupInput;
};


export type MutationVerifyTwoFactorCodeArgs = {
  data: Scalars['String']['input'];
};

export type Notification = {
  __typename?: 'Notification';
  createdAt?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isRead?: Maybe<Scalars['Boolean']['output']>;
  link?: Maybe<Scalars['String']['output']>;
  message: Scalars['String']['output'];
  title: Scalars['String']['output'];
  type: Scalars['String']['output'];
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
  /** Get all active sessions for the current user */
  activeSessions: Array<Session>;
  files: Array<FileSelectItem>;
  /** Get current authenticated user */
  me?: Maybe<User>;
  /** Get notifications for the current user */
  notifications: Array<Notification>;
  /** Get two-factor authentication status */
  twoFactorStatus: TwoFactorStatus;
  users: Array<UserSelectItem>;
  videoMetadata: Array<VideoMetadataSelectItem>;
  /** Get all webhooks for the current user */
  webhooks: Array<Webhook>;
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

/** Input type for reset password */
export type ResetPasswordInput = {
  /** New password. */
  password: Scalars['String']['input'];
  /** Password reset token. */
  token: Scalars['String']['input'];
};

export type Session = {
  __typename?: 'Session';
  createdAt?: Maybe<Scalars['String']['output']>;
  expiresAt?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  ipAddress?: Maybe<Scalars['String']['output']>;
  lastActive?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  userAgent?: Maybe<Scalars['String']['output']>;
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

/** Input type for TOTP setup */
export type TotpSetupInput = {
  /** The TOTP code from authenticator app */
  code: Scalars['String']['input'];
  /** The TOTP secret key */
  secret: Scalars['String']['input'];
};

/** Payload for TOTP setup */
export type TotpSetupPayload = {
  __typename?: 'TOTPSetupPayload';
  /** Backup recovery codes */
  backupCodes: Array<Maybe<Scalars['String']['output']>>;
  /** QR code image as base64 */
  qrCodeImage: Scalars['String']['output'];
  /** The TOTP secret key */
  secret: Scalars['String']['output'];
};

/** Two-factor authentication status */
export type TwoFactorStatus = {
  __typename?: 'TwoFactorStatus';
  /** Whether email 2FA is enabled */
  emailEnabled: Scalars['Boolean']['output'];
  /** Whether two-factor authentication is enabled */
  enabled: Scalars['Boolean']['output'];
  /** Whether backup codes are available */
  hasBackupCodes: Scalars['Boolean']['output'];
  /** The preferred two-factor authentication method */
  method?: Maybe<Scalars['String']['output']>;
  /** Whether TOTP (authenticator app) is enabled */
  totpEnabled: Scalars['Boolean']['output'];
};

/** User object */
export type User = {
  __typename?: 'User';
  /** Date */
  createdAt?: Maybe<Scalars['String']['output']>;
  currentSessionId?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  emailVerifiedAt?: Maybe<Scalars['String']['output']>;
  /** Files owned by the user */
  files: Array<Maybe<File>>;
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  password: Scalars['String']['output'];
  phoneNumber?: Maybe<Scalars['String']['output']>;
  /** JSON */
  twoFactorBackupCodes?: Maybe<Scalars['String']['output']>;
  twoFactorEmailEnabled: Scalars['Boolean']['output'];
  twoFactorEnabled: Scalars['Boolean']['output'];
  twoFactorMethod?: Maybe<UserTwoFactorMethodEnum>;
  twoFactorSecret?: Maybe<Scalars['String']['output']>;
  twoFactorTotpEnabled: Scalars['Boolean']['output'];
  /** Date */
  updatedAt?: Maybe<Scalars['String']['output']>;
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

export type UserEmailVerifiedAtFilters = {
  OR?: InputMaybe<Array<UserEmailVerifiedAtfiltersOr>>;
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

export type UserEmailVerifiedAtfiltersOr = {
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
  emailVerifiedAt?: Maybe<Scalars['String']['output']>;
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  password: Scalars['String']['output'];
  phoneNumber?: Maybe<Scalars['String']['output']>;
  /** JSON */
  twoFactorBackupCodes?: Maybe<Scalars['String']['output']>;
  twoFactorEmailEnabled: Scalars['Boolean']['output'];
  twoFactorEnabled: Scalars['Boolean']['output'];
  twoFactorMethod?: Maybe<UserTwoFactorMethodEnum>;
  twoFactorSecret?: Maybe<Scalars['String']['output']>;
  twoFactorTotpEnabled: Scalars['Boolean']['output'];
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
  emailVerifiedAt?: InputMaybe<UserEmailVerifiedAtFilters>;
  firstName?: InputMaybe<UserFirstNameFilters>;
  id?: InputMaybe<UserIdFilters>;
  lastName?: InputMaybe<UserLastNameFilters>;
  password?: InputMaybe<UserPasswordFilters>;
  phoneNumber?: InputMaybe<UserPhoneNumberFilters>;
  twoFactorBackupCodes?: InputMaybe<UserTwoFactorBackupCodesFilters>;
  twoFactorEmailEnabled?: InputMaybe<UserTwoFactorEmailEnabledFilters>;
  twoFactorEnabled?: InputMaybe<UserTwoFactorEnabledFilters>;
  twoFactorMethod?: InputMaybe<UserTwoFactorMethodFilters>;
  twoFactorSecret?: InputMaybe<UserTwoFactorSecretFilters>;
  twoFactorTotpEnabled?: InputMaybe<UserTwoFactorTotpEnabledFilters>;
  updatedAt?: InputMaybe<UserUpdatedAtFilters>;
};

export type UserFiltersOr = {
  createdAt?: InputMaybe<UserCreatedAtFilters>;
  email?: InputMaybe<UserEmailFilters>;
  emailVerifiedAt?: InputMaybe<UserEmailVerifiedAtFilters>;
  firstName?: InputMaybe<UserFirstNameFilters>;
  id?: InputMaybe<UserIdFilters>;
  lastName?: InputMaybe<UserLastNameFilters>;
  password?: InputMaybe<UserPasswordFilters>;
  phoneNumber?: InputMaybe<UserPhoneNumberFilters>;
  twoFactorBackupCodes?: InputMaybe<UserTwoFactorBackupCodesFilters>;
  twoFactorEmailEnabled?: InputMaybe<UserTwoFactorEmailEnabledFilters>;
  twoFactorEnabled?: InputMaybe<UserTwoFactorEnabledFilters>;
  twoFactorMethod?: InputMaybe<UserTwoFactorMethodFilters>;
  twoFactorSecret?: InputMaybe<UserTwoFactorSecretFilters>;
  twoFactorTotpEnabled?: InputMaybe<UserTwoFactorTotpEnabledFilters>;
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
  emailVerifiedAt?: Maybe<Scalars['String']['output']>;
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  password: Scalars['String']['output'];
  phoneNumber?: Maybe<Scalars['String']['output']>;
  /** JSON */
  twoFactorBackupCodes?: Maybe<Scalars['String']['output']>;
  twoFactorEmailEnabled: Scalars['Boolean']['output'];
  twoFactorEnabled: Scalars['Boolean']['output'];
  twoFactorMethod?: Maybe<UserTwoFactorMethodEnum>;
  twoFactorSecret?: Maybe<Scalars['String']['output']>;
  twoFactorTotpEnabled: Scalars['Boolean']['output'];
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
  emailVerifiedAt?: InputMaybe<InnerOrder>;
  firstName?: InputMaybe<InnerOrder>;
  id?: InputMaybe<InnerOrder>;
  lastName?: InputMaybe<InnerOrder>;
  password?: InputMaybe<InnerOrder>;
  phoneNumber?: InputMaybe<InnerOrder>;
  twoFactorBackupCodes?: InputMaybe<InnerOrder>;
  twoFactorEmailEnabled?: InputMaybe<InnerOrder>;
  twoFactorEnabled?: InputMaybe<InnerOrder>;
  twoFactorMethod?: InputMaybe<InnerOrder>;
  twoFactorSecret?: InputMaybe<InnerOrder>;
  twoFactorTotpEnabled?: InputMaybe<InnerOrder>;
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

export type UserPhoneNumberFilters = {
  OR?: InputMaybe<Array<UserPhoneNumberfiltersOr>>;
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

export type UserPhoneNumberfiltersOr = {
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
  emailVerifiedAt?: Maybe<Scalars['String']['output']>;
  files: Array<UserFilesRelation>;
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  password: Scalars['String']['output'];
  phoneNumber?: Maybe<Scalars['String']['output']>;
  /** JSON */
  twoFactorBackupCodes?: Maybe<Scalars['String']['output']>;
  twoFactorEmailEnabled: Scalars['Boolean']['output'];
  twoFactorEnabled: Scalars['Boolean']['output'];
  twoFactorMethod?: Maybe<UserTwoFactorMethodEnum>;
  twoFactorSecret?: Maybe<Scalars['String']['output']>;
  twoFactorTotpEnabled: Scalars['Boolean']['output'];
  /** Date */
  updatedAt?: Maybe<Scalars['String']['output']>;
};


export type UserSelectItemFilesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FileOrderBy>;
  where?: InputMaybe<FileFilters>;
};

export type UserTwoFactorBackupCodesFilters = {
  OR?: InputMaybe<Array<UserTwoFactorBackupCodesfiltersOr>>;
  /** JSON */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** JSON */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** JSON */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<JSON> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** JSON */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** JSON */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** JSON */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<JSON> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type UserTwoFactorBackupCodesfiltersOr = {
  /** JSON */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** JSON */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** JSON */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<JSON> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** JSON */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** JSON */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** JSON */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<JSON> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type UserTwoFactorEmailEnabledFilters = {
  OR?: InputMaybe<Array<UserTwoFactorEmailEnabledfiltersOr>>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type UserTwoFactorEmailEnabledfiltersOr = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type UserTwoFactorEnabledFilters = {
  OR?: InputMaybe<Array<UserTwoFactorEnabledfiltersOr>>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type UserTwoFactorEnabledfiltersOr = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export enum UserTwoFactorMethodEnum {
  /** Value: email */
  Email = 'email',
  /** Value: totp */
  Totp = 'totp'
}

export type UserTwoFactorMethodFilters = {
  OR?: InputMaybe<Array<UserTwoFactorMethodfiltersOr>>;
  eq?: InputMaybe<UserTwoFactorMethodEnum>;
  gt?: InputMaybe<UserTwoFactorMethodEnum>;
  gte?: InputMaybe<UserTwoFactorMethodEnum>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<UserTwoFactorMethodEnum>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<UserTwoFactorMethodEnum>;
  lte?: InputMaybe<UserTwoFactorMethodEnum>;
  ne?: InputMaybe<UserTwoFactorMethodEnum>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<UserTwoFactorMethodEnum>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type UserTwoFactorMethodfiltersOr = {
  eq?: InputMaybe<UserTwoFactorMethodEnum>;
  gt?: InputMaybe<UserTwoFactorMethodEnum>;
  gte?: InputMaybe<UserTwoFactorMethodEnum>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<UserTwoFactorMethodEnum>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<UserTwoFactorMethodEnum>;
  lte?: InputMaybe<UserTwoFactorMethodEnum>;
  ne?: InputMaybe<UserTwoFactorMethodEnum>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<UserTwoFactorMethodEnum>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type UserTwoFactorSecretFilters = {
  OR?: InputMaybe<Array<UserTwoFactorSecretfiltersOr>>;
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

export type UserTwoFactorSecretfiltersOr = {
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

export type UserTwoFactorTotpEnabledFilters = {
  OR?: InputMaybe<Array<UserTwoFactorTotpEnabledfiltersOr>>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type UserTwoFactorTotpEnabledfiltersOr = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
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
  emailVerifiedAt?: Maybe<Scalars['String']['output']>;
  files: Array<VideoMetadataFileRelationUserRelationFilesRelation>;
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  password: Scalars['String']['output'];
  phoneNumber?: Maybe<Scalars['String']['output']>;
  /** JSON */
  twoFactorBackupCodes?: Maybe<Scalars['String']['output']>;
  twoFactorEmailEnabled: Scalars['Boolean']['output'];
  twoFactorEnabled: Scalars['Boolean']['output'];
  twoFactorMethod?: Maybe<UserTwoFactorMethodEnum>;
  twoFactorSecret?: Maybe<Scalars['String']['output']>;
  twoFactorTotpEnabled: Scalars['Boolean']['output'];
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

export type Webhook = {
  __typename?: 'Webhook';
  createdAt?: Maybe<Scalars['String']['output']>;
  events?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  id: Scalars['ID']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  secret: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type UserSelectItemFragment = { __typename?: 'UserSelectItem', id: string, email: string, lastName: string, firstName: string };

export type UserItemFragment = { __typename?: 'UserItem', id: string, email: string, lastName: string, firstName: string };

export type AuthPayloadFragment = { __typename?: 'AuthPayload', sessionId?: string | null, requiresTwoFactor?: boolean | null, twoFactorMethod?: string | null, user?: { __typename?: 'UserItem', id: string, email: string, lastName: string, firstName: string } | null };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'UserSelectItem', id: string, email: string, lastName: string, firstName: string }> };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string, email: string, lastName: string, firstName: string, twoFactorEnabled: boolean, twoFactorMethod?: UserTwoFactorMethodEnum | null, currentSessionId?: string | null } | null };

export type SignUpMutationVariables = Exact<{
  data: SignUpInput;
}>;


export type SignUpMutation = { __typename?: 'Mutation', signUp?: { __typename?: 'UserItem', id: string, email: string, lastName: string, firstName: string } | null };

export type SignInMutationVariables = Exact<{
  data: SignInInput;
}>;


export type SignInMutation = { __typename?: 'Mutation', signIn: { __typename?: 'AuthPayload', sessionId?: string | null, requiresTwoFactor?: boolean | null, twoFactorMethod?: string | null, totpEnabled?: boolean | null, emailEnabled?: boolean | null, user?: { __typename?: 'UserItem', id: string, email: string, lastName: string, firstName: string } | null } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: string };

export type ForgotPasswordMutationVariables = Exact<{
  data: ForgotPasswordInput;
}>;


export type ForgotPasswordMutation = { __typename?: 'Mutation', forgotPassword: string };

export type ResetPasswordMutationVariables = Exact<{
  data: ResetPasswordInput;
}>;


export type ResetPasswordMutation = { __typename?: 'Mutation', resetPassword: string };

export type EnableTotpMutationVariables = Exact<{ [key: string]: never; }>;


export type EnableTotpMutation = { __typename?: 'Mutation', enableTOTP: { __typename?: 'TOTPSetupPayload', secret: string, qrCodeImage: string, backupCodes: Array<string | null> } };

export type VerifyTotpSetupMutationVariables = Exact<{
  data: TotpSetupInput;
}>;


export type VerifyTotpSetupMutation = { __typename?: 'Mutation', verifyTOTPSetup: { __typename?: 'BackupCodesPayload', backupCodes: Array<string | null> } };

export type DisableTwoFactorMutationVariables = Exact<{ [key: string]: never; }>;


export type DisableTwoFactorMutation = { __typename?: 'Mutation', disableTwoFactor: string };

export type DisableTotpMutationVariables = Exact<{ [key: string]: never; }>;


export type DisableTotpMutation = { __typename?: 'Mutation', disableTOTP: string };

export type DisableEmail2FaMutationVariables = Exact<{ [key: string]: never; }>;


export type DisableEmail2FaMutation = { __typename?: 'Mutation', disableEmail2FA: string };

export type VerifyTwoFactorCodeMutationVariables = Exact<{
  data: Scalars['String']['input'];
}>;


export type VerifyTwoFactorCodeMutation = { __typename?: 'Mutation', verifyTwoFactorCode: string };

export type GenerateBackupCodesMutationVariables = Exact<{ [key: string]: never; }>;


export type GenerateBackupCodesMutation = { __typename?: 'Mutation', generateBackupCodes: { __typename?: 'BackupCodesPayload', backupCodes: Array<string | null> } };

export type EnableEmail2FaMutationVariables = Exact<{ [key: string]: never; }>;


export type EnableEmail2FaMutation = { __typename?: 'Mutation', enableEmail2FA: string };

export type VerifyEmail2FaCodeMutationVariables = Exact<{
  data: Scalars['String']['input'];
}>;


export type VerifyEmail2FaCodeMutation = { __typename?: 'Mutation', verifyEmail2FACode: { __typename?: 'BackupCodesPayload', backupCodes: Array<string | null> } };

export type ResendEmail2FaCodeMutationVariables = Exact<{ [key: string]: never; }>;


export type ResendEmail2FaCodeMutation = { __typename?: 'Mutation', resendEmail2FACode: string };

export type TwoFactorStatusQueryVariables = Exact<{ [key: string]: never; }>;


export type TwoFactorStatusQuery = { __typename?: 'Query', twoFactorStatus: { __typename?: 'TwoFactorStatus', enabled: boolean, method?: string | null, totpEnabled: boolean, emailEnabled: boolean, hasBackupCodes: boolean } };

export type ActiveSessionsQueryVariables = Exact<{ [key: string]: never; }>;


export type ActiveSessionsQuery = { __typename?: 'Query', activeSessions: Array<{ __typename?: 'Session', id: string, ipAddress?: string | null, userAgent?: string | null, location?: string | null, lastActive?: string | null, createdAt?: string | null, expiresAt?: string | null }> };

export type RevokeSessionMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type RevokeSessionMutation = { __typename?: 'Mutation', revokeSession: string };

export type WebhooksQueryVariables = Exact<{ [key: string]: never; }>;


export type WebhooksQuery = { __typename?: 'Query', webhooks: Array<{ __typename?: 'Webhook', id: string, url: string, secret: string, isActive?: boolean | null, events?: Array<string | null> | null, createdAt?: string | null }> };

export type RegisterWebhookMutationVariables = Exact<{
  url: Scalars['String']['input'];
  events: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;


export type RegisterWebhookMutation = { __typename?: 'Mutation', registerWebhook: { __typename?: 'Webhook', id: string, url: string, secret: string, isActive?: boolean | null, events?: Array<string | null> | null, createdAt?: string | null } };

export type DeleteWebhookMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteWebhookMutation = { __typename?: 'Mutation', deleteWebhook: string };

export type FilesQueryVariables = Exact<{ [key: string]: never; }>;


export type FilesQuery = { __typename?: 'Query', files: Array<{ __typename?: 'FileSelectItem', id: string, filename: string, mimetype?: string | null, sizeBytes?: number | null, storageType: FileStorageTypeEnum, createdAt?: string | null }> };

export type NotificationsQueryVariables = Exact<{ [key: string]: never; }>;


export type NotificationsQuery = { __typename?: 'Query', notifications: Array<{ __typename?: 'Notification', id: string, title: string, message: string, type: string, isRead?: boolean | null, link?: string | null, createdAt?: string | null }> };

export type MarkNotificationAsReadMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type MarkNotificationAsReadMutation = { __typename?: 'Mutation', markNotificationAsRead: string };

export type MarkAllNotificationsAsReadMutationVariables = Exact<{ [key: string]: never; }>;


export type MarkAllNotificationsAsReadMutation = { __typename?: 'Mutation', markAllNotificationsAsRead: string };

export type ResendVerificationEmailMutationVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type ResendVerificationEmailMutation = { __typename?: 'Mutation', resendVerificationEmail: string };

export type VerifyEmailMutationVariables = Exact<{
  token: Scalars['String']['input'];
}>;


export type VerifyEmailMutation = { __typename?: 'Mutation', verifyEmail: string };

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
  requiresTwoFactor
  twoFactorMethod
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
export const MeDocument = gql`
    query Me {
  me {
    id
    email
    lastName
    firstName
    twoFactorEnabled
    twoFactorMethod
    currentSessionId
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class MeGQL extends Apollo.Query<MeQuery, MeQueryVariables> {
    document = MeDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SignUpDocument = gql`
    mutation SignUp($data: SignUpInput!) {
  signUp(data: $data) {
    id
    email
    lastName
    firstName
  }
}
    `;

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
    user {
      id
      email
      lastName
      firstName
    }
    sessionId
    requiresTwoFactor
    twoFactorMethod
    totpEnabled
    emailEnabled
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SignInGQL extends Apollo.Mutation<SignInMutation, SignInMutationVariables> {
    document = SignInDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LogoutGQL extends Apollo.Mutation<LogoutMutation, LogoutMutationVariables> {
    document = LogoutDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ForgotPasswordDocument = gql`
    mutation ForgotPassword($data: ForgotPasswordInput!) {
  forgotPassword(data: $data)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ForgotPasswordGQL extends Apollo.Mutation<ForgotPasswordMutation, ForgotPasswordMutationVariables> {
    document = ForgotPasswordDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ResetPasswordDocument = gql`
    mutation ResetPassword($data: ResetPasswordInput!) {
  resetPassword(data: $data)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ResetPasswordGQL extends Apollo.Mutation<ResetPasswordMutation, ResetPasswordMutationVariables> {
    document = ResetPasswordDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const EnableTotpDocument = gql`
    mutation EnableTOTP {
  enableTOTP {
    secret
    qrCodeImage
    backupCodes
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class EnableTotpGQL extends Apollo.Mutation<EnableTotpMutation, EnableTotpMutationVariables> {
    document = EnableTotpDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const VerifyTotpSetupDocument = gql`
    mutation VerifyTOTPSetup($data: TOTPSetupInput!) {
  verifyTOTPSetup(data: $data) {
    backupCodes
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class VerifyTotpSetupGQL extends Apollo.Mutation<VerifyTotpSetupMutation, VerifyTotpSetupMutationVariables> {
    document = VerifyTotpSetupDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DisableTwoFactorDocument = gql`
    mutation DisableTwoFactor {
  disableTwoFactor
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DisableTwoFactorGQL extends Apollo.Mutation<DisableTwoFactorMutation, DisableTwoFactorMutationVariables> {
    document = DisableTwoFactorDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DisableTotpDocument = gql`
    mutation DisableTOTP {
  disableTOTP
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DisableTotpGQL extends Apollo.Mutation<DisableTotpMutation, DisableTotpMutationVariables> {
    document = DisableTotpDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DisableEmail2FaDocument = gql`
    mutation DisableEmail2FA {
  disableEmail2FA
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DisableEmail2FaGQL extends Apollo.Mutation<DisableEmail2FaMutation, DisableEmail2FaMutationVariables> {
    document = DisableEmail2FaDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const VerifyTwoFactorCodeDocument = gql`
    mutation VerifyTwoFactorCode($data: String!) {
  verifyTwoFactorCode(data: $data)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class VerifyTwoFactorCodeGQL extends Apollo.Mutation<VerifyTwoFactorCodeMutation, VerifyTwoFactorCodeMutationVariables> {
    document = VerifyTwoFactorCodeDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GenerateBackupCodesDocument = gql`
    mutation GenerateBackupCodes {
  generateBackupCodes {
    backupCodes
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GenerateBackupCodesGQL extends Apollo.Mutation<GenerateBackupCodesMutation, GenerateBackupCodesMutationVariables> {
    document = GenerateBackupCodesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const EnableEmail2FaDocument = gql`
    mutation EnableEmail2FA {
  enableEmail2FA
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class EnableEmail2FaGQL extends Apollo.Mutation<EnableEmail2FaMutation, EnableEmail2FaMutationVariables> {
    document = EnableEmail2FaDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const VerifyEmail2FaCodeDocument = gql`
    mutation VerifyEmail2FACode($data: String!) {
  verifyEmail2FACode(data: $data) {
    backupCodes
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class VerifyEmail2FaCodeGQL extends Apollo.Mutation<VerifyEmail2FaCodeMutation, VerifyEmail2FaCodeMutationVariables> {
    document = VerifyEmail2FaCodeDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ResendEmail2FaCodeDocument = gql`
    mutation ResendEmail2FACode {
  resendEmail2FACode
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ResendEmail2FaCodeGQL extends Apollo.Mutation<ResendEmail2FaCodeMutation, ResendEmail2FaCodeMutationVariables> {
    document = ResendEmail2FaCodeDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const TwoFactorStatusDocument = gql`
    query TwoFactorStatus {
  twoFactorStatus {
    enabled
    method
    totpEnabled
    emailEnabled
    hasBackupCodes
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class TwoFactorStatusGQL extends Apollo.Query<TwoFactorStatusQuery, TwoFactorStatusQueryVariables> {
    document = TwoFactorStatusDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ActiveSessionsDocument = gql`
    query ActiveSessions {
  activeSessions {
    id
    ipAddress
    userAgent
    location
    lastActive
    createdAt
    expiresAt
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ActiveSessionsGQL extends Apollo.Query<ActiveSessionsQuery, ActiveSessionsQueryVariables> {
    document = ActiveSessionsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const RevokeSessionDocument = gql`
    mutation RevokeSession($id: ID!) {
  revokeSession(id: $id)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RevokeSessionGQL extends Apollo.Mutation<RevokeSessionMutation, RevokeSessionMutationVariables> {
    document = RevokeSessionDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const WebhooksDocument = gql`
    query Webhooks {
  webhooks {
    id
    url
    secret
    isActive
    events
    createdAt
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class WebhooksGQL extends Apollo.Query<WebhooksQuery, WebhooksQueryVariables> {
    document = WebhooksDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const RegisterWebhookDocument = gql`
    mutation RegisterWebhook($url: String!, $events: [String!]!) {
  registerWebhook(url: $url, events: $events) {
    id
    url
    secret
    isActive
    events
    createdAt
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RegisterWebhookGQL extends Apollo.Mutation<RegisterWebhookMutation, RegisterWebhookMutationVariables> {
    document = RegisterWebhookDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteWebhookDocument = gql`
    mutation DeleteWebhook($id: ID!) {
  deleteWebhook(id: $id)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteWebhookGQL extends Apollo.Mutation<DeleteWebhookMutation, DeleteWebhookMutationVariables> {
    document = DeleteWebhookDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FilesDocument = gql`
    query Files {
  files {
    id
    filename
    mimetype
    sizeBytes
    storageType
    createdAt
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FilesGQL extends Apollo.Query<FilesQuery, FilesQueryVariables> {
    document = FilesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const NotificationsDocument = gql`
    query Notifications {
  notifications {
    id
    title
    message
    type
    isRead
    link
    createdAt
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class NotificationsGQL extends Apollo.Query<NotificationsQuery, NotificationsQueryVariables> {
    document = NotificationsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const MarkNotificationAsReadDocument = gql`
    mutation MarkNotificationAsRead($id: ID!) {
  markNotificationAsRead(id: $id)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class MarkNotificationAsReadGQL extends Apollo.Mutation<MarkNotificationAsReadMutation, MarkNotificationAsReadMutationVariables> {
    document = MarkNotificationAsReadDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const MarkAllNotificationsAsReadDocument = gql`
    mutation MarkAllNotificationsAsRead {
  markAllNotificationsAsRead
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class MarkAllNotificationsAsReadGQL extends Apollo.Mutation<MarkAllNotificationsAsReadMutation, MarkAllNotificationsAsReadMutationVariables> {
    document = MarkAllNotificationsAsReadDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ResendVerificationEmailDocument = gql`
    mutation ResendVerificationEmail($email: String!) {
  resendVerificationEmail(email: $email)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ResendVerificationEmailGQL extends Apollo.Mutation<ResendVerificationEmailMutation, ResendVerificationEmailMutationVariables> {
    document = ResendVerificationEmailDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const VerifyEmailDocument = gql`
    mutation VerifyEmail($token: String!) {
  verifyEmail(token: $token)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class VerifyEmailGQL extends Apollo.Mutation<VerifyEmailMutation, VerifyEmailMutationVariables> {
    document = VerifyEmailDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }