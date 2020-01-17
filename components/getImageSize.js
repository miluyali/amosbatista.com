import service from 'probe-image-size'

export default async (imageUrl) => {
  console.log("inn")
  const dimensions = await service(imageUrl)
  return {
    width: dimensions.width,
    heigth: dimensions.heigth
  }
}