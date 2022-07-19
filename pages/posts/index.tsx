import { PostsPageProps } from "@/models/post"
import { GetStaticProps, GetStaticPropsContext } from "next"
import * as React from "react"

export default function PostsPage(props: PostsPageProps) {
  return (
    <div>
      <h1>Posts Page</h1>

      {props.posts.map((post, i) => {
        return (
          <div key={i} style={{ marginTop: "20px" }}>
            <p>Name: {post.name}</p>
            <p>Url: {post.url}</p>
            <hr />
          </div>
        )
      })}
      <p>Item: {JSON.stringify(props.posts[0])}</p>
    </div>
  )
}

export const getStaticProps: GetStaticProps<PostsPageProps> = async (
  context: GetStaticPropsContext
) => {
  const itemPokemon = await fetch("https://pokeapi.co/api/v2/item/1")
  const data = await itemPokemon.json()

  return {
    props: {
      posts: data.attributes.map((attr: any) => ({
        name: attr.name,
        url: attr.url,
      })),
    },
  }
}
