import Styled from "styled-components";
import Card from "../component/Card";

const API_URL = "https://yalpcamp.onrender.com/api/v1/posts";

export const getServerSideProps = async () => {
  try {
    let APIREQ = await fetch(API_URL);
    let APIRES = await APIREQ.json();
    return {
      props: {
        APIRES: APIRES.posts,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        APIRES: [],
      },
    };
  }
};

export default function Home({ APIRES }) {
  return (
    <div className="grid">
      <div className="grid-container">
        {APIRES.map((post, index) => {
          return (
            <Card
              key={index}
              image={post.image}
              title={post.title}
              description={post.description}
              id={post._id}
            />
          );
        })}
      </div>
    </div>
  );
}
