export interface SideMenu {
  name: string
  src: string
  path: string
  isOpen?: boolean
}

export interface MenuList {
  title: string
  url: string
}
export interface HeaderMenu {
  title: string
  list: MenuList[]
  isOpen: boolean
}
