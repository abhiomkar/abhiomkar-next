const Debug = (props) => (
  <pre>{JSON.stringify(props.data)}</pre>
);

Debug.getInitialProps = async function (context) {
  return {data: context.query};
};

export default Debug;
