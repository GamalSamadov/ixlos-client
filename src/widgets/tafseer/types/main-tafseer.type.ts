import {
  type GetAllSurahsQuery,
  type SearchAyahByTextQuery,
} from '@/graphql/generated/output'

export interface ISurahs {
  surahs: GetAllSurahsQuery['getAllSurahs']
  loadingSurahs: boolean
  isAdmin?: boolean | undefined
}

export interface IAyahs {
  ayahs: SearchAyahByTextQuery['searchAyahByText']['ayahs']
  hasMoreAyahs: SearchAyahByTextQuery['searchAyahByText']['hasMore']
  totalAyahs?: SearchAyahByTextQuery['searchAyahByText']['total']
  loadingAyahs: boolean
  isAdmin?: boolean | undefined
}

export interface ITafseerMainData {
  ayahsData: Pick<
    IAyahs,
    'ayahs' | 'hasMoreAyahs' | 'loadingAyahs' | 'totalAyahs'
  >
  surahsData: Pick<ISurahs, 'surahs' | 'loadingSurahs'>
  isAdmin: boolean | undefined
}
