export const TestPage = ({ children }: { children: any }) => {
  return (
    <>
      <div className="rko">
        <h2>Transformado</h2>
        <div style={{ color: "blue" }}>{children}</div>
        <div>Tranformado2 </div>
      </div>
    </>
  );
};
