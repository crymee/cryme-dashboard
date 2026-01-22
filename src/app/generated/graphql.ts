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
    ID: { input: string; output: string };
    String: { input: string; output: string };
    Boolean: { input: boolean; output: boolean };
    Int: { input: number; output: number };
    Float: { input: number; output: number };
};

export type FileCreatedAtFilters = {
    OR?: InputMaybe<Array<FileCreatedAtfiltersOr>>;
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

export type FileCreatedAtfiltersOr = {
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
    createdAt?: Maybe<Scalars['Int']['output']>;
    filename: Scalars['String']['output'];
    id: Scalars['String']['output'];
    mimetype?: Maybe<Scalars['String']['output']>;
    sizeBytes?: Maybe<Scalars['Int']['output']>;
    storageKey: Scalars['String']['output'];
    storageType: FileStorageTypeEnum;
    updatedAt?: Maybe<Scalars['Int']['output']>;
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
    createdAt?: Maybe<Scalars['Int']['output']>;
    filename: Scalars['String']['output'];
    id: Scalars['String']['output'];
    imageMetadata?: Maybe<FileImageMetadataRelation>;
    mimetype?: Maybe<Scalars['String']['output']>;
    sizeBytes?: Maybe<Scalars['Int']['output']>;
    storageKey: Scalars['String']['output'];
    storageType: FileStorageTypeEnum;
    updatedAt?: Maybe<Scalars['Int']['output']>;
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

export type FileUpdatedAtfiltersOr = {
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
    createdAt?: Maybe<Scalars['Int']['output']>;
    email: Scalars['String']['output'];
    files: Array<FileUserRelationFilesRelation>;
    id: Scalars['String']['output'];
    name: Scalars['String']['output'];
    updatedAt?: Maybe<Scalars['Int']['output']>;
};

export type FileUserRelationFilesArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<FileOrderBy>;
    where?: InputMaybe<FileFilters>;
};

export type FileUserRelationFilesRelation = {
    __typename?: 'FileUserRelationFilesRelation';
    createdAt?: Maybe<Scalars['Int']['output']>;
    filename: Scalars['String']['output'];
    id: Scalars['String']['output'];
    mimetype?: Maybe<Scalars['String']['output']>;
    sizeBytes?: Maybe<Scalars['Int']['output']>;
    storageKey: Scalars['String']['output'];
    storageType: FileStorageTypeEnum;
    updatedAt?: Maybe<Scalars['Int']['output']>;
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
    createdAt?: Maybe<Scalars['Int']['output']>;
    filename: Scalars['String']['output'];
    id: Scalars['String']['output'];
    mimetype?: Maybe<Scalars['String']['output']>;
    sizeBytes?: Maybe<Scalars['Int']['output']>;
    storageKey: Scalars['String']['output'];
    storageType: FileStorageTypeEnum;
    updatedAt?: Maybe<Scalars['Int']['output']>;
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
    /** Sync a batch of file metadata into the database. */
    syncDriveFiles: Scalars['Int']['output'];
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

export type UserCreatedAtFilters = {
    OR?: InputMaybe<Array<UserCreatedAtfiltersOr>>;
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

export type UserCreatedAtfiltersOr = {
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
    createdAt?: Maybe<Scalars['Int']['output']>;
    filename: Scalars['String']['output'];
    id: Scalars['String']['output'];
    imageMetadata?: Maybe<UserFilesRelationImageMetadataRelation>;
    mimetype?: Maybe<Scalars['String']['output']>;
    sizeBytes?: Maybe<Scalars['Int']['output']>;
    storageKey: Scalars['String']['output'];
    storageType: FileStorageTypeEnum;
    updatedAt?: Maybe<Scalars['Int']['output']>;
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
    createdAt?: Maybe<Scalars['Int']['output']>;
    filename: Scalars['String']['output'];
    id: Scalars['String']['output'];
    mimetype?: Maybe<Scalars['String']['output']>;
    sizeBytes?: Maybe<Scalars['Int']['output']>;
    storageKey: Scalars['String']['output'];
    storageType: FileStorageTypeEnum;
    updatedAt?: Maybe<Scalars['Int']['output']>;
    userId: Scalars['String']['output'];
};

export type UserFilesRelationUserRelation = {
    __typename?: 'UserFilesRelationUserRelation';
    createdAt?: Maybe<Scalars['Int']['output']>;
    email: Scalars['String']['output'];
    id: Scalars['String']['output'];
    name: Scalars['String']['output'];
    updatedAt?: Maybe<Scalars['Int']['output']>;
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
    createdAt?: Maybe<Scalars['Int']['output']>;
    filename: Scalars['String']['output'];
    id: Scalars['String']['output'];
    mimetype?: Maybe<Scalars['String']['output']>;
    sizeBytes?: Maybe<Scalars['Int']['output']>;
    storageKey: Scalars['String']['output'];
    storageType: FileStorageTypeEnum;
    updatedAt?: Maybe<Scalars['Int']['output']>;
    userId: Scalars['String']['output'];
};

export type UserFilters = {
    OR?: InputMaybe<Array<UserFiltersOr>>;
    createdAt?: InputMaybe<UserCreatedAtFilters>;
    email?: InputMaybe<UserEmailFilters>;
    id?: InputMaybe<UserIdFilters>;
    name?: InputMaybe<UserNameFilters>;
    updatedAt?: InputMaybe<UserUpdatedAtFilters>;
};

export type UserFiltersOr = {
    createdAt?: InputMaybe<UserCreatedAtFilters>;
    email?: InputMaybe<UserEmailFilters>;
    id?: InputMaybe<UserIdFilters>;
    name?: InputMaybe<UserNameFilters>;
    updatedAt?: InputMaybe<UserUpdatedAtFilters>;
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

export type UserNameFilters = {
    OR?: InputMaybe<Array<UserNamefiltersOr>>;
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

export type UserNamefiltersOr = {
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
    id?: InputMaybe<InnerOrder>;
    name?: InputMaybe<InnerOrder>;
    updatedAt?: InputMaybe<InnerOrder>;
};

export type UserSelectItem = {
    __typename?: 'UserSelectItem';
    createdAt?: Maybe<Scalars['Int']['output']>;
    email: Scalars['String']['output'];
    files: Array<UserFilesRelation>;
    id: Scalars['String']['output'];
    name: Scalars['String']['output'];
    updatedAt?: Maybe<Scalars['Int']['output']>;
};

export type UserSelectItemFilesArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<FileOrderBy>;
    where?: InputMaybe<FileFilters>;
};

export type UserUpdatedAtFilters = {
    OR?: InputMaybe<Array<UserUpdatedAtfiltersOr>>;
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

export type UserUpdatedAtfiltersOr = {
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
    createdAt?: Maybe<Scalars['Int']['output']>;
    filename: Scalars['String']['output'];
    id: Scalars['String']['output'];
    imageMetadata?: Maybe<VideoMetadataFileRelationImageMetadataRelation>;
    mimetype?: Maybe<Scalars['String']['output']>;
    sizeBytes?: Maybe<Scalars['Int']['output']>;
    storageKey: Scalars['String']['output'];
    storageType: FileStorageTypeEnum;
    updatedAt?: Maybe<Scalars['Int']['output']>;
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
    createdAt?: Maybe<Scalars['Int']['output']>;
    filename: Scalars['String']['output'];
    id: Scalars['String']['output'];
    mimetype?: Maybe<Scalars['String']['output']>;
    sizeBytes?: Maybe<Scalars['Int']['output']>;
    storageKey: Scalars['String']['output'];
    storageType: FileStorageTypeEnum;
    updatedAt?: Maybe<Scalars['Int']['output']>;
    userId: Scalars['String']['output'];
};

export type VideoMetadataFileRelationUserRelation = {
    __typename?: 'VideoMetadataFileRelationUserRelation';
    createdAt?: Maybe<Scalars['Int']['output']>;
    email: Scalars['String']['output'];
    files: Array<VideoMetadataFileRelationUserRelationFilesRelation>;
    id: Scalars['String']['output'];
    name: Scalars['String']['output'];
    updatedAt?: Maybe<Scalars['Int']['output']>;
};

export type VideoMetadataFileRelationUserRelationFilesArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<FileOrderBy>;
    where?: InputMaybe<FileFilters>;
};

export type VideoMetadataFileRelationUserRelationFilesRelation = {
    __typename?: 'VideoMetadataFileRelationUserRelationFilesRelation';
    createdAt?: Maybe<Scalars['Int']['output']>;
    filename: Scalars['String']['output'];
    id: Scalars['String']['output'];
    mimetype?: Maybe<Scalars['String']['output']>;
    sizeBytes?: Maybe<Scalars['Int']['output']>;
    storageKey: Scalars['String']['output'];
    storageType: FileStorageTypeEnum;
    updatedAt?: Maybe<Scalars['Int']['output']>;
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

export type UsersQueryVariables = Exact<{ [key: string]: never }>;

export type UsersQuery = { __typename?: 'Query'; users: Array<{ __typename?: 'UserSelectItem'; id: string }> };

export const UsersDocument = gql`
    query Users {
        users {
            id
        }
    }
`;

@Injectable({
    providedIn: 'root'
})
export class UsersGQL extends Apollo.Query<UsersQuery, UsersQueryVariables> {
    override document = UsersDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
