

type ContainerProps = {
  children: React.ReactNode;
  title?: string;
}
const Container = ({children, title} : ContainerProps) => {
  return (
    <div style={{
      backgroundColor: 'grey',
      color : 'blue',
    }}>
      <h1>{title}</h1>
      {children}
    </div>
  );
}

export default Container;