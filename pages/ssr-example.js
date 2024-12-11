export default function SSRExample({ time }) {
    return (
      <div>
        <h1>Server-Side Rendered Page</h1>
        <p>Time: {time}</p>
      </div>
    );
  }
  
  export async function getServerSideProps() {
    return {
      props: {
        time: new Date().toISOString(),
      },
    };
  }
  