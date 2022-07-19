import { useRouter } from "next/router"
import * as React from "react"

export interface IPostDetailPageProps {}

export default function PostDetailPage(props: IPostDetailPageProps) {
  const router = useRouter()

  return (
    <div>
      <h1>Post detail page</h1>

      <p>{JSON.stringify(router.query)}</p>
    </div>
  )
}
