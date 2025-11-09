import { createHash } from 'crypto';
import Hex from 'crypto-js/enc-hex';
import MD5 from 'crypto-js/md5';

export type MD5Input = string | null | undefined;

/**
 * MD5 해시(hex) (서버용)
 */
export function toMD5HashServer(value: MD5Input): string {
  if (value == null || value.length === 0) return '';
  return createHash('md5').update(value, 'utf8').digest('hex'); // 소문자 16진수
}

/**
 * MD5 해시(hex) (클라이언트용)
 */
export function toMD5HashClient(value: MD5Input): string {
  if (value == null || value.length === 0) return '';
  return MD5(value).toString(Hex); // 소문자 16진수
}

// 유틸: md5 hex 유효성 (32자리, 0-9a-f)
export function isMd5Hex(str: string): boolean {
  return /^[a-f0-9]{32}$/i.test(str);
}

/**
 * MD5 해시 비교 (서버용)
 * - 빈 입력/빈 해시는 즉시 false
 * - expectedHash가 유효한 md5 hex가 아니면 false
 * - 비교 시 소문자로 정규화
 */
export function compareMD5HashServer(value: MD5Input, expectedHash: string): boolean {
  if (!value) return false; // '' / null / undefined → false
  if (!expectedHash || !isMd5Hex(expectedHash)) return false;

  const actual = toMD5HashServer(value);

  return actual !== '' && actual.toLowerCase() === expectedHash.toLowerCase();
}

/**
 * MD5 해시 비교 (클라이언트용)
 * - 빈 입력/빈 해시는 즉시 false
 * - expectedHash가 유효한 md5 hex가 아니면 false
 * - 비교 시 소문자로 정규화
 */
export function compareMD5HashClient(value: MD5Input, expectedHash: string): boolean {
  if (!value) return false;
  if (!expectedHash || !isMd5Hex(expectedHash)) return false;

  const actual = toMD5HashClient(value);

  return actual !== '' && actual.toLowerCase() === expectedHash.toLowerCase();
}
