import { MouseEventHandler, ReactNode } from 'react'

export type Children = { children: ReactNode }

export type IconType = React.ForwardRefExoticComponent<
  Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {
    title?: string
    titleId?: string
  } & React.RefAttributes<SVGSVGElement>
>

export type TNavLink = Partial<Children> & {
  label?: string
  href: string
  icon?: ReactNode
  ariaLabel?: string
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

export type ShopifyExtension = {
  cost: {
    actualQueryCost: number
    requestedQueryCost: number
    throttleStatus: {
      currentlyAvailable: number
      maximumAvailable: number
      restoreRate: number
    }
  }
}

export type Image = {
  altText: string
  height: number
  id: string
  url: string
  width: number
}

export type Price = {
  amount: string
  currencyCode: string
}

export type SubAndTotalAmount = {
  subtotalAmount: Price
  totalAmount: Price
}

export type LoadNode = {
  node: {
    id: string
    quantity: number
    cost: SubAndTotalAmount
    merchandise: {
      title: string
      id: string
      product: ShopifyProduct & { price: Price }
    }
  }
}

export type ShopifyProduct = {
  description: string
  featuredImage: Image
  handle: string
  id: string
  priceRange: {
    minVariantPrice: Price
  }
  tags: string[]
  title: string
  variants: { nodes: ShopifyProductVariant[] }
  variantsCount: {
    count: number
  }
}

export type ShopifyProductVariant = {
  id: string
  title: string
  price: string
  image?: Image
}

export type Products = {
  products: { nodes: ShopifyProduct[] }
}

export type Product = { product: ShopifyProduct }
