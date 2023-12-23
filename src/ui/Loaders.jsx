import { RiImage2Fill } from '@remixicon/react'

const Loaders = () => {
  return (
    <>
      {Array.from({ length: 6 }).map((_, index) => (
        <LoaderItem key={index} />
      ))}
    </>
  )
}

const LoaderItem = () => {
  return (
    <div className="space-y-4 rounded-xl border-2 border-base-300 p-5">
      <div className="skeleton flex h-36 items-center justify-center">
        <RiImage2Fill className="h-20 w-20 fill-base-100" />
      </div>
      <div className="skeleton h-5"></div>
      <div className="skeleton h-5"></div>
      <div className="skeleton h-5 w-1/2"></div>
    </div>
  )
}

export const CardImageLoader = () => {
  return (
    <div className="skeleton flex h-full w-full items-center justify-center rounded-none">
      <RiImage2Fill className="h-20 w-20 fill-base-100" />
    </div>
  )
}

export const CardLoader = () => {
  return (
    <div className="mx-auto w-full max-w-5xl space-y-4 rounded-xl p-5">
      <div className="h-56 overflow-hidden rounded-badge">
        <CardImageLoader />
      </div>
      <div className="skeleton h-5"></div>
      <div className="skeleton h-5"></div>
      <div className="skeleton h-5 w-1/2"></div>
      <div className="h-5 w-5"></div>
      <div className="skeleton h-5"></div>
      <div className="skeleton h-5 w-2/3"></div>
      <div className="skeleton h-5 w-1/3"></div>
      <div className="h-5 w-5"></div>
      <div className="flex space-x-5">
        <div className="skeleton h-5 w-full"></div>
        <div className="skeleton h-5 w-1/2"></div>
      </div>
      <div className="flex space-x-5">
        <div className="skeleton h-5 w-full"></div>
        <div className="skeleton h-5 w-full"></div>
      </div>
    </div>
  )
}
export default Loaders
