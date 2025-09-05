import httpIstance from '@/utils/http'

export function getCategoryAPI () {
  return httpIstance({
    url: 'home/category/head'
  })
}
