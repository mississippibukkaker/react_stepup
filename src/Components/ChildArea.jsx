const style = {
  width: "100%",
  height: "200px",
  backGroundColor: "khaki"
}

export const ChildArea = (props) => {
  const { open } = props;
  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
        </div>
      ) : null}
    </>
  );
};
