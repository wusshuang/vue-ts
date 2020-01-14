import { title } from '../config/config'

export function getPageTitle(pageTitle: string): string {
  return pageTitle || title
}
