export default interface IOrder {
  id: number
  title: string
  category: string
  price: number
  rating: {
    rate: number
    count: number
  }
  image: string
  description: string
}
